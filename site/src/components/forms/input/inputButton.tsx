import React from "react";
import InputRow from "./inputRow";
import { ButtonComponent } from "../../homeComponents";
import { RiMailSendFill } from "react-icons/ri";
import { useFormPostApi } from "../../../hook/form";

export default function InputButton() {
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
  return (
    <form onSubmit={handleSubmit} className="flex items-center mx-2 gap-0">
      
      <InputRow
        className="mr-4"
        id={"email"}
        type={""}
        error={errors.email}
        value={values.email}
        holder={"Email"}
        handle={handleChange}
        blur={handleBlur}
      />
      <ButtonComponent
        className="bg-[#121212] rounded-md z-20 
            shadow-none transition-transform py-2 px-4
            active:scale-95  text-white active:bg-[#12121299]
            border border-transparent hover:border-white "
        type="submit"
      >
        Enviar
        <RiMailSendFill />
      </ButtonComponent>
    </form>
  );
}
