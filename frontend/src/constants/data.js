import { FaHtml5 } from "@react-icons/all-files/fa/FaHtml5";
import { FaCss3Alt } from "@react-icons/all-files/fa/FaCss3Alt";
import { SiJavascript } from "@react-icons/all-files/si/SiJavascript";
import { SiTypescript } from "@react-icons/all-files/si/SiTypescript";
import { FaReact } from "@react-icons/all-files/fa/FaReact";
import { SiTailwindcss } from "@react-icons/all-files/si/SiTailwindcss";
import { SiMaterialUi } from "@react-icons/all-files/si/SiMaterialUi";
import { FaBootstrap } from "@react-icons/all-files/fa/FaBootstrap";
import { SiPhp } from "@react-icons/all-files/si/SiPhp";
import { SiFirebase } from "@react-icons/all-files/si/SiFirebase";
import { GrMysql } from "@react-icons/all-files/gr/GrMysql";
import { SiNextDotJs } from "@react-icons/all-files/si/SiNextDotJs";
import { SiReact } from "@react-icons/all-files/si/SiReact";
import { SiFlutter } from "@react-icons/all-files/si/SiFlutter";
import { SiDart } from "@react-icons/all-files/si/SiDart";
import { SiPostgresql } from "@react-icons/all-files/si/SiPostgresql";
import { SiMongodb } from "@react-icons/all-files/si/SiMongodb";
import { SiGitlab } from "@react-icons/all-files/si/SiGitlab";
import { SiBitbucket } from "@react-icons/all-files/si/SiBitbucket";
import { SiPostman } from "@react-icons/all-files/si/SiPostman";
import { SiSocketDotIo } from "@react-icons/all-files/si/SiSocketDotIo";
import { SiSketch } from "@react-icons/all-files/si/SiSketch";
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
import { FaExchangeAlt } from "react-icons/fa";
import { FaCodeBranch } from "react-icons/fa";
import { FaLayerGroup } from "react-icons/fa";
import { FaServer } from "react-icons/fa";
import { FaFileLines } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

