import { FaGitAlt, FaPython } from "react-icons/fa";
import { GiBrazilFlag, GiUsaFlag } from "react-icons/gi";
import { IoLogoGithub, IoLogoJavascript, IoLogoNodejs } from "react-icons/io";
import {
  SiExpo,
  SiGraphql,
  SiInstagram,
  SiLinkedin,
  SiMongodb,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiExpress,
} from "react-icons/si";
import {BiDownload} from 'react-icons/bi'
import { TbBrandNextjs } from "react-icons/tb";

const axios = (
    <svg
      role="img" 
      viewBox="0 0 24 24" 
      xmlns="http://www.w3.org/2000/svg">
        <path
        fill="white" 
        d="M11.0683 2.89968V22.2973l-2.11399 1.70265V7.8638H4.975l6.0933-4.96412zM14.93426 0v15.76724H19.025l-6.20044 5.08865V1.4689L14.93426 0z"/>
    </svg>
)  


const icons = {
  react: <SiReact className="h-[100%] w-[100%]" />,
  node: <IoLogoNodejs className="h-[100%] w-[100%]" />,
  js: <IoLogoJavascript className="h-[100%] w-[100%]" />,
  graph: <SiGraphql className="h-[100%] w-[100%]" />,
  mongo: <SiMongodb className="h-[100%] w-[100%]" />,
  git: <FaGitAlt className="h-[100%] w-[100%]" />,
  python: <FaPython className="h-[100%] w-[100%]" />,
  tailwind: <SiTailwindcss className="h-[100%] w-[100%]" />,
  typescript: <SiTypescript className="h-[100%] w-[100%]" />,
  axios: axios,
  express: <SiExpress className="h-[100%] w-[100%]" />,
  download: <BiDownload className="h-6 w-6" />,
  next: <TbBrandNextjs className="h-[100%] w-[100%]" />,
  expo: <SiExpo className="h-[100%] w-[100%]" />,
  brasil: <GiBrazilFlag className="h-[100%] w-[100%]" />,
  eua: <GiUsaFlag className="h-[100%] w-[100%]" />,
  github: <IoLogoGithub className="w-6 h-6"/>,
  linkedin: <SiLinkedin className="w-6 h-6"/>,
  instagram: <SiInstagram className="w-6 h-6"/>,
};

export default icons;
