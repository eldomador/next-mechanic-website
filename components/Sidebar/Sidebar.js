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
      <Link href={"/about"} passHref>
        <SidebarLink onClick={toggle}>About</SidebarLink>
      </Link>
      <Link href={"/contact"} passHref>
        <SidebarLink onClick={toggle}>Contact</SidebarLink>
      </Link>
    </SidebarContainer>
  );
}

export default Sidebar;
