module.exports = async (req, res) => {
  const COOLDOWN_MS = 5 * 60 * 1000;
  const emailCooldownStore = (globalThis.__emailCooldownStore =
    globalThis.__emailCooldownStore || new Map());

  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed." });
  }

  const { name, email, subject, message } = req.body || {};

  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ success: false, message: "Name, email, and message are required." });
  }

  const normalizedEmail = String(email).trim().toLowerCase();
  const now = Date.now();
  const lastSentAt = emailCooldownStore.get(normalizedEmail);
  const elapsed = lastSentAt ? now - lastSentAt : Number.POSITIVE_INFINITY;
  if (elapsed < COOLDOWN_MS) {
    const remainingMinutes = Math.ceil((COOLDOWN_MS - elapsed) / 60000);
    return res.status(429).json({
      success: false,
      message: `This email was used recently. Please try again in ${remainingMinutes} minute(s).`,
    });
  }

  if (!process.env.RESEND_API_KEY || !process.env.CONTACT_RECEIVER_EMAIL) {
    return res.status(500).json({
      success: false,
      message:
        "Contact form is not configured. Set RESEND_API_KEY and CONTACT_RECEIVER_EMAIL.",
    });
  }

  try {
    const fromEmail =
      process.env.CONTACT_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>";

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: fromEmail,
        to: process.env.CONTACT_RECEIVER_EMAIL,
        reply_to: email,
        subject: subject || `Portfolio Inquiry from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      }),
    });

    if (!response.ok) {
      const errorPayload = await response.text();
      return res.status(502).json({
        success: false,
        message: "Email provider rejected the request.",
        details: errorPayload,
      });
    }

    emailCooldownStore.set(normalizedEmail, now);
    return res.status(200).json({ success: true, message: "Message sent." });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server failed to send message.",
      details: error.message,
    });
  }
};
