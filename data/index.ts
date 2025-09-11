import {
  FaHtml5,
  FaCss3,
  FaSass,
  FaReact,
  FaBootstrap,
  FaGithub,
  FaGitAlt,
  // FaFigma,
  FaDocker,
  FaMapMarked,
  FaTable,
} from "react-icons/fa";
import {
  SiJavascript,
  SiJquery,
  SiNextdotjs,
  SiShadcnui,
  SiTypescript,
} from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiDrizzle } from "react-icons/si";
export const skills = [
  {
    id: 1,
    skill: "HTML",
    icon: FaHtml5,
  },
  {
    id: 2,
    skill: "CSS",
    icon: FaCss3,
  },
  {
    id: 3,
    skill: "JavaScript",
    icon: SiJavascript,
  },
  {
    id: 4,
    skill: "TypeScript",
    icon: SiTypescript,
  },
  {
    id: 5,
    skill: "SASS/SCSS",
    icon: FaSass,
  },
  {
    id: 6,
    skill: "TailwindCSS",
    icon: RiTailwindCssFill,
  },
  {
    id: 7,
    skill: "React",
    icon: FaReact,
  },
  {
    id: 8,
    skill: "NextJS",
    icon: SiNextdotjs,
  },
  {
    id: 9,
    skill: "Shadcn UI",
    icon: SiShadcnui,
  },
  {
    id: 10,
    skill: "jQuery",
    icon: SiJquery,
  },
  {
    id: 11,
    skill: "EJS",
    icon: "",
  },
  {
    id: 12,
    skill: "Bootstrap",
    icon: FaBootstrap,
  },
  {
    id: 13,
    skill: "Git",
    icon: FaGitAlt,
  },
  {
    id: 14,
    skill: "GitHub",
    icon: FaGithub,
  },
  {
    id: 15,
    skill: "DSA",
    icon: "",
  },
  // {
  //   id: 16,
  //   skill: "Vitest",
  //   icon: SiVitest,
  // },
  {
    id: 17,
    skill: "OOP",
    icon: "",
  },
  {
    id: 18,
    skill: "Drizzle",
    icon: SiDrizzle,
  },
  {
    id: 19,
    skill: "Docker",
    icon: FaDocker,
  },
  {
    id: 20,
    skill: "Leaflet",
    icon: FaMapMarked,
  },
  {
    id: 21,
    skill: "Tanstack-table",
    icon: FaTable,
  },
  // {
  //   id: 18,
  //   skill: "SQL",
  //   icon: TbSql,
  // },
  // {
  //   id: 19,
  //   skill: "PostgreSQL",
  //   icon: BiLogoPostgresql,
  // },
  // {
  //   id: 20,
  //   skill: "NodeJS",
  //   icon: FaNodeJs,
  // },
  // {
  //   id: 21,
  //   skill: "ExpressJS",
  //   icon: SiExpress,
  // },
  // {
  //   id: 22,
  //   skill: "MongoDB",
  //   icon: SiMongodb,
  // },
  // {
  //   id: 23,
  //   skill: "UI/UX Design",
  //   icon: FaObjectGroup,
  // },
  // {
  //   id: 24,
  //   skill: "Figma",
  //   icon: FaFigma,
  // },
  // {
  //   id: 25,
  //   skill: "Vim",
  //   icon: SiVim,
  // },
];
import photo from "/src/assets/photo.jpg";

export const expCards = [
  {
    date: "January 2023 - Present",
    logoPath: photo,
    description:
      "Hi, I'm Iman — a junior front-end developer passionate about creating clean, responsive, and user-friendly web applications. I have focused on mastering React and Next.js, and my goal is to become a full-stack JavaScript developer. Currently, I am expanding my skills by learning Node.js to build complete end-to-end applications.I enjoy turning ideas into real products and thrive on challenges that help me grow as a developer. I am a fast learner, a collaborative team player, and always eager to improve and contribute to meaningful projects.",
    MilitaryServiceStatus: "Completed",
    MaritalStatus: "Single",
    Bachelor: "Engineering Physics",
  },
];

import berlan from "/src/assets/berlan.png";
import resume from "/src/assets/resume.png";
import gsap from "/src/assets/gsap.png";
import gap from "/src/assets/Gap.png";
import bot from "/src/assets/bot.png";

export const projects = [
  {
    img: berlan,
    descriptoin:
      "I developed an e-commerce store project for our family shop to challenge and improve my front-end development skills. In this project, I independently handled all aspects of the front end.",
    libraries:
      "Next.js, Tailwind , Shadcn, zustand, gitflow, and Leaflet (a JavaScript library for interactive maps),...",
  },
  {
    img: resume,
    descriptoin:
      "This project, with the help of AI, can compare your resume with the job you're applying for and provide you with the results.",
    libraries:
      "Tailwind, Shadcn, TypeScript, gsap, react-router, i18next, lucide-react",
  },
  {
    img: gsap,
    descriptoin:
      "I created a landing page project with the main goal of practicing GSAP for animations and interactive effects, while also getting familiar with the challenges of animation and learning how to handle them effectively.",
    libraries: "Vite, Tailwind, Gsap, react-svgr, react-responsive",
  },
  {
    img: gap,
    descriptoin:
      " I developed a chat application that not only supports real-time messaging but also includes video call functionality.",
    libraries: "Next.js, Tailwind, Shadcn, TypeScript, WebSockets, JWT tokens,",
  },
  {
    img: bot,
    descriptoin:
      "I developed a Telegram bot using JavaScript, where I also integrated Cloudflare to enhance performance and reliability. The main goal was to gain hands-on experience with bot development and explore how to work with Cloudflare services.",
    libraries: "Js , cloudflare ,KV, telegram-api",
  },
];
