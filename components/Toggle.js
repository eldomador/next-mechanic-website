import React from "react";
import Moon from "./Icons/Moon";
import Sun from "./Icons/Sun";
import styled from "styled-components";

const MoonIcon = styled(Moon)`
  height: 26px;
  width: 26px;
`;
const SunIcon = styled(Sun)`
  height: 26px;
  width: 26px;
`;

const ThemeIcon = styled.div`
  height: 26px;
  margin-right: 20px;
  cursor: pointer;
`;

export const Toggle = ({ theme, toggleTheme }) => {
  return (
    <ThemeIcon onClick={toggleTheme}>
      {theme === "light" ? <MoonIcon /> : <SunIcon />}
    </ThemeIcon>
  );
};
