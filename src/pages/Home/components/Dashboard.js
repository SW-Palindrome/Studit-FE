import styled from "styled-components";
import { useState, useEffect } from "react";
import { getDashboard } from "../../../services/mock";
import Loading from "../../../components/Loading";
import fetchData from "../../../utils/fetchData";
const StyledDashboard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #16191c;
  width: calc(62vw - 4rem);
  padding: 2rem;
`;

const StyledTitle = styled.h1`
  color: white;
  font-family: roboto;
  font-size: 2.5rem;
  margin: 1rem 0 2rem 0;
`;

const StyledTotalContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

const StyledTotalMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 1rem;
  background-color: #1f2327;
  width: 18vw;
  margin-right: ${(props) => (props.last == true ? "0rem" : "1rem")};
  border-radius: 0.75rem;
`;

const StyledTotalTitle = styled.div`
  color: white;
  font-family: roboto;
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const StyledTotailCount = styled.div`
  color: white;
  font-family: roboto;
  font-size: 4rem;
`;

const StyledMissionContainer = styled.div`
  background-color: #1f2327;
  border-radius: 0.75rem;
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
`;

const StyledMissionHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #000000;
`;

const StyledMissionTitle = styled.h1`
  color: white;
  font-family: roboto;
  font-size: 1.5rem;
  font-weight: 400;
`;

const StyledMissionSortContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 2.5rem;
`;

const StyledMissionSortWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  border-radius: 1.7rem;
  margin-left: 1rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
`;

const StyledMissionSortText = styled.div`
  font-family: roboto;
  font-size: 1.25rem;
  margin-right: 0.625rem;
  color: #000000;
`;

const StyledMissionSortLogo = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;

const StyledMissionBody = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledMissionTableContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 1.25rem;
`;

const StyledMissionTableScrollContainer = styled.div`
  height: 37vh;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const StyledMissionAttribute = styled.div`
  flex: ${(props) => props.flex};
  color: #ffffff;
  font-family: roboto;
  font-size: 1.25rem;
  text-align: center;
  padding-bottom: 0.5rem;
`;

const StyledMissionContent = styled.div`
  flex: ${(props) => props.flex};
  color: #ffffff;
  font-family: roboto;
  font-size: 1.25rem;
  text-align: center;
`;

const StyledMissionStatusWrapper = styled.div`
  display: flex;
  flex: ${(props) => props.flex};
  justify-content: center;
`;

const StyledMissionStatus = styled.div`
  color: ${(props) => (props.status === "Completed" ? "#249636" : "#E66633")};
  background-color: ${(props) =>
    props.status === "Completed" ? "#CBDAC4" : "#F0D1C4"};
  font-family: roboto;
  font-size: 1rem;
  font-weight: 700;
  text-align: center;
  border-radius: 100rem;
  padding: 0.5rem 1rem;
`;

const StyledNomissionContainer = styled.div`
  height: 37vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledNomission1 = styled.div`
  color: white;
  font-family: roboto;
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 1.5rem;
`;

const StyledNomission2 = styled.div`
  color: #e66330;
  font-family: roboto;
  font-size: 2.5rem;
  text-align: center;
