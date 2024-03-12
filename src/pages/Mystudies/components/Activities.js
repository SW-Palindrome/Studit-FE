import { styled } from "styled-components";

const StyledActiviteis = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledActivitiesText = styled.div`
  font-size: 2.5rem;
  color: #ffffff;
  font-family: roboto;
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-weight: 700;
`;

const StyledActivitiesContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #292e33;
  border-radius: 0.625rem;
  padding: 1rem 2rem;
`;

const StyledListHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #000000;
`;

const StyledListAttribute = styled.div`
  cursor: pointer;
  display: flex;
  flex: ${(props) => props.flex};
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const StyledListAttributeText = styled.p`
  margin: 0;
  margin-right: 0.625rem;
  padding: 0;
  font-family: roboto;
  font-size: 1.25rem;
  color: #ffffff;
  text-align: center;
`;

const StyledListAttributeSort = styled.img`
  width: 1.25rem;
  height: 0.625rem;
`;

const StyledListBody = styled.div`
  height: 40vh;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const StyledListRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.5rem 0;
`;

const StyledListRowText = styled.p`
  flex: ${(props) => props.flex};
  margin: 0;
  padding: 0;
  font-family: roboto;
  font-size: 1.25rem;
  color: #ffffff;
  text-align: center;
  overflow: hidden;
`;

const StyledListRowUrl = styled.a`
  flex: ${(props) => props.flex};
  margin: 0;
  padding: 0;
  font-family: roboto;
  font-size: 1.25rem;
  color: #ffffff;
  text-align: center;
  overflow: hidden;
`;

const StyledListRowStatus = styled.div`
  display: flex;
  justify-content: center;
  flex: 1.4;
`;

const StyledListRowStatusText = styled.p`
  margin: 0;
  padding: 0.5rem 1rem;
  font-family: roboto;
  font-size: 1rem;
  font-weight: 700;
  border-radius: 50rem;
  overflow: hidden;
  background-color: ${function (props) {
    switch (props.status) {
      case "Completed":
        return "#CBDAC4";
      case "Incompleted":
        return "#F0D1C4";
      default:
        return "#EFE0C5";
    }
  }};
  color: ${function (props) {
    switch (props.status) {
      case "Completed":
        return "#339D43";
      case "Incompleted":
        return "#E66633";
      default:
        return "#000000";
    }
  }};
`;

function Activities({
  sortStudent,
  isSortStudent,
  sortTitle,
  isSortTitle,
  sortDate,
  isSortDate,
  sortStatus,
  isSortStatus,
  activities,
}) {
  return (
    <StyledActiviteis>
      <StyledActivitiesText>Activities</StyledActivitiesText>
      <StyledActivitiesContainer>
        <StyledListHeader>
          <StyledListAttribute flex={1} onClick={() => sortStudent()}>
            <StyledListAttributeText>Student</StyledListAttributeText>
            <StyledListAttributeSort
              src={require("../../../assets/white-sort.png")}
              style={{
                transform: isSortStudent ? "rotate(180deg)" : "rotate(0deg",
              }}
            />
          </StyledListAttribute>
          <StyledListAttribute flex={2} onClick={() => sortTitle()}>
            <StyledListAttributeText>Title</StyledListAttributeText>
            <StyledListAttributeSort
              src={require("../../../assets/white-sort.png")}
              style={{
                transform: isSortTitle ? "rotate(180deg)" : "rotate(0deg",
              }}
            />
          </StyledListAttribute>
          <StyledListAttribute flex={1.4} onClick={() => sortDate()}>
            <StyledListAttributeText>Date</StyledListAttributeText>
            <StyledListAttributeSort
              src={require("../../../assets/white-sort.png")}
              style={{
                transform: isSortDate ? "rotate(180deg)" : "rotate(0deg",
              }}
            />
          </StyledListAttribute>
          <StyledListAttribute flex={1.4} onClick={() => sortStatus()}>
            <StyledListAttributeText>Status</StyledListAttributeText>
            <StyledListAttributeSort
              src={require("../../../assets/white-sort.png")}
              style={{
                transform: isSortStatus ? "rotate(180deg)" : "rotate(0deg",
              }}
            />
          </StyledListAttribute>
          <StyledListAttribute flex={2}>
            <StyledListAttributeText>Url</StyledListAttributeText>
          </StyledListAttribute>
        </StyledListHeader>
        <StyledListBody>
          {activities.map((activity) => (
            <StyledListRow key={activity.id}>
              <StyledListRowText flex={1}>{activity.student}</StyledListRowText>
              <StyledListRowText flex={2}>{activity.title}</StyledListRowText>
              <StyledListRowText flex={1.4}>{activity.date}</StyledListRowText>
              <StyledListRowStatus flex={1.4}>
                <StyledListRowStatusText status={activity.status}>
                  {activity.status}
                </StyledListRowStatusText>
              </StyledListRowStatus>
              <StyledListRowUrl href={activity.url} flex={2}>
                {activity.url}
              </StyledListRowUrl>
            </StyledListRow>
          ))}
        </StyledListBody>
      </StyledActivitiesContainer>
    </StyledActiviteis>
  );
}

export default Activities;
