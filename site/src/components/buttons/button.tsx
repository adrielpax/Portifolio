import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  // Adicione quaisquer propriedades personalizadas que você desejar
  customProp?: string;
  disable?: boolean;
  icon?: JSX.Element;
  className?: string;
}

const ButtonComponent: React.FC<ButtonProps> = ({
  children,
  className,
  disable,
  icon,
  ...rest
}) => {
  return (
    <button
      className={`font-semibold font-sans py-2 px-4 shadow-md
      flex items-center justify-center text-center gap-2 ${className}
      ${disable ? "bg-gray-500" : ""}`}
      disabled={disable}
      {...rest}
    >
      {icon}
      {children}
    </button>
  );
};

export default ButtonComponent;
