import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import Logo from "../components/Icons/Logo";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Roboto', sans-serif;
    transition: all .5s linear;
  }

  p {
    line-height: 1.4rem;
  }
`;

export const Button = styled.button`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 12px 36px;
  color: inherit;
  font-size: 16px;
  font-weight: bold;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2 ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.body};
  }
`;

export const lightTheme = {
  body: "#fff",
  text: "#121212",
};

export const darkTheme = {
  body: "#121212",
  text: "#fff",
};

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.text};
  height: 30vw;
  width: 20vw;
  border-radius: 0.3vw;

  @media screen and (max-width: 1150px) {
    height: 100vw;
    width: 100%;
    margin-top: 6vh;
  }
`;

export const CardImageWrapper = styled.div``;

export const CardH2 = styled.h2`
  color: ${({ theme }) => theme.body};
  margin-bottom: 0.1vw;
  font-size: 2vw;

  @media screen and (max-width: 1150px) {
    font-size: 6vw;
  }
`;

export const CardP = styled.p`
  color: ${({ theme }) => theme.body};
  font-size: 1vw;
  margin-left: 1vw;
  margin-right: 1vw;

  @media screen and (max-width: 1150px) {
    font-size: 4vh;
    line-height: 100%;
  }

  @media screen and (max-width: 768px) {
    font-size: 4vw;
  }
`;

export const CardIcon = styled(Logo)`
  color: ${({ theme }) => theme.body};
  height: 3vw;
  @media screen and (max-width: 1150px) {
    height: 6vw;
  }
`;
