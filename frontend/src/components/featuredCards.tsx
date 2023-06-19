import React from "react";

interface Feature {
  id: number;
  icon: JSX.Element;
  colorIcon?:string
  title: string;
  description: string;
}

interface FeaturesProps {
  features: Feature[];

}

const Features: React.FC<FeaturesProps> = ({ features }) => {
  return (
    <div className="flex flex-wrap justify-around">
      {features.map((feature) => (
        <div
          key={feature.id}
          className={`w-80 lg:w-96 p-4 bg-white shadow-lg rounded my-2 border border-blue-500 `}
        >
          <div className="flex flex-col items-center">
            <div className={`${feature.colorIcon} h-8 w-8 my-4`}>
              {feature.icon}
            </div>
            <h3 className="text-lg font-bold mb-2 text-blue-500 text-center">
              {feature.title}
            </h3>
            <p className="text-blue-gray-500 text-center">
              {feature.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Features;
