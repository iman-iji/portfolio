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
    SplitText.create(titleRef.current, {
      type: "chars",
      autoSplit: true,

      onSplit: (self) => {
        gsap.to(self.chars, {
          color: "orange",
          duration: 0.3,
          stagger: 0.1,
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      },
    });
  });

  return (
    <div>
      <h2
        ref={titleRef}
        className={`tracking-wider font-semibold text-5xl lg:text-8xl ${className}`}
      >
        {children}
      </h2>
    </div>
  );
};

export default Title;
