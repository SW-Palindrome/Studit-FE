import { useState } from "react";
import styled from "styled-components";

const StyledStudies = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  padding: 2rem;
`;

const StyledTitle = styled.h1`
  color: white;
  font-family: roboto;
  font-size: 2.5rem;
  margin: 1rem 0 2rem 0;
`;

const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

const StyledSortContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledSortButton = styled.img`
  cursor: pointer;
  width: 2rem;
  height: 2rem;
  margin-right: 1rem;
`;

const StyledActionContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledActionButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: #ffffff;
  border-radius: 50rem;
  margin-left: 1rem;
`;

const StyledActionLogo = styled.img`
  width: 1rem;
  height: 1rem;
  margin-right: 0.5rem;
`;

const StyledActionText = styled.div`
  font-family: roboto;
  font-size: 1.25rem;
  color: #000000;
`;

const StyledGridContainer = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(3, auto);
  gap: 1.5rem;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ffffff;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background: rgba(33, 122, 244, 0.1);
  }
`;

const StyledGridWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1rem;
  background-color: #292e33;
  border-radius: 0.625rem;
  width: 27rem;
`;

const StyledGridThumbnail = styled.img`
  width: 7.25rem;
  height: 7.25rem;
  margin-right: 1.5rem;
`;

const StyledGridInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 16rem;
`;

const StyledGridTitle = styled.p`
  margin: 0;
  padding: 0;
  margin: 0;
  padding: 0;
  font-size: 1.25rem;
  color: #ffffff;
  margin-bottom: 0.625rem;
  font-family: roboto;
  overflow: hidden;
`;

const StyledGridPeriod = styled.p`
  margin: 0;
  padding: 0;
  font-family: roboto;
  font-size: 1rem;
  color: #ffffff;
  margin-bottom: 0.0625rem;
  overflow: hidden;
`;

const StyledGridParti = styled.p`
  margin: 0;
  padding: 0;
  font-family: roboto;
  font-size: 1rem;
  color: #ffffff;
  margin-bottom: 0.5rem;
  overflow: hidden;
`;

const StyledGridStatus = styled.div`
  padding: 0.5rem 1rem;
  border-radius: 50rem;
  background-color: ${function (props) {
    switch (props.status) {
      case "In Progress":
        return "#EFE0C5";
      case "Concluded":
        return "#CBDAC4";
      case "Upcoming":
        return "#F0D1C4";
      default:
        return "#ffffff";
    }
  }};
`;

const StyledGridStatusText = styled.p`
  margin: 0;
  padding: 0;
  font-family: roboto;
  font-size: 1.25rem;
  color: ${function (props) {
    switch (props.status) {
      case "In Progress":
        return "#E5AE24";
      case "Concluded":
        return "#339D43";
      case "Upcoming":
        return "#E66633";
      default:
        return "#000000";
    }
  }};
`;

const StyledGridAction = styled.img`
  width: ${(props) => (props.isAdmin ? "3rem" : "1.5rem")};
  height: ${(props) => (props.isAdmin ? "3rem" : "1.5rem")};
  margin-bottom: auto;
`;

const StyledListContainer = styled.div`
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
  font-size: 1.5rem;
  color: #ffffff;
  text-align: center;
`;

const StyledListAttributeSort = styled.img`
  width: 1.25rem;
  height: 0.625rem;
`;

const StyledListBody = styled.div`
  height: 60vh;
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
  font-size: 1.5rem;
  color: #ffffff;
  text-align: center;
`;

const StyledListRowStatus = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
`;

const StyledListRowStatusText = styled.p`
  margin: 0;
  padding: 0.5rem 1rem;
  font-family: roboto;
  font-size: 1.25rem;
  border-radius: 50rem;
  background-color: ${function (props) {
    switch (props.status) {
      case "In Progress":
        return "#EFE0C5";
      case "Concluded":
        return "#CBDAC4";
      case "Upcoming":
        return "#F0D1C4";
      default:
        return "#ffffff";
    }
  }};
  color: ${function (props) {
    switch (props.status) {
      case "In Progress":
        return "#E5AE24";
      case "Concluded":
        return "#339D43";
      case "Upcoming":
        return "#E66633";
      default:
        return "#000000";
    }
  }};
`;

