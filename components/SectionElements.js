import styled from "styled-components";
import ReactPlayer from "react-player";

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
  align-items: center;
  margin-right: 8vw;
  margin-left: 1vw;
  width: 50%;
  height: 100%;
  @media screen and (max-width: 768px) {
    margin: 0;
    width: 80%;
  }
`;