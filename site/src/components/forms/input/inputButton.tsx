import React from "react";
import InputRow from "./inputRow";
import { ButtonComponent } from "../../homeComponents";
import { RiMailSendFill } from "react-icons/ri";

export default function InputButton() {
  return (

      <form className="flex items-center mx-2 gap-4">
        <ButtonComponent
          className="bg-[#121212] rounded-md z-20 
            shadow-none transition-transform py-2 px-4
            active:scale-95  text-white active:bg-[#12121299]
            border border-transparent hover:border-white "
        >
          Enviar
          <RiMailSendFill />
        </ButtonComponent>
        <InputRow
          className="w-56 ml-4"
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
      </form>
 
  );
}
