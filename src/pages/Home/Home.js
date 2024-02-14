import styled from "styled-components";
import Nav from "../../components/Nav";

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #1f2327;
`;

function Home() {
  return (
    <StyledHome>
      <Nav selectedMenu="home" />
    </StyledHome>
  );
}

export default Home;
