import styled from "styled-components";

export const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 500px;
`;

export const Heading = styled.h1`
  font-size: 10rem;
  font-weight: 900;

  @media screen and (max-width: 768px) {
    font-size: 5rem;
  }
`;
