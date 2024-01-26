import { useState } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Sentence from "./components/Sentence";
import Footer from "./components/Footer";
import Modal from "./components/Modal";

const StyledSplash = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #000000;
`;

function Splash() {
  const [signinClicked, setSigninClicked] = useState(false);
  const [signupClicked, setSignupClicked] = useState(false);
  return (
    <StyledSplash>
      <Header
        signinTrue={() => setSigninClicked(true)}
        signupTrue={() => setSignupClicked(true)}
      />
      <Sentence />
      <Footer />
      {signinClicked && <Modal />}
      {signupClicked && <Modal />}
    </StyledSplash>
  );
}

export default Splash;
