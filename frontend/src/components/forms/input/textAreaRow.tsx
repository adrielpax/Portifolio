import React, { useState, useRef } from 'react';

interface textareaProps {
  id: string;
  holder: string;
  value?: string;
  label?: string;
  handle: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextAreaRow: React.FC<textareaProps> = ({
  id,
  holder,
  value,
  handle,
  label,
}: textareaProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleFocus = () => {
    setIsFocused(true);
    textareaRef.current!.focus();
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  let labelClass = 'text-base';
  if (isFocused || value) {
    labelClass =
      'text-md -translate-y-6 bg-white w-auto px-2 text-center rounded';
  }

  return (
    <div className="mb-6">
      <div className={`relative ${isFocused ? 'mb-2' : 'mb-4'}`}>
        <textarea
          ref={textareaRef}
          className={`border border-gray-500 rounded-md z-50 appearance-none bg-white w-80 md:w-96 h-64 py-3 px-3 text-gray-800 leading-tight focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500 ${isFocused ? 'focus:shadow-outline bg-white' : ''}`}
          name={id}
          value={value}
          onChange={handle}
          placeholder={holder}
          onFocus={handleFocus}
          onBlur={handleBlur}
        ></textarea>
        {label && (
          <label
            onClick={handleFocus}
            className={`absolute z-0 top-3 left-3 text-gray-700 font-regular transition-all duration-300 ${labelClass}`}
            htmlFor={id}
          >
            {label}
          </label>
        )}
      </div>
    </div>
  );
};

export default TextAreaRow;
