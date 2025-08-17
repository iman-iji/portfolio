import { useRef } from "react";
//react bits
import Particles from "../ui/Particles/Particles";
import ShinyText from "../ui/ShinyText/ShinyText";
//gsap
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Hero = () => {
  const textRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    gsap.from(".Hover-title", {
      y: 100,
      opacity: 0,
      delay: 0.5,
      duration: 0.5,
    });

    // herman
    const tl = gsap.timeline({
      yoyo: true,
      repeat: 1,
      repeatDelay: 1,
      delay: 1,
    });

    tl.from(".hole", { scale: 0, repeat: 1, yoyo: true })
      .fromTo(".herman", { y: 120, scaleY: 2 }, { y: -185, scaleY: 1 }, 0.2)
      .to(".herman", { y: -54, ease: "power1.in" }, ">")
      .to(".herman", {
        scaleY: 0.8,
        scaleX: 1.3,
        transformOrigin: "50% 100%",
        repeat: 1,
        yoyo: true,
        duration: 0.2,
      })
      .to(".myshadow", { opacity: 1, duration: 0.2 }, 0.7)
      .to(".myshadow", { scaleX: 0.7, ease: "power1.in" }, ">");
  });

  return (
    <section className="relative p-0">
      <div className="w-full h-screen overflow-clip flex flex-col">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={900}
          particleSpread={40}
          speed={0.3}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={true}
        />

        <div className="Hover-title p-4 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
          <div>
            <h1
              ref={textRef}
              className="text-[clamp(2rem,5vw+1rem,5rem)] text-nowrap  font-semibold"
            >
              iman jafari
            </h1>
          </div>
          <div className="text-center">
            <ShinyText
              text="I am a Front-End Developer !"
              disabled={false}
              speed={3}
              className="shiny-text text-[12px]"
            />
          </div>
        </div>
      </div>
      <div className="absolute left-3/4 top-[20%] transform -translate-x-1/2 -translate-y-1/2">
        <div className="demo relative w-[400px] h-[400px]">
          <div className="myshadow absolute w-[150px] h-[20px] bg-[radial-gradient(gray_10%,transparent_40%,black_30%)] left-[125px] top-[290px] bg-no-repeat opacity-0"></div>
          <div className="hole absolute w-[150px] h-[20px] rounded-[50%] left-[125px] top-[290px] bg-[#0f0f0f] "></div>
          <div className="hermanWrapper relative //border //border-red h-[305px] w-full rounded-full overflow-hidden">
            <img
              className="herman absolute left-[150px] -bottom-[50px] w-[100px]"
              src="https://assets.codepen.io/32887/herman.svg"
              alt="Herman the Wizard"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
