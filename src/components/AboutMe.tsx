import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Logo from "../assets/logo-me.png";
import Cap from "../assets/cap.png";

gsap.registerPlugin(ScrollTrigger);

function AboutMe() {
  const spansRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    gsap.fromTo(
      spansRef.current.filter(Boolean) as HTMLSpanElement[],
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: 'power1.inOut',
        stagger: 1,
        scrollTrigger: {
          trigger: spansRef.current[0]!,
          start: "top bottom",
          toggleActions: "play reverse play reverse"
        },
      }
    );
  }, []);

  return (
    <div className="w-[100%] h-screen bg-[#2196f3] flex flex-col justify-between items-center">
      <div className="flex flex-col items-center justify-center gap-8 flex-1">
        <img src={Cap} alt="Cap" className="absolute top-[120px] z-10 w-64"/>
        <img src={Logo} alt="Daduka Logo" className="w-64 relative z-0" />
        <h1 className="font-montserrat text-2xl text-white font-light text-center">
          <span
            ref={(el) => (spansRef.current[0] = el)}
            className="block"
          >
            After Graduating a High School
          </span>
          <span
            ref={(el) => (spansRef.current[1] = el)}
            className="block"
          >
            My Family and I decided that I would become a
          </span>
          <span
            ref={(el) => (spansRef.current[2] = el)}
            className="block font-semibold uppercase tracking-wider"
          >
            doctor
          </span>
        </h1>
      </div>
    </div>
  );
}

export default AboutMe;
