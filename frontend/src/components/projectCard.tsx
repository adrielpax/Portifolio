import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography
} from "@material-tailwind/react"

export function ProjectCard(){
    return(
        <Card className="flex mx-auto w-96 rounded my-20 shadow-md md:shadow-xl md:hover:shadow-2xl">
            <CardHeader color="gray" className="relative h-56 rounded text-center">
                Em Breve!
            </CardHeader>
            <CardBody className="text-center">
                <Typography variant="h5" className="mb-2">
                    Em Breve !
                </Typography>
                <Typography>
                    Em Breve !
                </Typography>
            </CardBody>
            <CardFooter divider className="flex items-center justify-between py-3">
                <Typography variant="small">
                    Link
                </Typography>
            </CardFooter>
        </Card>
    )
}