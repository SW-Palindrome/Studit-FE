import styled from "styled-components";
import Nav from "../../components/Nav";
import Dashboard from "./components/Dashboard";
import Activities from "./components/Activities";

const StyledHome = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #16191c;
`;

function Home() {
  return (
    <StyledHome>
      <Nav selectedMenu="home" />
      <Dashboard />
      <Activities />
    </StyledHome>
  );
}

export default Home;
