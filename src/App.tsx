import AboutMe from "./components/AboutMe";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
//gsap
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
function App() {
  useGSAP(() => {
    ScrollSmoother.create({
      wrapper: ".main",
      content: ".content",
      smooth: 3,
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
        <Contact />
      </div>
    </main>
  );
}

export default App;
