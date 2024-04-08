import { useState, useEffect } from "react";
import styled from "styled-components";
import fetchData from "../../../utils/fetchData";
import { getDetailStudy } from "../../../services/mock";
import DateRangePicker from "./DateRangePicker";

const StyledEditStudyGroup = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  width: calc(87vw - 4rem);
  padding: 2rem;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const StyledTitle = styled.h1`
  font-size: 2.5rem;
  color: #ffffff;
  font-family: roboto;
`;

const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  border-radius: 0.625rem;
  background-color: #292e33;
`;

const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: ${(props) => (props.isCentered ? "center" : "start")};
  margin-bottom: 1rem;
`;

const StyledAttributeName = styled.div`
  font-family: roboto;
  font-size: 1.25rem;
  color: #ffffff;
  width: 10rem;
`;

const StyledDescriptionTextarea = styled.textarea`
  font-family: roboto;
  font-size: 1rem;
  color: #ffffff;
  width: 30rem;
  height: 5rem;
  background-color: #000000;
  border-radius: 0.5rem;
  border: none;
  resize: none;
`;

const StyledText = styled.div`
  font-family: roboto;
  font-size: 1rem;
  margin: 0 1rem 0 0.5rem;
  color: #ffffff;
`;

const StyledCalendarIcon = styled.img`
  margin-left: 1rem;
  width: 1.5rem;
  height: 1.5rem;
`;

const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledThumbnailIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  margin-bottom: 0.5rem;
`;

const StyledImagePreview = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 5rem;
  height: 5rem;
  background-color: transparent;
  border: solid 0.15rem #cccccc;
`;

const StyledImageSelector = styled.label`
  margin: 0;
  padding: 0;
  cursor: pointer;
`;

const StyledImage = styled.img`
  width: 5rem;
  height: 5rem;
  object-fit: cover;
`;

const StyledImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StyledRemoveButton = styled.img`
  margin-left: 0.5rem;
  width: 1rem;
  height: 1rem;
  color: white;
  cursor: pointer;
`;

const StyledFileInput = styled.input`
  display: none;
`;

const StyledTitleInput = styled.input`
  width: 30rem;
  height: 2rem;
  background-color: #000000;
  border-radius: 0.5rem;
  border: none;
  color: #ffffff;
  font-family: roboto;
  font-size: 1rem;
`;

const StyledNumberInput = styled.input`
  width: 10rem;
  height: 2rem;
  background-color: #000000;
  border-radius: 0.5rem;
  border: none;
  color: #ffffff;
  font-family: roboto;
  font-size: 1rem;
`;

const StyledRadio = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  margin-right: 0.5rem;
  width: 1.25rem;
  height: 1.25rem;
  background-color: transparent;
  border-radius: 50%;
  border: solid 0.15rem #ffffff;
  outline: none;
  cursor: pointer;

  &:checked {
    border: 0.2rem solid #292e33;
    background-color: #ffffff;
    box-shadow: 0 0 0 0.2rem #ffffff;
  }
`;

const StyledRadioLabel = styled.label`
  margin-right: 1rem;
  font-family: roboto;
  font-size: 1rem;
  color: #ffffff;
`;

const StyledTextInput = styled.input`
  width: 10rem;
  height: 2rem;
  font-family: roboto;
  font-size: 1rem;
  color: #ffffff;
  background-color: #000000;
  border-radius: 0.5rem;
  border: none;
`;

const StyledEditButton = styled.button`
  width: 8rem;
  height: 3rem;
  border-radius: 1rem;
  font-family: roboto;
  font-size: 1.25rem;
  color: #ffffff;
  border: none;
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  background-color: ${(props) => (props.disabled ? "#848484" : "#FFFFFF")};
  color: ${(props) => (props.disabled ? "#3D3D3D" : "#000000")};
