import { ChangeEvent, useState } from "react";
import { useFormik } from "formik";
import requestBodyForm from "../../hook/requestBodyForm";

import { TextAreaRow,InputRow } from "./input";
import {ButtonComponent} from "../index";

export function FormCard() {
  const [email, setEmail] = useState(String);
  const [name, setName] = useState(String);
  const [message, setMessage] = useState(String);

  const { schemaValidation } = requestBodyForm();

  const { values, resetForm, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        message: "",
        date: new Date().toLocaleDateString(),
      },
      validationSchema: schemaValidation,
      onSubmit: onSubmitPostApi,
    });

  async function onSubmitPostApi() {
    const valid = await schemaValidation.validate(values);

    if (valid) {
      const response = await fetch("api/submit", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values, null, 4),
      });
      alert("Sua mensagem foi enviada com suscesso");
      const content = await response.json();
      resetForm();
    }
  }

  return (
    <div className={`rounded p-4 w-full h-auto mx-auto`}>
      <form
        onSubmit={handleSubmit}
        className="m-0"
      >
        <div className="flex flex-col items-center gap-2">
          <InputRow
            id={"name"}
            type={"text"}
            holder={""}
            label="Nome"
            handle={(e: any) => setName(e.target.value)}
            value={name}
          />
          <InputRow
            id={"email"}
            type={"text"}
            holder={""}
            label="email"
            handle={(e: any) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="flex justify-center mt-4">
          <TextAreaRow 
          id={"message"} 
          holder={""} 
          label="Mensagem"
          handle={(e:any)=>setMessage(e.target.value)}
          value={message}
          />
        </div>
        <div className="w-full flex justify-center mb-4">

        <ButtonComponent 
          type="submit"
          onClick={onSubmitPostApi}
        >
          Enviar mensagem
        </ButtonComponent>
        </div>
      </form>
    </div>
  );
}
