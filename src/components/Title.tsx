import { useRef } from "react";
// gsap
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Title = ({ children, className }: Props) => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      delay: 1,
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 60%",
        end: "top-=50% top",
        scrub: 1.5,
      },
    });

    tl.to(titleRef.current, {
      duration: 1,
      opacity: 1,
      clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
      ease: "circ.out",
    });
  });

  return (
    <div className="general-title">
      <div
        style={{
          clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
        }}
        className={`${className} border-[.5vw] w-fit text-nowrap opacity-0`}
        ref={titleRef}
      >
        <div className="pb-5 md:px-14 px-3 md:pt-0 pt-3 bg-[#383838]">
          <h2 className="text-center">{children}</h2>
        </div>
      </div>
    </div>
  );
};

export default Title;
