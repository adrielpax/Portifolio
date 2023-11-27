import React from "react";

interface WrapperProps {
  className?: string;
  children: React.ReactNode;
}

export default function Wrapper({ children, className }: WrapperProps) {
  return (
    <div
      className={`w-full max-w-[1200px] px-5 md:px-10 mx-auto  ${
        className || ""
      } `}
    >
      {children}
    </div>
  );
}
