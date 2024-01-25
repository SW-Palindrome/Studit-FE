import styled from "styled-components";

const StyledSentence = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto 0;
  background-color: #000000;
  font-family: "SBAggroB";
  text-align: center;
  color: #ffffff;
  font-size: 2.6rem;
`;
const StyledLogo = styled.img`
  margin: 0 auto 2rem auto;
  width: 20rem;
`;

function Sentence() {
  return (
    <StyledSentence>
      <StyledLogo src={require("../../../assets/logo.png")} alt="logo" />
      &quot;Study(공부)&quot;와 &quot;it(특별한 무언가)&quot;를 결합한 의미로,
      <br />
      특정한 내용이나 분야를 공부하는 스터디를
      <br />
      효율적으로 관리할 수 있도록 돕습니다.
    </StyledSentence>
  );
}

export default Sentence;
