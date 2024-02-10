import styled from "styled-components";
import Nav from "../../components/Nav";

const StyledSettings = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #1f2327;
`;

function Mystudies() {
  return (
    <StyledSettings>
      <Nav
        imageUrl="https://i.namu.wiki/i/x9jfQUvtlnkV9g86wcKFegAk8efDjEZh3T93TyzOXW9LvNPxHbccbhpyixoWK8n9RwLNB11_9rofsVTOSAu30876fmsOW77622Zee2Yy7Nn2PAJj2DArNN8hWjVB0UlanGkHHe_X2aAkmtPhhjnrhg.webp"
        name="Yujeng Jeong"
        email="jjungyu1282@gmail.com"
        selectedMenu="settings"
        isDarkMode={true}
      />
    </StyledSettings>
  );
}

export default Mystudies;
