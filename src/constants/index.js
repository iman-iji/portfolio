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
      "An online store offering a wide variety of products, including clothing, phone accessories, and more.",
    href: "",
    image: "./../images/bazarinet.png",
    bgImage: "./../images/bazarinet.png",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Next.js" },
      { id: 3, name: "React Query" },
      { id: 4, name: "Zustand" },
      { id: 5, name: "Tailwind CSS" },
    ],
  },
  {
    id: 2,
    name: "Berlanshop",
    description:
      "A clothing store offering top-quality, stylish apparel at the most affordable prices for every customer.",
    href: "",
    image: "./../images/berlanshop.png",
    bgImage: "./../images/berlanshop.png",
    frameworks: [
      { id: 1, name: "PostgreSQL" },
      { id: 2, name: "FullStack Next.js" },
      { id: 3, name: "Leaflet" },
      { id: 4, name: "Zustand" },
      { id: 5, name: "Tailwind CSS" },
    ],
  },
  {
    id: 3,
    name: "Gap Chat",
    description:
      "developed a chat application that not only supports real-time messaging but also includes video call functionality.",
    href: "",
    image: "./../images/gap-chat.png",
    bgImage: "./../images/gap-chat.png",
    frameworks: [
      { id: 1, name: "Websocket" },
      { id: 2, name: "Next.js" },
      { id: 3, name: "Database" },
      { id: 4, name: "Zustand" },
      { id: 5, name: "Tailwind CSS" },
    ],
  },
  {
    id: 4,
    name: "GSAP landing",
    description:
      "created a landing page project with the main goal of practicing GSAP for animations and interactive effects, while also getting familiar with the challenges of animation and learning how to handle them effectively.",
    href: "",
    image: "./../images/gsap.png",
    bgImage: "./../images/gsap.png",
    frameworks: [
      { id: 1, name: "gsap" },
      { id: 2, name: "Vite" },
      { id: 3, name: "Tailwind CSS" },
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
