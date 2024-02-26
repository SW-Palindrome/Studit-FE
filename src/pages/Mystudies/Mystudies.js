import styled from "styled-components";
import Nav from "../../components/Nav";
import Studies from "./components/Studies";

const StyledMystudies = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  background-color: #1f2327;
`;

function Mystudies() {
  return (
    <StyledMystudies>
      <Nav selectedMenu="mystudies" />
      <Studies />
    </StyledMystudies>
  );
}

export default Mystudies;
