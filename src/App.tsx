import { useLayoutEffect } from "react";
import AboutMe from "./components/AboutMe";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Projects from "./components/Projects";
//gsap
import gsap from "gsap";
import ScrollSmoother from "gsap/ScrollSmoother";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollSmoother);
function App() {
  useGSAP(() => {
    ScrollSmoother.create({
      wrapper: ".main",
      content: ".content",
      smooth: 2,
      effects: true, // Enables data-speed and data-lag attributes
      smoothTouch: 0.1,
      normalizeScroll: true,
    });
  }, []);
  return (
    <main className="main">
      <div className="content">
        <Hero />
        <Marquee />
        <AboutMe />
        <Projects />
      </div>
    </main>
  );
}

export default App;
