import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  // Adicione quaisquer propriedades personalizadas que você desejar
  customProp?: string;
  disable?:boolean
}

const ButtonComponent: React.FC<ButtonProps> = ({ children, disable, ...rest }) => {
  return (
    <button
      className={`  text-white font-bold py-2 px-4 rounded
      ${disable?'bg-gray-500':'bg-blue-500 hover:bg-blue-700'}`}
      disabled={disable}
      {...rest}
    >
      {children}
    </button>
  );
};

export default ButtonComponent;
