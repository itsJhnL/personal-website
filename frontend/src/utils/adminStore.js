const STORAGE_KEY = "portfolio_admin_messages_v1";

const read = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    return [];
  }
};

const write = (messages) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
};

export const getAdminMessages = () => read();

export const saveAdminMessage = (message) => {
  const messages = read();
  const entry = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    createdAt: new Date().toISOString(),
    status: "new",
    ...message,
  };
  messages.unshift(entry);
  write(messages);
  return entry;
};

export const updateAdminMessageStatus = (id, status) => {
  const messages = read().map((message) =>
    message.id === id ? { ...message, status, updatedAt: new Date().toISOString() } : message
  );
  write(messages);
  return messages;
};

export const removeAdminMessage = (id) => {
  const messages = read().filter((message) => message.id !== id);
  write(messages);
  return messages;
};
