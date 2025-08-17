// gsap
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
// import TitleHeader from "../components/TitleHeader";
import GlowCard from "./GlowCard";
import { expCards } from "../../data";
import Title from "./Title";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

const AboutMe = () => {
  useGSAP(() => {
    gsap.to(".timeline", {
      transformOrigin: "bottom bottom",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".timeline",
        start: "top center",
        end: "70% center",

        onUpdate: (self) => {
          gsap.to(".timeline", {
            scaleY: 1 - self.progress,
          });
        },
      },
    });
    gsap.from(".jornayTitle", {
      y: 100,
      opacity: 0,
      duration: 0.5,

      scrollTrigger: {
        trigger: ".jornayTitle",
        start: "top bottom",
        end: "70% center",
      },
    });
    gsap.from(".details-description", {
      y: 100,
      opacity: 0,
      duration: 0.5,
      stagger: 0.2,
      ease: "circ",
      scrollTrigger: {
        trigger: ".details-description",
        start: "top center",
        end: "top top",
      },
    });

    SplitText.create(".description", {
      type: "lines",
      autoSplit: true,
      onSplit: (self) => {
        return gsap.from(self.lines, {
          y: 50,
          opacity: 0,
          paused: true,
          ease: "circ",
          stagger: 0.5,
          scrollTrigger: {
            trigger: ".description",
            start: "top bottom",
            end: "top-=70% 40%",
            scrub: true,
          },
        });
      },
    });
  });

  return (
    <section className="flex-center ">
      <div className="w-full h-full">
        <Title>About me</Title>
        <div className="mt-12 relative">
          <div className="relative z-50 xl:space-y-32 space-y-10">
            {expCards.map((card, index) => (
              <div key={index}>
                <GlowCard>
                  <div className="relative">
                    <div className="absolute top-0 xl:left-1/2 md:left-10 left-5 h-full flex justify-center">
                      <div className="timeline absolute z-30 h-[110%] -top-8 w-14 md:w-28 bg-black" />
                      <div className="gradient-line w-1 h-full" />
                    </div>
                    <div className="md:size-20 size-10 flex-none rounded-full flex justify-center items-center md:-translate-y-7 border border-amber-500 bg-amber-500 overflow-hidden">
                      <img src={card.logoPath} alt="logo" className="z-20" />
                    </div>
                  </div>
                  <div className="grow xl:w-4/6">
                    <div className="flex items-start">
                      <div className=" flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                        <div>
                          <h3 className="jornayTitle font-semibold text-3xl">
                            My Journey So Far
                          </h3>
                          <p className="description text-sm md:text-[16px] ms-5 mt-5 leading-9 opacity-75">
                            {card.description}
                          </p>
                          <p className="details-description ms-5 mt-5 ">
                            Bachelor: Engineering physics
                          </p>
                          <p className="details-description ms-5 mt-5 ">
                            Military Service Status : completed
                          </p>
                          <p className="details-description ms-5 mt-5 ">
                            Region :Tehran, Sheykh Hadi
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </GlowCard>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
