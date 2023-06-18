import React, { useState, useRef } from 'react';

interface inputProps {
    id:string,
    type:string,
    holder:string,
    value?:string,
    label?:string,
    handle:(e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextAreaRow:React.FC<inputProps> = ({ id, type, holder, value, handle, label }:inputProps) => {
    const [isFocused, setIsFocused] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleFocus = () => {
        setIsFocused(true);
        inputRef.current!.focus();   
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    let labelClass = 'text-base';
    if (isFocused || value) {
        labelClass = 'text-md -translate-y-6 bg-white w-auto px-2 text-center rounded';
    }

    return (
        <div className="mb-6">
            <div className={`relative ${isFocused ? 'mb-2' : 'mb-4'}`}>
                <input
                    ref={inputRef}
                    className={`border border-gray-500 rounded-md z-50 appearance-none 
                    bg-white w-full md:w-full py-3 px-3 text-gray-800 leading-tight focus:outline-none
                     focus:bg-white focus:ring-2 focus:ring-blue-500
                     ${isFocused ? 'focus:shadow-outline bg-white' : ''}`}
                    name={id}
                    value={value}
                    onChange={handle}
                    type={type}
                    placeholder={holder}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />
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
    )
};
export default TextAreaRow;

