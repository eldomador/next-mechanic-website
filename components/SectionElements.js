import styled from "styled-components";
import ReactPlayer from "react-player/youtube";

export const Section = styled.div`
  display: flex;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Heading = styled.h1`
  font-size: 4vw;
  font-weight: 900;

  @media screen and (max-width: 768px) {
    font-size: 10vw;
  }
`;

export const Paragraph = styled.p`
  display: flex;
  align-items: center;
  font-size: 2vw;

  @media screen and (max-width: 768px) {
    font-size: 4vw;
  }
`;

export const StyledLink = styled.a`
  &:hover {
    color: #01bf71;
    transition: 0.2s ease-in-out;
  }
`;

export const TextContainer = styled.div`
  margin-left: 8vw;
  margin-right: 1vw;
  width: 50%;
  height: 100%;

  @media screen and (max-width: 768px) {
    margin: 0;
    width: 80%;
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
    background: ${({ primary }) => (primary ? "#fff" : "#01BF71")};
  }
`;

export const List = styled.ul`
  list-style-type: square;
`;

export const ListItems = styled.li`
  font-size: 2vw;

  @media screen and (max-width: 768px) {
    font-size: 4vw;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: stretch;
  margin-right: 8vw;
  margin-left: 1vw;
  width: 50%;
  height: 100%;
  min-height: 400px;
  @media screen and (max-width: 768px) {
    margin: 4vh 0;
    width: 80%;
  }
`;

export const VideoContainer = styled.div`
  margin-top: 4vw;
  margin-right: 8vw;
  margin-left: 1vw;
  width: 50%;
  height: 100%;
  @media screen and (max-width: 768px) {
    margin: 4vh 0;
    width: 80%;
  }
`;

export const PlayerWrap = styled.div`
  position: relative;
  padding-top: 56.25%; /* Player ratio: 100 / (1280 / 720) */
`;
export const Player = styled(ReactPlayer)`
  position: absolute;
  top: 0;
  left: 0;
`;
