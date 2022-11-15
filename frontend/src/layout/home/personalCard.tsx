import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
  } from "@material-tailwind/react";

export function PersonalCard(){
    return(
    <Card className="w-96 mx-auto rounded shadow-md md:shadow-xl md:hover:shadow-2xl
        my-32"
    >
        <CardHeader floated={false} className="h-80 bg-gray-600 rounded">
        </CardHeader>

        <CardBody className="text-center">
            <Typography variant="h4" color="blue-gray" className="mb-2">
                Adriel Lucas
            </Typography>
            <Typography color="blue" className="font-medium" textGradient>
                Web Developer / Full-Stack
            </Typography>
        </CardBody>

        <CardFooter className="flex justify-center gap-7 pt-2">
            <Tooltip content="Like">
                <Typography
                    as="a"
                    href="#facebook"
                    variant="lead"
                    color="blue"
                    textGradient
                >
                    <i className="fab fa-facebook" />
                </Typography>
                </Tooltip>
                <Tooltip content="Follow">
                <Typography
                    as="a"
                    href="#twitter"
                    variant="lead"
                    color="light-blue"
                    textGradient
                >
                    <i className="fab fa-twitter" />
                </Typography>
                </Tooltip>
                <Tooltip content="Follow">
                <Typography
                    as="a"
                    href="#instagram"
                    variant="lead"
                    color="purple"
                    textGradient
                >
                    <i className="fab fa-instagram" />
                </Typography>
            </Tooltip>
        </CardFooter>
    </Card>
    )
}