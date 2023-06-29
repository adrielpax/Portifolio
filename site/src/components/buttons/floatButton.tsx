import React from "react";
import icons from "../../utils/icons/icons";

const FloatButton = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <a href="#up">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-lg"
          onClick={() => {
            // Adicione aqui a ação que deseja executar ao clicar no botão
            // console.log("Botão flutuante clicado!");
          }}
        >
          {icons.arrowUp}
        </button>
      </a>
    </div>
  );
};

export default FloatButton;
