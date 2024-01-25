import styled from "styled-components";
import Header from "./components/Header";
import Sentence from "./components/Sentence";
import Footer from "./components/Footer";

const StyledSplash = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #000000;
`;

function Splash() {
  return (
    <StyledSplash>
      <Header />
      <Sentence />
      <Footer />
    </StyledSplash>
  );
}

export default Splash;
