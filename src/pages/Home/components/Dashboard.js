import styled from "styled-components";
import { useState } from "react";
const StyledDashboard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #16191c;
  padding: 2.25rem;
  width: 100vh;
`;

const StyledTitle = styled.h1`
  color: white;
  font-family: roboto;
  font-size: 2.5rem;
  margin: 2rem 0 3rem 0;
`;

const StyledTotalContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 3.125rem;
`;

const StyledTotalMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 1rem;
  background-color: #1f2327;
  width: 16rem;
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
  margin-bottom: 1rem;
`;

const StyledTaskContainer = styled.div`
  background-color: #1f2327;
  border-radius: 0.75rem;
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
`;

const StyledTaskHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const StyledTaskTitle = styled.h1`
  color: white;
  font-family: roboto;
  font-size: 1.75rem;
  font-weight: 400;
`;

const StyledTaskSortContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 2.5rem;
`;

const StyledTaskSortWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  border-radius: 1.7rem;
  margin-left: 1rem;
  padding: 0.5rem 1rem;
`;

const StyledTaskSortText = styled.div`
  font-family: roboto;
  font-size: 1.25rem;
  margin-right: 0.625rem;
  color: #000000;
`;

const StyledTaskSortLogo = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;

const StyledTaskBody = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledTaskTableContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 1.25rem;
`;

const StyledTaskTableScrollContainer = styled.div`
  height: 37vh;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const StyledTaskAttribute = styled.div`
  flex: ${(props) => props.flex};
  color: #ffffff;
  font-family: roboto;
  font-size: 1.5rem;
  text-align: center;
  padding-bottom: 0.5rem;
  border-bottom: 3px solid #000000;
`;

const StyledTaskContent = styled.div`
  flex: ${(props) => props.flex};
  color: #ffffff;
  font-family: roboto;
  font-size: 1.5rem;
  text-align: center;
`;

const StyledTaskStatus = styled.div`
  flex: ${(props) => props.flex};
  color: ${(props) => (props.status === "Completed" ? "#249636" : "#E66633")};
  background-color: ${(props) =>
    props.status === "Completed" ? "#CBDAC4" : "#F0D1C4"};
  font-family: roboto;
  font-size: 1.25rem;
  font-weight: 700;
  text-align: center;
  border-radius: 1000px;
  padding: 0.5rem 0;
`;

function Dashboard() {
  //false면 내림차순, true면 오름차순
  const [sortStudygroup, setSortStudygroup] = useState(false);
  const [sortStatus, setSortStatus] = useState(false);

  const contents = [
    {
      name: "velog 글 작성하기(1)",
      dueDate: "2023.12.24 Sun",
      studyGroup: "3 velog 작성",
      status: "Completed",
    },
    {
      name: "velog 글 작성하기(2)",
      dueDate: "2023.12.24 Sun",
      studyGroup: "코테 문풀 스터디",
      status: "Incomplete",
    },
    {
      name: "velog 글 작성하기(2)",
      dueDate: "2023.12.24 Sun",
      studyGroup: "코테 문풀 스터디",
      status: "Incomplete",
    },
    {
      name: "velog 글 작성하기(2)",
      dueDate: "2023.12.24 Sun",
      studyGroup: "코테 문풀 스터디",
      status: "Incomplete",
    },
    {
      name: "velog 글 작성하기(2)",
      dueDate: "2023.12.24 Sun",
      studyGroup: "코테 문풀 스터디",
      status: "Incomplete",
    },
    {
      name: "velog 글 작성하기(2)",
      dueDate: "2023.12.24 Sun",
      studyGroup: "코테 문풀 스터디",
      status: "Incomplete",
    },
    {
      name: "velog 글 작성하기(3)",
      dueDate: "2023.12.24 Sun",
      studyGroup: "3 velog 작성",
      status: "Incomplete",
    },
    {
      name: "velog 글 작성하기(4)",
      dueDate: "2023.12.24 Sun",
      studyGroup: "3 velog 작성",
      status: "Completed",
    },
    {
      name: "velog 글 작성하기(5)",
      dueDate: "2023.12.24 Sun",
      studyGroup: "3 velog 작성",
      status: "Completed",
    },
  ];
  return (
    <StyledDashboard>
      <StyledTitle>Dashboard</StyledTitle>
      <StyledTotalContainer>
        <StyledTotalMenu>
          <StyledTotalTitle>Total Joined Studies</StyledTotalTitle>
          <StyledTotailCount>0</StyledTotailCount>
        </StyledTotalMenu>
        <StyledTotalMenu>
          <StyledTotalTitle>Total Completed Tasks</StyledTotalTitle>
          <StyledTotailCount>0</StyledTotailCount>
        </StyledTotalMenu>
        <StyledTotalMenu>
          <StyledTotalTitle>Incomplete Tasks for this week</StyledTotalTitle>
          <StyledTotailCount>0</StyledTotailCount>
        </StyledTotalMenu>
      </StyledTotalContainer>
      <StyledTaskContainer>
        <StyledTaskHeader>
          <StyledTaskTitle>Tasks for this week</StyledTaskTitle>
          <StyledTaskSortContainer>
            <StyledTaskSortWrapper
              onClick={() => setSortStudygroup(!sortStudygroup)}
            >
              <StyledTaskSortText>Study Group</StyledTaskSortText>
              <StyledTaskSortLogo
                src={require("../../../assets/down.png")}
                style={{
                  transform: sortStudygroup ? "rotate(180deg)" : "rotate(0deg)",
                }}
              />
            </StyledTaskSortWrapper>
            <StyledTaskSortWrapper onClick={() => setSortStatus(!sortStatus)}>
              <StyledTaskSortText>Status</StyledTaskSortText>
              <StyledTaskSortLogo
                src={require("../../../assets/down.png")}
                style={{
                  transform: sortStatus ? "rotate(180deg)" : "rotate(0deg)",
                }}
              />
            </StyledTaskSortWrapper>
          </StyledTaskSortContainer>
        </StyledTaskHeader>
        <StyledTaskBody>
          <StyledTaskTableContainer>
            <StyledTaskAttribute flex={2.5}>Name</StyledTaskAttribute>
            <StyledTaskAttribute flex={1.25}> Due Date</StyledTaskAttribute>
            <StyledTaskAttribute flex={1}>Study Group</StyledTaskAttribute>
            <StyledTaskAttribute flex={1}>Status</StyledTaskAttribute>
          </StyledTaskTableContainer>
          <StyledTaskTableScrollContainer>
            {contents.map((task, index) => (
              <StyledTaskTableContainer key={index}>
                <StyledTaskContent flex={2.5}>{task.name}</StyledTaskContent>
                <StyledTaskContent flex={1.25}>
                  {task.dueDate}
                </StyledTaskContent>
                <StyledTaskContent flex={1}>
                  {task.studyGroup}
                </StyledTaskContent>
                <StyledTaskStatus flex={1} status={task.status}>
                  {task.status}
                </StyledTaskStatus>
              </StyledTaskTableContainer>
            ))}
          </StyledTaskTableScrollContainer>
        </StyledTaskBody>
      </StyledTaskContainer>
    </StyledDashboard>
  );
}

export default Dashboard;