export const defaultSiteContent = {
  hero: {
    name: "John Leo",
    career: "Software Developer",
    availability: "Open for freelance and full-time",
    headlinePrefix: "Hello.",
    introText: "I'm",
    ctaLabel: "View Projects",
    resume: "/resume/John Leo Bruno.pdf",
    imageURL: "/wave.png",
  },
  navBarLinks: {
    linkedin: "https://www.linkedin.com/in/johnleobruno/",
    github: "https://github.com/itsJhnL",
    behance: "https://www.behance.net/janggodev",
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
    {
      id: 0,
      position: "Hello World",
      title: "",
      desc: "Wrote my first line of code.",
      year: "2016",
    },
    {
      id: 2,
      position: "Internship",
      title: "iSynergies Inc",
      desc: "I performed a wide range of software development tasks, working on both front-end and back-end systems. I collaborated closely with senior developers, learning from their expertise while contributing to the delivery of high-quality software solutions.",
      year: "2023",
    },
    {
      id: 5,
      position: "Claim Specialist",
      title: "Ascendance BPO Inc",
      desc: "As a claims specialist, I review and process medication claims, verify prescriptions and SIG codes, handle overrides and appeals, and respond to claim inquiries to ensure accurate, timely payments that support patient care.",
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
    },
  ],
  works: [
    {
      id: 1,
      imageURL: "/projects/freshbites.png",
      title: "FreshBites",
      desc: "A fully responsive restaurant website with a clean, structured interface and intuitive user experience. Designed to go beyond a simple landing page, it incorporates dynamic sections, smooth transitions, and a layout optimized for real-world usability across devices.",
      tech: "React, Tailwind CSS",
      link: "https://freshbites.vercel.app/",
      code: "https://github.com/itsJhnL/fresh-bites",
    },
    {
      id: 2,
      imageURL: "/projects/bruno.png",
      title: "E-Commerce Bruno Website",
      desc: "A user-friendly e-commerce website designed for seamless shopping, clean UI, and responsive experience—perfect for modern online buyers.",
      tech: "React + Vite, Tailwind CSS",
      link: "https://bruno-ecommerce.vercel.app/",
      code: "https://github.com/itsJhnL/bruno-ecommerce",
    },
    {
      id: 3,
      imageURL: "/projects/tarakape.png",
      title: "Tarakape",
      desc: "TaraKape helps aspiring developers start their coding journey with simple guides, tools, and real talk samahan mo ng kape.",
      tech: "React + Vite, Tailwind CSS",
      link: "https://tarakape.vercel.app/",
      code: "https://github.com/itsJhnL/tarakape",
    },
    {
      id: 4,
      imageURL: "/projects/nova.png",
      title: "Nova Solutions",
      desc: "A user-friendly e-commerce website designed for seamless shopping, clean UI, and a responsive experience, perfect for modern online buyers. Built with React, Vite, and Tailwind CSS, focusing on smooth navigation, modern design, and engaging user experience.",
      tech: "React + Vite, Tailwind CSS",
      link: "https://nova-assist-virtual-support.vercel.app/"
    },
    {
      id: 5,
      imageURL: "/projects/barangay.png",
      title: "Barangay Management Information System",
      desc: "A role-based local records platform that centralizes resident information, document requests, and reporting workflows to improve day-to-day administrative operations.",
      tech: "HTML, CSS, JavaScript, JQuery, PHP, Bootstrap, MySQL.",
    },
  ],
  about: {
    imageURL: "john2.jpg",
    introduce: [
      {
        id: 0,
        title: "Introduce",
        name: "Leo",
        link: "https://www.google.com/search?q=What+does+a+software+developer+do",
        career: "Software Developer",
        desc1:
          "based in the Philippines. Alongside building responsive websites and modern web interfaces, I also have experience in medical claims and billing, Healthcare VA support, AI automation, and UI/UX design. Since I started my journey in tech, I've worked on personal and professional projects focused on creating solutions that are both user-friendly and practical.",
        desc2:
          "I enjoy solving problems from both technical and operational perspectives, whether that means improving a workflow, designing a cleaner interface, or helping systems run more efficiently. When I'm not building, I also enjoy sharing what I learn through blogs and short videos on platforms like",
        tiktok: "https://www.tiktok.com/@Jjanggzxc",
        medium: "https://medium.com/@johnleobruno",
      },
    ],
    techstacks: [
      { id: 0, desc: "HTML", iconKey: "html", category: "frontend" },
      { id: 1, desc: "CSS", iconKey: "css", category: "frontend" },
      {
        id: 2,
        desc: "JavaScript / TypeScript",
        iconKey: "typescript",
        category: "frontend",
      },
      { id: 3, desc: "Tailwind", iconKey: "tailwind", category: "frontend" },
      {
        id: 4,
        desc: "ReactJS / NextJS",
        iconKey: "nextjs",
        category: "frontend",
      },
      {
        id: 5,
        desc: "React Native",
        iconKey: "reactnative",
        category: "frontend",
      },
      {
        id: 6,
        desc: "Dart / Flutter (Learning)",
        iconKey: "flutter",
        category: "frontend",
      },
      {
        id: 7,
        desc: "JavaScript/TypeScript",
        iconKey: "javascript",
        category: "backend",
      },
      { id: 8, desc: "ExpressJS", iconKey: "express", category: "backend" },
      { id: 9, desc: "NestJS", iconKey: "nestjs", category: "backend" },
      {
        id: 10,
        desc: "PostgreSQL",
        iconKey: "postgresql",
        category: "backend",
      },
      { id: 11, desc: "MongoDB", iconKey: "mongodb", category: "backend" },
      { id: 12, desc: "Firebase", iconKey: "firebase", category: "backend" },
      { id: 13, desc: "API", iconKey: "api", category: "backend" },
      { id: 14, desc: "REST API", iconKey: "restapi", category: "backend" },
      { id: 15, desc: "AJAX", iconKey: "ajax", category: "backend" },
      { id: 16, desc: "Git", iconKey: "git", category: "tools" },
      {
        id: 17,
        desc: "GitHub / GitLab / Bitbucket",
        iconKey: "github",
        category: "tools",
      },
      { id: 18, desc: "Postman", iconKey: "postman", category: "tools" },
      {
        id: 19,
        desc: "Socket.IO",
        iconKey: "socketio",
        category: "tools",
      },
      {
        id: 20,
        desc: "CI/CD Tools",
        iconKey: "cicd",
        category: "tools",
      },
      {
        id: 21,
        desc: "Axios",
        iconKey: "axios",
        category: "tools",
      },
      {
        id: 22,
        desc: "Figma / Sketch",
        iconKey: "figma",
        category: "tools",
      },
    ],
    mainSkills: [
      {
        id: 0,
        title: "Web Development",
        desc: "Developing websites and web applications using JavaScript and its frameworks.",
        iconKey: "code",
      },
      {
        id: 1,
        title: "Web and User Interface Design",
        desc: "Website Creation, User Experience, Visual Design.",
        iconKey: "design",
      },
    ],
    education: [
      {
        id: 0,
        title: "BS in Information Technology",
        major: "Major in Web Systems Technology",
        desc: "Nueva Ecija University of Science and Technology - Cabanatuan City Nueva Ecija",
        iconKey: "education",
      },
    ],
  },
  services: [
    {
      id: 0,
      title: "Web Development",
      desc: "Developing websites from the ground up utilizing a range of technologies including HTML, CSS, JavaScript, and associated frameworks.",
      iconKey: "code",
    },
    {
      id: 1,
      title: "Design",
      desc: "I appreciate simple content structure, clean design patters and well-considered interactions.",
      iconKey: "design",
    },
    {
      id: 2,
      title: "Code Quality and Standards",
      desc: "Write clean, organized, and maintainable code following best practices and coding standards.",
      iconKey: "quality",
    },
    {
      id: 3,
      title: "Testing and Debugging",
      desc: "Debugging and troubleshooting front-end issues to ensure smooth functionality and a positive user experience.",
      iconKey: "bug",
    },
    {
      id: 4,
      title: "Continuous Learning",
      desc: "Stay updated with the latest front-end technologies, trends, and industry best practices to provide modern and innovative solutions.",
      iconKey: "learning",
    },
    {
      id: 5,
      title: "Collaboration",
      desc: "Collaborate with back-end developers, designers, and other team members to ensure seamless integration and a cohesive final product.",
      iconKey: "collaboration",
    },
  ],
  contact: {
    title: "Get in touch, let's talk.",
    desc: "If you believe my skills align with turning your ideas into reality, I am open to full-time, part-time, and freelance opportunities. Please feel free to reach out, and let's discuss everything. I'd be grateful for the opportunity to collaborate with you.",
    formEyebrow: "QUICK MESSAGE",
    formTitle: "Send a Message",
    formDescription: "Share your project idea and I will get back to you quickly.",
    address: "Nueva Ecija, Philippines",
    number: "(+63) 906-360-4260",
    email: "johnleo.bruno@gmail.com",
    link: "mailto:johnleo.bruno@gmail.com",
    address_link: "https://g.co/kgs/xHsy6mK",
  },
  socialLinks: {
    title: "Social Links:",
    facebook: "https://www.facebook.com/JLBruno/",
    twitter: "https://twitter.com/LeoXyRealDeal",
    instagram: "https://www.instagram.com/jhnleo.dev/",
  },
};

