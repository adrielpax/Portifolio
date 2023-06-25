interface Prop {
  text: string;
  refer: string;
}

export const FooterList = ({ ...props }: Prop) => {
  return (
    <ul className="list-unstyled">
      <li>
        <a
          target="blank"
          className="text-blue-gray-900 hover:text-light-blue-300 block pb-2 text-sm
                w-auto dark:text-white dark:border-[#a53fff]
                dark:hover:text-[#a53fff]"
          href={props.refer}
        >
          {props.text}
        </a>
      </li>
    </ul>
  );
};
