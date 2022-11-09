export function ProjectCard(){
    return(
        <div className="w-full md:w-4/12 px-4 py-4 mr-auto ml-auto bg-blue-gray-500">
            <div className="relative flex flex-col min-w-0 break-words 
             w-full mb-6 shadow-lg rounded-lg bg-white">
                <div className="w-full h-64 align-middle rounded-t-lg">
                </div>
                <blockquote className="relative p-8 mb-4">
                    <h4 className="text-xl font-bold text-white"></h4>
                    <p className="text-md font-light mt-2 text-white">

                    </p>
                </blockquote>
            </div>
        </div>
    )
}