import { FormCard } from "../components/forms/formCard";
import { FooterList } from "../utils/footer-utils";

export function Footer() {
  return (
    <div
      className="flex bottom-0 content-end pt-8 pb-6 mx-auto 
       shadow-md bg-white dark:bg-[#18191a]
      rounded-t
      "
    >
      <div className="container mx-auto px-4 dark:text-white">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl font-semibold">Vamos manter contato !</h4>
            <h5 className="dark:text-white text-lg mt-0 mb-2 text-blue-gray-900">
              Encontre-me em qualquer uma dessas plataformas, responderei de 1
              a 2 dias úteis.
            </h5>
            <div className="mt-6">
              <FormCard/>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block dark:text-white uppercase text-blue-gray-900 text-sm font-semibold mb-2">
                  Links uteis
                </span>
                <FooterList text="Github" refer="https://github.com/T4SpaX" />
                <FooterList
                  text="Linkedin"
                  refer="https://www.linkedin.com/in/adriel-lucas/"
                />
                <FooterList
                  text="Instagram"
                  refer="https://www.instagram.com/adriel_adrion/"
                />
                <FooterList
                  text="RocketSeat"
                  refer="https://app.rocketseat.com.br/me/adriel-lucas-de-souza-01136"
                />
              </div>
              {/*<div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase text-blue-gray-900 text-sm font-semibold mb-2">
                    Other Resources
                  </span>
                  <FooterList text="Terms & Conditions" refer="#"/>
                  <FooterList text="Privacy Policy" refer="#"/>
                  <FooterList text="Contact Us" refer="#"/>
                </div>*/}
            </div>
          </div>
        </div>
        <hr className="my-6 border-light-blue-300 dark:border-[#a53fff]" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-blue-gray-900 font-semibold py-1 dark:text-white">
              Copyright © {new Date().getFullYear()} by{" "}
              <a
                href="https://www.creative-tim.com"
                className="text-blue-gray-900 hover:text-light-blue-300
                  dark:text-white dark:hover:text-[#a53fff]"
              >
                adrielDev174@gmail.com
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
