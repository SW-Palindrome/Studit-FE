import styled from "styled-components";
import Nav from "../../components/Nav";

const StyledCalendar = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  background-color: #1f2327;
`;
const StyledBox = styled.div`
  background-color: #1f2327;
  width: calc(87vw);
`;

function Calendar() {
  return (
    <StyledCalendar>
      <Nav selectedMenu="calendar" />
      <StyledBox />
    </StyledCalendar>
  );
}

export default Calendar;