function Studies() {
  const [isGridMode, setGridMode] = useState(true);
  const [isSortStudyName, setSortStudyName] = useState(false);
  const [isSortStudyDuration, setSortStudyDuration] = useState(false);
  const [isSortStudyMission, setSortStudyMission] = useState(false);
  const [isSortStudyParticipants, setSortStudyParticipants] = useState(false);
  const [isSortStudyStatus, setSortStudyStatus] = useState(false);

  function sortStudyName() {
    if (!isSortStudyName) {
      setSortStudyName(true);
      setSortStudyDuration(false);
      setSortStudyMission(false);
      setSortStudyParticipants(false);
      setSortStudyStatus(false);
    } else {
      setSortStudyName(false);
      setSortStudyDuration(false);
      setSortStudyMission(false);
      setSortStudyParticipants(false);
      setSortStudyStatus(false);
    }
  }

  function sortStudyDuration() {
    if (!isSortStudyDuration) {
      setSortStudyName(false);
      setSortStudyDuration(true);
      setSortStudyMission(false);
      setSortStudyParticipants(false);
      setSortStudyStatus(false);
    } else {
      setSortStudyName(false);
      setSortStudyDuration(false);
      setSortStudyMission(false);
      setSortStudyParticipants(false);
      setSortStudyStatus(false);
    }
  }

  function sortStudyMission() {
    if (!isSortStudyMission) {
      setSortStudyName(false);
      setSortStudyDuration(false);
      setSortStudyMission(true);
      setSortStudyParticipants(false);
      setSortStudyStatus(false);
    } else {
      setSortStudyName(false);
      setSortStudyDuration(false);
      setSortStudyMission(false);
      setSortStudyParticipants(false);
      setSortStudyStatus(false);
    }
  }

  function sortStudyParticipants() {
    if (!isSortStudyParticipants) {
      setSortStudyName(false);
      setSortStudyDuration(false);
      setSortStudyMission(false);
      setSortStudyParticipants(true);
      setSortStudyStatus(false);
    } else {
      setSortStudyName(false);
      setSortStudyDuration(false);
      setSortStudyMission(false);
      setSortStudyParticipants(false);
      setSortStudyStatus(false);
    }
  }

  function sortStudyStatus() {
    if (!isSortStudyStatus) {
      setSortStudyName(false);
      setSortStudyDuration(false);
      setSortStudyMission(false);
      setSortStudyParticipants(false);
      setSortStudyStatus(true);
    } else {
      setSortStudyName(false);
      setSortStudyDuration(false);
      setSortStudyMission(false);
      setSortStudyParticipants(false);
      setSortStudyStatus(false);
    }
  }

  const studies = [
    {
      thumbnail:
        "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FtEMUl%2FbtrDc6957nj%2FNwJoDw0EOapJNDSNRNZK8K%2Fimg.jpg",
      title: "title",
      period: "123~123",
      participants: 1,
      status: "In Progress",
      isAdmin: true,
    },
    {
      thumbnail:
        "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FtEMUl%2FbtrDc6957nj%2FNwJoDw0EOapJNDSNRNZK8K%2Fimg.jpg",
      title: "title",
      period: "123~123",
      participants: 1,
      status: "Concluded",
      isAdmin: false,
    },
    {
      thumbnail:
        "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FtEMUl%2FbtrDc6957nj%2FNwJoDw0EOapJNDSNRNZK8K%2Fimg.jpg",
      title: "title",
      period: "123~123",
      participants: 1,
      status: "Upcoming",
      isAdmin: false,
    },
    {
      thumbnail:
        "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FtEMUl%2FbtrDc6957nj%2FNwJoDw0EOapJNDSNRNZK8K%2Fimg.jpg",
      title: "title",
      period: "123~123",
      participants: 1,
      status: "Concluded",
      isAdmin: false,
    },
    {
      thumbnail:
        "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FtEMUl%2FbtrDc6957nj%2FNwJoDw0EOapJNDSNRNZK8K%2Fimg.jpg",
      title: "title",
      period: "123~123",
      participants: 1,
      status: "Upcoming",
      isAdmin: false,
    },
    {
      thumbnail:
        "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FtEMUl%2FbtrDc6957nj%2FNwJoDw0EOapJNDSNRNZK8K%2Fimg.jpg",
      title: "title",
      period: "123~123",
      participants: 1,
      status: "Concluded",
      isAdmin: false,
    },
    {
      thumbnail:
        "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FtEMUl%2FbtrDc6957nj%2FNwJoDw0EOapJNDSNRNZK8K%2Fimg.jpg",
      title: "title",
      period: "123~123",
      participants: 1,
      status: "Upcoming",
      isAdmin: false,
    },
    {
      thumbnail:
        "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FtEMUl%2FbtrDc6957nj%2FNwJoDw0EOapJNDSNRNZK8K%2Fimg.jpg",
      title: "title",
      period: "123~123",
      participants: 1,
      status: "Concluded",
      isAdmin: false,
    },
    {
      thumbnail:
        "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FtEMUl%2FbtrDc6957nj%2FNwJoDw0EOapJNDSNRNZK8K%2Fimg.jpg",
      title: "title",
      period: "123~123",
      participants: 1,
      status: "Upcoming",
      isAdmin: false,
    },
    {
      thumbnail:
        "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FtEMUl%2FbtrDc6957nj%2FNwJoDw0EOapJNDSNRNZK8K%2Fimg.jpg",
      title: "title",
      period: "123~123",
      participants: 1,
      status: "Concluded",
      isAdmin: false,
    },
    {
      thumbnail:
        "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FtEMUl%2FbtrDc6957nj%2FNwJoDw0EOapJNDSNRNZK8K%2Fimg.jpg",
      title: "title",
      period: "123~123",
      participants: 1,
      status: "Upcoming",
      isAdmin: false,
    },
    {
      thumbnail:
        "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FtEMUl%2FbtrDc6957nj%2FNwJoDw0EOapJNDSNRNZK8K%2Fimg.jpg",
      title: "title",
      period: "123~123",
      participants: 1,
      status: "Concluded",
      isAdmin: false,
    },
    {
      thumbnail:
        "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FtEMUl%2FbtrDc6957nj%2FNwJoDw0EOapJNDSNRNZK8K%2Fimg.jpg",
      title: "title",
      period: "123~123",
      participants: 1,
      status: "Upcoming",
      isAdmin: false,
    },
    {
      thumbnail:
        "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FtEMUl%2FbtrDc6957nj%2FNwJoDw0EOapJNDSNRNZK8K%2Fimg.jpg",
      title: "title",
      period: "123~123",
      participants: 1,
      status: "Concluded",
      isAdmin: false,
    },
    {
      thumbnail:
        "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FtEMUl%2FbtrDc6957nj%2FNwJoDw0EOapJNDSNRNZK8K%2Fimg.jpg",
      title: "title",
      period: "123~123",
      participants: 1,
      status: "Upcoming",
      isAdmin: false,
    },
    {
      thumbnail:
        "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FtEMUl%2FbtrDc6957nj%2FNwJoDw0EOapJNDSNRNZK8K%2Fimg.jpg",
      title: "title",
      period: "123~123",
      participants: 1,
      status: "Concluded",
      isAdmin: false,
    },
    {
      thumbnail:
        "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FtEMUl%2FbtrDc6957nj%2FNwJoDw0EOapJNDSNRNZK8K%2Fimg.jpg",
      title: "title",
      period: "123~123",
      participants: 1,
      status: "Upcoming",
      isAdmin: false,
    },
  ];
  return (
    <StyledStudies>
      <StyledTitle>My Studies</StyledTitle>
      <StyledHeader>
        <StyledSortContainer>
          <StyledSortButton
            src={
              isGridMode
                ? require("../../../assets/grid-select.png")
                : require("../../../assets/grid-unselect.png")
            }
            onClick={() => setGridMode(true)}
          />
          <StyledSortButton
            src={
              isGridMode
                ? require("../../../assets/list-unselect.png")
                : require("../../../assets/list-select.png")
            }
            onClick={() => setGridMode(false)}
          />
        </StyledSortContainer>
        <StyledActionContainer>
          <StyledActionButton>
            <StyledActionLogo src={require("../../../assets/create.png")} />
            <StyledActionText>Create</StyledActionText>
          </StyledActionButton>
          <StyledActionButton>
            <StyledActionLogo src={require("../../../assets/edit.png")} />
            <StyledActionText>Edit</StyledActionText>
          </StyledActionButton>
        </StyledActionContainer>
      </StyledHeader>
      {isGridMode ? (
        <StyledGridContainer>
          {studies.map((study, index) => (
            <StyledGridWrapper key={index}>
              <StyledGridThumbnail src={study.thumbnail} />
              <StyledGridInfoWrapper>
                <StyledGridTitle>{study.title}</StyledGridTitle>
                <StyledGridPeriod>{study.period}</StyledGridPeriod>
                <StyledGridParti>
                  Participants: {study.participants}
                </StyledGridParti>
                <StyledGridStatus status={study.status}>
                  <StyledGridStatusText status={study.status}>
                    {study.status}
                  </StyledGridStatusText>
                </StyledGridStatus>
              </StyledGridInfoWrapper>
              <StyledGridAction
                isAdmin={study.isAdmin}
                src={
                  study.isAdmin
                    ? require("../../../assets/admin.png")
                    : require("../../../assets/cancle.png")
                }
              />
            </StyledGridWrapper>
          ))}
        </StyledGridContainer>
      ) : (
        <StyledListContainer>
          <StyledListHeader>
            <StyledListAttribute flex={3} onClick={() => sortStudyName()}>
              <StyledListAttributeText>Name</StyledListAttributeText>
              <StyledListAttributeSort
                src={require("../../../assets/white-sort.png")}
                style={{
                  transform: isSortStudyName ? "rotate(180deg)" : "rotate(0deg",
                }}
              />
            </StyledListAttribute>
            <StyledListAttribute flex={1.4} onClick={() => sortStudyDuration()}>
              <StyledListAttributeText>Duration</StyledListAttributeText>
              <StyledListAttributeSort
                src={require("../../../assets/white-sort.png")}
                style={{
                  transform: isSortStudyDuration
                    ? "rotate(180deg)"
                    : "rotate(0deg",
                }}
              />
            </StyledListAttribute>
            <StyledListAttribute flex={1.4} onClick={() => sortStudyMission()}>
              <StyledListAttributeText>Mission</StyledListAttributeText>
              <StyledListAttributeSort
                src={require("../../../assets/white-sort.png")}
                style={{
                  transform: isSortStudyMission
                    ? "rotate(180deg)"
                    : "rotate(0deg",
                }}
              />
            </StyledListAttribute>
            <StyledListAttribute
              flex={1}
              onClick={() => sortStudyParticipants()}
            >
              <StyledListAttributeText>Participants</StyledListAttributeText>
              <StyledListAttributeSort
                src={require("../../../assets/white-sort.png")}
                style={{
                  transform: isSortStudyParticipants
                    ? "rotate(180deg)"
                    : "rotate(0deg",
                }}
              />
            </StyledListAttribute>
            <StyledListAttribute flex={1} onClick={() => sortStudyStatus()}>
              <StyledListAttributeText>Status</StyledListAttributeText>
              <StyledListAttributeSort
                src={require("../../../assets/white-sort.png")}
                style={{
                  transform: isSortStudyStatus
                    ? "rotate(180deg)"
                    : "rotate(0deg",
                }}
              />
            </StyledListAttribute>
          </StyledListHeader>
          <StyledListBody>
            {studies.map((study, index) => (
              <StyledListRow key={index}>
                <StyledListRowText flex={3}>{study.title}</StyledListRowText>
                <StyledListRowText flex={1.4}>{study.period}</StyledListRowText>
                <StyledListRowText flex={1.4}>mission</StyledListRowText>
                <StyledListRowText flex={1}>
                  {study.participants}
                </StyledListRowText>
                <StyledListRowStatus flex={1}>
                  <StyledListRowStatusText status={study.status}>
                    {study.status}
                  </StyledListRowStatusText>
                </StyledListRowStatus>
              </StyledListRow>
            ))}
          </StyledListBody>
        </StyledListContainer>
      )}
    </StyledStudies>
  );
}

export default Studies;
