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
    const heroTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-container",
        start: "1% top",
        end: "bottom top",
        scrub: true,
      },
    });

    heroTl.to(".hero-container", {
      rotate: 15,
      scale: 0.9,
      yPercent: 30,
      ease: "power1.inOut",
    });

    gsap.from(".Hover-title", {
      y: 50,
      opacity: 0,
      delay: 1,
      duration: 0.8,
    });
  });

  return (
    <section className="relative p-0">
      <div className="hero-container">
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
                className="text-[clamp(1.75rem,5vw+1rem,5rem)] text-nowrap  font-semibold"
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
      </div>
    </section>
  );
};

export default Hero;
