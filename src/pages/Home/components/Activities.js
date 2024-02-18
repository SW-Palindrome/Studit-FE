import styled from "styled-components";

const StyledActivities = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #16191c;
  padding: 2rem;
  border-left: 1px solid #6b6d6f;
  width: 40rem;
`;

const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
`;

const StyledTitle = styled.h1`
  margin: 0;
  padding: 0;
  color: white;
  font-family: roboto;
  font-size: 2.5rem;
`;

const StyledNoti = styled.img`
  width: 2.25rem;
  height: 2.25rem;
`;

const StyledBody = styled.div`
  margin-top: 2rem;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const StyledActivityWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 1rem 2rem;
  border: 1px solid #ffffff;
  border-radius: 0.375rem;
  margin-bottom: 0.75rem;
`;

const StyledAcitivityHeader = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledProfile = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  margin-right: 0.81rem;
`;

const StyledNameTimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.25rem;
`;

const StyledName = styled.p`
  margin: 0 0 0.2rem 0;
  padding: 0;
  color: #ffffff;
  font-family: roboto;
  font-size: 1.5rem;
`;

const StyledTime = styled.p`
  margin: 0;
  padding: 0;
  color: #ffffff;
  font-family: roboto;
  font-size: 1rem;
`;

const StyledActivityTitle = styled.p`
  margin: 0.5rem 0 0.625rem 0;
  padding: 0;
  color: #ffffff;
  font-family: roboto;
  font-size: 1.25rem;
`;

const StyledActivityUrl = styled.a`
  color: #ffffff;
  font-family: roboto;
  font-size: 1rem;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    color: #aaaaaa;
  }
`;

function Activities() {
  const activities = [
    {
      profile:
        "https://i.namu.wiki/i/x9jfQUvtlnkV9g86wcKFegAk8efDjEZh3T93TyzOXW9LvNPxHbccbhpyixoWK8n9RwLNB11_9rofsVTOSAu30876fmsOW77622Zee2Yy7Nn2PAJj2DArNN8hWjVB0UlanGkHHe_X2aAkmtPhhjnrhg.webp",
      name: "John Doe",
      time: "30 minutes ago",
      title: "velog 글 작성하기(1)",
      url: "https://velog.io/@jshong0907/ansible",
    },
    {
      profile:
        "https://i.namu.wiki/i/x9jfQUvtlnkV9g86wcKFegAk8efDjEZh3T93TyzOXW9LvNPxHbccbhpyixoWK8n9RwLNB11_9rofsVTOSAu30876fmsOW77622Zee2Yy7Nn2PAJj2DArNN8hWjVB0UlanGkHHe_X2aAkmtPhhjnrhg.webp",
      name: "John Doe",
      time: "30 minutes ago",
      title: "velog 글 작성하기(1)",
      url: "https://velog.io/@jshong0907/ansible",
    },
    {
      profile:
        "https://i.namu.wiki/i/x9jfQUvtlnkV9g86wcKFegAk8efDjEZh3T93TyzOXW9LvNPxHbccbhpyixoWK8n9RwLNB11_9rofsVTOSAu30876fmsOW77622Zee2Yy7Nn2PAJj2DArNN8hWjVB0UlanGkHHe_X2aAkmtPhhjnrhg.webp",
      name: "John Doe",
      time: "30 minutes ago",
      title: "velog 글 작성하기(1)",
      url: "https://velog.io/@jshong0907/ansible",
    },
    {
      profile:
        "https://i.namu.wiki/i/x9jfQUvtlnkV9g86wcKFegAk8efDjEZh3T93TyzOXW9LvNPxHbccbhpyixoWK8n9RwLNB11_9rofsVTOSAu30876fmsOW77622Zee2Yy7Nn2PAJj2DArNN8hWjVB0UlanGkHHe_X2aAkmtPhhjnrhg.webp",
      name: "John Doe",
      time: "30 minutes ago",
      title: "velog 글 작성하기(1)",
      url: "https://velog.io/@jshong0907/ansible",
    },
  ];
  return (
    <StyledActivities>
      <StyledHeader>
        <StyledTitle>Activities</StyledTitle>
        <StyledNoti src={require("../../../assets/noti.png")} alt="notice" />
      </StyledHeader>
      <StyledBody>
        {activities.map((activity, index) => (
          <StyledActivityWrapper key={index}>
            <StyledAcitivityHeader>
              <StyledProfile src={activity.profile} />
              <StyledNameTimeContainer>
                <StyledName>{activity.name + " completed a task"}</StyledName>
                <StyledTime>{activity.time}</StyledTime>
              </StyledNameTimeContainer>
            </StyledAcitivityHeader>
            <StyledActivityTitle>{activity.title}</StyledActivityTitle>
            <StyledActivityUrl href={activity.url}>
              {activity.url}
            </StyledActivityUrl>
          </StyledActivityWrapper>
        ))}
      </StyledBody>
    </StyledActivities>
  );
}

export default Activities;
