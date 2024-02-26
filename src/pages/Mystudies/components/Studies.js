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
  grid-auto-flow: column;
  grid-template-rows: repeat(3, auto);
  gap: 1.5rem;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const StyledGridWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1.5rem;
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

function Studies() {
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
          <StyledSortButton src={require("../../../assets/grid.png")} />
          <StyledSortButton src={require("../../../assets/list.png")} />
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
    </StyledStudies>
  );
}

export default Studies;
