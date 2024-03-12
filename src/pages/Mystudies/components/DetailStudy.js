import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  getDetailStudy,
  getFineStatus,
  getStudentManagement,
  getStudyActivities,
} from "../../../services/mock";
import fetchData from "../../../utils/fetchData";
import Activities from "./Activities";
import FineStatus from "./FineStatus";
import Management from "./Management";

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
  cursor: pointer;
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

function DetailStudy() {
  const [thumbnail, setThumbnail] = useState("");
  const [title, setTitle] = useState("");
  const [duration, setDuration] = useState("");
  const [description, setDescription] = useState("");
  const [mission, setMission] = useState("");
  const [week, setWeek] = useState(0);
  const [fine, setFine] = useState(0);
  const [selectMenu, setSelectMenu] = useState("activities");
  const [isSortStudent, setSortStudent] = useState(false);
  const [isSortTitle, setSortTitle] = useState(false);
  const [isSortDate, setSortDate] = useState(false);
  const [isSortStatus, setSortStatus] = useState(false);

  const [activities, setActivities] = useState([]);
  const [fineStatus, setFineStatus] = useState([]);
  const [management, setManagement] = useState([]);

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
      null,
    );
    fetchData(getStudyActivities, [setActivities], [null], null);
    fetchData(getFineStatus, [setFineStatus], [null], null);
    fetchData(getStudentManagement, [setManagement], [null], setLoading);
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
              <Link
                to={`/mystudies/edit/${window.location.pathname.split("/")[2]}`}
                style={{ textDecoration: "none" }}
              >
                <StyledAction
                  src={require("../../../assets/study-setting.png")}
                  alt="study-setting"
                />
              </Link>
              <StyledAction
                src={require("../../../assets/study-mng.png")}
                onClick={() => setSelectMenu("manage")}
                alt="study-mng"
              />
              <StyledAction
                src={require("../../../assets/study-share.png")}
                alt="study-share"
              />
            </StyledAdminButtonRow>
            <StyledFineStatusText onClick={() => setSelectMenu("fine-status")}>
              Fine Status
            </StyledFineStatusText>
          </StyledAdminButtonColumn>
        </StyledRow>
        <StyledRow>
          <StyledColumn>
            <StyledMission>Description</StyledMission>
            <StyledDescription>{description}</StyledDescription>
          </StyledColumn>
        </StyledRow>
      </StyledDetailContainer>
      {selectMenu === "activities" && (
        <Activities
          sortStudnet={sortStudent}
          isSortStudent={isSortStudent}
          sortTitle={sortTitle}
          isSortTitle={isSortTitle}
          sortDate={sortDate}
          isSortDate={isSortDate}
          sortStatus={sortStatus}
          isSortStatus={isSortStatus}
          activities={activities}
        />
      )}
      {selectMenu === "manage" && <Management management={management} />}
      {selectMenu === "fine-status" && <FineStatus fineStatus={fineStatus} />}
    </StyledDetailStudy>
  );
}

export default DetailStudy;