const techStackIcons = {
  html: <FaHtml5 size={35} />,
  css: <FaCss3Alt size={35} />,
  javascript: <SiJavascript size={35} />,
  typescript: <SiTypescript size={35} />,
  react: <FaReact size={35} />,
  nextjs: <SiNextDotJs size={35} />,
  reactnative: <SiReact size={35} />,
  flutter: <SiFlutter size={35} />,
  dart: <SiDart size={35} />,
  tailwind: <SiTailwindcss size={35} />,
  material: <SiMaterialUi size={35} />,
  bootstrap: <FaBootstrap size={35} />,
  php: <SiPhp size={35} />,
  firebase: <SiFirebase size={35} />,
  mysql: <GrMysql size={35} />,
  express: <FaServer size={35} />,
  nestjs: <FaLayerGroup size={35} />,
  postgresql: <SiPostgresql size={35} />,
  mongodb: <SiMongodb size={35} />,
  api: <FaServer size={35} />,
  restapi: <FaLayerGroup size={35} />,
  ajax: <SiJavascript size={35} />,
  figma: <FaFigma size={35} />,
  git: <FaGitAlt size={35} />,
  github: <FaGithub size={35} />,
  gitlab: <SiGitlab size={35} />,
  bitbucket: <SiBitbucket size={35} />,
  postman: <SiPostman size={35} />,
  socketio: <SiSocketDotIo size={35} />,
  cicd: <FaCodeBranch size={35} />,
  axios: <FaExchangeAlt size={35} />,
  sketch: <SiSketch size={35} />,
};

const contentIcons = {
  code: <FaCode size={24} color={"#2f6b6b"} />,
  design: <FaPencilRuler size={20} color={"#2f6b6b"} />,
  education: <FaGraduationCap size={24} color={"#2f6b6b"} />,
  quality: <AiFillCode />,
  bug: <FaBug />,
  learning: <FaLaptopCode />,
  collaboration: <SiGooglemessages />,
};

export const createSiteData = (content = defaultSiteContent) => ({
  ...content,
  hero: {
    ...content.hero,
    icon: <FaFileLines size={16} color={"#2f6b6b"} />,
  },
  navBarLinks: {
    ...content.navBarLinks,
    linkedin_icon: <FaLinkedinIn size={21} />,
    github_icon: <FaGithub size={21} />,
    behance_icon: <FaBehance size={21} />,
  },
  about: {
    ...content.about,
    techstacks: content.about.techstacks.map((item) => ({
      ...item,
      icon: techStackIcons[item.iconKey] || null,
    })),
    mainSkills: content.about.mainSkills.map((item) => ({
      ...item,
      icon: contentIcons[item.iconKey] || null,
    })),
    education: content.about.education.map((item) => ({
      ...item,
      icon: contentIcons[item.iconKey] || null,
    })),
  },
  services: content.services.map((item) => ({
    ...item,
    icon: contentIcons[item.iconKey] || null,
  })),
  contact: {
    ...content.contact,
    address_icon: <MdLocationOn size={24} />,
    email_icon: <MdEmail size={24} />,
    number_icon: <MdPhoneForwarded size={24} />,
  },
  socialLinks: {
    ...content.socialLinks,
    fb: <FaFacebookF size={24} />,
    twtr: <FaXTwitter size={24} />,
    insta: <FaInstagramSquare size={24} />,
  },
});

const userData = createSiteData(defaultSiteContent);

export default userData;
