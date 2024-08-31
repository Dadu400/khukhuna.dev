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
  const grandmaReference = useRef(null);
  const capReference = useRef(null);

  const spansRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: ".about-me-wrapper", // The container element to be watched for scroll
        start: "top top", // Animation starts when the top of the container hits the top of the viewport
        end: "bottom center", // Animation ends when the bottom of the container hits the center of the viewport
        scrub: 1, // Smooth animation linked to scroll position (1 means the animation is fully linked to scroll)
        markers: false // Set to true to see markers for debugging
      }
    })
    .fromTo(spansRef.current[0],
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, ease: "back.out(1.7)" }
    )
    .fromTo(spansRef.current[1],
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, ease: "back.out(1.7)" },
    )
    .fromTo([grandpaReference.current, grandmaReference.current],
      { opacity: 0 },
      { opacity: 1 },
      "<"
    )
    .fromTo(spansRef.current[2], 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, ease: "back.out(1.7)" }
    )
    .fromTo("#tsparticles", 
      { opacity: 0 },
      { opacity: 1 },
      "<"
    );
  });

  return (
    <div className="w-[100%] min-h-[300vh] bg-[#2196f3] relative about-me-wrapper">
      <ParticlesBackground />
      <div className="sticky top-[15%] bottom-0 flex flex-col items-center gap-8 flex-1">
        <div className="relative flex items-center mt-[50px]">
          <img ref={capReference} src={Cap} alt="Cap" className="absolute top-[-20px] z-20 w-64" />
          <img
            ref={grandpaReference}
            src={Grandpa}
            alt="Grandpa"
            className="w-48 h-48 z-0 opacity-85 absolute right-52 bottom-16 opacity-0"
          />
          <img ref={meReference} src={Logo} alt="Logo" className="w-64 z-10 relative" />
          <img
            ref={grandmaReference}
            src={Grandma}
            alt="Grandma"
            className="w-52 h-48 z-0 opacity-85 absolute left-48 bottom-16 opacity-0"
          />
        </div>
        <h1 className="font-montserrat text-2xl text-white font-normal text-center">
          <span ref={(el) => (spansRef.current[0] = el)} className="block mb-2">
            After Graduating from High School
          </span>
          <span ref={(el) => (spansRef.current[1] = el)} className="block mb-6">
            My Family and I decided that I would become a
          </span>
          <span ref={(el) => (spansRef.current[2] = el)} className="block font-bold text-3xl uppercase tracking-[.25em]">
            doctor
          </span>
        </h1>
      </div>
    </div>
  );
}

export default AboutMe;
