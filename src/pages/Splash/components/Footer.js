import styled from "styled-components";

const StyledIntroduction = styled.div`
  padding-bottom: 2rem;
  background-color: #000000;
  text-align: center;
  font-family: Roboto;
  color: #6d7684;
  font-size: 0.6rem;
`;

function Footer() {
  return (
    <StyledIntroduction>
      SW 마에스트로 14기 Palindrome팀
      <br />
      서울특별시 강남구 테헤란로 311 아남타워빌딩 7층 (06151)
      <br />
      swm.palindrome@gmail.com
    </StyledIntroduction>
  );
}

export default Footer;
