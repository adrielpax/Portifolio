import { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
  Button,
} from "@material-tailwind/react";

import Image from "next/image";

import { ListTech } from "../utils/list-tech";
import icons from "../utils/icons/icons";
// import DownloadButton from "./buttons/downloadButton";

export function PersonalCard() {
  const [scrolled, setScrolled] = useState(false);

  const changeHiddenCard = () => {
    if (window.scrollY >= 60) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeHiddenCard);
  }, []);

  return (
    <div>
      <Card
        className={`bg-white
        ${
          scrolled
            ? "opacity-100 transition-opacity ease-in delay-600"
            : "opacity-0 transition-opacity ease-out delay-600"
        } rounded shadow-md 
      md:shadow-xl md:hover:shadow-2xl my-32 bg-white sm:w-96 mx-auto 
      `}
      >
        <CardHeader
          floated={false}
          className={`relative
        self-center h-60 w-40 rounded shadow-2 shadow-none bg-transparent`}
        >
          <Image
            src="/imgs/dree.png"
            fill
            unoptimized={false}
            alt={"Dree"}
            className="bg-transparent"
          />
        </CardHeader>
        <CardBody className="text-center">
          <Typography
            variant="h4"
            color="blue-gray"
            className={`"text-white" `}
          >
            Adriel Lucas
          </Typography>
          <Typography
            color="blue"
            className={`
           "text-[#c37fff]"
             font-medium`}
            textGradient
          >
            Desenvolvedor Web / Full-Stack
          </Typography>
          <div className="flex justify-around mx-5 my-0">
            <a
              href="https://github.com/t4spax"
              target="_blank"
              rel="noreferrer"
            >
              <Tooltip content="Github">
                <Button
                  size="lg"
                  className="flex items-center gap-3 rounded-none p-2 bg-transparent text-blue-gray-900"
                  variant="text"
                >
                  {icons.github} Github
                </Button>
              </Tooltip>
            </a>
            <a
              href="https://linkedin.com/in/adriel-lucas"
              target="_blank"
              rel="noreferrer"
            >
              <Tooltip content="Linkedin">
                <Button
                  size="lg"
                  color="blue"
                  className="flex items-center gap-3 rounded-none p-2 bg-transparent text-blue-gray-900"
                  variant="text"
                >
                  {icons.linkedin} Linkedin
                </Button>
              </Tooltip>
            </a>
          </div>
        </CardBody>

        <CardFooter className="flex flex-col my-4 p-0">
          <div className="flex mx-auto text-blue-gray-800 mb-6">
            Technologias e Linguagens
          </div>
          <div className="block m-1 text-center">
            <ListTech
              props={{
                text: "Next13.JS",
                color: " rounded-full bg-black ",
                colorIcon: "text-white",
                icon: icons.next,
                mobile: "",
              }}
            />
            <ListTech
              props={{
                text: "Node.JS",
                color: " rounded-full bg-green-400 ",
                colorIcon: "text-white",
                icon: icons.node,
                mobile: "",
              }}
            />
            <ListTech
              props={{
                text: "React.JS",
                color: " rounded-full bg-light-blue-400 ",
                colorIcon: "text-white",
                icon: icons.react,
                mobile: "",
              }}
            />
            <ListTech
              props={{
                text: "JavaScript",
                color: " rounded-full bg-yellow-500 ",
                colorIcon: "text-black",
                icon: icons.js,
                mobile: "",
              }}
            />
            <ListTech
              props={{
                text: "MongoDB",
                color: " rounded-full bg-gray-900",
                colorIcon: "text-green-800 ",
                icon: icons.mongo,
                mobile: "",
              }}
            />
            <ListTech
              props={{
                text: "GrapQL",
                color: " rounded-full bg-pink-600 ",
                colorIcon: "text-white",
                icon: icons.graph,
                mobile: "",
              }}
            />
            <ListTech
              props={{
                text: "Git",
                color: " rounded-full bg-orange-900",
                colorIcon: "text-white",
                icon: icons.git,
                mobile: "",
              }}
            />
            <ListTech
              props={{
                text: "Python",
                color: " rounded-full bg-blue-900",
                colorIcon: "text-yellow-700",
                icon: icons.python,
                mobile: "",
              }}
            />
            <ListTech
              props={{
                text: "Tailwind",
                color:
                  " rounded-full bg-gradient-to-r from-cyan-500 to-blue-500",
                colorIcon: "text-white",
                icon: icons.tailwind,
                mobile: "",
              }}
            />
            <ListTech
              props={{
                text: "Express",
                color: " rounded-full bg-black",
                colorIcon: "text-white",
                icon: icons.express,
                mobile: "",
              }}
            />
            <ListTech
              props={{
                text: "Typescript",
                color: " rounded-full bg-blue-500",
                colorIcon: "text-white",
                icon: icons.typescript,
                mobile: "",
              }}
            />
            <ListTech
              props={{
                text: "Axios",
                color: " rounded-full bg-purple-500",
                colorIcon: "text-white",
                icon: icons.axios,
                mobile: "",
              }}
            />
          </div>
          <div className="flex w-full justify-center mx-auto mt-10">
            {/* <DownloadButton fileUrl={"/Curriculum-Adriel.pdf"} fileName={"curriculum-Adriel.pdf"} /> */}
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
