import styled from "styled-components";

const StyledModalOverlay = styled.div`
  z-index: 100;
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
  display: flex;
  flex-direction: column;
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

const StyledShareTitle = styled.div`
  font-size: 1.75rem;
  font-family: roboto;
  font-weight: 700;
  color: #ffffff;
  padding: 2rem 0;
`;

const StyledCodeRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledCode = styled.div`
  font-size: 1.25rem;
  font-family: roboto;
  font-weight: 700;
  letter-spacing: 1rem;
  color: #000000;
  background: #ffffff;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  margin-right: 1rem;
`;

const StyledCopyButton = styled.div`
  cursor: pointer;
  font-size: 1.25rem;
  font-family: roboto;
  color: #ffffff;
  padding: 0.5rem 1rem;
  background: #16191c;
  border-radius: 0.5rem;
`;

const StyledText = styled.div`
  font-size: 1rem;
  font-family: roboto;
  color: #ffffff;
  margin: 0.5rem 0;
`;

const StyledLink = styled.a`
  text-decoration: none;
  font-size: 1rem;
  font-family: roboto;
  font-weight: 700;
  color: #19abfe;
  margin-bottom: 1rem;
`;

function ShareModal({ setIsModalOpen }) {
  const handleCopyClipBoard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("클립보드에 링크가 복사되었습니다.");
    } catch (e) {
      alert("복사에 실패하였습니다");
    }
  };

  return (
    <StyledModalOverlay onClick={() => setIsModalOpen(false)}>
      <StyledModal onClick={(e) => e.stopPropagation()}>
        <StyledCloseButtonContainer>
          <StyledCloseButton
            onClick={() => setIsModalOpen(false)}
            src={require("../../../assets/cancel.png")}
          />
        </StyledCloseButtonContainer>
        <StyledMainContainer>
          <StyledShareTitle>Share</StyledShareTitle>
          <StyledCodeRow>
            <StyledCode>123456</StyledCode>
            <StyledCopyButton onClick={() => handleCopyClipBoard("123456")}>
              Copy
            </StyledCopyButton>
          </StyledCodeRow>
          <StyledText>or share the link below</StyledText>
          <StyledLink href="http://localhost:3000/study/123456">
            http://localhost:3000/study/123456
          </StyledLink>
        </StyledMainContainer>
      </StyledModal>
    </StyledModalOverlay>
  );
}

export default ShareModal;
