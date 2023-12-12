interface Prop {
    text: string;
  }
  
  export function HeroSection({ text }: Prop) {
    return (
      <div>
        <div className="w-full container relative mx-auto">
          <div className=" items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 mx-auto text-center">
              <div className=" text-white font-semibold text-3xl lg:text-4xl">
                {/*Sua historia começa com quem faz historia !*/}
                {text}
              </div>
              <p className="text-white">#NeverStopLearning</p>
            </div>
          </div>
        </div>
      </div>
    );
  }