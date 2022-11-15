import { Typography, Button } from "@material-tailwind/react"

interface Props{
    Title:string
    index:boolean
}

export function InfoCard({Title,index}:Props){
    return(
        <div className="bg-white w-[80%] mx-auto my-7 h-auto rounded  
            shadow-md md:shadow-xl md:hover:shadow-2xl">
            <div className="p-8 h-[100%]">
                <Typography 
                    variant="h5"
                >
                    {Title}
                </Typography>
            {!index ? (
                <>
                <div className="p-4 text-justify">
                    <div>
                        <p>
                            Meu nome e Adriel completei 18 anos 
                            em junho de 2021 , eu programo desde 
                            os 15 brincava muito com HTML,CSS e 
                            JS e não sabia o poder que tinha em 
                            minhas mãos, começei a me desenvolver 
                            mais com 17 aprofundar bastante em jogos
                            e projetos, e eu estou em busca de um
                            job eu quero começar cedo um bloco de
                            codigo de cada vez, e poder me desenvolver
                            melhor com as tecnologias. #neverstoplearning
                        </p>
                        <p className="mt-2"></p>
                    </div>
                </div>
                <div className="relative bottom-0">
                        <Button 
                            variant="text"
                            size='sm'
                            color="light-blue"
                            className='rounded bg-[whitesmoke] hover:bg-gray-300 mx-1'
                        >
                            GitHub
                        </Button>
                        <Button 
                            variant="text"
                            size='sm'
                            color="light-blue"
                            className='rounded bg-[whitesmoke] hover:bg-gray-300 mx-1'
                        >
                            Linkedin
                        </Button>
                </div>
                </>) : (<></>)
                }
            </div>
        </div>
    )
}