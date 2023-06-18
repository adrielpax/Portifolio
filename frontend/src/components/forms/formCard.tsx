import { Button, Input, Textarea, Tooltip } from "@material-tailwind/react";
import { useFormik } from "formik";
import requestBodyForm from "../../hook/requestBodyForm";
import InputRow from "./input/inputRow";
import { useState } from "react";

export function FormCard() {
  const [email, setEmail] = useState(String);
  const [name, setName] = useState(String);

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
      {/* <div className="flex mx-auto">
        <h2 className="mx-auto text-xl text-gray-800">Me mande uma mensagem</h2>
      </div> */}

      <form
        onSubmit={handleSubmit}
        // className="flex flex-col md:flex-col items-center justify-center bg-transparent "
      >
        <div className="flex justify-around">
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
        {/* <Input
          id="name"
          className={`${errors.name && touched.name ? "text-pink-500" : ""}`}
          type="text"
          variant="outlined"
          label="Seu nome ou Empresa"
          color={"blue"}
          value={values.name}
          onChange={handleChange}
        />
        <Input
          id="email"
          className={`${errors.email && touched.email ? "text-pink-500" : ""}`}
          type="email"
          variant="outlined"
          label="Seu email"
          color={"blue"}
          value={values.email}
          onChange={handleChange}
        />
        <Textarea
          id="message"
          className={`${errors.message && touched.message ? "text-pink-500" : ""}`}
          value={values.message}
          label="Deixe uma mensagem!"
          color={`blue`}
          onChange={handleChange}
        /> */}
        {/* 
        <Tooltip
          interactive={true}
          content={"Responderei em no maximo (1)um ou (2)Dois Dias"}
          placement={"top"}
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0, y: 25 },
          }}
        >
          <Button
            type="submit"
            variant="text"
            className={`bg-[#c5c4c46c] hover:bg-light-blue-600 hover:text-white hover:border-white h-10 w-48 rounded`}
          >
            Send a email
          </Button>
        </Tooltip> */}
      </form>
    </div>
  );
}