`;

const StyledBottomRow1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StyledBottomRow2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

function EditStudyGroup() {
  const [image, setImage] = useState(null);
  const [prevImage, setPrevImage] = useState(null);
  const [date, setDate] = useState([null, null]);
  const [stringDate, setStringDate] = useState("");
  const [title, setTitle] = useState("");
  const [prevTitle, setPrevTitle] = useState("");
  const [memberLimit, setMemberLimit] = useState(0);
  const [prevMemberLimit, setPrevMemberLimit] = useState(0);
  const [purpose, setPurpose] = useState("CS");
  const [prevPurpose, setPrevPurpose] = useState("CS");
  const [description, setDescription] = useState("");
  const [prevDescription, setPrevDescription] = useState("");
  const [mission, setMission] = useState("velog");
  const [prevMission, setPrevMission] = useState("velog");
  const [week, setWeek] = useState(0);
  const [prevWeek, setPrevWeek] = useState(0);
  const [tag, setTag] = useState("");
  const [prevTag, setPrevTag] = useState("");
  const [fine, setFine] = useState(0);
  const [prevFine, setPrevFine] = useState(0);
  const [isPublic, setIsPublic] = useState(false);
  const [prevIsPublic, setPrevIsPublic] = useState(false);
  const [isButtonClickabled, setButtonClickabled] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData(
      getDetailStudy,
      [
        setImage,
        setStringDate,
        setTitle,
        setMemberLimit,
        setPurpose,
        setDescription,
        setMission,
        setWeek,
        setTag,
        setFine,
        setIsPublic,
      ],
      [
        "thumbnail",
        "duration",
        "title",
        "memberLimit",
        "purpose",
        "description",
        "mission",
        "week",
        "tag",
        "fine",
        "isPublic",
      ],
      setLoading,
    );
  }, []);

  useEffect(() => {
    if (stringDate) {
      const dateArray = stringDate.split(" ~ ");
      const startDate = new Date(dateArray[0]);
      const endDate = new Date(dateArray[1]);
      setDate([startDate, endDate]);
      setPrevImage(image);
      setPrevTitle(title);
      setPrevMemberLimit(memberLimit);
      setPrevPurpose(purpose);
      setPrevDescription(description);
      setPrevMission(mission);
      setPrevWeek(week);
      setPrevTag(tag);
      setPrevFine(fine);
      setPrevIsPublic(isPublic);
    }
  }, [stringDate]);

  useEffect(() => {
    const isAllInputsFilled =
      (image != prevImage ||
        title != prevTitle ||
        memberLimit != prevMemberLimit ||
        purpose != prevPurpose ||
        description != prevDescription ||
        mission != prevMission ||
        week != prevWeek ||
        tag != prevTag ||
        fine != prevFine ||
        isPublic != prevIsPublic) &&
      image != null &&
      title != "" &&
      memberLimit > 0 &&
      description != "" &&
      week > 0 &&
      tag != "" &&
      fine > 0;
    setButtonClickabled(isAllInputsFilled);
  }, [
    date,
    image,
    title,
    memberLimit,
    purpose,
    description,
    mission,
    week,
    tag,
    fine,
    isPublic,
  ]);

  const fetchEditStudyGroup = async () => {
    //1초 대기
    await new Promise((resolve) => setTimeout(resolve, 1000));
    //my studies 페이지로 이동
    window.location.href = "/mystudies";
    // const response = await fetch("http://localhost:3001/studygroup", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     image,
    //     date,
    //     title,
    //     memberLimit,
    //     purpose,
    //     description,
    //     mission,
    //     week,
    //     tag,
    //     fine,
    //     isPublic,
    //   }),
    // });

    // if (response.ok) {
    //   alert("Study group created successfully");
    // }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
  };

  if (loading) return null;

  return (
    <StyledEditStudyGroup>
      <StyledTitle>Edit Study Group</StyledTitle>
      <StyledBody>
        <StyledRow isCentered={true}>
          <StyledAttributeName>Duration</StyledAttributeName>
          <DateRangePicker value={date} />
          <StyledCalendarIcon src={require("../../../assets/calendar.png")} />
        </StyledRow>
        <StyledRow isCentered={false}>
          <StyledAttributeName>Thumbnail</StyledAttributeName>
          <StyledColumn>
            <StyledFileInput
              id="image-select"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
            {image && (
              <StyledImageContainer>
                <StyledImageSelector htmlFor="image-select">
                  <StyledImage src={image} alt="Uploaded" />
                </StyledImageSelector>
                <StyledRemoveButton
                  onClick={handleRemoveImage}
                  src={require("../../../assets/cancel.png")}
                />
              </StyledImageContainer>
            )}
            {!image && (
              <StyledImagePreview htmlFor="image-select">
                <StyledThumbnailIcon
                  src={require("../../../assets/thumbnail.png")}
                />
              </StyledImagePreview>
            )}
          </StyledColumn>
        </StyledRow>
        <StyledRow isCentered={true}>
          <StyledAttributeName>Title</StyledAttributeName>
          <StyledTitleInput
            type="text"
            maxLength="20"
            value={title}
            onChange={setTitle}
          />
        </StyledRow>
        <StyledRow isCentered={true}>
          <StyledAttributeName>
            Member
            <br />
            Limit
          </StyledAttributeName>
          <StyledNumberInput
            type="number"
            value={memberLimit}
            onChange={(e) => setMemberLimit(e.target.value)}
          />
        </StyledRow>
        <StyledRow isCentered={true}>
          <StyledAttributeName>Purpose</StyledAttributeName>
          <StyledRadio
            type="radio"
            name="purpose"
            id="CS"
            value="CS"
            checked={purpose === "CS"}
            onChange={(e) => setPurpose(e.target.value)}
          />
          <StyledRadioLabel htmlFor="CS">CS Study</StyledRadioLabel>
          <StyledRadio
            type="radio"
            name="purpose"
            id="Algorithm"
            value="Algorithm"
            checked={purpose === "Algorithm"}
            onChange={(e) => setPurpose(e.target.value)}
          />
          <StyledRadioLabel htmlFor="Algorithm">
            Algorithm Study
          </StyledRadioLabel>
        </StyledRow>
        <StyledRow isCentered={false}>
          <StyledAttributeName>Description</StyledAttributeName>
          <StyledDescriptionTextarea
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            type="text"
            maxLength={200}
          />
        </StyledRow>
        <StyledRow isCentered={false}>
          <StyledAttributeName>Mission</StyledAttributeName>
          <StyledColumn>
            <StyledRow isCentered={true}>
              <StyledRadio
                type="radio"
                name="mission"
                id="velog"
                value="velog"
                checked={mission === "velog"}
                onChange={(e) => setMission(e.target.value)}
              />
              <StyledRadioLabel htmlFor="velog">Post Velog</StyledRadioLabel>
              <StyledRadio
                type="radio"
                name="mission"
                id="github"
                value="github"
                checked={mission === "github"}
                onChange={(e) => setMission(e.target.value)}
              />
              <StyledRadioLabel htmlFor="github">
                Commit Github
              </StyledRadioLabel>
            </StyledRow>
            <StyledRow isCentered={true}>
              <StyledNumberInput
                type="number"
                value={week}
                onChange={(e) => setWeek(e.target.value)}
              />
              <StyledText>per week</StyledText>
              <StyledText>tags</StyledText>
              <StyledTextInput
                type="text"
                value={tag}
                onChange={(e) => setTag(e.target.value)}
              />
            </StyledRow>
          </StyledColumn>
        </StyledRow>
        <StyledRow isCentered={true}>
          <StyledAttributeName>Fine</StyledAttributeName>
          <StyledNumberInput
            type="number"
            value={fine}
            onChange={(e) => setFine(e.target.value)}
          />
          <StyledText>\per non-completion</StyledText>
        </StyledRow>
        <StyledBottomRow2>
          <StyledBottomRow1>
            <StyledAttributeName>IsPublic</StyledAttributeName>
            <StyledRadio
              type="radio"
              name="isPublic"
              id="Private"
              checked={isPublic === false}
              onChange={() => setIsPublic(false)}
            />
            <StyledRadioLabel htmlFor="Private">Private</StyledRadioLabel>
            <StyledRadio
              type="radio"
              name="isPublic"
              id="Public"
              checked={isPublic === true}
              onChange={() => setIsPublic(true)}
            />
            <StyledRadioLabel htmlFor="Public">Public</StyledRadioLabel>
          </StyledBottomRow1>
          <StyledEditButton
            onClick={fetchEditStudyGroup}
            disabled={!isButtonClickabled}
          >
            Edit
          </StyledEditButton>
        </StyledBottomRow2>
      </StyledBody>
    </StyledEditStudyGroup>
  );
}

export default EditStudyGroup;
