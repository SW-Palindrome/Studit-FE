import styled from "styled-components";
import Nav from "../../components/Nav";

const StyledMystudies = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #1f2327;
`;

function Mystudies() {
  return (
    <StyledMystudies>
      <Nav selectedMenu="mystudies" />
    </StyledMystudies>
  );
}

export default Mystudies;
