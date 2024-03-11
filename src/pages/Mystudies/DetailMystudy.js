import styled from "styled-components";
import Nav from "../../components/Nav";
import DetailStudy from "./components/DetailStudy";

const StyledDetailMystudy = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  background-color: #16191c;
`;

function DetailMystudy() {
  return (
    <StyledDetailMystudy>
      <Nav selectedMenu="mystudies" />
      <DetailStudy />
    </StyledDetailMystudy>
  );
}

export default DetailMystudy;
