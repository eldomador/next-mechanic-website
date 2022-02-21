import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

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
