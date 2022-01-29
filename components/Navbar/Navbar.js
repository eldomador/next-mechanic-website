import Link from "next/link";

import { FaBars } from "react-icons/fa";
import { MobileIcon, Nav, NavIcon, StyledLink } from "./NavbarElements";

const Navbar = ({ toggle }) => {
  return (
    <Nav>
      <div>
        <Link href="/" passHref>
          <StyledLink>
            <NavIcon />
          </StyledLink>
        </Link>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
      </div>
      <div>
        <Link href="/" passHref>
          <StyledLink>Home</StyledLink>
        </Link>
        <Link href="/about" passHref>
          <StyledLink>About</StyledLink>
        </Link>
        <Link href="/contact" passHref>
          <StyledLink>Contact</StyledLink>
        </Link>
      </div>
    </Nav>
  );
};

export default Navbar;
