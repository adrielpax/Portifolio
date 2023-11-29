import React from "react";
import { ButtonComponent } from "../homeComponents";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { InputRow, TextAreaRow } from "../forms/input";
import { IoSend } from "react-icons/io5";

export default function ContactSection() {
  return (
    <div className="flex items-start gap-[136px] self-stretch md:p-10 bg-white">
      <div
        className="flex items-center md:gap-8 flex-[1_0_0] md:rounded-2xl p-[72px]
        bg-gradient-to-t from-[#0047FF] to-[#00F0FF] flex-col md:flex-row
        text-white gap-6 self-stretch px-6 py-12 justify-center"
      >
        <div className="w-72 h-[220px] shrink-0 bg-white opacity-50"></div>
        <div className="flex flex-col items-start gap-8 self-stretch w-96 md:w-1/3">
          <div className="flex items-center gap-6"></div>
          <h1 className="text-[#7DFFAF] text-regular text-base">contato</h1>
          <h2 className="font-semibold text-4xl font-sans">
            Entre em contato conosco hoje mesmo.
          </h2>
          <p>
            Estou sempre pronto para um bate-papo. Envie-me um e-mail para
            hi@linalevi.com ou dê-me um alô nas redes sociais.
          </p>
          <div className="flex items-start gap-2">
            <ButtonComponent
              className="bg-white rounded-md p-3 hover:bg-blue-gray-100
            shadow transition-transform active:scale-95 active:bg-blue-gray-50"
            >
              <FaGithub className="text-[#121212] w-5 h-5" />
            </ButtonComponent>
            <ButtonComponent
              className="bg-white rounded-md p-3 hover:bg-blue-gray-100
            shadow transition-transform active:scale-95 active:bg-blue-gray-50"
            >
              <FaLinkedin className="text-[#121212] w-5 h-5" />
            </ButtonComponent>
            <ButtonComponent
              className="bg-white rounded-md p-3 hover:bg-blue-gray-100
            shadow transition-transform active:scale-95 active:bg-blue-gray-50"
            >
              <FaInstagram className="text-[#121212] w-5 h-5" />
            </ButtonComponent>
          </div>
        </div>
        <form className="flex flex-col gap-4 items-start">
          <InputRow
            id={""}
            type={""}
            holder={"Nome"}
            handle={function (e: React.ChangeEvent<HTMLInputElement>): void {
              throw new Error("Function not implemented.");
            }}
            blur={function (e: any): void {
              throw new Error("Function not implemented.");
            }}
          />
          <InputRow
            id={""}
            type={""}
            holder={"Email"}
            handle={function (e: React.ChangeEvent<HTMLInputElement>): void {
              throw new Error("Function not implemented.");
            }}
            blur={function (e: any): void {
              throw new Error("Function not implemented.");
            }}
          />

          <TextAreaRow
            id={""}
            holder={"Mensagem"}
            handle={function (e: React.ChangeEvent<HTMLTextAreaElement>): void {
              throw new Error("Function not implemented.");
            }}
            blur={function (e: any): void {
              throw new Error("Function not implemented.");
            }}
          />

          <ButtonComponent
            className="bg-blue-500 rounded-md z-20 
            shadow-none transition-transform py-2 px-4
            active:scale-95  text-white active:bg-[#4f94e448]
            border border-transparent hover:border-white"
          >
            Enviar Mensagem
            <IoSend />
          </ButtonComponent>
        </form>
      </div>
    </div>
  );
}
