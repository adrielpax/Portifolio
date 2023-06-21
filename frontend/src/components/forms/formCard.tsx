import * as Yup from "yup";
import React from "react";
import axios from "axios";
// import { ChangeEvent, useState } from "react";
import { useFormik } from "formik";
// import requestBodyForm from "../../hook/requestBodyForm";
import { TextAreaRow, InputRow } from "./input";
import { ButtonComponent } from "../index";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useRouter } from 'next/router'

export function FormCard() {

  const router = useRouter();

  // const [email, setEmail] = useState(String);
  // const [name, setName] = useState(String);
  // const [message, setMessage] = useState(String);

  // const { schemaValidation } = requestBodyForm();

  const [isLoading, setIsLoading] = React.useState(Boolean);
  const [displayErrors, setDisplayErrors] = React.useState(Boolean);

  const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
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
      .max(80, "A mensagem deve ser de no maximo 80 caracteres"),
    number: Yup.string()
      .min(9, "O numero deve conter no minino 11 numeros com o DDD")
      .max(12, "O numero deve conter 11 numeros com o DDD")
      .matches(phoneRegex, "coloque o formato certo")
      .required("O numero de celular com DDD é nescessario"),
    business: Yup.string()
      .min(4, "O nome da empresa deve ter mais que 4 caracteres")
      .max(30, "O nome da empresa nao pode ter mais de 30 caracteres")
      .matches(nameRegex, "esse formato nao é valido")
      .required("O nome da sua empresa é nescessario"),
    // emailmarkup: Yup.boolean(),
    date: Yup.string().default(() => new Date().toLocaleDateString()),
  });

  const onSubmitPostApi = async () => {
    
    const valid = await schemaValidation.validate(values);

    if (valid) {
      try {
        setIsLoading(true);
        const response = await axios.post(
          "/api/submit",
          JSON.stringify(values, null, 6),
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            // body: JSON.stringify(values, null, 6),
          }
        );
        const content = await response.data;
        toast.success('Sua mensagem foi enviada com sucesso !')
        console.log(content);
        resetForm();
        router.push('/#profile')
      } catch (error) {
        toast.error('ops algo deu errado !')
        if (error) {
          setIsLoading(false);
        }
      }
    }else{
      toast.error('Preecha todos os valores !')
    }
  };

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
      business: "",
      number: "",
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
      <ToastContainer />
      <form onSubmit={handleSubmit} className="m-0">
        <div className="flex flex-col items-center">
          <div className="flex flex-col">
            {errors.name && touched.name ? (
              <span className="text-pink-500 z-10 text-left mb-2">
                {errors.name}
              </span>
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
              <span className="text-pink-500 z-10 text-left mb-2">
                {errors.email}
              </span>
            ) : null}
            <InputRow
              id={"email"}
              type={"text"}
              holder={""}
              label="Email"
              handle={handleChange}
              value={values.email}
              error={errors.email}
              blur={handleBlur}
            />
          </div>

          <div className="flex flex-col text-center">
            {errors.business && touched.business ? (
              <span className="text-pink-500 z-10 text-left mb-2">
                {errors.business}
              </span>
            ) : null}
            <InputRow
              id={"business"}
              type={"text"}
              holder={""}
              label="Empresa"
              handle={handleChange}
              value={values.business}
              error={errors.business}
              blur={handleBlur}
            />
          </div>

          <div className="flex flex-col text-center">
            {errors.number && touched.business ? (
              <span className="text-pink-500 z-10 text-left mb-2">
                {errors.number}
              </span>
            ) : null}
            <InputRow
              id={"number"}
              type={"text"}
              holder={""}
              label="Numero de Contato"
              handle={handleChange}
              value={values.number}
              error={errors.number}
              blur={handleBlur}
            />
          </div>
        </div>

        <div className="flex flex-col mb-6">
          {errors.message && touched.message ? (
            <span className="text-pink-500 z-10 text-left mb-2">
              {errors.message}
            </span>
          ) : null}
          <div className="flex justify-center">
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

          <div className="flex flex-col text-center">
            <p className=" flex mx-5 text-gray-500">
              Ao enviar uma mensagem você aceita receber mensagens por email !
            </p>
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
