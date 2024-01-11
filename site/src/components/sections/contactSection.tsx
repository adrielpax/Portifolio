import React from "react";
import { ButtonComponent } from "../utilsComponents";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaLongArrowAltRight,
} from "react-icons/fa";
import { InputRow, TextAreaRow } from "../forms/input";
import { IoSend } from "react-icons/io5";
import { useFormPostApi } from "../../hook/form";
import Wrapper from "../../layout/wrapper";
import { TiWarning } from "react-icons/ti";
import { MdError } from "react-icons/md";
import Image from "next/image";
import { parseCookies } from "nookies";
import { GiConfirmed } from "react-icons/gi";

export default function ContactSection() {
  const cookie = parseCookies().send_message;
  const {
    isLoading,
    handleChange,
    handleSubmit,
    errors,
    touched,
    handleBlur,
    values,
    resetForm,
  } = useFormPostApi();

  // const handleSended = () => {
  //   resetForm();
  // };

  return (
    <div className="flex items-start justify-center gap-[136px] self-stretch md:p-10 bg-white">
      <Wrapper>
        <div
          className="flex items-start md:gap-8 flex-[1_0_0] md:rounded-lg p-[72px]
          bg-[#121212] opacity-95 flex-col md:flex-row
          text-[white] gap-6 px-6 py-12 justify-center self-stretch"
        >
          <div className="flex flex-col items-start gap-7  w-auto md:w-1/3">
            <div className="flex gap-6"></div>
            <h1 className="text-[#7DFFAF] text-regular text-base">contato</h1>
            <h2 className="font-semibold text-4xl font-sans">
              Entre em contato conosco hoje mesmo.
            </h2>
            <p>
              Envie-nos uma mensagem para entrar em contato e siga-nos nas redes
              sociais.
            </p>
            <div className="flex justify-start w-full gap-2 mb-10 md:mb-0">
              <ButtonComponent
                className="bg-white rounded-md p-3 hover:text-[#0047FF] text-[#121212]
              shadow transition-transform active:scale-95 active:bg-blue-gray-50"
              >
                <FaGithub className=" w-5 h-5" />
              </ButtonComponent>
              <ButtonComponent
                className="bg-white rounded-md p-3 hover:text-[#0047FF] text-[#121212]
              shadow transition-transform active:scale-95 active:bg-blue-gray-50"
              >
                <FaLinkedin className=" w-5 h-5" />
              </ButtonComponent>
              <ButtonComponent
                className="bg-white rounded-md p-3 hover:text-[#0047FF] text-[#121212]
              shadow transition-transform active:scale-95 active:bg-blue-gray-50"
              >
                <FaInstagram className=" w-5 h-5" />
              </ButtonComponent>
            </div>
            <div className="w-72 h-[220px] shrink-0">
              <Image
                src={"/imgs/contact-us.png"}
                alt="contact-us"
                width={300}
                height={300}
              />
            </div>
          </div>
          {cookie ? (
            <div
              className="flex flex-col md:w-[420px] justify-center 
            md:text-[#121212] text-opacity-95 self-center items-center gap-2
             shadow-md "
            >
              <div
                className="flex flex-col md:flex-row bg-white w-auto md:w-[420px] py-4 md:px-6 rounded-xl
              items-center gap-2"
              >
                <GiConfirmed className="w-20 h-20 text-[#4af583]" />
                <p className="font-semibold text-xl font-sans text-[#121212] text-center md:text-left">
                  Sua mensagem foi enviada com sucesso!
                </p>
              </div>
              <p className="font-semibold text-center my-2 text-xl font-sans text-white">
                Agradecemos por entrar em contato!<br/>
                Veja mais sobre nossos serviços clicando no botão abaixo.
              </p>
             
              <ButtonComponent
                className="bg-white rounded-full md:w-[420px]  text-[#121212] py-3 px-9 text-base
                shadow transition-transform active:scale-100 active:bg-blue-gray-50 scale-100
              hover:bg-gray-100 active:border-gray-400 border-4 border-transparent"
              >
                Ver serviços
                <FaLongArrowAltRight />
              </ButtonComponent>
            </div>
          ) : (
            <div className="flex flex-col md:w-[420px] justify-start md:bg-transparent md:text-[white] text-opacity-95 mt-10 py-4 md:px-6 rounded-xl shadow-md">
              <div className="w-full h-full p-0 mt-5 rounded-t-lg font-semibold text-lg shrink-0 text-center flex border-b">
                <h3>Mande uma Mensagem ou solicite um serviço</h3>
              </div>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 w-auto md:w-[385px] items-center md:items-start
                py-4 px-3 rounded-b-lg font-semibold text-sm font-sans"
              >
                {errors.name && touched.name ? (
                  <span className="text-[white] text-opacity-95 -mb-4 flex items-center gap-2 select-none">
                    <MdError className="w-5 h-5 text-pink-600" /> {errors.name}
                  </span>
                ) : (
                  <span className="text-[white] jus text-opacity-95 -mb-4 flex items-center  gap-2 select-none">
                    {" "}
                    Nome
                  </span>
                )}
                <InputRow
                  id={"name"}
                  type={"name"}
                  value={values.name}
                  error={errors.name}
                  holder={"Nome"}
                  handle={handleChange}
                  blur={handleBlur}
                  className="w-[238px]"
                />

                {errors.email && touched.email ? (
                  <span className="text-[white] text-opacity-95 -mb-4 -mt-1 flex items-center gap-2 select-none">
                    <MdError className="w-5 h-5 text-pink-600" /> {errors.email}
                  </span>
                ) : (
                  <span className="text-[white] text-opacity-95 -mb-4 -mt-1 flex items-center gap-2 select-none">
                    {" "}
                    E-mail
                  </span>
                )}
                <InputRow
                  id={"email"}
                  type={"email"}
                  value={values.email}
                  error={errors.email}
                  holder={"Email de contato"}
                  handle={handleChange}
                  blur={handleBlur}
                  className="w-[238px]"
                />

                {errors.number && touched.number ? (
                  <span className="text-[white] text-opacity-95 -mb-4 -mt-1 flex items-center gap-2 select-none">
                    <MdError className="w-5 h-5 text-pink-600" />{" "}
                    {errors.number}
                  </span>
                ) : (
                  <span className="text-[white] text-opacity-95 -mb-4 -mt-1 flex items-center gap-2 select-none">
                    {" "}
                    Numero
                  </span>
                )}
                <InputRow
                  id={"number"}
                  type={""}
                  value={values.number}
                  error={errors.number}
                  holder={"Numero de contato"}
                  handle={handleChange}
                  blur={handleBlur}
                  className="w-[238px]"
                />

                {errors.business && touched.business ? (
                  <span className="text-[white] text-opacity-95 -mb-4 -mt-1 flex items-center gap-2 select-none">
                    <MdError className="w-5 h-5 text-pink-600" />{" "}
                    {errors.business}
                  </span>
                ) : (
                  <span className="text-[white] text-opacity-95 -mb-4 -mt-1 flex items-center gap-2 select-none">
                    {" "}
                    Nome da sua empresa
                  </span>
                )}
                <InputRow
                  id={"business"}
                  type={"text"}
                  value={values.business}
                  error={errors.business}
                  holder={"Nome da sua empresa"}
                  handle={handleChange}
                  blur={handleBlur}
                  className="w-[238px]"
                />

                {errors.message && touched.message ? (
                  <span className="text-[white] text-opacity-95 -mb-4 -mt-1 flex items-center gap-2 select-none">
                    <MdError className="w-5 h-5 text-pink-600" />{" "}
                    {errors.message}
                  </span>
                ) : (
                  <span className="text-[white] text-opacity-95 -mb-4 flex items-center gap-2 select-none">
                    {" "}
                    Mensagem
                  </span>
                )}
                <TextAreaRow
                  id={"message"}
                  holder={"Mensagem"}
                  value={values.message}
                  error={errors.message}
                  handle={handleChange}
                  blur={handleBlur}
                />

                {/* <p className="text-justify">
              Ao enviar essa mensagem o tempo de resposta sera de 1 a 2 dias
              uteis.
            </p> */}
                <p className="text-center text-sm scale-90 md:scale-100 -mt-6 ">
                  Ao enviar essa mensagem voce aceitar receber e-mails como
                  resposta e nossos termos de tratamento.
                </p>
                <div className="w-full flex justify-center items-center">
                  <ButtonComponent
                    className={` rounded-full z-20 shadow-none py-4 px-10 w-full
                    enabled:active:scale-95  text-[white] text-opacity-95 enabled:active:bg-[whitesmoke]
                    border-4 border-transparent enabled:active:border-gray-400 
                    enabled:hover:bg-white enabled:hover:text-cyan-500 transition-all 
                    disabled:bg-gray-500 disabled:hover:bg-gray-400 
                    bg-[#0047FF] enabled:hover:border-[#0047FF]
                    enabled:cursor-pointer disabled:cursor-no-drop`}
                    type="submit"
                    // onClick={() => handleSended()}
                    disabled={isLoading}
                  >
                    Enviar Mensagem
                    <IoSend />
                  </ButtonComponent>
                </div>
              </form>
            </div>
          )}
        </div>
      </Wrapper>
    </div>
  );
}
