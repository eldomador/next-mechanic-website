import styled from "styled-components";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default function Layout({ children }) {
  return (
    <Container>
      <Navbar />
      {children}
      <Footer />
    </Container>
  );
}
