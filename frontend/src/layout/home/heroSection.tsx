export function HeroSection(){
    return(
    <>
        <div className="relative pt-16 pb-32 
            flex content-center items-center justify-center -z-20"> 
            <div className="w-full h-full">
                <span className="w-full h-96 absolute opacity-75 bg-light-blue-500">
                </span>
            </div>
        </div>
            <div className="container relative mx-auto">
                <div className="items-center flex flex-wrap">
                    <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                        <div>
                            <div className="text-white font-semibold text-5xl">
                                Sua historia começa com agente
                            </div>
                            <p className="text-white">
                                "This is a simple example of a 
                                Landing Page you can build using 
                                Tailwind Starter Kit. It features 
                                multiple CSS components based on the 
                                Tailwindcss design system."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}