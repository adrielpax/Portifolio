import React from "react";
import { useQuery, gql } from "@apollo/client";

import * as H from "../components/homeComponents/home"; //componente de layout footer e navbar
import { FaDesktop, FaMobile, FaDatabase } from "react-icons/fa"; //componente icone utilitario
import { InfoCard } from "../components/infoCard"; //componente
import { SwiperCard } from "../components/swiperCard"; //componente
import { FormCard } from "../components/forms/formCard"; //componente
import { DialogButton } from "../components/dialog/dialogButton";


export default function Homepage() {
  const icon = {
    front: <FaDesktop className="w-full h-full" />,
    mobile: <FaMobile className="w-full h-full" />,
    data: <FaDatabase className="w-full h-full" />,
  };

  return (
    <>
      <DialogButton
        prop={{
          text: "Contact Me",
          full: false,
          hidden: "hidden",
        }}
      />
      <div className="dark w-full h-auto bg-gradient-to-r from-cyan-400 to-blue-900">
        <div>
          <H.HeroSection text="Sua Historia começa com quem faz Historia !" />
        </div>
        <section className="pb-7">
          <div>
            <H.PersonalCard />
          </div>

          {/* <div className={`container mx-auto my-40 px-4`}>
          <div className="flex flex-wrap justify-around">
          <H.HomeCard
          props={{
            title: "Mobile Dev",
            text: "Fast development mobile apps with expo and react native",
            content: "Mobile: Expo, React-Native",
            color: "text-white",
            bgColor: "bg-light-blue-400",
            icon: icon.mobile,
          }}
          />
          <H.HomeCard
          props={{
            title: "Front/Back-end Dev",
            text: "Web dev front end with mvp in tailwind and RESTfull APIs with nodeJS",
            content: "Front: React / Back: Node",
            color: "text-white",
            bgColor: "bg-light-blue-400",
            icon: icon.front,
              }}
            />
            <H.HomeCard
            props={{
              title: "Data Dev",
              text: "Development using mongoDB and SQL",
              content: "DATA: MongoDB/SQLite",
              color: "text-white",
              bgColor: "bg-light-blue-400",
              icon: icon.data,
            }}
            />
            </div>
            </div>
            <div className={``}>
            
            <InfoCard Title={"Tecnologies"} index={true} type={0} text={"bla"} />
            <InfoCard Title={"Language"} index={true} type={1} text={"bla bla"} />
            </div>
            <div
            className={`
            flex flex-wrap justify-center gap-2`}
            >
            <SwiperCard />
            </div>
        <FormCard /> */}
        </section>
        {/* <section className="pb-96">
        <div className="w-full container relative mx-auto">
        <div className=" items-center flex flex-wrap">
        <div className="w-full lg:w-6/12 px-4 mx-auto text-center">
        <div className=" text-white font-semibold text-3xl lg:text-4xl">
        Projetos
        </div>
        </div>
        </div>
        </div>
      </section> */}
      </div>
    </>
  );
}
