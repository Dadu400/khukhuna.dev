import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Logo from "../assets/logo-me.png";
import Cap from "../assets/cap.png";
import Grandpa from "../assets/grandpa.png";
import Granny from "../assets/grandma.png";
import ParticlesBackground from "./ParticlesBackground";

gsap.registerPlugin(ScrollTrigger);

function AboutMe() {
  const spansRef = useRef<(HTMLSpanElement | null)[]>([]);
  const aboutMeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (spansRef.current.length > 0) {
      gsap.fromTo(
        spansRef.current.filter(Boolean) as HTMLSpanElement[],
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 2,
          ease: 'none',
          stagger: 1,
          scrollTrigger: {
            trigger: aboutMeRef.current!,
            start: "top bottom",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }

    ScrollTrigger.create({
      trigger: aboutMeRef.current!,
      start: "bottom bottom",
      end: "bottom top",
      onEnter: () => gsap.to("#tsparticles", { autoAlpha: 1 }),
      onLeave: () => gsap.to("#tsparticles", { autoAlpha: 0 }),
      onEnterBack: () => gsap.to("#tsparticles", { autoAlpha: 1 }),
      onLeaveBack: () => gsap.to("#tsparticles", { autoAlpha: 0 }),
    });
  }, []);

  return (
    <div
      ref={aboutMeRef}
      className="w-[100%] min-h-screen bg-[#2196f3] flex flex-col justify-between items-center"
    >
      <ParticlesBackground />
      <div className="flex flex-col items-center justify-center gap-8 flex-1">
        <img src={Cap} alt="Cap" className="absolute top-[120px] z-20 w-64" />
        <div className="relative flex items-center">
          <img
            src={Grandpa}
            alt="Grandpa"
            className="w-48 h-48 z-0 opacity-85 absolute right-52 bottom-16"
          />
          <img src={Logo} alt="Logo" className="w-64 z-10 relative" />
          <img
            src={Granny}
            alt="Granny"
            className="w-52 h-48 z-0 opacity-85 absolute left-48 bottom-16"
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
