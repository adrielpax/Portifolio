import React from "react";
import { ButtonComponent } from "../../components/utilsComponents";
import { MdOutlineMenuOpen } from "react-icons/md";
import { VscCloseAll } from "react-icons/vsc";

export default function MobileMenu() {
  const [openMenu, setOpenMenu] = React.useState(true);

  const clickToggle = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className="block md:hidden">
      <ButtonComponent className="shadow-none p-2 rounded-md" onClick={() => clickToggle()}>
        {openMenu ? (
          <MdOutlineMenuOpen className="w-8 h-8 text-[#12121299]" />
        ) : (
          <VscCloseAll className="w-8 h-8 text-[#12121299]" />
        )}
      </ButtonComponent>
    </div>
  );
}
