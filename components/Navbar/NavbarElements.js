import styled from "styled-components";

export const Nav = styled.nav`
  min-height: 80px;
  background: #000;
  color: #fff;
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
    color: #fff;
    margin-right: 20px;
  }
`;
export const StyledLink = styled.a`
  padding: 0rem 2rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
