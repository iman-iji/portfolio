// keen slider
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
//data
import { skills } from "./../../data/index";
import Title from "./Title";
// icons
import Html from "../assets/Html.svg?react";
import Css from "../assets/Css.svg?react";
import Tailwindcss from "../assets/Tailwindcss.svg?react";
import Sass from "../assets/Sass.svg?react";
import Materiaui from "../assets/Materiaui.svg?react";
import Docker from "../assets/Docker.svg?react";
import Drizzle from "../assets/Drizzle.svg?react";
import Git from "../assets/Git.svg?react";
import Github from "../assets/Github.svg?react";
import Graphql from "../assets/Graphql.svg?react";
import Javascript from "../assets/Javascript.svg?react";
import Typescript from "../assets/Typescript.svg?react";
import Nextjs from "../assets/Nextjs.svg?react";
import ReactQuery from "../assets/ReactQuery.svg?react";
import Redux from "../assets/Redux.svg?react";
import React from "../assets/React.svg?react";
import Shadcn from "../assets/Shadcn.svg?react";
import Zustand from "../assets/Zustand.svg?react";
import Gsap from "../assets/Gsap.svg?react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const oneThirdLength = Math.floor(skills.length / 3);

const animation = { duration: 30000, easing: (t: number) => t };

const Marquee = () => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: "auto", spacing: 20 },
    drag: false,

    defaultAnimation: {
      duration: 4000,
      easing: (t) => -(Math.cos(Math.PI * t) - 1) / 2,
    },

    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });

  useGSAP(() => {
    const iconsTl = gsap.timeline({
      delay: 1,
      scrollTrigger: {
        trigger: ".icons",
        start: "top center",
        end: "top-=50% top",
      },
    });
    iconsTl.from(".icon", {
      yPercent: 100,
      stagger: 0.1,
      ease: "power1.inOut",
      opacity: 0,
    });
  });

  return (
    <section className="relative overflow-hidden">
      <Title className="text-amber-500">Skills</Title>
      <div className="icons flex justify-center items-center gap-2 mt-10">
        <Html className="icon" />
        <Css className="icon" />
        <Tailwindcss className="icon" />
        <Sass className="icon" />
        <Materiaui className="icon" />
        <Docker className="icon" />
        <Drizzle className="icon bg-white rounded-full" />
        <Git className="icon" />
        <Github className="icon" />
        <Graphql className="icon" />
        <Javascript className="icon" />
        <Typescript className="icon" />
        <Nextjs className="icon" />
        <ReactQuery className="icon" />
        <Redux className="icon" />
        <React className="icon" />
        <Shadcn className="icon bg-white rounded-full" />
        <Zustand className="icon" />
        <Gsap className="icon" />
      </div>
      <div className="marquee h-auto w-full overflow-hidden relative">
        <div className="gradient-edge" />
        <div className="gradient-edge" />

        <div className="space-y-5 md:space-y-10 text-amber-500 mt-32">
          <div ref={sliderRef} className="keen-slider">
            {skills
              .slice(0, oneThirdLength)
              .map(({ id, skill, icon: Icon }) => (
                <div className="keen-slider__slide" key={id}>
                  <div className="border border-amber-500 px-2 py-2 rounded-lg flex items-center justify-center gap-3 max-w-fit">
                    <h3 className="text-[11px] lg:text-[16px] ">{skill}</h3>
                    {Icon && <Icon className="text-xl hidden md:block" />}
                  </div>
                </div>
              ))}
          </div>
          <div ref={sliderRef} className="keen-slider">
            {skills
              .slice(oneThirdLength * 2)
              .map(({ id, skill, icon: Icon }) => (
                <div className="keen-slider__slide" key={id}>
                  <div className="border border-amber-500 px-2 py-2 rounded-lg flex items-center justify-center gap-3 max-w-fit">
                    <h3 className="text-[11px] lg:text-[16px]">{skill}</h3>
                    {Icon && <Icon className="text-xl hidden md:block" />}
                  </div>
                </div>
              ))}
          </div>
          <div ref={sliderRef} className="keen-slider">
            {skills
              .slice(oneThirdLength, oneThirdLength * 2)
              .map(({ id, skill, icon: Icon }) => (
                <div className="keen-slider__slide" key={id}>
                  <div className="border border-amber-500 px-2 py-2 rounded-lg flex items-center justify-center gap-3 max-w-fit">
                    <h3 className="text-[11px] lg:text-[16px]">{skill}</h3>
                    {Icon && <Icon className="text-xl hidden md:block" />}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Marquee;
