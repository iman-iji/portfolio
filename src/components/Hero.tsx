import { useRef } from "react";
//react bits
import Particles from "../ui/Particles/Particles";
import ShinyText from "../ui/ShinyText/ShinyText";
//gsap
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

const Hero = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const textTween = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    SplitText.create(textRef.current, {
      type: "chars",
      autoSplit: true,
      onSplit: (self) => {
        return (textTween.current = gsap.to(self.chars, {
          yPercent: "random([-300,300])",
          xPercent: "random([-300,300])",
          rotation: "random(-30,30)",
          autoAlpha: 0,
          paused: true,
          ease: "back.out",
          duration: 2,
          stagger: {
            amount: 0.5,
            from: "random",
          },
        }));
      },
    });

    gsap.from(".Hover-title", {
      y: 100,
      opacity: 0,
      delay: 0.5,
      duration: 0.5,
    });
  });

  const onMouseHandler = () => {
    textTween.current.play();
  };
  const onMouseLeaveHandler = () => {
    textTween.current.reverse();
  };

  return (
    <section className="relative">
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
              className="text-3xl md:text-6xl lg:text-8xl text-nowrap capitalize font-semibold"
              onMouseEnter={onMouseHandler}
              onMouseLeave={onMouseLeaveHandler}
            >
              front end developer
            </h1>
          </div>
          <div className="text-center">
            <ShinyText
              text="I am a Front-End Developer At Zock Studio!"
              disabled={false}
              speed={3}
              className="mt-5 shiny-text"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
