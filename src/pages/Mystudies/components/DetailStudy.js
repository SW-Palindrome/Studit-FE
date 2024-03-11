import { useState, useEffect } from "react";
import styled from "styled-components";
import { getDetailStudy, getStudyActivities } from "../../../services/mock";
import fetchData from "../../../utils/fetchData";

const StyledDetailStudy = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(87vw - 4rem);
  padding: 2rem;
`;

const StyledTitle = styled.h1`
  font-size: 2.5rem;
  color: #ffffff;
  font-family: roboto;
`;

const StyledDetailContainer = styled.div`
  padding: 1rem;
  background-color: #292e33;
  border-radius: 0.5rem;
`;

const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  &:not(:first-child) {
    margin-top: 1rem;
  }
`;

const StyledAdminButtonColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
`;

const StyledAdminButtonRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledThumbnail = styled.img`
  width: 4rem;
  height: 4rem;
  margin-right: 0.75rem;
`;

const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  &:not(:first-child) {
    margin-left: 1rem;
  }
`;

const StyledStudyTitle = styled.div`
  font-size: 1.5rem;
  color: #ffffff;
  font-family: roboto;
  marin-bottom: 0.5rem;
`;

const StyledDuration = styled.div`
  font-size: 0.8rem;
  color: #ffffff;
  font-family: roboto;
`;

const StyledMission = styled.div`
  font-size: 1.25rem;
  color: #ee221e;
  font-family: roboto;
  font-weight: 700;
`;

const StyledMissionText = styled.div`
  font-size: 1rem;
  color: #ffffff;
  font-family: roboto;
`;

const StyledFine = styled.div`
  font-size: 1.25rem;
  color: #ffffff;
  font-family: roboto;
  font-weight: 700;
`;

const StyledIntergrateButton = styled.div`
  margin-left: 1rem;
  cursor: pointer;
  display: flex;
  flex-direction: row;
`;

const StyledIntergrateLogo = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;

const StyledIntergrateText = styled.div`
  font-size: 1.25rem;
  color: #fbc04c;
  font-family: roboto;
  font-weight: 700;
`;

const StyledDescription = styled.div`
  font-size: 1rem;
  color: #ffffff;
  font-family: roboto;
`;

const StyledAction = styled.img`
  width: 2rem;
  height: 2rem;
  margin-left: 0.5rem;
`;

