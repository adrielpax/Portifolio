import React, { useState, useRef } from "react";

interface inputProps {
  id: string;
  type: string;
  holder: string;
  value?: string;
  label?: string;
  error?: string;
  className?: string;
  handle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  blur: (e: any) => void;
}

const InputRow: React.FC<inputProps> = ({
  id,
  type,
  holder,
  value,
  handle,
  label,
  error,
  blur,
  className,
}: inputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    setIsFocused(true);
    inputRef.current!.focus();
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  let labelClass = "text-base";
  if (isFocused || value) {
    labelClass =
      "text-md -translate-y-6 bg-white w-auto px-2 text-center rounded";
  }

  return (
    <div className={``}>
      <div className={`relative ${isFocused ? "mb" : "mb"}`}>
        <input
          ref={inputRef}
          className={`border border-gray-500 rounded-md z-50 appearance-none
                    bg-white w-80 md:w-96 py-2 px-3 text-gray-800 leading-tight focus:outline-none
                     focus:bg-white focus:ring-2 focus:ring-blue-500 ${className || ""}
                     ${isFocused ? "focus:shadow-outline bg-white" : ""}
                     ${error ? "border-pink-500 text-pink-500" : ""}`}
          name={id}
          value={value}
          onChange={handle}
          type={type}
          placeholder={holder}
          onFocus={handleFocus}
          onBlur={blur}
        />
        {label && (
          <label
            onClick={handleFocus}
            className={`absolute z-0 top-2 left-3 text-gray-700 font-regular transition-all duration-300 ${labelClass}`}
            htmlFor={id}
          >
            {label}
          </label>
        )}
      </div>
    </div>
  );
};
export default InputRow;
