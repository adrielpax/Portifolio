export function HeroSection(){
    return(
    <>
        <div className="relative pt-16 pb-32
            flex content-center items-center justify-center"> 
            <div className="w-full h-full">
                <span className="w-full h-96 absolute opacity-100 bg-black mb-32">
                </span>
            </div>
        </div>
            <div className="container relative mx-auto">
                <div className="items-center flex flex-wrap">
                    <div className="w-full lg:w-6/12 px-4 mx-auto text-center">
                        <div>
                            <div className="text-white font-semibold text-3xl md:text-5xl">
                                Sua historia começa com quem faz historia !
                            </div>
                            <p className="text-white">
                                "#NeverStopLearning"
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}