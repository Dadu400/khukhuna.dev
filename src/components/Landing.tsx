import Logo from "../assets/logo-me.png";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import PuppyAnimation from "./PuppyAnimation";

export default function Landing() {
  const typedElement = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current!, {
      strings: [
        '<div>Hello, I am <span class="font-montserrat text-white font-medium">Dali !</span></div> <div><span class="font-montserrat text-white font-medium">Full Stack</span> Developer </div>'
      ],
      typeSpeed: 75,
      backSpeed: 75,
      loop: false, 
      showCursor: false, 
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="w-screen h-screen bg-[#f44336] flex flex-col items-center justify-evenly">
      <div className="flex flex-col items-center gap-8">
        <img src={Logo} alt="Daduka Logo" className="w-64" />
        <span className="flex flex-col items-center gap-4 font-montserrat text-3xl text-white font-light w-full h-32" ref={typedElement}></span>
      </div>
      <div className="flex flex-col items-center gap-2 text-white animate-bounce">
        <button className="font-opensans text-xl uppercase font-light">
          Scroll down to <span className="font-medium">hear my story</span>
        </button>
        <ExpandMoreIcon />
      </div>
      <PuppyAnimation />
    </section>
  );
};
