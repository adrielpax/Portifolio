import React from "react";

interface TextsProps {
  id: number;
  title: string;
  subTitle: string;
}

interface InfoCardProps {
  textsProps: TextsProps[];
  index: number;
}

const InfoCard: React.FC<InfoCardProps> = ({ textsProps, index }) => {
  const { title, subTitle } = textsProps[index];

  return (
    <div>
      <div className="w-full bg-transparent text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <p className="flex text-lg mb-8 md:w-1/2 justify-center mx-auto">
            {subTitle}
          </p>
          {/* Restante do código */}
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
