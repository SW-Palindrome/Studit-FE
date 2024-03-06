import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #16191c;
`;

const StyledLogo = styled.img`
  width: 10%;
  height: auto;
`;

function Loading() {
  return (
    <StyledContainer>
      <StyledLogo src={require("../assets/logo.png")} />
    </StyledContainer>
  );
}

export default Loading;
