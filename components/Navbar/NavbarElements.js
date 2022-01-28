import styled from "styled-components";

export const Nav = styled.nav`
  min-height: 80px;
  background: #fff;
  color: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: flex-end;
  }
`;
export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    font-size: 26px;
    cursor: pointer;
    color: #000;
    margin-right: 20px;
  }
`;
export const StyledLink = styled.a`
  padding: 0rem 2rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavIcon = styled.img`
  height: 40px;
`;
