
type Prop = {
    text:{
        textOne:string
        textTwo:string
        textTree:string
        textFour:string
    }
}

export const FooterList = ({text}:Prop)=>{
    return(
        <ul className="list-unstyled">
            <li>
            <a className="text-blue-gray-900 hover:text-light-blue-300 block pb-2 text-sm
                hover:border-b-2 hover:border-light-blue-300"
                href="https://www.creative-tim.com/presentation">{text.textOne}
            </a>
            </li>
            <li>
            <a className="text-blue-gray-900 hover:text-light-blue-300 block pb-2 text-sm
                hover:border-b-2 hover:border-light-blue-300"
                href="https://blog.creative-tim.com">{text.textTwo}
            </a>
            </li>
            <li>
            <a className=" text-blue-gray-900 hover:text-light-blue-300 block pb-2 text-sm
            hover:border-b-2 hover:border-light-blue-300"
                href="https://www.github.com/creativetimofficial">{text.textTree}
            </a>
            </li>
            <li>
            <a className="text-blue-gray-900 hover:text-light-blue-300 block pb-2 text-sm
            hover:border-b-2 hover:border-light-blue-300"
                href="https://www.creative-tim.com/bootstrap-themes/free">{text.textFour}
            </a>
            </li>
        </ul>
    )
}
export const FooterList2 = (
    <ul className="list-unstyled">
    <li>
      <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
        href="https://github.com/creativetimofficial/argon-design-system/blob/master/LICENSE.md">MIT License
    </a>
    </li>
    <li>
      <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
        href="https://creative-tim.com/terms">Terms & Conditions
      </a>
    </li>
    <li>
      <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
        href="https://creative-tim.com/privacy">Privacy Policy
      </a>
    </li>
    <li>
      <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
        href="https://creative-tim.com/contact-us">Contact Us
      </a>
    </li>
  </ul>

)