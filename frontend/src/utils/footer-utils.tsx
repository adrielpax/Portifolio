
interface Prop {
    text: string
    refer: string
}

export const FooterList = ({...props}:Prop)=>{
    return(
        <ul className="list-unstyled">
            <li>
            <a  target="blank"
                className="text-blue-gray-900 hover:text-light-blue-300 block pb-2 text-sm
                hover:border-b-2 hover:border-light-blue-300"
                href={props.refer}>{props.text}     
            </a>
            </li>
        </ul>
    )
}
