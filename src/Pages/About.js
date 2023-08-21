import React from "react";
import Footer from "../components/Footer";
import "../App.css";

function About() {
  return (
    <div className="bg-[#f1f1f1]">
      <div className="flex flex-col items-center justify-center">
        <header className="relative fixed text-6xl font-bold max-w-6xl mx-auto py-24">
          <p className="underline underline-offset-4 decoration-2 decoration-[#a3262e] text-gray-700">About</p>
        </header>
        <div className="grid grid-cols-2 gap-7 max-w-6xl mx-auto pb-24 p-4">
          <div className="mb-5">
            <sup className="underline underline-offset-4 decoration-[#a3262e]">
              Introduce
            </sup>
            <h1 className="text-3xl mb-3">
              Hi! I'm{" "}
              <span className="font-semibold text-[#a3262e]">
                John Leo Bruno
              </span>
            </h1>
            <p className="mb-5 text-justify text-gray-700">
              An aspiring{" "}
              <span className="font-bold underline underline-offset-4 decoration-[#a3262e]">
                Web Developer
              </span>{" "}
              based in philippines. Since I started my journey as a front-end
              developer, I've worked on many personal projects, crafting
              responsive websites that are both fast and user-friendly while
              following best practices. I have a quiet confidence, a natural
              curiosity, and I'm always working to improve my skills and
              constantly working on getting better at solving problems.
            </p>
            <p className="mb-5 text-justify text-gray-700">
              When I'm not writing code, I tidy up my workspace to create a
              conducive environment. At times, I engage in designing from
              scratch, and I derive pleasure from sharing my web development
              expertise through blogs and short videos on platforms like{" "}
              <a
                href="https://www.tiktok.com/@janggodev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <b className="underline underline-offset-4 decoration-[#a3262e]">
                  TikTok
                </b>
              </a>{" "}
              and{" "}
              <a
                href="https://medium.com/@johnleobruno"
                target="_blank"
                rel="noopener noreferrer"
              >
                <b className="underline underline-offset-4 decoration-[#a3262e]">
                  Medium
                </b>
              </a>
              .
            </p>
            <div className="pt-4">
              {/* Tech Stacks */}
              <sup className="underline underline-offset-4 decoration-[#a3262e]">
                Technology Stack
              </sup>
              <div className="grid grid-cols-4 gap-4">
                <div className="relative hover:scale-105 ease-out duration-500 flex flex-col items-center justify-center p-5 bg-white rounded-md">
                  <i>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="45"
                      height="45"
                      viewBox="0 0 128 128"
                    >
                      <path
                        fill="#439934"
                        fill-rule="evenodd"
                        d="M88.038 42.812c1.605 4.643 2.761 9.383 3.141 14.296c.472 6.095.256 12.147-1.029 18.142c-.035.165-.109.32-.164.48c-.403.001-.814-.049-1.208.012c-3.329.523-6.655 1.065-9.981 1.604c-3.438.557-6.881 1.092-10.313 1.687c-1.216.21-2.721-.041-3.212 1.641c-.014.046-.154.054-.235.08l.166-10.051l-.169-24.252l1.602-.275c2.62-.429 5.24-.864 7.862-1.281c3.129-.497 6.261-.98 9.392-1.465c1.381-.215 2.764-.412 4.148-.618z"
                        clip-rule="evenodd"
                      />
                      <path
                        fill="#45A538"
                        fill-rule="evenodd"
                        d="M61.729 110.054c-1.69-1.453-3.439-2.842-5.059-4.37c-8.717-8.222-15.093-17.899-18.233-29.566c-.865-3.211-1.442-6.474-1.627-9.792c-.13-2.322-.318-4.665-.154-6.975c.437-6.144 1.325-12.229 3.127-18.147l.099-.138c.175.233.427.439.516.702c1.759 5.18 3.505 10.364 5.242 15.551c5.458 16.3 10.909 32.604 16.376 48.9c.107.318.384.579.583.866l-.87 2.969z"
                        clip-rule="evenodd"
                      />
                      <path
                        fill="#46A037"
                        fill-rule="evenodd"
                        d="M88.038 42.812c-1.384.206-2.768.403-4.149.616c-3.131.485-6.263.968-9.392 1.465c-2.622.417-5.242.852-7.862 1.281l-1.602.275l-.012-1.045c-.053-.859-.144-1.717-.154-2.576c-.069-5.478-.112-10.956-.18-16.434c-.042-3.429-.105-6.857-.175-10.285c-.043-2.13-.089-4.261-.185-6.388c-.052-1.143-.236-2.28-.311-3.423c-.042-.657.016-1.319.029-1.979c.817 1.583 1.616 3.178 2.456 4.749c1.327 2.484 3.441 4.314 5.344 6.311c7.523 7.892 12.864 17.068 16.193 27.433z"
                        clip-rule="evenodd"
                      />
                      <path
                        fill="#409433"
                        fill-rule="evenodd"
                        d="M65.036 80.753c.081-.026.222-.034.235-.08c.491-1.682 1.996-1.431 3.212-1.641c3.432-.594 6.875-1.13 10.313-1.687c3.326-.539 6.652-1.081 9.981-1.604c.394-.062.805-.011 1.208-.012c-.622 2.22-1.112 4.488-1.901 6.647c-.896 2.449-1.98 4.839-3.131 7.182a49.142 49.142 0 0 1-6.353 9.763c-1.919 2.308-4.058 4.441-6.202 6.548c-1.185 1.165-2.582 2.114-3.882 3.161l-.337-.23l-1.214-1.038l-1.256-2.753a41.402 41.402 0 0 1-1.394-9.838l.023-.561l.171-2.426c.057-.828.133-1.655.168-2.485c.129-2.982.241-5.964.359-8.946z"
                        clip-rule="evenodd"
                      />
                      <path
                        fill="#4FAA41"
                        fill-rule="evenodd"
                        d="M65.036 80.753c-.118 2.982-.23 5.964-.357 8.947c-.035.83-.111 1.657-.168 2.485l-.765.289c-1.699-5.002-3.399-9.951-5.062-14.913c-2.75-8.209-5.467-16.431-8.213-24.642a4498.887 4498.887 0 0 0-6.7-19.867c-.105-.31-.407-.552-.617-.826l4.896-9.002c.168.292.39.565.496.879a6167.476 6167.476 0 0 1 6.768 20.118c2.916 8.73 5.814 17.467 8.728 26.198c.116.349.308.671.491 1.062l.67-.78l-.167 10.052z"
                        clip-rule="evenodd"
                      />
                      <path
                        fill="#4AA73C"
                        fill-rule="evenodd"
                        d="M43.155 32.227c.21.274.511.516.617.826a4498.887 4498.887 0 0 1 6.7 19.867c2.746 8.211 5.463 16.433 8.213 24.642c1.662 4.961 3.362 9.911 5.062 14.913l.765-.289l-.171 2.426l-.155.559c-.266 2.656-.49 5.318-.814 7.968c-.163 1.328-.509 2.632-.772 3.947c-.198-.287-.476-.548-.583-.866c-5.467-16.297-10.918-32.6-16.376-48.9a3888.972 3888.972 0 0 0-5.242-15.551c-.089-.263-.34-.469-.516-.702l3.272-8.84z"
                        clip-rule="evenodd"
                      />
                      <path
                        fill="#57AE47"
                        fill-rule="evenodd"
                        d="m65.202 70.702l-.67.78c-.183-.391-.375-.714-.491-1.062c-2.913-8.731-5.812-17.468-8.728-26.198a6167.476 6167.476 0 0 0-6.768-20.118c-.105-.314-.327-.588-.496-.879l6.055-7.965c.191.255.463.482.562.769c1.681 4.921 3.347 9.848 5.003 14.778c1.547 4.604 3.071 9.215 4.636 13.813c.105.308.47.526.714.786l.012 1.045c.058 8.082.115 16.167.171 24.251z"
                        clip-rule="evenodd"
                      />
                      <path
                        fill="#60B24F"
                        fill-rule="evenodd"
                        d="M65.021 45.404c-.244-.26-.609-.478-.714-.786c-1.565-4.598-3.089-9.209-4.636-13.813c-1.656-4.93-3.322-9.856-5.003-14.778c-.099-.287-.371-.514-.562-.769c1.969-1.928 3.877-3.925 5.925-5.764c1.821-1.634 3.285-3.386 3.352-5.968c.003-.107.059-.214.145-.514l.519 1.306c-.013.661-.072 1.322-.029 1.979c.075 1.143.259 2.28.311 3.423c.096 2.127.142 4.258.185 6.388c.069 3.428.132 6.856.175 10.285c.067 5.478.111 10.956.18 16.434c.008.861.098 1.718.152 2.577z"
                        clip-rule="evenodd"
                      />
                      <path
                        fill="#A9AA88"
                        fill-rule="evenodd"
                        d="M62.598 107.085c.263-1.315.609-2.62.772-3.947c.325-2.649.548-5.312.814-7.968l.066-.01l.066.011a41.402 41.402 0 0 0 1.394 9.838c-.176.232-.425.439-.518.701c-.727 2.05-1.412 4.116-2.143 6.166c-.1.28-.378.498-.574.744l-.747-2.566l.87-2.969z"
                        clip-rule="evenodd"
                      />
                      <path
                        fill="#B6B598"
                        fill-rule="evenodd"
                        d="M62.476 112.621c.196-.246.475-.464.574-.744c.731-2.05 1.417-4.115 2.143-6.166c.093-.262.341-.469.518-.701l1.255 2.754c-.248.352-.59.669-.728 1.061l-2.404 7.059c-.099.283-.437.483-.663.722l-.695-3.985z"
                        clip-rule="evenodd"
                      />
                      <path
                        fill="#C2C1A7"
                        fill-rule="evenodd"
                        d="M63.171 116.605c.227-.238.564-.439.663-.722l2.404-7.059c.137-.391.48-.709.728-1.061l1.215 1.037c-.587.58-.913 1.25-.717 2.097l-.369 1.208c-.168.207-.411.387-.494.624c-.839 2.403-1.64 4.819-2.485 7.222c-.107.305-.404.544-.614.812c-.109-1.387-.22-2.771-.331-4.158z"
                        clip-rule="evenodd"
                      />
                      <path
                        fill="#CECDB7"
                        fill-rule="evenodd"
                        d="M63.503 120.763c.209-.269.506-.508.614-.812c.845-2.402 1.646-4.818 2.485-7.222c.083-.236.325-.417.494-.624l-.509 5.545c-.136.157-.333.294-.398.477c-.575 1.614-1.117 3.24-1.694 4.854c-.119.333-.347.627-.525.938c-.158-.207-.441-.407-.454-.623c-.051-.841-.016-1.688-.013-2.533z"
                        clip-rule="evenodd"
                      />
                      <path
                        fill="#DBDAC7"
                        fill-rule="evenodd"
                        d="M63.969 123.919c.178-.312.406-.606.525-.938c.578-1.613 1.119-3.239 1.694-4.854c.065-.183.263-.319.398-.477l.012 3.64l-1.218 3.124l-1.411-.495z"
                        clip-rule="evenodd"
                      />
                      <path
                        fill="#EBE9DC"
                        fill-rule="evenodd"
                        d="m65.38 124.415l1.218-3.124l.251 3.696l-1.469-.572z"
                        clip-rule="evenodd"
                      />
                      <path
                        fill="#CECDB7"
                        fill-rule="evenodd"
                        d="M67.464 110.898c-.196-.847.129-1.518.717-2.097l.337.23l-1.054 1.867z"
                        clip-rule="evenodd"
                      />
                      <path
                        fill="#4FAA41"
                        fill-rule="evenodd"
                        d="m64.316 95.172l-.066-.011l-.066.01l.155-.559l-.023.56z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </i>
                  <small>MongoDB</small>
                </div>
                <div className="relative hover:scale-105 ease-out duration-500 flex flex-col items-center justify-center p-5 bg-white rounded-md">
                  <i>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="45"
                      height="45"
                      viewBox="0 0 128 128"
                    >
                      <path d="M126.67 98.44c-4.56 1.16-7.38.05-9.91-3.75c-5.68-8.51-11.95-16.63-18-24.9c-.78-1.07-1.59-2.12-2.6-3.45C89 76 81.85 85.2 75.14 94.77c-2.4 3.42-4.92 4.91-9.4 3.7l26.92-36.13L67.6 29.71c4.31-.84 7.29-.41 9.93 3.45c5.83 8.52 12.26 16.63 18.67 25.21c6.45-8.55 12.8-16.67 18.8-25.11c2.41-3.42 5-4.72 9.33-3.46c-3.28 4.35-6.49 8.63-9.72 12.88c-4.36 5.73-8.64 11.53-13.16 17.14c-1.61 2-1.35 3.3.09 5.19C109.9 76 118.16 87.1 126.67 98.44zM1.33 61.74c.72-3.61 1.2-7.29 2.2-10.83c6-21.43 30.6-30.34 47.5-17.06C60.93 41.64 63.39 52.62 62.9 65H7.1c-.84 22.21 15.15 35.62 35.53 28.78c7.15-2.4 11.36-8 13.47-15c1.07-3.51 2.84-4.06 6.14-3.06c-1.69 8.76-5.52 16.08-13.52 20.66c-12 6.86-29.13 4.64-38.14-4.89C5.26 85.89 3 78.92 2 71.39c-.15-1.2-.46-2.38-.7-3.57q.03-3.04.03-6.08zm5.87-1.49h50.43c-.33-16.06-10.33-27.47-24-27.57c-15-.12-25.78 11.02-26.43 27.57z" />
                    </svg>
                  </i>
                  <small>ExpressJS</small>
                </div>
                <div className="relative hover:scale-105 ease-out duration-500 flex flex-col items-center justify-center p-5 bg-white rounded-md">
                  <i>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="45"
                      height="45"
                      viewBox="0 0 128 128"
                    >
                      <g fill="#61DAFB">
                        <circle cx="64" cy="64" r="11.4" />
                        <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3c.6-2.4 1.1-4.8 1.5-7.1c2.1-13.2-.2-22.5-6.6-26.1c-1.9-1.1-4-1.6-6.4-1.6c-7 0-15.9 5.2-24.9 13.9c-9-8.7-17.9-13.9-24.9-13.9c-2.4 0-4.5.5-6.4 1.6c-6.4 3.7-8.7 13-6.6 26.1c.4 2.3.9 4.7 1.5 7.1c-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3c-.6 2.4-1.1 4.8-1.5 7.1c-2.1 13.2.2 22.5 6.6 26.1c1.9 1.1 4 1.6 6.4 1.6c7.1 0 16-5.2 24.9-13.9c9 8.7 17.9 13.9 24.9 13.9c2.4 0 4.5-.5 6.4-1.6c6.4-3.7 8.7-13 6.6-26.1c-.4-2.3-.9-4.7-1.5-7.1c2.4-.7 4.7-1.4 6.9-2.3c12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3c-.3 2.1-.8 4.3-1.4 6.6c-5.2-1.2-10.7-2-16.5-2.5c-3.4-4.8-6.9-9.1-10.4-13c7.4-7.3 14.9-12.3 21-12.3c1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6c-3.7.3-7.4.4-11.2.4c-3.9 0-7.6-.1-11.2-.4c-2.2-3.2-4.2-6.4-6-9.6c-1.9-3.3-3.7-6.7-5.3-10c1.6-3.3 3.4-6.7 5.3-10c1.8-3.2 3.9-6.4 6.1-9.6c3.7-.3 7.4-.4 11.2-.4c3.9 0 7.6.1 11.2.4c2.2 3.2 4.2 6.4 6 9.6c1.9 3.3 3.7 6.7 5.3 10c-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3c-3.4.8-7 1.4-10.8 1.9c1.2-1.9 2.5-3.9 3.6-6c1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3c2.3.1 4.6.2 6.9.2c2.3 0 4.6-.1 6.9-.2c-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9c1.1-3.3 2.3-6.8 3.8-10.3c1.1 2 2.2 4.1 3.4 6.1c1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3c3.4-.8 7-1.4 10.8-1.9c-1.2 1.9-2.5 3.9-3.6 6c-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3c-2.3-.1-4.6-.2-6.9-.2c-2.3 0-4.6.1-6.9.2c2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9c-1.1 3.3-2.3 6.8-3.8 10.3c-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3c1-.6 2.2-.9 3.5-.9c6 0 13.5 4.9 21 12.3c-3.5 3.8-7 8.2-10.4 13c-5.8.5-11.3 1.4-16.5 2.5c-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4c2-.8 4.2-1.5 6.4-2.1c1.6 5 3.6 10.3 6 15.6c-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3c.3-2.1.8-4.3 1.4-6.6c5.2 1.2 10.7 2 16.5 2.5c3.4 4.8 6.9 9.1 10.4 13c-7.4 7.3-14.9 12.3-21 12.3c-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3c-1 .6-2.2.9-3.5.9c-6 0-13.5-4.9-21-12.3c3.5-3.8 7-8.2 10.4-13c5.8-.5 11.3-1.4 16.5-2.5c.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1c-1.6-5-3.6-10.3-6-15.6c2.4-5.3 4.5-10.5 6-15.5c13.8 4 22.1 10 22.1 15.6c0 4.7-5.8 9.7-15.7 13.4z" />
                      </g>
                    </svg>
                  </i>
                  <small>ReactJS</small>
                </div>
                <div className="relative hover:scale-105 ease-out duration-500 flex flex-col items-center justify-center p-5 bg-white rounded-md">
                  <i>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="45"
                      height="45"
                      viewBox="0 0 256 289"
                    >
                      <path
                        fill="#539E43"
                        d="M128 288.464c-3.975 0-7.685-1.06-11.13-2.915l-35.247-20.936c-5.3-2.915-2.65-3.975-1.06-4.505c7.155-2.385 8.48-2.915 15.9-7.156c.796-.53 1.856-.265 2.65.265l27.032 16.166c1.06.53 2.385.53 3.18 0l105.74-61.217c1.06-.53 1.59-1.59 1.59-2.915V83.08c0-1.325-.53-2.385-1.59-2.915l-105.74-60.953c-1.06-.53-2.385-.53-3.18 0L20.405 80.166c-1.06.53-1.59 1.855-1.59 2.915v122.17c0 1.06.53 2.385 1.59 2.915l28.887 16.695c15.636 7.95 25.44-1.325 25.44-10.6V93.68c0-1.59 1.326-3.18 3.181-3.18h13.516c1.59 0 3.18 1.325 3.18 3.18v120.58c0 20.936-11.396 33.126-31.272 33.126c-6.095 0-10.865 0-24.38-6.625l-27.827-15.9C4.24 220.885 0 213.465 0 205.515V83.346C0 75.396 4.24 67.976 11.13 64L116.87 2.783c6.625-3.71 15.635-3.71 22.26 0L244.87 64C251.76 67.975 256 75.395 256 83.346v122.17c0 7.95-4.24 15.37-11.13 19.345L139.13 286.08c-3.445 1.59-7.42 2.385-11.13 2.385Zm32.596-84.009c-46.377 0-55.917-21.2-55.917-39.221c0-1.59 1.325-3.18 3.18-3.18h13.78c1.59 0 2.916 1.06 2.916 2.65c2.12 14.045 8.215 20.936 36.306 20.936c22.261 0 31.802-5.035 31.802-16.96c0-6.891-2.65-11.926-37.367-15.372c-28.886-2.915-46.907-9.275-46.907-32.33c0-21.467 18.02-34.187 48.232-34.187c33.921 0 50.617 11.66 52.737 37.101c0 .795-.265 1.59-.795 2.385c-.53.53-1.325 1.06-2.12 1.06h-13.78c-1.326 0-2.65-1.06-2.916-2.385c-3.18-14.575-11.395-19.345-33.126-19.345c-24.38 0-27.296 8.48-27.296 14.84c0 7.686 3.445 10.07 36.306 14.31c32.597 4.24 47.967 10.336 47.967 33.127c-.265 23.321-19.345 36.571-53.002 36.571Z"
                      />
                    </svg>
                  </i>
                  <small>NodeJS</small>
                </div>
                <div className="relative hover:scale-105 ease-out duration-500 flex flex-col items-center justify-center p-5 bg-white rounded-md">
                  <i>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="45"
                      height="45"
                      viewBox="0 0 32 32"
                    >
                      <path
                        fill="#e44f26"
                        d="M5.902 27.201L3.655 2h24.69l-2.25 25.197L15.985 30L5.902 27.201z"
                      />
                      <path
                        fill="#f1662a"
                        d="m16 27.858l8.17-2.265l1.922-21.532H16v23.797z"
                      />
                      <path
                        fill="#ebebeb"
                        d="M16 13.407h-4.09l-.282-3.165H16V7.151H8.25l.074.83l.759 8.517H16v-3.091zm0 8.027l-.014.004l-3.442-.929l-.22-2.465H9.221l.433 4.852l6.332 1.758l.014-.004v-3.216z"
                      />
                      <path
                        fill="#fff"
                        d="M15.989 13.407v3.091h3.806l-.358 4.009l-3.448.93v3.216l6.337-1.757l.046-.522l.726-8.137l.076-.83h-7.185zm0-6.256v3.091h7.466l.062-.694l.141-1.567l.074-.83h-7.743z"
                      />
                    </svg>
                  </i>
                  <small>HTML5</small>
                </div>
                <div className="relative hover:scale-105 ease-out duration-500 flex flex-col items-center justify-center p-5 bg-white rounded-md">
                  <i>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="45"
                      height="45"
                      viewBox="0 0 32 32"
                    >
                      <path
                        fill="#1572b6"
                        d="M5.902 27.201L3.656 2h24.688l-2.249 25.197L15.985 30L5.902 27.201z"
                      />
                      <path
                        fill="#33a9dc"
                        d="m16 27.858l8.17-2.265l1.922-21.532H16v23.797z"
                      />
                      <path
                        fill="#fff"
                        d="M16 13.191h4.09l.282-3.165H16V6.935h7.75l-.074.829l-.759 8.518H16v-3.091z"
                      />
                      <path
                        fill="#ebebeb"
                        d="m16.019 21.218l-.014.004l-3.442-.93l-.22-2.465H9.24l.433 4.853l6.331 1.758l.015-.004v-3.216z"
                      />
                      <path
                        fill="#fff"
                        d="m19.827 16.151l-.372 4.139l-3.447.93v3.216l6.336-1.756l.047-.522l.537-6.007h-3.101z"
                      />
                      <path
                        fill="#ebebeb"
                        d="M16.011 6.935v3.091H8.545l-.062-.695l-.141-1.567l-.074-.829h7.743zM16 13.191v3.091h-3.399l-.062-.695l-.14-1.567l-.074-.829H16z"
                      />
                    </svg>
                  </i>
                  <small>CSS3</small>
                </div>
                <div className="relative hover:scale-105 ease-out duration-500 flex flex-col items-center justify-center p-5 bg-white rounded-md">
                  <i>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="45"
                      height="45"
                      viewBox="0 0 256 154"
                    >
                      <defs>
                        <linearGradient
                          id="logosTailwindcssIcon0"
                          x1="-2.778%"
                          x2="100%"
                          y1="32%"
                          y2="67.556%"
                        >
                          <stop offset="0%" stop-color="#2298BD" />
                          <stop offset="100%" stop-color="#0ED7B5" />
                        </linearGradient>
                      </defs>
                      <path
                        fill="url(#logosTailwindcssIcon0)"
                        d="M128 0C93.867 0 72.533 17.067 64 51.2C76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2c-12.8 17.067-27.733 23.467-44.8 19.2c-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0ZM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2c9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2c-12.8 17.067-27.733 23.467-44.8 19.2c-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8Z"
                      />
                    </svg>
                  </i>
                  <small>Tailwind CSS</small>
                </div>
                <div className="relative hover:scale-105 ease-out duration-500 flex flex-col items-center justify-center p-5 bg-white rounded-md">
                  <i>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="45"
                      height="45"
                      viewBox="0 0 256 222"
                    >
                      <path
                        fill="#007FFF"
                        d="M215.771 151.107a7.111 7.111 0 0 0 3.57-6.144l.128-41.153a7.111 7.111 0 0 1 3.57-6.145l22.308-12.814A7.111 7.111 0 0 1 256 91.016v74.818a7.11 7.11 0 0 1-3.57 6.166l-84.19 48.357a7.111 7.111 0 0 1-7.07.007l-66.07-37.79a7.111 7.111 0 0 1-3.585-6.172v-37.726c0-.042.05-.07.093-.05c.035.022.085 0 .085-.05v-.042c0-.028.014-.057.043-.071l54.416-31.261c.05-.029.028-.107-.029-.107a.057.057 0 0 1-.057-.057l.107-36.986a7.111 7.111 0 0 0-10.667-6.187L95.064 87.17a7.111 7.111 0 0 1-7.097 0l-40.57-23.36a7.111 7.111 0 0 0-10.66 6.158v66.846a7.111 7.111 0 0 1-10.638 6.18L3.584 130.12A7.111 7.111 0 0 1 0 123.935L.2 7.095A7.111 7.111 0 0 1 10.851.946L87.974 45.24a7.111 7.111 0 0 0 7.083 0l77.1-44.296a7.111 7.111 0 0 1 10.653 6.172v116.867a7.111 7.111 0 0 1-3.562 6.166l-40.378 23.254a7.111 7.111 0 0 0 .028 12.338l22.273 12.68a7.111 7.111 0 0 0 7.061-.015l47.54-27.3Zm4.672-104.835a7.111 7.111 0 0 0 10.767 6.094l21.334-12.8A7.111 7.111 0 0 0 256 33.472V7.387A7.111 7.111 0 0 0 245.233 1.3L223.9 14.1a7.111 7.111 0 0 0-3.457 6.095v26.084v-.007Z"
                      />
                    </svg>
                  </i>
                  <small>Material UI</small>
                </div>
                <div className="relative hover:scale-105 ease-out duration-500 flex flex-col items-center justify-center p-5 bg-white rounded-md">
                  <i>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="45"
                      height="45"
                      viewBox="0 0 128 128"
                    >
                      <defs>
                        <linearGradient
                          id="deviconBootstrap0"
                          x1="76.079"
                          x2="523.48"
                          y1="10.798"
                          y2="365.95"
                          gradientTransform="translate(1.11 14.613) scale(.24566)"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0" stop-color="#9013fe" />
                          <stop offset="1" stop-color="#6610f2" />
                        </linearGradient>
                        <linearGradient
                          id="deviconBootstrap1"
                          x1="193.51"
                          x2="293.51"
                          y1="109.74"
                          y2="278.87"
                          gradientTransform="translate(0 52)"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0" stop-color="#fff" />
                          <stop offset="1" stop-color="#f1e5fc" />
                        </linearGradient>
                        <filter
                          id="deviconBootstrap2"
                          width="197"
                          height="249"
                          x="161.9"
                          y="135.46"
                          color-interpolation-filters="sRGB"
                          filterUnits="userSpaceOnUse"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          />
                          <feOffset dy="4" />
                          <feGaussianBlur stdDeviation="8" />
                          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                          <feBlend
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow"
                          />
                          <feBlend
                            in="SourceGraphic"
                            in2="effect1_dropShadow"
                            result="shape"
                          />
                        </filter>
                      </defs>
                      <path
                        fill="url(#deviconBootstrap0)"
                        d="M14.985 27.712c-.237-6.815 5.072-13.099 12.249-13.099h73.54c7.177 0 12.486 6.284 12.249 13.099c-.228 6.546.068 15.026 2.202 21.94c2.141 6.936 5.751 11.319 11.664 11.883v6.387c-5.913.564-9.523 4.947-11.664 11.883c-2.134 6.914-2.43 15.394-2.202 21.94c.237 6.815-5.072 13.098-12.249 13.098h-73.54c-7.177 0-12.486-6.284-12.249-13.098c.228-6.546-.068-15.026-2.203-21.94c-2.14-6.935-5.76-11.319-11.673-11.883v-6.387c5.913-.563 9.533-4.947 11.673-11.883c2.135-6.914 2.43-15.394 2.203-21.94z"
                      />
                      <path
                        fill="url(#deviconBootstrap1)"
                        d="M267.1 364.46c47.297 0 75.798-23.158 75.798-61.355c0-28.873-20.336-49.776-50.532-53.085v-1.203c22.185-3.609 39.594-24.211 39.594-47.219c0-32.783-25.882-54.138-65.322-54.138h-88.74v217zm-54.692-189.48h45.911c24.958 0 39.131 11.128 39.131 31.279c0 21.505-16.484 33.535-46.372 33.535h-38.67zm0 161.96v-71.431h45.602c32.661 0 49.608 12.03 49.608 35.49c0 23.459-16.484 35.941-47.605 35.941z"
                        filter="url(#deviconBootstrap2)"
                        transform="translate(1.494 2.203) scale(.24566)"
                      />
                    </svg>
                  </i>
                  <small>Bootstrap</small>
                </div>
                <div className="relative hover:scale-105 ease-out duration-500 flex flex-col items-center justify-center p-5 bg-white rounded-md">
                  <i>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="45"
                      height="45"
                      viewBox="0 0 128 128"
                    >
                      <path
                        fill="#764abc"
                        d="M88.69 88.11c-9 18.4-24.76 30.78-45.61 34.85a39.73 39.73 0 0 1-9.77 1.14c-12 0-23-5-28.34-13.19C-2.2 100-4.64 76.87 19 59.76c.48 2.61 1.46 6.19 2.11 8.31A38.24 38.24 0 0 0 10 81.1c-4.4 8.64-3.91 17.27 1.3 25.25c3.6 5.38 9.3 8.65 16.63 9.65a44 44 0 0 0 26.55-5c12.71-6.68 21.18-14.66 26.72-25.57a9.32 9.32 0 0 1-2.61-6A9.12 9.12 0 0 1 87.37 70h.34a9.15 9.15 0 0 1 1 18.25zm28.67-20.2c12.21 13.84 12.54 30.13 7.82 39.58c-4.4 8.63-16 17.27-31.6 17.27a50.48 50.48 0 0 1-21-5.05c2.29-1.63 5.54-4.24 7.33-5.87a41.54 41.54 0 0 0 16 3.42c10.1 0 17.75-4.72 22.31-13.35c2.93-5.7 3.1-12.38.33-19.22a43.61 43.61 0 0 0-17.27-20.85a62 62 0 0 0-34.74-10.59h-2.93a9.21 9.21 0 0 1-8 5.54h-.31a9.13 9.13 0 0 1-.3-18.25h.33a9 9 0 0 1 8 4.89h2.61c20.8 0 39.06 7.98 51.42 22.48zm-82.75 23a7.31 7.31 0 0 1 1.14-4.73c-9.12-15.8-14-35.83-6.51-56.68C34.61 13.83 48.13 3.24 62.79 3.24c15.64 0 31.93 13.69 33.88 40.07c-2.44-.81-6-2-8.14-2.44c-.53-8.63-7.82-30.13-25.09-29.81c-6.19.17-15.31 3.1-20 9.12a43.69 43.69 0 0 0-9.64 25.25a59.61 59.61 0 0 0 8.47 36.16a2.75 2.75 0 0 1 1.14-.16h.32a9.121 9.121 0 0 1 .33 18.24h-.33a9.16 9.16 0 0 1-9.12-8.79z"
                      />
                    </svg>
                  </i>
                  <small>Redux</small>
                </div>
                <div className="relative hover:scale-105 ease-out duration-500 flex flex-col items-center justify-center p-5 bg-white rounded-md">
                  <i>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="45"
                      height="45"
                      viewBox="0 0 256 256"
                    >
                      <defs>
                        <linearGradient
                          id="logosNextjsIcon0"
                          x1="55.633%"
                          x2="83.228%"
                          y1="56.385%"
                          y2="96.08%"
                        >
                          <stop offset="0%" stop-color="#FFF" />
                          <stop
                            offset="100%"
                            stop-color="#FFF"
                            stop-opacity="0"
                          />
                        </linearGradient>
                        <linearGradient
                          id="logosNextjsIcon1"
                          x1="50%"
                          x2="49.953%"
                          y1="0%"
                          y2="73.438%"
                        >
                          <stop offset="0%" stop-color="#FFF" />
                          <stop
                            offset="100%"
                            stop-color="#FFF"
                            stop-opacity="0"
                          />
                        </linearGradient>
                        <circle
                          id="logosNextjsIcon2"
                          cx="128"
                          cy="128"
                          r="128"
                        />
                      </defs>
                      <mask id="logosNextjsIcon3" fill="#fff">
                        <use href="#logosNextjsIcon2" />
                      </mask>
                      <g mask="url(#logosNextjsIcon3)">
                        <circle cx="128" cy="128" r="128" />
                        <path
                          fill="url(#logosNextjsIcon0)"
                          d="M212.634 224.028L98.335 76.8H76.8v102.357h17.228V98.68L199.11 234.446a128.433 128.433 0 0 0 13.524-10.418Z"
                        />
                        <path
                          fill="url(#logosNextjsIcon1)"
                          d="M163.556 76.8h17.067v102.4h-17.067z"
                        />
                      </g>
                    </svg>
                  </i>
                  <small>NextJS</small>
                </div>
                <div className="relative hover:scale-105 ease-out duration-500 flex flex-col items-center justify-center p-5 bg-white rounded-md">
                  <i>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="45"
                      height="45"
                      viewBox="0 0 256 351"
                    >
                      <defs>
                        <filter
                          id="logosFirebase0"
                          width="200%"
                          height="200%"
                          x="-50%"
                          y="-50%"
                          filterUnits="objectBoundingBox"
                        >
                          <feGaussianBlur
                            in="SourceAlpha"
                            result="shadowBlurInner1"
                            stdDeviation="17.5"
                          />
                          <feOffset
                            in="shadowBlurInner1"
                            result="shadowOffsetInner1"
                          />
                          <feComposite
                            in="shadowOffsetInner1"
                            in2="SourceAlpha"
                            k2="-1"
                            k3="1"
                            operator="arithmetic"
                            result="shadowInnerInner1"
                          />
                          <feColorMatrix
                            in="shadowInnerInner1"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
                          />
                        </filter>
                        <filter
                          id="logosFirebase1"
                          width="200%"
                          height="200%"
                          x="-50%"
                          y="-50%"
                          filterUnits="objectBoundingBox"
                        >
                          <feGaussianBlur
                            in="SourceAlpha"
                            result="shadowBlurInner1"
                            stdDeviation="3.5"
                          />
                          <feOffset
                            dx="1"
                            dy="-9"
                            in="shadowBlurInner1"
                            result="shadowOffsetInner1"
                          />
                          <feComposite
                            in="shadowOffsetInner1"
                            in2="SourceAlpha"
                            k2="-1"
                            k3="1"
                            operator="arithmetic"
                            result="shadowInnerInner1"
                          />
                          <feColorMatrix
                            in="shadowInnerInner1"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"
                          />
                        </filter>
                        <path
                          id="logosFirebase2"
                          d="m1.253 280.732l1.605-3.131l99.353-188.518l-44.15-83.475C54.392-1.283 45.074.474 43.87 8.188L1.253 280.732Z"
                        />
                        <path
                          id="logosFirebase3"
                          d="m134.417 148.974l32.039-32.812l-32.039-61.007c-3.042-5.791-10.433-6.398-13.443-.59l-17.705 34.109l-.53 1.744l31.678 58.556Z"
                        />
                      </defs>
                      <path
                        fill="#FFC24A"
                        d="m0 282.998l2.123-2.972L102.527 89.512l.212-2.017L58.48 4.358C54.77-2.606 44.33-.845 43.114 6.951L0 282.998Z"
                      />
                      <use
                        fill="#FFA712"
                        fill-rule="evenodd"
                        href="#logosFirebase2"
                      />
                      <use
                        filter="url(#logosFirebase0)"
                        href="#logosFirebase2"
                      />
                      <path
                        fill="#F4BD62"
                        d="m135.005 150.38l32.955-33.75l-32.965-62.93c-3.129-5.957-11.866-5.975-14.962 0L102.42 87.287v2.86l32.584 60.233Z"
                      />
                      <use
                        fill="#FFA50E"
                        fill-rule="evenodd"
                        href="#logosFirebase3"
                      />
                      <use
                        filter="url(#logosFirebase1)"
                        href="#logosFirebase3"
                      />
                      <path
                        fill="#F6820C"
                        d="m0 282.998l.962-.968l3.496-1.42l128.477-128l1.628-4.431l-32.05-61.074z"
                      />
                      <path
                        fill="#FDE068"
                        d="m139.121 347.551l116.275-64.847l-33.204-204.495c-1.039-6.398-8.888-8.927-13.468-4.34L0 282.998l115.608 64.548a24.126 24.126 0 0 0 23.513.005"
                      />
                      <path
                        fill="#FCCA3F"
                        d="M254.354 282.16L221.402 79.218c-1.03-6.35-7.558-8.977-12.103-4.424L1.29 282.6l114.339 63.908a23.943 23.943 0 0 0 23.334.006l115.392-64.355Z"
                      />
                      <path
                        fill="#EEAB37"
                        d="M139.12 345.64a24.126 24.126 0 0 1-23.512-.005L.931 282.015l-.93.983l115.607 64.548a24.126 24.126 0 0 0 23.513.005l116.275-64.847l-.285-1.752l-115.99 64.689Z"
                      />
                    </svg>
                  </i>
                  <small>Firebase</small>
                </div>
                <div className="relative hover:scale-105 ease-out duration-500 flex flex-col items-center justify-center p-5 bg-white rounded-md">
                  <i>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="45"
                      height="45"
                      viewBox="0 0 128 128"
                    >
                      <path
                        fill="#00618A"
                        d="M116.948 97.807c-6.863-.187-12.104.452-16.585 2.341c-1.273.537-3.305.552-3.513 2.147c.7.733.809 1.829 1.365 2.731c1.07 1.73 2.876 4.052 4.488 5.268c1.762 1.33 3.577 2.751 5.465 3.902c3.358 2.047 7.107 3.217 10.34 5.268c1.906 1.21 3.799 2.733 5.658 4.097c.92.675 1.537 1.724 2.732 2.147v-.194c-.628-.8-.79-1.898-1.366-2.733l-2.537-2.537c-2.48-3.292-5.629-6.184-8.976-8.585c-2.669-1.916-8.642-4.504-9.755-7.609l-.195-.195c1.892-.214 4.107-.898 5.854-1.367c2.934-.786 5.556-.583 8.585-1.365l4.097-1.171v-.78c-1.531-1.571-2.623-3.651-4.292-5.073c-4.37-3.72-9.138-7.437-14.048-10.537c-2.724-1.718-6.089-2.835-8.976-4.292c-.971-.491-2.677-.746-3.318-1.562c-1.517-1.932-2.342-4.382-3.511-6.633c-2.449-4.717-4.854-9.868-7.024-14.831c-1.48-3.384-2.447-6.72-4.293-9.756c-8.86-14.567-18.396-23.358-33.169-32c-3.144-1.838-6.929-2.563-10.929-3.513c-2.145-.129-4.292-.26-6.438-.391c-1.311-.546-2.673-2.149-3.902-2.927C17.811 4.565 5.257-2.16 1.633 6.682c-2.289 5.581 3.421 11.025 5.462 13.854c1.434 1.982 3.269 4.207 4.293 6.438c.674 1.467.79 2.938 1.367 4.489c1.417 3.822 2.652 7.98 4.487 11.511c.927 1.788 1.949 3.67 3.122 5.268c.718.981 1.951 1.413 2.145 2.927c-1.204 1.686-1.273 4.304-1.95 6.44c-3.05 9.615-1.899 21.567 2.537 28.683c1.36 2.186 4.567 6.871 8.975 5.073c3.856-1.57 2.995-6.438 4.098-10.732c.249-.973.096-1.689.585-2.341v.195l3.513 7.024c2.6 4.187 7.212 8.562 11.122 11.514c2.027 1.531 3.623 4.177 6.244 5.073v-.196h-.195c-.508-.791-1.303-1.119-1.951-1.755c-1.527-1.497-3.225-3.358-4.487-5.073c-3.556-4.827-6.698-10.11-9.561-15.609c-1.368-2.627-2.557-5.523-3.709-8.196c-.444-1.03-.438-2.589-1.364-3.122c-1.263 1.958-3.122 3.542-4.098 5.854c-1.561 3.696-1.762 8.204-2.341 12.878c-.342.122-.19.038-.391.194c-2.718-.655-3.672-3.452-4.683-5.853c-2.554-6.07-3.029-15.842-.781-22.829c.582-1.809 3.21-7.501 2.146-9.172c-.508-1.666-2.184-2.63-3.121-3.903c-1.161-1.574-2.319-3.646-3.124-5.464c-2.09-4.731-3.066-10.044-5.267-14.828c-1.053-2.287-2.832-4.602-4.293-6.634c-1.617-2.253-3.429-3.912-4.683-6.635c-.446-.968-1.051-2.518-.391-3.513c.21-.671.508-.951 1.171-1.17c1.132-.873 4.284.29 5.462.779c3.129 1.3 5.741 2.538 8.392 4.294c1.271.844 2.559 2.475 4.097 2.927h1.756c2.747.631 5.824.195 8.391.975c4.536 1.378 8.601 3.523 12.292 5.854c11.246 7.102 20.442 17.21 26.732 29.269c1.012 1.942 1.45 3.794 2.341 5.854c1.798 4.153 4.063 8.426 5.852 12.488c1.786 4.052 3.526 8.141 6.05 11.513c1.327 1.772 6.451 2.723 8.781 3.708c1.632.689 4.307 1.409 5.854 2.34c2.953 1.782 5.815 3.903 8.586 5.855c1.383.975 5.64 3.116 5.852 4.879zM29.729 23.466c-1.431-.027-2.443.156-3.513.389v.195h.195c.683 1.402 1.888 2.306 2.731 3.513c.65 1.367 1.301 2.732 1.952 4.097l.194-.193c1.209-.853 1.762-2.214 1.755-4.294c-.484-.509-.555-1.147-.975-1.755c-.556-.811-1.635-1.272-2.339-1.952z"
                      />
                    </svg>
                  </i>
                  <small>MySQL</small>
                </div>
                <div className="relative hover:scale-105 ease-out duration-500 flex flex-col items-center justify-center p-5 bg-white rounded-md">
                  <i>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="45"
                      height="45"
                      viewBox="0 0 128 128"
                    >
                      <path
                        fill="#0acf83"
                        d="M45.5 129c11.9 0 21.5-9.6 21.5-21.5V86H45.5C33.6 86 24 95.6 24 107.5S33.6 129 45.5 129zm0 0"
                      />
                      <path
                        fill="#a259ff"
                        d="M24 64.5C24 52.6 33.6 43 45.5 43H67v43H45.5C33.6 86 24 76.4 24 64.5zm0 0"
                      />
                      <path
                        fill="#f24e1e"
                        d="M24 21.5C24 9.6 33.6 0 45.5 0H67v43H45.5C33.6 43 24 33.4 24 21.5zm0 0"
                      />
                      <path
                        fill="#ff7262"
                        d="M67 0h21.5C100.4 0 110 9.6 110 21.5S100.4 43 88.5 43H67zm0 0"
                      />
                      <path
                        fill="#1abcfe"
                        d="M110 64.5c0 11.9-9.6 21.5-21.5 21.5S67 76.4 67 64.5S76.6 43 88.5 43S110 52.6 110 64.5zm0 0"
                      />
                    </svg>
                  </i>
                  <small>Figma</small>
                </div>
                {/* <div className="relative hover:scale-105 ease-out duration-500 flex flex-col items-center justify-center p-5 bg-white rounded-md">
                  <i>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="45"
                      height="45"
                      viewBox="0 0 128 128"
                    >
                      <path
                        fill="#F34F29"
                        d="M124.737 58.378L69.621 3.264c-3.172-3.174-8.32-3.174-11.497 0L46.68 14.71l14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314c2.703 2.706 3.461 6.607 2.294 9.993l13.992 13.993c3.385-1.167 7.292-.413 9.994 2.295c3.78 3.777 3.78 9.9 0 13.679a9.673 9.673 0 0 1-13.683 0a9.677 9.677 0 0 1-2.105-10.521L68.574 47.933l-.002 34.341a9.708 9.708 0 0 1 2.559 1.828c3.778 3.777 3.778 9.898 0 13.683c-3.779 3.777-9.904 3.777-13.679 0c-3.778-3.784-3.778-9.905 0-13.683a9.65 9.65 0 0 1 3.167-2.11V47.333a9.581 9.581 0 0 1-3.167-2.111c-2.862-2.86-3.551-7.06-2.083-10.576L41.056 20.333L3.264 58.123a8.133 8.133 0 0 0 0 11.5l55.117 55.114c3.174 3.174 8.32 3.174 11.499 0l54.858-54.858a8.135 8.135 0 0 0-.001-11.501z"
                      />
                    </svg>
                  </i>
                  <small>Git</small>
                </div> */}
                <div className="relative hover:scale-105 ease-out duration-500 flex flex-col items-center justify-center p-5 bg-white rounded-md">
                  <i>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="45"
                      height="45"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="currentColor"
                        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59c.4.07.55-.17.55-.38c0-.19-.01-.82-.01-1.49c-2.01.37-2.53-.49-2.69-.94c-.09-.23-.48-.94-.82-1.13c-.28-.15-.68-.52-.01-.53c.63-.01 1.08.58 1.23.82c.72 1.21 1.87.87 2.33.66c.07-.52.28-.87.51-1.07c-1.78-.2-3.64-.89-3.64-3.95c0-.87.31-1.59.82-2.15c-.08-.2-.36-1.02.08-2.12c0 0 .67-.21 2.2.82c.64-.18 1.32-.27 2-.27c.68 0 1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82c.44 1.1.16 1.92.08 2.12c.51.56.82 1.27.82 2.15c0 3.07-1.87 3.75-3.65 3.95c.29.25.54.73.54 1.48c0 1.07-.01 1.93-.01 2.2c0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                      />
                    </svg>
                  </i>
                  <small>Github</small>
                </div>
                {/* <div className="relative hover:scale-105 ease-out duration-500 flex flex-col items-center justify-center p-5 bg-white rounded-md">
                  <i></i>
                  <small></small>
                </div>
                <div className="relative hover:scale-105 ease-out duration-500 flex flex-col items-center justify-center p-5 bg-white rounded-md">
                  <i></i>
                  <small></small>
                </div>
                <div className="relative hover:scale-105 ease-out duration-500 flex flex-col items-center justify-center p-5 bg-white rounded-md">
                  <i></i>
                  <small></small>
                </div>
                <div className="relative hover:scale-105 ease-out duration-500 flex flex-col items-center justify-center p-5 bg-white rounded-md">
                  <i></i>
                  <small></small>
                </div>
                <div className="relative hover:scale-105 ease-out duration-500 flex flex-col items-center justify-center p-5 bg-white rounded-md">
                  <i></i>
                  <small></small>
                </div>
                <div className="relative hover:scale-105 ease-out duration-500 flex flex-col items-center justify-center p-5 bg-white rounded-md">
                  <i></i>
                  <small></small>
                </div> */}
              </div>
            </div>
          </div>
          <div>
            <sup className="underline underline-offset-4 decoration-[#a3262e]">
              Main Skills
            </sup>
            <div className="relative hover:scale-105 ease-out duration-500 bg-white p-5 mb-2 rounded-md">
              <div className="flex items-center justify-between font-semibold">
                <h1 className="text-[#a3262e]">Web Development</h1>
                <div className="text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#a3262e"
                      d="m12.89 3l1.96.4L11.11 21l-1.96-.4L12.89 3m6.7 9L16 8.41V5.58L22.42 12L16 18.41v-2.83L19.59 12M1.58 12L8 5.58v2.83L4.41 12L8 15.58v2.83L1.58 12Z"
                    />
                  </svg>
                </div>
              </div>

              <small className="text-gray-700">
                Developing websites and web applications using JavaScript and
                its frameworks.
              </small>
            </div>
            <div className="relative hover:scale-105 ease-out duration-500 bg-white p-5 mb-5  rounded-md">
              <div className="flex items-center justify-between font-semibold">
                <h1 className="text-[#a3262e]">
                  Web and User Interface Design
                </h1>
                <div className="SVG">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill="#a3262e"
                      d="M7.5 3.5c-.56 0-1.083.153-1.53.42a3.398 3.398 0 0 0-.48-1.448A4.5 4.5 0 0 1 11.973 6h1.278c.966 0 1.75.784 1.75 1.75v4.5A1.75 1.75 0 0 1 13.25 14h-4.5A1.75 1.75 0 0 1 7 12.25v-1.277a4.474 4.474 0 0 1-1.016-.235c.01-.236.016-.482.016-.738v-.08c0-.24 0-.523-.01-.827A2.98 2.98 0 0 0 7 9.46V7.75C7 6.784 7.784 6 8.75 6h1.709A3 3 0 0 0 7.5 3.5Zm4.389 4A4.507 4.507 0 0 1 8.5 10.889v1.361c0 .138.112.25.25.25h4.5a.25.25 0 0 0 .25-.25v-4.5a.25.25 0 0 0-.25-.25h-1.361Zm-1.56 0H8.75a.25.25 0 0 0-.25.25v1.58a3.008 3.008 0 0 0 1.83-1.83ZM3.581 1.125a.5.5 0 0 1 .119.598a.33.33 0 0 0-.013.09c0 .063.016.183.167.333c.073.073.129.125.19.182c.05.046.103.094.17.16c.13.124.267.27.39.453c.255.383.396.862.396 1.559c0 .832-.3 1.543-.772 1.992c.292.296.462.683.567 1.07C5 8.314 5 9.244 5 9.963V10c0 2.058-.385 3.28-.821 4.007a2.674 2.674 0 0 1-.638.747a1.645 1.645 0 0 1-.33.2S3.084 15 3 15a.8.8 0 0 1-.211-.046a1.645 1.645 0 0 1-.33-.2a2.674 2.674 0 0 1-.638-.747C1.385 13.281 1 12.058 1 10v-.036c0-.72 0-1.649.205-2.403c.105-.386.275-.773.567-1.07C1.3 6.044 1 5.332 1 4.5c0-.326.087-.715.207-1.074c.12-.36.288-.732.482-1.032c.231-.39.556-.717.808-.937a5.487 5.487 0 0 1 .432-.343l.03-.02l.009-.007l.003-.002l.002-.001a.5.5 0 0 1 .608.041Z"
                    />
                  </svg>
                </div>
              </div>

              <small className="text-gray-700">
                Website Creation, User Experience, Visual Design.
              </small>
            </div>
            <sup className="underline underline-offset-4 decoration-[#a3262e]">
              Education
            </sup>
            <div className="relative hover:scale-105 ease-out duration-500 bg-white p-5  rounded-md">
              <div className="flex items-center justify-between font-semibold">
                <h1 className="text-[#a3262e]">BS in Information Technology</h1>
                <div className="SVG">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#a3262e"
                      d="M21 17v-6.9L12 15L1 9l11-6l11 6v8h-2Zm-9 4l-7-3.8v-5l7 3.8l7-3.8v5L12 21Z"
                    />
                  </svg>
                </div>
              </div>
              <sup>Major in Web Systems Technology</sup>
              <div>
                <small className="text-gray-700">
                  Nueva Ecija University of Science and Technology - Cabanatuan
                  City Nueva Ecija
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
