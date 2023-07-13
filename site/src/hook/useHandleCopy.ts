import React, { useRef } from "react";
import { toast } from "react-toastify";

export const useHandleCopy = () => {
  const textRef = useRef<HTMLDivElement>(null);

  const handleCopy = () => {
    let text = '';

    if(textRef.current != null){
      text = textRef.current.innerText;
    }

    navigator.clipboard
      .writeText(text)
      .then(() => {
        toast.success("Texto copiado com sucesso!");
      })
      .catch((err) => {
        toast.error("Erro ao copiar o texto:", err);
      });
  };

  return{
    textRef,
    handleCopy
  }
};
