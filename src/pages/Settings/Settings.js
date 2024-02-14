import styled from "styled-components";
import Nav from "../../components/Nav";

const StyledSettings = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #1f2327;
`;

function Mystudies() {
  return (
    <StyledSettings>
      <Nav selectedMenu="settings" />
    </StyledSettings>
  );
}

export default Mystudies;
