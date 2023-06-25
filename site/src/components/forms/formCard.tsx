import * as Yup from "yup";
import { TextAreaRow, InputRow } from "./input";
import { ButtonComponent } from "../homeComponents/index";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFormPostApi } from "../../hook/form/index";

export function FormCard() {
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

        <div className="flex flex-col mb-6 ">
          {errors.message && touched.message ? (
            <span className="text-pink-500 z-10 text-center mb-2">
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
          <div className="w-full flex justify-center mb-4">
            <div className="flex flex-col text-center">
              <p className=" flex mx-5 text-gray-500">
                Ao enviar uma mensagem você aceita receber mensagens por email !
              </p>
            </div>
          </div>
        </div>
        <ButtonComponent type="submit" disable={isLoading}>
          {isLoading ? "Enviado..." : "Enviar mensagem"}
        </ButtonComponent>
      </form>
    </div>
  );
}
