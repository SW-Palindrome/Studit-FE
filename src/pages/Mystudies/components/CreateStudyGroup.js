import styled from "styled-components";
import DateRangePicker from "./DateRangePicker";

const StyledCreateStudyGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem;
`;

const StyledTitle = styled.div`
  font-size: 2.5rem;
  color: #ffffff;
  font-family: roboto;
`;

const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  padding: 1.5rem;
  border-radius: 0.625rem;
  background-color: #292e33;
`;

const StyledDuration = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;
  align-items: center;
`;

const StyledAttributeName = styled.div`
  font-family: roboto;
  font-size: 1.25rem;
  color: #ffffff;
  width: 10rem;
`;

function CreateStudyGroup() {
  return (
    <StyledCreateStudyGroup>
      <StyledTitle>Create Study Group</StyledTitle>
      <StyledBody>
        <StyledDuration>
          <StyledAttributeName>Duration</StyledAttributeName>
          <DateRangePicker />
        </StyledDuration>
      </StyledBody>
    </StyledCreateStudyGroup>
  );
}

export default CreateStudyGroup;
