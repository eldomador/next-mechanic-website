import Link from "next/link";

import { FaBars } from "react-icons/fa";
import { Toggle } from "../Toggle";
import {
  Column1,
  Column2,
  MobileIcon,
  Nav,
  NavIcon,
  StyledLink,
} from "./NavbarElements";

const Navbar = ({ toggle, theme, toggleTheme }) => {
  return (
    <Nav>
      <Column1>
        <Link href="/" passHref>
          <StyledLink>
            <NavIcon />
          </StyledLink>
        </Link>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
      </Column1>
      <Column2>
        <Link href="/" passHref>
          <StyledLink>Home</StyledLink>
        </Link>
        <Link href="/about" passHref>
          <StyledLink>About</StyledLink>
        </Link>
        <Link href="/contact" passHref>
          <StyledLink>Contact</StyledLink>
        </Link>
        <Toggle theme={theme} toggleTheme={toggleTheme} />
      </Column2>
    </Nav>
  );
};

export default Navbar;
