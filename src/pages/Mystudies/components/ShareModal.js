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

function ShareModal({ setIsModalOpen }) {
  return (
    <StyledModalOverlay onClick={setIsModalOpen(false)}>
      <StyledModal onClick={(e) => e.stopPropagation()}>
        <StyledCloseButtonContainer>
          <StyledCloseButton
            onClick={setIsModalOpen(false)}
            src={require("../../../assets/cancel.png")}
          />
        </StyledCloseButtonContainer>
        <StyledMainContainer>
            <Styled
        </StyledMainContainer>
      </StyledModal>
    </StyledModalOverlay>
  );
}

export default ShareModal;
