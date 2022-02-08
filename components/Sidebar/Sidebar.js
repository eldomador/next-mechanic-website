import React from "react";
import Link from "next/link";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarLink,
} from "./SidebarElements";

function Sidebar({ isOpen, toggle }) {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <Link href={"/"} passHref>
        <SidebarLink onClick={toggle}>Home</SidebarLink>
      </Link>
      <Link href={"/uslugi"} passHref>
        <SidebarLink onClick={toggle}>Usługi</SidebarLink>
      </Link>
      <Link href={"/kontakt"} passHref>
        <SidebarLink onClick={toggle}>Kontakt</SidebarLink>
      </Link>
    </SidebarContainer>
  );
}

export default Sidebar;
