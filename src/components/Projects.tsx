import { useRef } from "react";
// components
import Title from "./Title";
//gsap
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const images = [
  "/src/assets/berlanshop.png",
  "/src/assets/book-store.png",
  "/src/assets/comfy.png",
  "/src/assets/gap-chat.png",
];

// steps /cards / count-container

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const stepsRef = useRef<HTMLDivElement>(null);
  const countContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray(".project-card");
    const stickyHeight = window.innerHeight * 5;

    if (!countContainerRef.current || cards.length === 0) return;

    gsap.fromTo(
      ".project-card",
      { display: "none" },
      {
        display: "block",
        scrollTrigger: {
          trigger: stepsRef.current,
          start: "top top",
          end: `+=${stickyHeight}px`,
          pin: true,
          pinSpacing: true,
          onUpdate: (self) => {
            cardPositions(self.progress);
          },
        },
      }
    );

    const getRadis = () => {
      return window.innerWidth < 1024
        ? window.innerWidth * 7.5
        : window.innerWidth * 2.5;
    };

    const arcAngle = Math.PI * 0.3;
    const startAngle = Math.PI / 2 - arcAngle / 2;

    const cardPositions = (progress = 0) => {
      const radius = getRadis();
      const totalTravel = 1 + cards.length / 7.5;
      const adjustedProgress = (progress * totalTravel - 1) * 1.1;

      cards.forEach((card, i) => {
        const normalizedProgress = (cards.length - 1 - i) / cards.length;
        const cardProgress = normalizedProgress + adjustedProgress;
        const angle = startAngle + arcAngle * cardProgress;
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);
        const rotation = (angle - Math.PI / 2) * (180 / Math.PI);

        gsap.set(card, {
          x: x,
          y: -y + radius,
          rotation: -rotation,
          transformOrigin: "center center",
        });
      });
    };

    const options = {
      root: null,
      rootMargin: "0% 0%",
      threshold: 0.5,
    };

    let currentCardIndex = 0; // مقدار اولیه

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const cardIndex = cards.indexOf(entry.target);
          currentCardIndex = cardIndex + 1; // فقط موقعی که intersect شد تغییر کنه
          console.log(currentCardIndex);

          const targetY = 150 - currentCardIndex * 218;
          gsap.to(countContainerRef.current, {
            y: targetY,
            duration: 0.3,
            ease: "power1.out",
            overwrite: true,
            delay: 0.3,
          });
        }
      });
    }, options);
    cards.forEach((card) => observer.observe(card));

    window.addEventListener("resize", () => cardPositions(0));
  });
  return (
    <div>
      <section
        ref={stepsRef}
        className="steps text-white relative w-screen h-[150vh] overflow-hidden"
      >
        <div className="step-counter absolute left-1/2 -translate-x-1/2 flex flex-col">
          <div className="counter-title h-[120px] lg:h-[200px] leading-32 w-full lg:w-[1200px]">
            <Title>Projects</Title>
          </div>
          <div className="count w-[70px] lg:w-[1200px] h-[80px] lg:h-[150px] absolute text-right top-12 lg:top-[30%] pr-1">
            <div
              ref={countContainerRef}
              className="count-container relative translate-y-[150px] will-change-transform"
            >
              <h2 className="text-[60px] lg:text-[150px]">01</h2>
              <h2 className="text-[60px] lg:text-[150px]">02</h2>
              <h2 className="text-[60px] lg:text-[150px]">03</h2>
              <h2 className="text-[60px] lg:text-[150px]">04</h2>
            </div>
          </div>
        </div>
        <div className="cards absolute top-[22.5%] lg:top-[15%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[600px] will-change-transform">
          {images.map((img, index) => (
            <div
              className="project-card absolute w-[305px] h-[345px] top-1/2 left-1/2 lg:w-[450px] lg:h-[480px] origin-[center_center] -ml-[250px] flex flex-col gap-[1em] will-change-transform"
              key={index}
            >
              <div className="card-image flex-1 overflow-hidden h-full">
                <img
                  src={img}
                  alt="project-img"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="card-content w-full  h-[60px]">
                <p className="text-left text-white font-medium leading-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Inventore ipsa officiis distinctio. Sequi veritatis nostrum
                  dignissimos optio modi voluptates architecto.
                </p>
              </div>
            </div>
          ))}
          <div className="card empty opacity-0"></div>
          <div className="card empty opacity-0"></div>
        </div>
      </section>

      <section className="outro relative w-screen h-screen overflow-hidden flex justify-center items-center bg-gradient-to-b from-black to-[#364549] bg-size-[200%_200%]">
        <p className="text-center text-[52px] leading-[1.125] font-normal text-white">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.Voluptas quam
          veniam quis
          <span className="text-amber-400">Voluptas quam veniam quis</span>{" "}
          omnis atque rem velit ut eligendi enim qui?
        </p>
      </section>
    </div>
  );
};

export default Projects;
