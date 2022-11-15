export function PersonalCard(){
    return(
        <div className="w-full md:w-4/12 px-4 py-8 mr-auto ml-auto">
            <div className="relative flex flex-col min-w-0 break-words 
             w-full mb-6 shadow-lg rounded-lg bg-white">
                <div className="w-full h-52 align-middle rounded-t-lg bg-gray-500">
                </div>
                <blockquote className="relative p-8 mb-4">
                    <h4 className="text-xl font-bold text-blue-gray-400">
                        This is a project
                    </h4>
                    <p className="text-md font-light mt-2 text-blue-gray-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Aperiam officiis exercitationem deserunt minus cumque labore corrupti eius tenetur! Hic, iusto! Voluptatum reprehenderit delectus beatae eum, 
                        architecto necessitatibus labore odit quibusdam.
                    </p>
                </blockquote>
            </div>
        </div>
    )
}