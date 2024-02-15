import styled from "styled-components";

const StyledActivities = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #16191c;
  border-left: 1px solid #6b6d6f;
  width: 40rem;
`;

function Activities() {
  return <StyledActivities></StyledActivities>;
}

export default Activities;
