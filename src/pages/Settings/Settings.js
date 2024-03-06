import styled from "styled-components";
import Nav from "../../components/Nav";

const StyledSettings = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #16191c;
`;

function Mystudies() {
  return (
    <StyledSettings>
      <Nav selectedMenu="settings" />
    </StyledSettings>
  );
}

export default Mystudies;
