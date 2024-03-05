import { useState } from "react";
import styled from "styled-components";
import DateRangePicker from "./DateRangePicker";

const StyledCreateStudyGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  margin: 2rem;
`;

const StyledTitle = styled.div`
  font-size: 2.5rem;
  color: #ffffff;
  font-family: roboto;
`;

const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  padding: 1.5rem;
  border-radius: 0.625rem;
  background-color: #292e33;
`;

const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;
`;

const StyledAttributeName = styled.div`
  font-family: roboto;
  font-size: 1.25rem;
  color: #ffffff;
  width: 10rem;
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
  cursor: pointer;
  width: 5rem;
  height: 5rem;
  background-color: #ffffff;
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

const StyledMemberDropdown = styled.input`
  width: 10rem;
  height: 2rem;
  background-color: #000000;
  border-radius: 0.5rem;
  border: none;
  color: #ffffff;
  font-family: roboto;
  font-size: 1rem;
`;

function CreateStudyGroup() {
  const [image, setImage] = useState(null);

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

  return (
    <StyledCreateStudyGroup>
      <StyledTitle>Create Study Group</StyledTitle>
      <StyledBody>
        <StyledRow>
          <StyledAttributeName>Duration</StyledAttributeName>
          <DateRangePicker />
          <StyledCalendarIcon src={require("../../../assets/calendar.png")} />
        </StyledRow>
        <StyledRow>
          <StyledAttributeName>Thumbnail</StyledAttributeName>
          <StyledColumn>
            <StyledThumbnailIcon
              src={require("../../../assets/thumbnail.png")}
            />
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
            {!image && <StyledImagePreview htmlFor="image-select" />}
          </StyledColumn>
        </StyledRow>
        <StyledRow>
          <StyledAttributeName>Title</StyledAttributeName>
          <StyledTitleInput type="text" maxLength="20" />
        </StyledRow>
        <StyledRow>
          <StyledAttributeName>Members</StyledAttributeName>
          <StyledMemberDropdown type="number" />
        </StyledRow>
      </StyledBody>
    </StyledCreateStudyGroup>
  );
}

export default CreateStudyGroup;
