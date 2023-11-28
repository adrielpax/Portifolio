import ButtonComponent from "../buttons/button";

interface Prop {
  text: string;
}

export function HeroSection({ text }: Prop) {
  return (
    <div
      className="bg-gradient-to-b from-[#0047FF] to-[#00F0FF] 
    flex flex-col justify-center items-start gap-6 self-stretch px-6 py-12
    md:gap-[136px] md:px-28 md:py-24 md:items-center md:flex-row"
    >
      <div
        className="flex flex-col items-start gap-6 self-stretch
      md:w-[592px] md:flex-col md:items-start md:gap-8 text-white"
      >
        <h1>Titulo</h1>
        <h2>Sub Titulo</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A nam
          placeat tempora dicta omnis consequuntur non rerum dolore quis natus
          ut reprehenderit doloribus, facilis velit animi adipisci. Voluptas,
          dolorum mollitia!
        </p>
        <div className="flex items-start gap-4">
          <ButtonComponent className="bg-blue-500 rounded-md">My Resume</ButtonComponent>
          <ButtonComponent className="bg-white rounded-md text-blue-gray-500">Get in Touch</ButtonComponent>
        </div>
      </div>
      <div className="w-[312px] h-[266px] shrink-0 bg-[whitesmoke]"></div>
    </div>
  );
}
