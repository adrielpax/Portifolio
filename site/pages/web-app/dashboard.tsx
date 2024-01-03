import React from "react";
import axios from "axios";
import dynamic from "next/dynamic";
import { Loading } from "../../src/components/utilsComponents";

import { useGetData } from "../../src/hook/useGetData";
// import Card from "../src/components/cards/card";


const CardComponent = dynamic(async()=>await import('../../src/components/cards/card'),{
  ssr:false,
  loading:()=>{
    return <Loading/>
  }
})


const Dashboard = () => {
  const data = [
    {
      title: "Card 1",
      name: "John Doe",
      email: "john@example.com",
      message:
        "ola gostaria de estar entrando em contato com vc para uma oportunidade de emprego na area de tecnologia vimos seu curriculo e bla bla bla bla bla",
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
  const navbarHeight = 64;

  const getData = async () => {
    try{
      const response = await axios.get('api/getdata')
      console.log(response)
    }catch(err){
      console.log(err)
    }
  };

  getData();

  return (
    <>
      <div
        className="flex flex-col bg-gray-200"
        style={{ paddingTop: navbarHeight }}
      >
        <div className="py-6 px-4">
          <h1 className="text-3xl font-bold">Dashboard</h1>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 overflow-y-scroll mb-40">
          <p className="text-gray-500 mb-4">{`Total mensagens: ${data.length}`}</p>
          {data.map((cardData, index) => (
            <CardComponent index={""} key={index} {...cardData} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
function fetchData() {
  throw new Error("Function not implemented.");
}
