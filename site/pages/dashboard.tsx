import React from "react";
import Card from "../src/components/cards/card";

const Dashboard = () => {
  const data = [
    {
      title: "Card 1",
      name: "John Doe",
      email: "john@example.com",
      message: "Hello, World!",
      business: "ABC Company",
      number: 42,
      date: "22/22/22",
    },
    {
      title: "Card 2",
      name: "Jane Smith",
      email: "jane@example.com",
      message: "Lorem ipsum dolor sit amet",
      business: "XYZ Corporation",
      number: 99,
      date: "22/22/22",
    },
    {
      title: "Card 3",
      name: "Jane Smith",
      email: "jane@example.com",
      message: "Lorem ipsum dolor sit amet",
      business: "XYZ Corporation",
      number: 99,
      date: "22/22/22",
    },
    // Adicione mais dados para criar mais cards
  ];

  return (
    <div className="flex justify-center items-center h-screen w-full bg-gray-200">
      <div className="flex flex-col items-center space-y-6 max-h-full overflow-y-auto">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
        {data.map((cardData, index) => (
          <Card index={""} key={index} {...cardData} />
        ))}
        <p className="text-gray-500 mt-4">{`Total Cards: 6`}</p>
      </div>
    </div>
  );
};

export default Dashboard;
