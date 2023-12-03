import { usePathname } from "next/navigation";
import React from "react";

export default function servicesPages() {
  const pathname = usePathname();
  return <div>servicesPages : {pathname} </div>;
}
