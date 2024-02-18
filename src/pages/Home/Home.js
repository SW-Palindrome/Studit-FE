import styled from "styled-components";
import Nav from "../../components/Nav";
import Dashboard from "./components/Dashboard";
import Activities from "./components/Activities";

const StyledHome = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100vh;
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
