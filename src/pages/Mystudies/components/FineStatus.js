import { styled } from "styled-components";

const StyledFineStatus = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledFineStatusText = styled.div`
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
  overflow-x: auto;
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
`;

const StyledNameAttribute = styled.div`
  padding: 1rem 0;
  font-size: 1rem;
  color: #ffffff;
  font-family: roboto;
  font-weight: 700;
  text-align: center;
  min-width: 7rem;
  border-bottom: 1px solid #000000;
`;

const StyledWeekAttribute = styled.div`
  padding: 1rem 0;
  font-size: 1rem;
  color: #ffffff;
  font-family: roboto;
  font-weight: 700;
  text-align: center;
  min-width: 7rem;
  border-bottom: 1px solid #000000;
`;

const StyledTableBody = styled.div`
  height: 40vh;
  display: flex;
  flex-direction: column;
`;

const StyledDataRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledNameData = styled.div`
  padding: 1rem 0;
  font-size: 1rem;
  color: #ffffff;
  font-family: roboto;
  min-width: 7rem;
  text-align: center;
`;

const StyledFineData = styled.div`
  padding: 1rem 0;
  font-size: 1rem;
  color: #ffffff;
  font-family: roboto;
  text-decoration-line: ${(props) => {
    return props.isPaid ? "line-through" : "none";
  }};
  min-width: 7rem;
  text-align: center;
`;

function FineStatus({ fineStatus }) {
  return (
    <>
      <StyledFineStatus>
        <StyledFineStatusText>Fine Status</StyledFineStatusText>
      </StyledFineStatus>
      <StyledTableContainer>
        <StyledTableHead>
          <StyledNameAttribute>Name</StyledNameAttribute>
          {fineStatus.weekDuration.map((week, index) => (
            <StyledWeekAttribute key={index}>{week}</StyledWeekAttribute>
          ))}
        </StyledTableHead>
        <StyledTableBody>
          {fineStatus.students.map((student, index) => (
            <StyledDataRow key={index}>
              <StyledNameData>{student.name}</StyledNameData>
              {student.statuses.map((status, index) => (
                <StyledFineData isPaid={status[1]} key={index}>
                  {status[0]}
                </StyledFineData>
              ))}
            </StyledDataRow>
          ))}
        </StyledTableBody>
      </StyledTableContainer>
    </>
  );
}

export default FineStatus;
