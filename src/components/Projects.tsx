import { useRef } from "react";
// components
import Title from "./Title";
//gsap
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { projects } from "../../data";

const Projects = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    let scrollAmount = 0;
    if (sliderRef.current) {
      scrollAmount = sliderRef.current.scrollWidth - window.innerWidth;
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".projects-section",
        start: "-2% top",
        end: `+=${scrollAmount + 1500}px`,
        scrub: true,
        pin: true,
      },
    });

    tl.to(".projects-section", {
      x: `-${scrollAmount + 1000}px`,
      ease: "power1.inOut",
    });
  });

  return (
    <section className="h-full projects-section">
      <Title className=" text-emerald-500">Projects</Title>
      <div ref={sliderRef} className="slider-wrapper">
        <div className="projects">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`relative z-30 lg:w-[50vw] w-96 lg:h-[70vh] md:w-[90vw] md:h-[50vh] h-80 flex-none`}
            >
              <div className="absolute bottom-48">
                <img
                  src={project.img}
                  alt=""
                  className=" h-full object-contain border-2 border-emerald-500"
                />
                <p className="mt-9 text-[11px]">{project.descriptoin}</p>
                <p className="mt-3 text-[11px] text-emerald-500">
                  The Libraries and Technology: {project.libraries}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
