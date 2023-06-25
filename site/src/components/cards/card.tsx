import React from "react";

interface props {
  name: string;
  email: string;
  message: string;
  business: string;
  number: number;
  index: string;
  date: string;
}

const Card = ({ name, email, message, business, number, date }:props) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-80">
      <h2 className="text-xl font-bold mb-4">{business}</h2>
      <p className="text-gray-700 mb-2">
        <span className="font-bold">Name:</span> {name}
      </p>
      <p className="text-gray-700 mb-2">
        <span className="font-bold">Email:</span> {email}
      </p>
      <p className="text-gray-700 mb-2">
        <span className="font-bold">Message:</span> {message}
      </p>
      <p className="text-gray-700 mb-2">
        <span className="font-bold">Business:</span> {business}
      </p>
      <p className="text-gray-700 mb-2">
        <span className="font-bold">Number:</span> {number}
      </p>
      <p className="text-gray-700 mb-2">
        <span className="font-bold">Date:</span> {date}
      </p>
    </div>
  );
};

export default Card;
