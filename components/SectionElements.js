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
    margin: 4vw 0;
    width: 80%;
  }
`;

export const SectionService = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const ServiceCardWrapper = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1150px) {
    flex-direction: column;
  }
`;

export const VideoContainer = styled.div`
  width: 50%;
  height: 100%;
  margin-top: 18vh;
  margin-bottom: 4vh;
  @media screen and (max-width: 1150px) {
    margin-top: 6vh;
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
