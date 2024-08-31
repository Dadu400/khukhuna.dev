import Logo from "../assets/logo-me.png";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import PuppyAnimation from "./PuppyAnimation";
import gsap from "gsap";

export default function Landing() {
  const typedElement = useRef<HTMLDivElement>(null);
  const hearMoreHint = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current!, {
      strings: [
        '<div>Hello, I am <span class="font-montserrat text-white font-medium">Dali!</span></div> <div><span class="font-montserrat text-white font-medium">Full Stack</span> Developer </div>'
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: false,
      showCursor: false,
      onComplete: () => {
        gsap.fromTo(hearMoreHint.current,
          { opacity: 0 },
          { opacity: 1, duration: 2, ease: "back.out(1.7)" }
        );
      }
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="w-[100%] h-[100%] bg-[#f44336] flex flex-col justify-between items-center">
      <div className="flex flex-col items-center justify-center gap-8 flex-1">
        <img src={Logo} alt="Daduka Logo" className="w-64" />
        <span className="flex flex-col items-center gap-4 font-montserrat text-3xl text-white font-light w-full h-32" ref={typedElement}></span>
        <div className="flex flex-col items-center gap-2 text-white opacity-0" ref={hearMoreHint}>
          <button className="font-opensans text-xl uppercase font-light">
            Scroll down to <span className="font-medium">hear my story</span>
          </button>
          <ExpandMoreIcon />
        </div>
      </div>
      <PuppyAnimation />
    </div>
  );
}
