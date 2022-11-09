import {Tooltip,Button} from '@material-tailwind/react';
export function HomeCard(){
    return(
        <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
            <div className="px-4 py-5 flex-auto bg-white rounded shadow-md">
                <Tooltip content="ReactJS">
                    <Button variant='filled' 
                    className="text-white p-3 
                    text-center inline-flex items-center 
                    justify-center w-12 h-12 mb-5 shadow-lg rounded 
                    bg-[#48cae4]">
                        
                    </Button>
                </Tooltip>
                <h6 className="text-xl font-semibold">
                    Awarded Agency
                </h6>
                <p className="mt-2 mb-4 text-slate-500">
                Divide details about your product or agency work into parts. A paragraph describing a feature will be enough.
                </p>
            </div>
        </div>
    )
}