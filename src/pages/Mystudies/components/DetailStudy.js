import { useState, useEffect } from "react";
import styled from "styled-components";
import { getDetailStudy } from "../../../services/mock";
import fetchData from "../../../utils/fetchData";

const StyledDetailStudy = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(87vw - 4rem);
  height: 100vh;
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
`;

const StyledFirstAction = styled(StyledAction)`
  margin-left: auto;
`;

function DetailStudy() {
  const [thumbnail, setThumbnail] = useState("");
  const [title, setTitle] = useState("");
  const [duration, setDuration] = useState("");
  const [description, setDescription] = useState("");
  const [mission, setMission] = useState("");
  const [week, setWeek] = useState(0);
  const [fine, setFine] = useState(0);
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
  }, []);

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
          <StyledFirstAction
            src={require("../../../assets/study-setting.png")}
            alt="study-setting"
          />
          <StyledAction
            src={require("../../../assets/study-mng.png")}
            alt="study-mng"
          />
          <StyledAction
            src={require("../../../assets/study-invite.png")}
            alt="study-invite"
          />
        </StyledRow>
        <StyledRow>
          <StyledColumn>
            <StyledMission>Description</StyledMission>
            <StyledDescription>{description}</StyledDescription>
          </StyledColumn>
        </StyledRow>
      </StyledDetailContainer>
    </StyledDetailStudy>
  );
}

export default DetailStudy;
