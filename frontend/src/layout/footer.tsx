import { FooterList } from "../utils/footer-utils";

export function Footer(){
    return(
      <div className="flex bottom-0 content-end pt-8 pb-6 rounded border-t 
        mx-auto max-w-screen-xl shadow-md bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 dark:text-white">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-semibold">
                Let's keep in touch!
              </h4>
              <h5 className="dark:text-white text-lg mt-0 mb-2 text-blue-gray-900">
                Find us on any of these platforms, we respond 1-2 business days.
              </h5>
              <div className="mt-6">

            
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block dark:text-white uppercase text-blue-gray-900 text-sm font-semibold mb-2">
                    Useful Links
                  </span>
                  <FooterList text="Github" refer="https://github.com/T4SpaX"/>
                  <FooterList text="Linkedin" refer="https://www.linkedin.com/in/adriel-lucas/"/>
                  <FooterList text="Instagram" refer="https://www.instagram.com/adriel_adrion/"/>
                  <FooterList text="RocketSeat" refer="https://app.rocketseat.com.br/me/adriel-lucas-de-souza-01136"/>
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
          <hr className="my-6 border-light-blue-300 dark:border-pink-500" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-blue-gray-900 font-semibold py-1 dark:text-white">
                Copyright © {new Date().getFullYear()}{" "}by{" "}
                <a
                  href="https://www.creative-tim.com"
                  className="text-blue-gray-900 hover:text-light-blue-300
                  dark:text-white dark:hover:text-pink-500"
                >
                  Adriel Dev
                </a>.
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}