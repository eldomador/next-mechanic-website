import Link from "next/link";

import { FaBars } from "react-icons/fa";
import { Toggle } from "../Toggle";
import {
  LeftColumn,
  RightColumn,
  MobileIcon,
  Nav,
  NavIcon,
  StyledLink,
} from "./NavbarElements";

const Navbar = ({ toggle, theme, toggleTheme }) => {
  return (
    <Nav>
      <LeftColumn>
        <Link href="/" passHref>
          <StyledLink>
            <NavIcon />
          </StyledLink>
        </Link>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
      </LeftColumn>
      <RightColumn>
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
      </RightColumn>
    </Nav>
  );
};

export default Navbar;
