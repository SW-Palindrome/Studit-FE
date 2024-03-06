import styled from "styled-components";
import Nav from "../../components/Nav";
import CreateStudyGroup from "./components/CreateStudyGroup";

const StyledCreateMystudy = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  background-color: #16191c;
`;

function CreateMystudy() {
  return (
    <StyledCreateMystudy>
      <Nav selectedMenu="mystudies" />
      <CreateStudyGroup />
    </StyledCreateMystudy>
  );
}

export default CreateMystudy;
