import { useState, useEffect } from "react";
import Bone from "../assets/bone.png";
import PuppyLeft from "../assets/puppy_left.gif";
import PuppyRight from "../assets/puppy_right.gif";

const PuppyAnimation = () => {
  const [isFacingRight, setIsFacingRight] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFacingRight((prev) => !prev);
    }, 7000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-24 overflow-hidden">
      <img
        src={isFacingRight ? PuppyRight : PuppyLeft}
        alt="Running Puppy"
        className={`absolute bottom-0 h-24 ${isFacingRight ? "animate-runRight" : "animate-runLeft"} ${isFacingRight ? "left-0" : "right-0"}`}
      />
      <img
        src={Bone}
        alt="Bone"
        className={`absolute bottom-2 h-12 ${isFacingRight ? "right-5" : "left-5"}`}
      />
    </div>
  );
};

export default PuppyAnimation;
