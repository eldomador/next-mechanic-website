import styled from "styled-components";
import Logo from "../Icons/Logo";

export const Nav = styled.nav`
  min-height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 3vw;
  margin-left: 2vw;

  @media screen and (max-width: 768px) {
    display: flex;
    margin-left: 3vw;
  }
`;
export const LeftColumn = styled.div`
  display: flex;
`;

export const RightColumn = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    font-size: 26px;
    cursor: pointer;
    margin-left: 20px;
  }
`;
export const StyledLink = styled.a`
  font-size: 20px;
  padding: 0px 20px;

  @media screen and (max-width: 768px) {
    display: none;
  }

  &:hover {
    color: #01bf71;
    transition: 0.2s ease-in-out;
  }
`;

export const NavIcon = styled(Logo)`
  height: 40px;

  &:hover {
    color: #01bf71;
    transition: 0.2s ease-in-out;
  }
`;
