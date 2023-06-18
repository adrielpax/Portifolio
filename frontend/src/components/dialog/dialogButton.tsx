import { useState } from "react";
import { Button } from "@material-tailwind/react";
import renderThemeChanger from "../../hook/darkModeHook";
import React from "react";
import { FormCard } from "../forms/formCard";

interface Props {
  prop: {
    text: string;
    full: boolean;
    hidden: string;
  };
}

export const DialogButton = ({ prop }: Props) => {
  const [open, setOpen] = useState(false);

  //const handleOpen = () => setOpen(!open);

  const [showModal, setShowModal] = React.useState(false);

  return (
    <div className="fixed top-3 right-12 z-50">
      <Button
        size="sm"
        fullWidth={prop.full}
        variant="filled"
        onClick={() => setShowModal(true)}
        className={`${prop.hidden} rounded lg:inline-block bg-light-blue-700 hover:bg-blue-300 text-white`}
      >
        <span>{prop.text}</span>
      </Button>

      {showModal ? (
        <>
          <div className="justify-center  items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative my-6 mx-auto max-w-2xl w-[80%]">
              {/*content*/}
              <div className="border-0 rounded shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-regular text-center">Entre em Contato</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none"></span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative flex-auto">
                 <FormCard/>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end  border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  {/* <button
                    className="bg-emerald-500 text-gray-800 active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button> */}
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
};