`;

function Dashboard() {
  //false면 내림차순, true면 오름차순
  const [sortStudygroup, setSortStudygroup] = useState(false);
  const [sortStatus, setSortStatus] = useState(false);
  const [totalJoined, setTotalJoined] = useState(0);
  const [totalCompleted, setTotalCompleted] = useState(0);
  const [totalIncompleted, setTotalIncompleted] = useState(0);
  const [contents, setContents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData(
      getDashboard,
      [setTotalJoined, setTotalCompleted, setTotalIncompleted, setContents],
      ["totalJoined", "totalCompleted", "totalIncompleted", "contents"],
      setLoading,
    );
  }, []);

  // studyGroup 기준으로 오름차순 정렬
  const sortByStudyGroupAscending = () => {
    setContents((prevContents) =>
      prevContents
        .slice()
        .sort((a, b) => a.studyGroup.localeCompare(b.studyGroup)),
    );
  };

  // studyGroup 기준으로 내림차순 정렬
  const sortByStudyGroupDescending = () => {
    setContents((prevContents) =>
      prevContents
        .slice()
        .sort((a, b) => b.studyGroup.localeCompare(a.studyGroup)),
    );
  };

  // status 기준으로 오름차순 정렬
  const sortByStatusAscending = () => {
    setContents((prevContents) =>
      prevContents.slice().sort((a, b) => a.status.localeCompare(b.status)),
    );
  };

  // status 기준으로 내림차순 정렬
  const sortByStatusDescending = () => {
    setContents((prevContents) =>
      prevContents.slice().sort((a, b) => b.status.localeCompare(a.status)),
    );
  };

  if (loading) return <Loading />;

  return (
    <StyledDashboard>
      <StyledTitle>Dashboard</StyledTitle>
      <StyledTotalContainer>
        <StyledTotalMenu>
          <StyledTotalTitle>Total Joined Studies</StyledTotalTitle>
          <StyledTotailCount>{totalJoined}</StyledTotailCount>
        </StyledTotalMenu>
        <StyledTotalMenu>
          <StyledTotalTitle>Total Completed Missions</StyledTotalTitle>
          <StyledTotailCount>{totalCompleted}</StyledTotailCount>
        </StyledTotalMenu>
        <StyledTotalMenu last={true}>
          <StyledTotalTitle>Incomplete Missions for this week</StyledTotalTitle>
          <StyledTotailCount>{totalIncompleted}</StyledTotailCount>
        </StyledTotalMenu>
      </StyledTotalContainer>
      <StyledMissionContainer>
        <StyledMissionHeader>
          <StyledMissionTitle>Missions for this week</StyledMissionTitle>
          <StyledMissionSortContainer>
            <StyledMissionSortWrapper
              onClick={function () {
                setSortStudygroup(!sortStudygroup);
                if (sortStudygroup) {
                  sortByStudyGroupAscending();
                } else {
                  sortByStudyGroupDescending();
                }
              }}
            >
              <StyledMissionSortText>Study Group</StyledMissionSortText>
              <StyledMissionSortLogo
                src={require("../../../assets/down.png")}
                style={{
                  transform: sortStudygroup ? "rotate(180deg)" : "rotate(0deg)",
                }}
              />
            </StyledMissionSortWrapper>
            <StyledMissionSortWrapper
              onClick={function () {
                setSortStatus(!sortStatus);
                if (sortStatus) {
                  sortByStatusAscending();
                } else {
                  sortByStatusDescending();
                }
              }}
            >
              <StyledMissionSortText>Status</StyledMissionSortText>
              <StyledMissionSortLogo
                src={require("../../../assets/down.png")}
                style={{
                  transform: sortStatus ? "rotate(180deg)" : "rotate(0deg)",
                }}
              />
            </StyledMissionSortWrapper>
          </StyledMissionSortContainer>
        </StyledMissionHeader>
        <StyledMissionBody>
          <StyledMissionTableContainer>
            <StyledMissionAttribute flex={2.5}>Name</StyledMissionAttribute>
            <StyledMissionAttribute flex={1.25}>
              {" "}
              Due Date
            </StyledMissionAttribute>
            <StyledMissionAttribute flex={1}>
              Study Group
            </StyledMissionAttribute>
            <StyledMissionAttribute flex={1}>Status</StyledMissionAttribute>
          </StyledMissionTableContainer>
          <StyledMissionTableScrollContainer>
            {contents.length > 0 ? (
              contents.map((content) => (
                <StyledMissionTableContainer key={content.id}>
                  <StyledMissionContent flex={2.5}>
                    {content.name}
                  </StyledMissionContent>
                  <StyledMissionContent flex={1.25}>
                    {content.dueDate}
                  </StyledMissionContent>
                  <StyledMissionContent flex={1}>
                    {content.studyGroup}
                  </StyledMissionContent>
                  <StyledMissionStatusWrapper flex={1}>
                    <StyledMissionStatus status={content.status}>
                      {content.status}
                    </StyledMissionStatus>
                  </StyledMissionStatusWrapper>
                </StyledMissionTableContainer>
              ))
            ) : (
              <StyledNomissionContainer>
                <StyledNomission1>No missions this week</StyledNomission1>
                <StyledNomission2>Explore Studies</StyledNomission2>
              </StyledNomissionContainer>
            )}
          </StyledMissionTableScrollContainer>
        </StyledMissionBody>
      </StyledMissionContainer>
    </StyledDashboard>
  );
}

export default Dashboard;
