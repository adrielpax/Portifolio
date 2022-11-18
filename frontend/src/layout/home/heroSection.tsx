export function HeroSection(){
    return(
    <>
        <div className="relative pt-16 pb-32
            flex content-center items-center justify-center"> 
            <div className="w-full h-full dark:bg-gradient-to-r dark:from-purple-700 dark:to-pink-600 
            bg-gradient-to-r from-cyan-500 to-blue-500">
                <div className="w-full h-96 absolute top-6 opacity-100  mb-32
                ">
                </div>
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