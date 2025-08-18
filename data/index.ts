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

export const expCards = [
  {
    date: "January 2023 - Present",
    logoPath: "/src/assets/photo.jpg",
    description:
      "Hi, I'm Iman — a junior front-end developer with a big passion for building clean, responsive, and user-friendly websites. Although I'm just starting out and don't have professional experience yet, I've spent a lot of time learning modern web technologies like HTML, CSS, JavaScript, and React. I enjoy turning ideas into real products and I'm always excited to take on new challenges that help me grow as a developer. I'm a quick learner, a good team player, and always ready to improve.",
    MilitaryServiceStatus: "Completed",
    MaritalStatus: "Single",
    Bachelor: "Engineering Physics",
  },
];

import berlan from "/src/assets/berlan.png";
import book from "/src/assets/book2.png";
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
    img: book,
    descriptoin:
      "This project I developed is a book borrowing website with both light and dark themes, and my main goal was to practice working with Drizzle ORM and data loading.",
    libraries:
      "Next.js, Tailwind, Shadcn, TypeScript, NextAuth, Upstash Redis, ImageKit, Drizzle,",
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
