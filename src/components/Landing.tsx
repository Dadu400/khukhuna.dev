import Logo from "../assets/logo-me.png";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Landing() {
  return (
    <section className="w-screen h-screen bg-[#f44336] flex flex-col items-center justify-evenly">
      <div className="flex flex-col items-center gap-8">
      <img src={Logo} alt="Daduka Logo" className="w-64" />
      <div className="flex flex-col items-center gap-6">
        <h1 className="font-montserrat text-3xl text-white font-light">Hello, I am <span className="font-montserrat text-white font-medium">Dali !</span></h1>
        <h2 className="font-montserrat text-3xl text-white font-light"><span className="font-montserrat text-white font-medium">Full Stack </span> Developer</h2>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2 text-white animate-bounce">
        <button className="font-opensans text-xl uppercase font-light">
          Scroll down to <span className="font-medium">hear my story</span>
        </button>
         <ExpandMoreIcon />
        </div>
    </section>
  );
};

