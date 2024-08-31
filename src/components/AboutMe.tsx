import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Logo from "../assets/logo-me.png";
import Cap from "../assets/cap.png";
import Grandpa from "../assets/grandpa.png";
import Grandma from "../assets/grandma.png";
import ParticlesBackground from "./ParticlesBackground";

gsap.registerPlugin(ScrollTrigger);

function AboutMe() {
  const meReference = useRef<HTMLImageElement | null>(null);
  const grandpaReference = useRef(null);
  const gandmaReference = useRef(null);
  const capReference = useRef(null);

  const spansRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    gsap.timeline()
      .fromTo(spansRef.current[0],
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 2, ease: "back.out(1.7)" }
      ).fromTo(spansRef.current[1],
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 2, ease: "back.out(1.7)", delay: 0.3 },
        1
      ).fromTo([grandpaReference.current, gandmaReference.current],
        { opacity: 0 },
        { opacity: 0.7, duration: 2, ease: "back.out(1.7)", delay: 0.3 },
        1
      ).fromTo(spansRef.current[2], 
        { opacity: 0, y: 20 }, 
        { opacity: 1, y: 0, duration: 2, ease: "back.out(1.7)", delay: 0.6 },
        2
      ).fromTo("#tsparticles", 
        { opacity: 0 },
        { opacity: 1, duration: 2, delay: 0.6 },
        2
      );
  });

  return (
    <div className="w-[100%] min-h-screen bg-[#2196f3] flex flex-col justify-between items-center">
      <ParticlesBackground />
      <div className="flex flex-col items-center justify-center gap-8 flex-1">
        <div className="relative flex items-center">
          <img ref={capReference} src={Cap} alt="Cap" className="absolute top-[-20px] z-20 w-64" />
          <img
            ref={grandpaReference}
            src={Grandpa}
            alt="Grandpa"
            className="w-48 h-48 z-0 opacity-85 absolute right-52 bottom-16 opacity-0"
          />
          <img ref={meReference} src={Logo} alt="Logo" className="w-64 z-10 relative" />
          <img
            ref={gandmaReference}
            src={Grandma}
            alt="Grandma"
            className="w-52 h-48 z-0 opacity-85 absolute left-48 bottom-16  opacity-0"
          />
        </div>
        <h1 className="font-montserrat text-2xl text-white font-light text-center">
          <span ref={(el) => (spansRef.current[0] = el)} className="block mb-2">
            After Graduating a High School
          </span>
          <span ref={(el) => (spansRef.current[1] = el)} className="block mb-2">
            My Family and I decided that I would become a
          </span>
          <span ref={(el) => (spansRef.current[2] = el)} className="block font-semibold uppercase tracking-wider">
            doctor
          </span>
        </h1>
      </div>
    </div>
  );
}

export default AboutMe;
