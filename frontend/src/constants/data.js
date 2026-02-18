import { FaHtml5 } from "@react-icons/all-files/fa/FaHtml5";
import { FaCss3Alt } from "@react-icons/all-files/fa/FaCss3Alt";
import { SiJavascript } from "@react-icons/all-files/si/SiJavascript";
import { FaReact } from "@react-icons/all-files/fa/FaReact";
import { SiTailwindcss } from "@react-icons/all-files/si/SiTailwindcss";
import { SiMaterialUi } from "@react-icons/all-files/si/SiMaterialUi";
import { FaBootstrap } from "@react-icons/all-files/fa/FaBootstrap";
import { SiPhp } from "@react-icons/all-files/si/SiPhp";
import { SiFirebase } from "@react-icons/all-files/si/SiFirebase";
import { GrMysql } from "@react-icons/all-files/gr/GrMysql";
import { FaFigma } from "@react-icons/all-files/fa/FaFigma";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn";
import { FaBehance } from "@react-icons/all-files/fa/FaBehance";
import { AiFillCode } from "@react-icons/all-files/ai/AiFillCode";
import { FaBug } from "@react-icons/all-files/fa/FaBug";
import { FaLaptopCode } from "@react-icons/all-files/fa/FaLaptopCode";
import { SiGooglemessages } from "@react-icons/all-files/si/SiGooglemessages";
import { FaCode } from "@react-icons/all-files/fa/FaCode";
import { FaPencilRuler } from "@react-icons/all-files/fa/FaPencilRuler";
import { FaGraduationCap } from "@react-icons/all-files/fa/FaGraduationCap";
import { MdLocationOn } from "@react-icons/all-files/md/MdLocationOn";
import { MdPhoneForwarded } from "@react-icons/all-files/md/MdPhoneForwarded";
import { MdEmail } from "@react-icons/all-files/md/MdEmail";
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";
import { FaInstagramSquare } from "@react-icons/all-files/fa/FaInstagramSquare";
import { FaGitAlt } from "react-icons/fa";
import { FaFileLines } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

