// index.js

import Html from "../assets/Html.svg";
import Css from "../assets/Css.svg";
import Docker from "../assets/Docker.svg";
import Drizzle from "../assets/Drizzle.svg";
import Git from "../assets/Git.svg";
import Github from "../assets/Github.svg";
import Graphql from "../assets/Graphql.svg";
import Gsap from "../assets/Gsap.svg";
import Javascript from "../assets/Javascript.svg";
import Materiaui from "../assets/Materiaui.svg";
import Nextjs from "../assets/Nextjs.svg";
import React from "../assets/React.svg";
import ReactQuery from "../assets/ReactQuery.svg";
import Redux from "../assets/Redux.svg";
import Sass from "../assets/Sass.svg";
import Shadcn from "../assets/Shadcn.svg";
import Tailwindcss from "../assets/Tailwindcss.svg";
import Typescript from "../assets/Typescript.svg";
import Zustand from "../assets/Zustand.svg";
import Postman from "../assets/Postman.svg";

export const servicesData = [
  {
    title: "LANGUAGES",
    description:
      "Core programming languages that power scalable, maintainable, and modern web applications.",
    items: [{ icon: Javascript }, { icon: Typescript }],
  },
  {
    title: "FRONTEND TECHNOLOGIES",
    description:
      "Essential technologies for building fast, accessible, and visually consistent user interfaces.",
    items: [
      { icon: Html },
      { icon: Css },
      { icon: Sass },
      { icon: Tailwindcss },
      { icon: Materiaui },
      { icon: Shadcn },
    ],
  },

  {
    title: "FRAMEWORKS",
    description:
      "Modern frameworks that enable high-performance applications with optimized rendering.",
    items: [{ icon: Nextjs }, { icon: React }],
  },
  {
    title: "LIBRARIES",
    description:
      "Powerful libraries that enhance state management, animations, data fetching, and application flow.",
    items: [
      { icon: Redux },
      { icon: Zustand },
      { icon: ReactQuery },
      { icon: Graphql },
      { icon: Gsap },
    ],
  },
  {
    title: "TOOLS",
    description:
      "Development and deployment tools that streamline workflows and ensure reliable delivery.",
    items: [
      { icon: Git },
      { icon: Github },
      { icon: Docker },
      { icon: Postman },
      { icon: Drizzle },
    ],
  },
];
export const projects = [
  {
    id: 1,
    name: "Bazarinet",
    description:
      "An online store specializing in phone accessories including cases, chargers, cables, and power banks with MagSafe compatibility.",
    href: "",
    image: "/assets/projects/mobile-accessories-store.jpg",
    bgImage: "/assets/backgrounds/blanket.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Next.js" },
      { id: 3, name: "Node.js" },
      { id: 4, name: "MongoDB" },
      { id: 5, name: "Tailwind CSS" },
    ],
  },
];
export const socials = [
  { name: "Telegram", href: "https://t.me/iman_iji" },
  {
    name: "Email",
    href: "mailto:imancx.cx@gmail.com",
  },
  { name: "GitHub", href: "https://github.com/iman-iji" },
  { name: "linkedin", href: "https://linkedin.com/in/iman-jafari-cx" },
];
