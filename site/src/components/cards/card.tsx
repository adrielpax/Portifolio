import React from "react";
import { ButtonComponent } from "../homeComponents";
import icons from "../../utils/icons/icons";
import { useHandleCopy } from "../../hook/useHandleCopy";

interface props {
  name: string;
  email: string;
  message: string;
  business: string;
  number: number;
  index: string;
  date: string;
}

const Card = ({ name, email, message, business, number, date }: props) => {
  const { textRef, handleCopy } = useHandleCopy();
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-auto md:w-96">
      <h2 className="text-xl font-bold mb-4">{business}</h2>
      <p className="text-gray-700 mb-2">
        <span className="font-bold">Name:</span> {name}
      </p>
      <p className="text-gray-700 mb-2">
        <span className="font-bold">Email:</span>
        <div ref={textRef}>{email}</div>
      </p>
      <p className="text-gray-700 mb-2">
        <span className="font-bold">Message:</span> {message}
      </p>
      <p className="text-gray-700 mb-2">
        <span className="font-bold">Number:</span>
        <a
          href={`https://wa.me/${number}`}
          className="hover:text-blue-500"
          target="_blank"
          rel="noreferrer"
        >
          {number}
        </a>
      </p>
      <p className="text-gray-700 mb-2">
        <span className="font-bold">Date:</span> {date}
      </p>
      <div className="flex justify-between">
        <ButtonComponent onClick={handleCopy}>{icons.email}</ButtonComponent>
        <ButtonComponent
          className="text-red-500 font-bold py-2 px-4 rounded
        bg-gray-400 border border-gray-400 hover:bg-red-500 hover:text-white"
        >
          {icons.delete}
        </ButtonComponent>
      </div>
    </div>
  );
};

export default Card;
