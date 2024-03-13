import { styled } from "styled-components";

const StyledManagement = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledManagementText = styled.div`
  font-size: 2.5rem;
  color: #ffffff;
  font-family: roboto;
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-weight: 700;
`;

const StyledTableContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #292e33;
  border-radius: 0.625rem;
  overflow-y: auto;

  &::-webkit-scrollbar {
    height: 5px;
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ffffff;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background: rgba(33, 122, 244, 0.1);
  }
`;

const StyledTableHead = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #000000;
`;

const StyledAttribute = styled.div`
  padding: 1rem 0;
  font-size: 1rem;
  color: #ffffff;
  font-family: roboto;
  font-weight: 700;
  text-align: center;
  width: 10rem;
`;

const StyledTableBody = styled.div`
  height: 40vh;
  display: flex;
  flex-direction: column;
`;

const StyledDataRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StyledData = styled.div`
  padding: 1rem 0;
  font-size: 1rem;
  color: #ffffff;
  font-family: roboto;
  width: 10rem;
  text-align: center;
`;

const StyledBan = styled.div`
  cursor: pointer;
  font-size: 1rem;
  color: #ee221e;
  font-family: roboto;
  font-weight: 700;
  margin-left: auto;
  margin-right: 1rem;
`;

function Management({ managements }) {
  function ban() {
    if (confirm("추방하시겠습니까?")) {
      alert("추방되었습니다.");
    } else {
      alert("취소되었습니다.");
    }
  }

  return (
    <>
      <StyledManagement>
        <StyledManagementText>Management</StyledManagementText>
      </StyledManagement>
      <StyledTableContainer>
        <StyledTableHead>
          <StyledAttribute>Student</StyledAttribute>
          <StyledAttribute>Permission</StyledAttribute>
          <StyledAttribute>Mission Intergrate</StyledAttribute>
          <StyledAttribute>Student</StyledAttribute>
        </StyledTableHead>
        <StyledTableBody>
          {managements.map((management, index) => (
            <StyledDataRow key={index}>
              <StyledData>{management.name}</StyledData>
              <StyledData>{management.permission}</StyledData>
              <StyledData>
                {management.missionIntergrate ? "O" : "X"}
              </StyledData>
              <StyledBan onClick={ban}>Ban</StyledBan>
            </StyledDataRow>
          ))}
        </StyledTableBody>
      </StyledTableContainer>
    </>
  );
}

export default Management;
