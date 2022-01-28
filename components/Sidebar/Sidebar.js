import React from "react";
import Link from "next/link";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";

function Sidebar({ isOpen, toggle }) {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <Link href={"/"} passHref>
            <SidebarLink onClick={toggle}>Home</SidebarLink>
          </Link>
          <Link href={"/about"} passHref>
            <SidebarLink onClick={toggle}>About</SidebarLink>
          </Link>
        </SidebarMenu>
        <SideBtnWrap>
          <Link href={"/contact"} passHref>
            <SidebarRoute onClick={toggle}>Contact</SidebarRoute>
          </Link>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
}

export default Sidebar;
