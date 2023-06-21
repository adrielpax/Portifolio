import axios from "axios";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import React from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";

export const useFormPostApi = () => {
  const router = useRouter();

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
        toast.success("Sua mensagem foi enviada com sucesso !");
        console.log(content);
        resetForm();
        router.push("#profile");
      } catch (error) {
        toast.error("ops algo deu errado !");
        if (error) {
          setIsLoading(false);
        }
      }
    } else {
      toast.error("Preecha todos os valores !");
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

  return {
    isLoading,
    handleChange,
    handleSubmit,
    errors,
    touched,
    handleBlur,
    values,
    resetForm,
  };
};
