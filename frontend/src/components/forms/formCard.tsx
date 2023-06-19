import * as Yup from "yup";
import React from "react";
import axios from "axios";
// import { ChangeEvent, useState } from "react";
import { useFormik } from "formik";
// import requestBodyForm from "../../hook/requestBodyForm";
import { TextAreaRow, InputRow } from "./input";
import { ButtonComponent } from "../index";

export function FormCard() {
  // const [email, setEmail] = useState(String);
  // const [name, setName] = useState(String);
  // const [message, setMessage] = useState(String);

  // const { schemaValidation } = requestBodyForm();

  const [isLoading, setIsLoading] = React.useState(Boolean);

  const nameRegex = /^[a-z A-Z]+$/;

  const schemaValidation = Yup.object().shape({
    name: Yup.string()
      .min(4, "O nome deve ter mais que 4 caracteres")
      .max(30, "O nome nao pode ter mais de 30 caracteres")
      .matches(nameRegex, "esse formato nao é valido")
      .required("O seu nome é nescessario"),
    email: Yup.string()
      .email("O email deve ser valido")
      .required("O email é invalido"),
    message: Yup.string()
      .required("Não deixe de mandar sua mensagem")
      .max(60, "A mensagem deve ser de no maximo 60 caracteres"),
    date: Yup.string().default(() => new Date().toLocaleDateString()),
  });

  async function onSubmitPostApi() {
    const valid = await schemaValidation.validate(values);

    if (valid) {
      try {
        alert("Sua mensagem foi enviada com suscesso");
        setIsLoading(true);
        const response = await axios.post("api/submit", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values, null, 4),
        });
        const content = await response.data;
        resetForm();
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    }
  }

  const {
    values,
    resetForm,
    handleChange,
    handleSubmit,
    errors,
    touched,
    handleBlur,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
      date: new Date().toLocaleDateString(),
    },
    validationSchema: schemaValidation,
    onSubmit: onSubmitPostApi,
  });

  React.useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        resetForm();
      }, 3000);
    }
  }, [isLoading, resetForm]);

  return (
    <div className={`rounded p-4 w-full h-auto mx-auto`}>
      <form onSubmit={handleSubmit} className="m-0">
        <div className="flex flex-col items-center gap-2">
          <div className="flex flex-col text-center">
            {errors.name && touched.name ? (
              <span className="text-pink-500">{errors.name}</span>
            ) : null}
            <InputRow
              id={"name"}
              type={"text"}
              holder={""}
              label="Nome"
              handle={handleChange}
              value={values.name}
              error={errors.name}
              blur={handleBlur}
            />
          </div>

          <div className="flex flex-col text-center">
            {errors.email && touched.email ? (
              <span className="text-pink-500">{errors.email}</span>
            ) : null}
            <InputRow
              id={"email"}
              type={"text"}
              holder={""}
              label="email"
              handle={handleChange}
              value={values.email}
              error={errors.email}
              blur={handleBlur}
            />
          </div>
        </div>

        <div className="flex flex-col text-center">
          {errors.message && touched.message ? (
            <span className="text-pink-500">{errors.message}</span>
          ) : null}
          <div className="flex justify-center mt-4">
            <TextAreaRow
              id={"message"}
              holder={""}
              label="Mensagem"
              handle={handleChange}
              value={values.message}
              error={errors.message}
              blur={handleBlur}
            />
          </div>
        </div>

        <div className="w-full flex justify-center mb-4">
          <ButtonComponent
            type="submit"
            onClick={onSubmitPostApi}
            disable={isLoading}
          >
            {isLoading ? "Enviando..." : "Enviar mensagem"}
          </ButtonComponent>
        </div>
      </form>
    </div>
  );
}
