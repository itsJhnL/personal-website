import React from "react";
import Footer from "../components/Footer";

function Contact() {
  return (
    <section>
      <div className="flex flex-col items-center justify-center">
        <header className="relative fixed text-6xl font-bold max-w-6xl mx-auto py-24">
          <p className="underline underline-offset-4 decoration-2 decoration-[#a3262e] text-gray-700">
            Contact
          </p>
        </header>
        <div className="flex max-w-6xl mx-auto pb-24">
          <div className="max-w-lg">
            <div className="text-2xl text-black font-normal p-5">
              <h1>Get in touch, let's talk.</h1>
            </div>
            <div className="text-base text-black font-normal px-5">
              <p>
                I am open to full-time, part-time, and freelance opportunities.
                Feel free to reach out, and let's discuss everything.
              </p>
            </div>
            <div className="p-5 text-black font-medium space-y-3">
              <div className="flex">
                <i className="pr-5 text-[#a3262e]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Z"
                    />
                  </svg>
                </i>
                <p>Nueva Ecija, Philippines</p>
              </div>
              <div className="flex">
                <i className="pr-5 text-[#a3262e]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      d="M19.47 4.03c.14.141.22.332.22.53v3.83a.75.75 0 1 1-1.5 0V6.37l-3.16 3.16a.75.75 0 1 1-1.06-1.061l3.159-3.16H15.11a.75.75 0 0 1 0-1.5h3.828a.75.75 0 0 1 .53.22Z"
                      clip-rule="evenodd"
                    />
                    <path
                      fill="currentColor"
                      d="M5 9.86a18.466 18.466 0 0 0 9.566 9.292l.68.303a3.5 3.5 0 0 0 4.33-1.247l.889-1.324a1 1 0 0 0-.203-1.335l-3.012-2.43a1 1 0 0 0-1.431.183l-.932 1.257a12.14 12.14 0 0 1-5.51-5.511l1.256-.932a1 1 0 0 0 .183-1.431l-2.43-3.012a1 1 0 0 0-1.335-.203l-1.333.894a3.5 3.5 0 0 0-1.237 4.355L5 9.86Z"
                    />
                  </svg>
                </i>
                <p>{"(906) 360-4260"}</p>
              </div>
              <div className="flex">
                <i className="pr-5 text-[#a3262e]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      d="m7.172 11.334l2.83 1.935l2.728-1.882l6.115 6.033c-.161.052-.333.08-.512.08H1.667c-.22 0-.43-.043-.623-.12l6.128-6.046ZM20 6.376v9.457c0 .247-.054.481-.15.692l-5.994-5.914L20 6.376ZM0 6.429l6.042 4.132l-5.936 5.858A1.663 1.663 0 0 1 0 15.833V6.43ZM18.333 2.5c.92 0 1.667.746 1.667 1.667v.586L9.998 11.648L0 4.81v-.643C0 3.247.746 2.5 1.667 2.5h16.666Z"
                    />
                  </svg>
                </i>
                <p>JanggoDev@gmail.com</p>
              </div>
              {/* Socials */}
              <div className="flex space-x-5 text-[#a3262e] pt-44">
                <div>
                  <a href="https://www.facebook.com/LeoXyRDG/" target="_blank">
                    <i>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        width="25"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5Z"
                        />
                      </svg>
                    </i>
                  </a>
                </div>
                <div>
                  <a href="https://twitter.com/LeoXyRealDeal">
                    <i>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        width="25"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23Z"
                        />
                      </svg>
                    </i>
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.instagram.com/janggodev/"
                    target="_blank"
                  >
                    <i>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        width="25"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M12 9.52A2.48 2.48 0 1 0 14.48 12A2.48 2.48 0 0 0 12 9.52Zm9.93-2.45a6.53 6.53 0 0 0-.42-2.26a4 4 0 0 0-2.32-2.32a6.53 6.53 0 0 0-2.26-.42C15.64 2 15.26 2 12 2s-3.64 0-4.93.07a6.53 6.53 0 0 0-2.26.42a4 4 0 0 0-2.32 2.32a6.53 6.53 0 0 0-.42 2.26C2 8.36 2 8.74 2 12s0 3.64.07 4.93a6.86 6.86 0 0 0 .42 2.27a3.94 3.94 0 0 0 .91 1.4a3.89 3.89 0 0 0 1.41.91a6.53 6.53 0 0 0 2.26.42C8.36 22 8.74 22 12 22s3.64 0 4.93-.07a6.53 6.53 0 0 0 2.26-.42a3.89 3.89 0 0 0 1.41-.91a3.94 3.94 0 0 0 .91-1.4a6.6 6.6 0 0 0 .42-2.27C22 15.64 22 15.26 22 12s0-3.64-.07-4.93Zm-2.54 8a5.73 5.73 0 0 1-.39 1.8A3.86 3.86 0 0 1 16.87 19a5.73 5.73 0 0 1-1.81.35H8.94A5.73 5.73 0 0 1 7.13 19a3.51 3.51 0 0 1-1.31-.86A3.51 3.51 0 0 1 5 16.87a5.49 5.49 0 0 1-.34-1.81V8.94A5.49 5.49 0 0 1 5 7.13a3.51 3.51 0 0 1 .86-1.31A3.59 3.59 0 0 1 7.13 5a5.73 5.73 0 0 1 1.81-.35h6.12a5.73 5.73 0 0 1 1.81.35a3.51 3.51 0 0 1 1.31.86A3.51 3.51 0 0 1 19 7.13a5.73 5.73 0 0 1 .35 1.81V12c0 2.06.07 2.27.04 3.06Zm-1.6-7.44a2.38 2.38 0 0 0-1.41-1.41A4 4 0 0 0 15 6H9a4 4 0 0 0-1.38.26a2.38 2.38 0 0 0-1.41 1.36A4.27 4.27 0 0 0 6 9v6a4.27 4.27 0 0 0 .26 1.38a2.38 2.38 0 0 0 1.41 1.41a4.27 4.27 0 0 0 1.33.26h6a4 4 0 0 0 1.38-.26a2.38 2.38 0 0 0 1.41-1.41a4 4 0 0 0 .26-1.38V9a3.78 3.78 0 0 0-.26-1.38ZM12 15.82A3.81 3.81 0 0 1 8.19 12A3.82 3.82 0 1 1 12 15.82Zm4-6.89a.9.9 0 0 1 0-1.79a.9.9 0 0 1 0 1.79Z"
                        />
                      </svg>
                    </i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="flex flex-col items-center justify-center space-y-5 text-[#a3262e] p-7">
            <div className="text-2xl text-black font-normal p-5 ">
              <h1>Socials</h1>
            </div>
            <div>
              <a href="https://www.facebook.com/LeoXyRDG/" target="_blank">
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    width="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5Z"
                    />
                  </svg>
                </i>
              </a>
            </div>
            <div>
              <a href="https://twitter.com/LeoXyRealDeal">
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    width="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23Z"
                    />
                  </svg>
                </i>
              </a>
            </div>
            <div>
              <a href="https://www.instagram.com/janggodev/" target="_blank">
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    width="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M12 9.52A2.48 2.48 0 1 0 14.48 12A2.48 2.48 0 0 0 12 9.52Zm9.93-2.45a6.53 6.53 0 0 0-.42-2.26a4 4 0 0 0-2.32-2.32a6.53 6.53 0 0 0-2.26-.42C15.64 2 15.26 2 12 2s-3.64 0-4.93.07a6.53 6.53 0 0 0-2.26.42a4 4 0 0 0-2.32 2.32a6.53 6.53 0 0 0-.42 2.26C2 8.36 2 8.74 2 12s0 3.64.07 4.93a6.86 6.86 0 0 0 .42 2.27a3.94 3.94 0 0 0 .91 1.4a3.89 3.89 0 0 0 1.41.91a6.53 6.53 0 0 0 2.26.42C8.36 22 8.74 22 12 22s3.64 0 4.93-.07a6.53 6.53 0 0 0 2.26-.42a3.89 3.89 0 0 0 1.41-.91a3.94 3.94 0 0 0 .91-1.4a6.6 6.6 0 0 0 .42-2.27C22 15.64 22 15.26 22 12s0-3.64-.07-4.93Zm-2.54 8a5.73 5.73 0 0 1-.39 1.8A3.86 3.86 0 0 1 16.87 19a5.73 5.73 0 0 1-1.81.35H8.94A5.73 5.73 0 0 1 7.13 19a3.51 3.51 0 0 1-1.31-.86A3.51 3.51 0 0 1 5 16.87a5.49 5.49 0 0 1-.34-1.81V8.94A5.49 5.49 0 0 1 5 7.13a3.51 3.51 0 0 1 .86-1.31A3.59 3.59 0 0 1 7.13 5a5.73 5.73 0 0 1 1.81-.35h6.12a5.73 5.73 0 0 1 1.81.35a3.51 3.51 0 0 1 1.31.86A3.51 3.51 0 0 1 19 7.13a5.73 5.73 0 0 1 .35 1.81V12c0 2.06.07 2.27.04 3.06Zm-1.6-7.44a2.38 2.38 0 0 0-1.41-1.41A4 4 0 0 0 15 6H9a4 4 0 0 0-1.38.26a2.38 2.38 0 0 0-1.41 1.36A4.27 4.27 0 0 0 6 9v6a4.27 4.27 0 0 0 .26 1.38a2.38 2.38 0 0 0 1.41 1.41a4.27 4.27 0 0 0 1.33.26h6a4 4 0 0 0 1.38-.26a2.38 2.38 0 0 0 1.41-1.41a4 4 0 0 0 .26-1.38V9a3.78 3.78 0 0 0-.26-1.38ZM12 15.82A3.81 3.81 0 0 1 8.19 12A3.82 3.82 0 1 1 12 15.82Zm4-6.89a.9.9 0 0 1 0-1.79a.9.9 0 0 1 0 1.79Z"
                    />
                  </svg>
                </i>
              </a>
            </div>
            <div>
              <a href="https://www.facebook.com/LeoXyRDG/" target="_blank">
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M21.435 14.156a9.586 9.586 0 0 0 .211-2.027a9.477 9.477 0 0 0-9.54-9.422a9.114 9.114 0 0 0-1.625.141A5.536 5.536 0 0 0 2 7.466a5.429 5.429 0 0 0 .753 2.756a10.02 10.02 0 0 0-.189 1.884a9.339 9.339 0 0 0 9.54 9.258a8.567 8.567 0 0 0 1.743-.166a5.58 5.58 0 0 0 2.616.802a5.433 5.433 0 0 0 4.97-7.844Zm-4.995 1.837a3.631 3.631 0 0 1-1.625 1.225a6.34 6.34 0 0 1-2.52.447a6.217 6.217 0 0 1-2.898-.612a3.733 3.733 0 0 1-1.32-1.178a2.574 2.574 0 0 1-.494-1.413a.88.88 0 0 1 .307-.684a1.09 1.09 0 0 1 .776-.282a.944.944 0 0 1 .637.212a1.793 1.793 0 0 1 .447.659a3.398 3.398 0 0 0 .495.873a1.79 1.79 0 0 0 .73.564a3.014 3.014 0 0 0 1.249.236a2.922 2.922 0 0 0 1.72-.447a1.332 1.332 0 0 0 .66-1.131a1.135 1.135 0 0 0-.354-.871a2.185 2.185 0 0 0-.92-.52c-.376-.117-.895-.235-1.53-.376a13.99 13.99 0 0 1-2.144-.636a3.348 3.348 0 0 1-1.366-1.013a2.474 2.474 0 0 1-.495-1.578a2.63 2.63 0 0 1 .542-1.602a3.412 3.412 0 0 1 1.53-1.084a6.652 6.652 0 0 1 2.38-.376a6.403 6.403 0 0 1 1.885.258a4.072 4.072 0 0 1 1.318.66a2.916 2.916 0 0 1 .778.872a1.803 1.803 0 0 1 .236.87a.962.962 0 0 1-.307.708a.991.991 0 0 1-.753.306a.974.974 0 0 1-.636-.189a2.382 2.382 0 0 1-.471-.611a2.937 2.937 0 0 0-.778-.967a2.376 2.376 0 0 0-1.46-.353a2.703 2.703 0 0 0-1.508.377a1.076 1.076 0 0 0-.565.896a.958.958 0 0 0 .188.565a1.419 1.419 0 0 0 .542.4a2.693 2.693 0 0 0 .683.26c.236.07.613.164 1.154.282c.66.142 1.273.306 1.815.471a5.43 5.43 0 0 1 1.389.636a2.857 2.857 0 0 1 .895.942a2.828 2.828 0 0 1 .33 1.39a2.89 2.89 0 0 1-.542 1.814Z"
                    />
                  </svg>
                </i>
              </a>
            </div>
          </div> */}
          <div className="flex border p-5">
            <form action="">
              <div className="space-y-5">
                <div className="flex flex-col">
                  <label htmlFor="name" className="font-bold">
                    Name <span className="text-[#a3262e]">*</span>
                  </label>
                  <input
                    className="border p-2"
                    type="text"
                    id="name"
                    placeholder=""
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="email" className="font-bold">
                    Email <span className="text-[#a3262e]">*</span>
                  </label>
                  <input
                    className="border p-2"
                    type="email"
                    id="email"
                    placeholder=""
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="subject" className="font-bold">
                    Subject <span className="text-[#a3262e]">*</span>
                  </label>
                  <input
                    className="border p-2"
                    type="text"
                    id="subject"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="message" className="font-bold">
                    Message <span className="text-[#a3262e]">*</span>
                  </label>
                  <textarea
                    className=" border p-2"
                    name=""
                    id="message"
                    cols="50"
                    rows="3"
                    required
                  ></textarea>
                </div>
              </div>
              <div className="text-center pt-6">
                <button type="submit" className="border rounded-lg px-5 py-2 bg-[#a3262e] text-white">
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Contact;
