import React from "react";
import { ButtonComponent } from "../homeComponents";
import { FaGithub } from "react-icons/fa";

export default function ContactSection() {
  return (
    <div className="flex items-start gap-[136px] self-stretch md:p-10 bg-white">
      <div
        className="flex md:items-start md:gap-[136px] flex-[1_0_0] md:rounded-2xl p-[72px]
        bg-gradient-to-t from-[#0047FF] to-[#00F0FF] flex-col md:flex-row
        text-white items-start gap-10 self-stretch px-6 py-12"
      >
        <div className="w-auto h-[213.808px] shrink-0 bg-white opacity-50"></div>
        <div className="flex flex-col items-start gap-8 self-stretch">
          <div className="flex items-center gap-6"></div>
          <h1 className="text-[#7DFFAF] text-regular text-base">contato</h1>
          <h2 className="font-semibold text-4xl font-sans">
            Entre em contato conosco hoje mesmo.
          </h2>
          <p>
            Estou sempre pronto para um bate-papo. Envie-me um e-mail para
            hi@linalevi.com ou dê-me um alô nas redes sociais.
          </p>
          <ButtonComponent className="bg-white rounded-md">
            <FaGithub className="text-[#12121299] w-5 h-5" />
          </ButtonComponent>
        </div>
      </div>
    </div>
  );
}