const userData = {
  hero: {
    name: "John Leo",
    career: "Software Developer",
    resume: "/resume/John Leo Bruno.pdf",
    imageURL: "/wave.png",
    icon: <FaFileLines size={16} color={"#a3262e"} />,
  },
  navBarLinks: {
    linkedin: "https://www.linkedin.com/in/johnleobruno/",
    github: "https://github.com/itsJhnL",
    behance: "https://www.behance.net/janggodev",
    linkedin_icon: <FaLinkedinIn size={21} />,
    github_icon: <FaGithub size={21} />,
    behance_icon: <FaBehance size={21} />,
  },
  recentWork: [
    {
      id: 1,
      imgURL: "/projects/freshbitev2.png",
    },
    {
      id: 2,
      imgURL: "/projects/barangay.png",
    },
    {
      id: 3,
      imgURL: "/projects/login.png",
    },
    {
      id: 4,
      imgURL: "/projects/linkedin-clone.png",
    },
  ],
  experience: [
    /* {
      id: 0,
      position: "Sales Representative",
      title: "Sanyang-Furniture",
      desc: "• Maintained record and sales • Product knowledge • Active listening • Rapport-building skills • Customer relationship management tool skills",
      year: "2017",
    }, */
    /* {
      id: 1,
      position: "Front-End Developer",
      title: "Freelance",
      desc: "",
      year: "2022",
    }, */
    {
      id: 2,
      position: "Internship",
      title: "iSynergies Inc",
      desc: "I was responsible for performing a wide range of software development tasks. This included actively engaging in both front-end and back-end development, allowing me to gain a comprehensive understanding of the full software development stack. I collaborated closely with senior software developers, contributing to the team's success by leveraging their expertise and mentorship to enhance my own skills and deliver high-quality software solutions.",
      year: "2023",
    },
    {
      id: 3,
      position: "Graduation",
      title: "Nueva Ecija University of Science and Technology",
      desc: "Bachelor's degree in Information Technology.",
      year: "2023",
    },
    /* {
      id: 4,
      position: "Data Entry Specialist",
      title: "Ascendance BPO Inc",
      desc: "My responsibilities include transcribing and encoding electronic, written, and faxed medical prescription orders, ensuring accuracy and adhering to SIG codes for proper medication administration. I meticulously identify any discrepancies in prescription orders and promptly escalate them to the relevant department for resolution. Additionally, I review and strictly adhere to the client’s standard operating procedures and policies to maintain compliance and quality standards. I respond promptly and accurately to inquiries from our in-house team, providing necessary information and support as required.",
      year: "2023",
    }, */
    {
      id: 5,
      position: "Claim Specialist",
      title: "Ascendance BPO Inc",
      desc: "As a claim specialist in the insurance industry, my primary responsibility is to oversee the processing of insurance claims related to patient medications. This involves carefully reviewing each claim to ensure it meets all necessary criteria for payment, including verifying the accuracy of medical prescription orders and adherence to SIG codes. In cases where there are discrepancies or the need for clarification, I initiate overrides or appeals as necessary to facilitate payment. Additionally, I handle incoming calls from healthcare providers, pharmacies, and patients regarding claim status and payment inquiries, providing timely and accurate information to resolve issues effectively. Ensuring that every medication claim is processed correctly and promptly is essential to supporting patient care and maintaining trust within the healthcare network.",
      year: "2024",
    },
    {
      id: 6,
      position: "Assistant System Developer",
      title: "iSynergies Inc",
      desc: "Currently working as an Assistant System Developer, contributing to software development tasks and supporting system improvements.",
      year: "Present",
    },
  ],
  certificates: [
    {
      id: 1,
      name: "On-the Job Training",
      description:
        "I completed 500 hours of On-the-Job training at Isynergies Inc., where I learned valuable skills to become a proficient developer. My journey began with building web-based applications during my internship.",
      date: "May 11, 2023",
      imageURL: "/certificates/OJT.jpeg",
    },
    {
      id: 2,
      name: "International Research Conference on Information Technology Education.",
      description:
        "Our team leader successfully presented our capstone project at the IRCITE event. Catching the Waves of Technological Advances through I.T Research and Breakthrough Innovations.",
      date: "May 05, 2023",
      imageURL: "/certificates/IRCITE.jpg",
    },
    {
      id: 3,
      name: "I.T Works Development Team",
      description:
        "It allowed me to grasp the fundamental concepts of web development.",
      date: "February 22, 2021",
      imageURL: "/certificates/WebApp.jpg",
    } /* ,
    {
      id: 4,
      name: "Full-Stack Dev Road Map",
      description: "I was introduced to both Front-End and Back-End technologies, which led me to aspire to become a Full-Stack Developer. Exploring back-end technologies fascinated me, and it sparked my dream of becoming a proficient full-stack developer.",
      date: "March 12, 2021",
      imageURL: "/certificates/Fullstack-dev-roadmap.jpg",
    },
    {
      id: 5,
      name: "Python Programming for Beginners",
      description: "Learned basic syntax like declaring variables and printing",
      date: "March 13, 2021",
      imageURL: "/certificates/Python-programming.jpg",
    },
    {
      id: 6,
      name: "Introduction to Arduino",
      description: "",
      date: "March 04, 2021",
      imageURL: "/certificates/Introduction-to-Arduino.jpg",
    },
    {
      id: 7,
      name: "Mobile Development using IONIC for beginners",
      description: "",
      date: "February 13, 2021",
      imageURL: "/certificates/Mobile-development-using-IONIC.jpg",
    },
    {
      id: 8,
      name: "Animation and Game Development",
      description: "",
      date: "March 03, 2021",
      imageURL: "/certificates/Animation-and-Game-development.jpg",
    },
    {
      id: 9,
      name: "Introduction to Progressive Web Apps",
      description: "",
      date: "March 26, 2021",
      imageURL: "/certificates/Introduction-to-progressive-web-apps.jpg",
    },
    {
      id: 10,
      name: "Data Science",
      description: "",
      date: "March 02, 2021",
      imageURL: "/certificates/Datascience.jpg",
    },
    {
      id: 11,
      name: "Introduction to Wordpress Plugins",
      description: "",
      date: "February 22, 2021",
      imageURL: "/certificates/Wordpress-Plugins.jpg",
    },
    {
      id: 12,
      name: "Wordpress Explained: Dashboard Navigation",
      description: "",
      date: "February 15, 2021",
      imageURL: "/certificates/Wordpress.jpg",
    },
    {
      id: 13,
      name: "Integrated Cybersecuriy Management and System",
      description: "",
      date: "March 19, 2021",
      imageURL:
        "/certificates/Integrated-cybersecurity-management-and-system.jpg",
    }, */,
  ],
  works: [
    {
      id: 1,
      imageURL: "/projects/freshbites.png",
      title: "Fresh Bites Landing Page",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero maxime iste adipisci atque aliquam facere dignissimos sequi ea mollitia molestias?",
      tech: "React, Tailwind CSS",
      link: "https://freshbites.vercel.app/",
      code: "https://github.com/itsJhnL/fresh-bites",
    },
    {
      id: 2,
      imageURL: "/projects/barangay.png",
      title: "Barangay Management Information System",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero maxime iste adipisci atque aliquam facere dignissimos sequi ea mollitia molestias?",
      tech: "HTML, CSS, JavaScript, JQuery, PHP, Bootstrap, MySQL.",
      // link: "https://barangay-management-system.vercel.app/",
      code: "https://github.com/itsJhnL/barangay-management-system",
    },
    /* {
      id: 3,
      imageURL: "/projects/login.png",
      title: "Login Page",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero maxime iste adipisci atque aliquam facere dignissimos sequi ea mollitia molestias?",
      tech: "HTML, CSS",
      link: "https://login-page-lac-five.vercel.app/",
      code: "https://github.com/itsJhnL/login-page",
    }, */
    /* {
      id: 4,
      imageURL: "/projects/linkedin-clone.png",
      title: "LinkedIn Clone",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero maxime iste adipisci atque aliquam facere dignissimos sequi ea mollitia molestias?",
      tech: "React, Redux, CSS, Firebase, MaterialUI-Icons",
      link: "https://linkedin-duplicate.vercel.app/",
      code: "https://github.com/itsJhnL/linkedin-clone",
    }, */
  ],
  about: {
    imageURL: "john2.jpg",
    introduce: [
      {
        id: 0,
        title: "Introduce",
        name: "Leo",
        // link: "https://g.co/kgs/6Au1hq",
        // link: "https://g.co/kgs/fsH2jUz",
        link: "https://www.google.com/search?q=What+does+a+software+developer+do",
        career: "Software Developer",
        desc1:
          "based in Philippines. Since I started my journey as a developer, I've worked on personal projects, crafting responsive websites that are both user-friendly and follow best practices. I have a quiet confidence, a natural curiosity, and I'm always working to improve my skills and constantly working on getting better at solving problems.",
        desc2:
          "When I'm not writing code, I tidy up my workspace to create a conducive environment. At times, I engage in designing from scratch, and I derive pleasure from sharing my web development expertise through blogs and short videos on platforms like",
        tiktok: "https://www.tiktok.com/@Jjanggzxc",
        medium: "https://medium.com/@johnleobruno",
      },
    ],
    techstacks: [
      {
        id: 0,
        icon: <FaHtml5 size={35} />,
        desc: "HTML5",
      },
      {
        id: 1,
        icon: <FaCss3Alt size={35} />,
        desc: "CSS3",
      },
      {
        id: 2,
        icon: <SiJavascript size={35} />,
        desc: "JavaScript",
      },
      {
        id: 3,
        icon: <FaReact size={35} />,
        desc: "ReactJS",
      },
      {
        id: 4,
        icon: <SiTailwindcss size={35} />,
        desc: "Tailwind CSS",
      },
      {
        id: 5,
        icon: <SiMaterialUi size={35} />,
        desc: "Material UI",
      },
      {
        id: 6,
        icon: <FaBootstrap size={35} />,
        desc: "Bootstrap",
      },
      {
        id: 7,
        icon: <SiPhp size={35} />,
        desc: "PHP",
      },
      {
        id: 8,
        icon: <SiFirebase size={35} />,
        desc: "Firebase",
      },
      {
        id: 9,
        icon: <GrMysql size={35} />,
        desc: "MySQL",
      },
      {
        id: 10,
        icon: <FaFigma size={35} />,
        desc: "Figma",
      },
      {
        id: 11,
        icon: <FaGitAlt size={35} />,
        desc: "Git",
      },
      {
        id: 12,
        icon: <FaGithub size={35} />,
        desc: "Github",
      },
    ],
    mainSkills: [
      {
        id: 0,
        title: "Web Development",
        desc: "Developing websites and web applications using JavaScript and its frameworks.",
        icon: <FaCode size={24} color={"#a3262e"} />,
      },
      {
        id: 1,
        title: "Web and User Interface Design",
        desc: "Website Creation, User Experience, Visual Design.",
        icon: <FaPencilRuler size={20} color={"#a3262e"} />,
      },
    ],
    education: [
      {
        id: 0,
        title: "BS in Information Technology",
        major: "Major in Web Systems Technology",
        desc: "Nueva Ecija University of Science and Technology - Cabanatuan City Nueva Ecija",
        icon: <FaGraduationCap size={24} color={"#a3262e"} />,
      },
    ],
  },
  services: [
    {
      id: 0,
      title: "Web Development",
      desc: "Developing websites from the ground up utilizing a range of technologies including HTML, CSS, JavaScript, and associated frameworks.",
      icon: <FaCode />,
    },
    {
      id: 1,
      title: "Design",
      desc: "I appreciate simple content structure, clean design patters and well-considered interactions.",
      icon: <FaPencilRuler />,
    },
    {
      id: 2,
      title: "Code Quality and Standards",
      desc: "Write clean, organized, and maintainable code following best practices and coding standards.",
      icon: <AiFillCode />,
    },
    {
      id: 3,
      title: "Testing and Debugging",
      desc: "Debugging and troubleshooting front-end issues to ensure smooth functionality and a positive user experience.",
      icon: <FaBug />,
    },
    {
      id: 4,
      title: "Continuous Learning",
      desc: "Stay updated with the latest front-end technologies, trends, and industry best practices to provide modern and innovative solutions.",
      icon: <FaLaptopCode />,
    },
    {
      id: 5,
      title: "Collaboration",
      desc: "Collaborate with back-end developers, designers, and other team members to ensure seamless integration and a cohesive final product.",
      icon: <SiGooglemessages />,
    },
  ],
  contact: {
    title: "Get in touch, let's talk.",
    desc: "If you believe my skills align with turning your ideas into reality, I am open to full-time, part-time, and freelance opportunities. Please feel free to reach out, and let's discuss everything. I'd be grateful for the opportunity to collaborate with you.",
    address: "Nueva Ecija, Philippines",
    number: "(+63) 906-360-4260",
    email: "johnleo.bruno@gmail.com",
    link: "mailto:johnleo.bruno@gmail.com",
    address_icon: <MdLocationOn size={24} />,
    address_link: "https://g.co/kgs/xHsy6mK",
    email_icon: <MdEmail size={24} />,
    number_icon: <MdPhoneForwarded size={24} />,
  },
  socialLinks: {
    title: "Social Links:",
    facebook: "https://www.facebook.com/JLBruno//",
    twitter: "https://twitter.com/LeoXyRealDeal",
    instagram: "https://www.instagram.com/jhnleo.dev/",
    fb: <FaFacebookF size={24} />,
    twtr: <FaXTwitter size={24} />,
    insta: <FaInstagramSquare size={24} />,
  },
};

export default userData;
