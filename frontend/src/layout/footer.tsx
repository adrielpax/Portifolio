import { FooterList } from "../utils/footer-utils";

export function Footer(){
    return(
      <div className="flex bottom-0 content-end pt-8 pb-6 rounded border-t border-blue-gray-900
        mx-auto max-w-screen-xl shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-semibold">
                Let's keep in touch!
              </h4>
              <h5 className="text-lg mt-0 mb-2 text-blue-gray-900">
                Find us on any of these platforms, we respond 1-2 business days.
              </h5>
              <div className="mt-6">

            
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-blue-gray-900 text-sm font-semibold mb-2">
                    Useful Links
                  </span>
                  <FooterList text="About" refer="#"/>
                  <FooterList text="Blog" refer="https://www.youtube.com/watch?v=C9ctoK4M9Bk"/>
                  <FooterList text="Github" refer="#"/>
                  <FooterList text="FreeProducts" refer=""/>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase text-blue-gray-900 text-sm font-semibold mb-2">
                    Other Resources
                  </span>
                  <FooterList text="Terms & Conditions" refer="#"/>
                  <FooterList text="Privacy Policy" refer="#"/>
                  <FooterList text="Contact Us" refer="#"/>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-blue-gray-900" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-blue-gray-900 font-semibold py-1">
                Copyright © {new Date().getFullYear()}{" "}by{" "}
                <a
                  href="https://www.creative-tim.com"
                  className="text-blue-gray-900 hover:text-light-blue-300"
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