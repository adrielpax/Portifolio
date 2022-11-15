import { Typography } from "@material-tailwind/react"
import Link from "next/link"

export const NavList = (
    <ul className='mb-4 mt-2 flex flex-col gap-2 
        lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6'
    >
        <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-normal hover:border-b-2 hover:border-light-blue-300
            hover:text-light-blue-700"
        >
            <Link href='#' className='flex items-center'>
                Home
            </Link>
        </Typography>
        <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-normal hover:border-b-2 hover:border-light-blue-300
            hover:text-light-blue-700"
        >
            <Link href='#' className='flex items-center'>
                Projects
            </Link>
        </Typography>
        <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-normal hover:border-b-2 hover:border-light-blue-300
            hover:text-light-blue-700"
        >
            <Link href='#' className='flex items-center'>
                Contact
            </Link>
        </Typography>
    </ul>
)

export const MenuOpen = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        className="h-6 w-6"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
    >
    <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
    />
    </svg>
)
export const MenuClose = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
    >
    <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 6h16M4 12h16M4 18h16"
    />
    </svg>
)