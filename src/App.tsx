import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./App.css";
import Landing from "./components/Landing";
import AboutMe from "./components/AboutMe";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const app: any = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray(".panel");
      panels.forEach((panel: any, i) => {
        ScrollTrigger.create({
          trigger: panel,
          start: "top bottom",
          end: "+=200%",
        });
      });
      ScrollTrigger.create({
        start: 0,
        end: "max",
        snap: 1 / (panels.length - 1),
      });
    }, app);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={app}>
      {/* <section className="panel w-[100%] h-screen blue">
        <Landing />
      </section> */}
      <section className="panel">
       <AboutMe />
      </section>
    </div>
  );
}

export default App;
