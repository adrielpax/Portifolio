import { Typography } from "@material-tailwind/react"

interface Props{
    Title:string
}

export function InfoCard({Title}:Props){
    return(
        <div className="bg-white w-[80%] mx-auto my-7 h-52 rounded  
            shadow-md md:shadow-xl md:hover:shadow-2xl">
            <div className="p-8">
                <Typography variant="h5">
                    {Title}
                </Typography>
            </div>
        </div>
    )
}