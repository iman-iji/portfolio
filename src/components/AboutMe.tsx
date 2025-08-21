import { useState } from "react";
// gsap
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/SplitText";
// import TitleHeader from "../components/TitleHeader";
import { expCards } from "../../data";
import Title from "./Title";

gsap.registerPlugin(SplitText);

const AboutMe = () => {
  const [list] = useState(expCards);

  useGSAP(() => {
    const contentTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".description",
        start: "-=100% center",
      },
    });
    const paragraphSplit = SplitText.create(".description p", {
      type: "words, lines",
      linesClass: "paragraph-line",
    });
    contentTl
      .from(paragraphSplit.words, {
        yPercent: 300,
        rotate: 3,
        ease: "power1.inOut",
        duration: 1,
        stagger: 0.01,
      })
      .from(".ol li", {
        transformOrigin: "top left",
        rotate: 90,
        opacity: 0,
        stagger: 0.2,
      });
  });

  return (
    <section className="flex-center mt-3 md:mt-0">
      <div className="w-full h-full">
        <Title className="text-cyan-500">About me</Title>
        <div className="mt-12 relative">
          <div className="relative z-50 xl:space-y-32 space-y-10">
            {list.map((card, index) => (
              <div key={index} className="w-10/12 mx-auto">
                <div className="relative mb-3 md:mb-0">
                  <div className="md:size-20 size-10 flex-none rounded-full flex justify-center items-center md:-translate-y-7 border border-cyan-500 bg-cyan-500 overflow-hidden">
                    <img src={card.logoPath} alt="logo" className="z-20" />
                  </div>
                </div>

                <div className="description">
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl">
                    {card.description}
                  </p>
                  <ol className="ol p-5 list-disc">
                    <li>
                      <span>
                        Military Service Status: {card.MilitaryServiceStatus}
                      </span>
                    </li>
                    <li>
                      <span>Bachelor: {card.Bachelor}</span>
                    </li>
                    <li>
                      <span>Marital Status: {card.MaritalStatus}</span>
                    </li>
                  </ol>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
