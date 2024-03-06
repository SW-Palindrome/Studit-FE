import styled from "styled-components";
import Nav from "../../components/Nav";
import EditStudyGroup from "./components/EditStudyGroup";

const StyledEditMyStudy = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  background-color: #1f2327;
`;

function EditMyStudy() {
  return (
    <StyledEditMyStudy>
      <Nav selectedMenu="mystudies" />
      <EditStudyGroup />
    </StyledEditMyStudy>
  );
}

export default EditMyStudy;
