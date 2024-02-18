import styled from "styled-components";
import Nav from "../../components/Nav";

const StyledCalendar = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #1f2327;
`;

function Calendar() {
  return (
    <StyledCalendar>
      <Nav selectedMenu="calendar" />
    </StyledCalendar>
  );
}

export default Calendar;