const StyledFineStatusText = styled.div`
  cursor: pointer;
  font-size: 1.25rem;
  color: #ffffff;
  font-family: roboto;
  font-weight: 700;
  margin-top: 1rem;
  text-align: end;
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

function DetailStudy() {
  const [thumbnail, setThumbnail] = useState("");
  const [title, setTitle] = useState("");
  const [duration, setDuration] = useState("");
  const [description, setDescription] = useState("");
  const [mission, setMission] = useState("");
  const [week, setWeek] = useState(0);
  const [fine, setFine] = useState(0);
  const [selectMenu, setSelectMenu] = useState("default");
  const [isSortStudent, setSortStudent] = useState(false);
  const [isSortTitle, setSortTitle] = useState(false);
  const [isSortDate, setSortDate] = useState(false);
  const [isSortStatus, setSortStatus] = useState(false);
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData(
      getDetailStudy,
      [
        setThumbnail,
        setTitle,
        setDuration,
        setDescription,
        setMission,
        setWeek,
        setFine,
      ],
      [
        "thumbnail",
        "title",
        "duration",
        "description",
        "mission",
        "week",
        "fine",
      ],
      setLoading,
    );
    fetchData(getStudyActivities, [setActivities], [null], setLoading);
  }, []);

  function sortStudent() {
    if (!isSortStudent) {
      setSortStudent(true);
      setSortTitle(false);
      setSortDate(false);
      setSortStatus(false);
      setActivities(
        activities.sort((a, b) => a.student.localeCompare(b.student)),
      );
    } else {
      setSortStudent(false);
      setSortTitle(false);
      setSortDate(false);
      setSortStatus(false);
      setActivities(
        activities.sort((a, b) => b.student.localeCompare(a.student)),
      );
    }
  }

  function sortTitle() {
    if (!isSortTitle) {
      setSortStudent(false);
      setSortTitle(true);
      setSortDate(false);
      setSortStatus(false);
      setActivities(
        activities.sort((a, b) => {
          if (a.title === null) return -1;
          if (b.title === null) return 1;
          return a.title.localeCompare(b.title);
        }),
      );
    } else {
      setSortStudent(false);
      setSortTitle(false);
      setSortDate(false);
      setSortStatus(false);
      setActivities(
        activities.sort((a, b) => {
          if (a.title === null) return 1;
          if (b.title === null) return -1;
          return b.title.localeCompare(a.title);
        }),
      );
    }
  }

  function sortDate() {
    if (!isSortDate) {
      setSortStudent(false);
      setSortTitle(false);
      setSortDate(true);
      setSortStatus(false);
      setActivities(activities.sort((a, b) => a.date.localeCompare(b.date)));
    } else {
      setSortStudent(false);
      setSortTitle(false);
      setSortDate(false);
      setSortStatus(false);
      setActivities(activities.sort((a, b) => b.date.localeCompare(a.date)));
    }
  }

  function sortStatus() {
    if (!isSortStatus) {
      setSortStudent(false);
      setSortTitle(false);
      setSortDate(false);
      setSortStatus(true);
      setActivities(
        activities.sort((a, b) => a.status.localeCompare(b.status)),
      );
    } else {
      setSortStudent(false);
      setSortTitle(false);
      setSortDate(false);
      setSortStatus(false);
      setActivities(
        activities.sort((a, b) => b.status.localeCompare(a.status)),
      );
    }
  }

  if (loading) return null;
  return (
    <StyledDetailStudy>
      <StyledTitle>My Studies</StyledTitle>
      <StyledDetailContainer>
        <StyledRow>
          <StyledThumbnail src={thumbnail} />
          <StyledColumn>
            <StyledStudyTitle>{title}</StyledStudyTitle>
            <StyledDuration>{duration}</StyledDuration>
          </StyledColumn>
          <StyledColumn>
            <StyledMission>Mission</StyledMission>
            <StyledMissionText>
              {mission === "velog" ? "Post velog article" : "Commit github"}
            </StyledMissionText>
            <StyledFine>{`${week} times/week ${fine}₩/non-completion`}</StyledFine>
          </StyledColumn>
          <StyledIntergrateButton>
            <StyledIntergrateLogo
              src={require("../../../assets/intergrate.png")}
              alt="intergrate"
            />
            <StyledIntergrateText>Intergrate</StyledIntergrateText>
          </StyledIntergrateButton>
          <StyledAdminButtonColumn>
            <StyledAdminButtonRow>
              <StyledAction
                src={require("../../../assets/study-setting.png")}
                onClick={() => setSelectMenu("setting")}
                alt="study-setting"
              />
              <StyledAction
                src={require("../../../assets/study-mng.png")}
                onClick={() => setSelectMenu("manage")}
                alt="study-mng"
              />
              <StyledAction
                src={require("../../../assets/study-invite.png")}
                alt="study-invite"
              />
            </StyledAdminButtonRow>
            <StyledFineStatusText>Fine Status</StyledFineStatusText>
          </StyledAdminButtonColumn>
        </StyledRow>
        <StyledRow>
          <StyledColumn>
            <StyledMission>Description</StyledMission>
            <StyledDescription>{description}</StyledDescription>
          </StyledColumn>
        </StyledRow>
      </StyledDetailContainer>
      <StyledActivitiesText>Activities</StyledActivitiesText>
      {selectMenu === "default" ? (
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
                <StyledListRowText flex={1}>
                  {activity.student}
                </StyledListRowText>
                <StyledListRowText flex={2}>{activity.title}</StyledListRowText>
                <StyledListRowText flex={1.4}>
                  {activity.date}
                </StyledListRowText>
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
      ) : selectMenu === "setting" ? (
        <div>setting</div>
      ) : (
        <div>manage</div>
      )}
    </StyledDetailStudy>
  );
}

export default DetailStudy;
