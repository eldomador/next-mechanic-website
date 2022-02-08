import styled from "styled-components";

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

export const ImageContainer = styled.div`
  margin-right: 8vw;
  margin-left: 1vw;
  width: 50%;
  height: 100%;
  @media screen and (max-width: 768px) {
    margin: 0;
    width: 80%;
  }
`;
