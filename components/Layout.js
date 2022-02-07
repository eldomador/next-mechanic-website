import styled, { ThemeProvider } from "styled-components";
import Footer from "./Footer";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";
import React, { useState } from "react";
import { GlobalStyles, darkTheme, lightTheme } from "../styles/globalStyles";
import { useTheme } from "../styles/useTheme";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default function Layout({ children }) {
  const [theme, toggleTheme] = useTheme();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <ThemeProvider theme={themeMode}>
      <Container>
        <GlobalStyles />
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} theme={theme} toggleTheme={toggleTheme} />
        {children}
        <Footer />
      </Container>
    </ThemeProvider>
  );
}
