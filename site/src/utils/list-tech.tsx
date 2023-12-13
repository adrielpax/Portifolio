import { Button, Tooltip } from "@material-tailwind/react";

interface Props {
  props: {
    text: string;
    color: string;
    colorIcon: string;
    icon: JSX.Element;
    mobile: string;
  };
}

export function ListTech({ props }: Props) {
  return (
    
      <Tooltip
        interactive={true}
        content={props.text}
        placement={"top"}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0, y: 25 },
        }}
      >
        <Button
          variant="filled"
          className={`${props.colorIcon} p-3 
                text-center inline-flex items-center
                justify-center mb-5 w-12 rounded-none 
                ${props.color} font-semibold hover:-translate-y-1
                shadow m-1`}
        >
          {props.icon}
        </Button>
      </Tooltip>
  );
}
