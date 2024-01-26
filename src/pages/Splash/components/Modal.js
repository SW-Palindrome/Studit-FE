import styled from "styled-components";

const StyledModalOverlay = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.47);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledModal = styled.div`
  background: #1f2327;
  padding: 20px;
  border-radius: 0.75rem;
`;

const StyledCloseButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const StyledCloseButton = styled.img`
  cursor: pointer;
`;

const StyledMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 6rem;
  margin-bottom: 2rem;
`;

const StyledModalTitle = styled.p`
  text-align: center;
  color: white;
  font-family: "SBAggroB";
  font-size: 2rem;
`;

const StyledActionButton = styled.img`
  cursor: pointer;
  width: 23.3125rem;
  display: block;
  margin-bottom: 1rem;
`;

const StyledBottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

const StyledBottomInquery = styled.p`
  color: white;
  font-family: "SBAggroB";
  font-size: 1.5rem;
  margin-right: 0.5rem;
`;

const StyledBottomButton = styled.button`
  cursor: pointer;
  border: white 2px solid;
  border-radius: 0.75rem;
  background-color: transparent;
  color: white;
  font-family: "SBAggroB";
  font-size: 1.3rem;
  padding: 0.5rem 1rem;
`;

function Modal({ setSigninClicked, setSignupClicked, isSignin }) {
  return (
    <StyledModalOverlay
      onClick={function () {
        setSigninClicked(false);
        setSignupClicked(false);
      }}
    >
      <StyledModal onClick={(e) => e.stopPropagation()}>
        <StyledCloseButtonContainer>
          <StyledCloseButton
            onClick={function () {
              setSigninClicked(false);
              setSignupClicked(false);
            }}
            src={require("../../../assets/cancel.png")}
          />
        </StyledCloseButtonContainer>
        <StyledMainContainer>
          <StyledModalTitle>
            {isSignin ? "로그인" : "회원가입"}
          </StyledModalTitle>
          <StyledActionButton src={require("../../../assets/google.png")} />
          <StyledActionButton src={require("../../../assets/github.png")} />
        </StyledMainContainer>
        <StyledBottomContainer>
          <StyledBottomInquery>
            {isSignin ? "이미 계정이 있으신가요?" : "아직 회원이 아니신가요?"}
          </StyledBottomInquery>
          <StyledBottomButton
            onClick={function () {
              if (isSignin) {
                setSigninClicked(false);
                setSignupClicked(true);
              } else {
                setSigninClicked(true);
                setSignupClicked(false);
              }
            }}
          >
            {isSignin ? "Sign In" : "Sign Up"}
          </StyledBottomButton>
        </StyledBottomContainer>
      </StyledModal>
    </StyledModalOverlay>
  );
}

export default Modal;
