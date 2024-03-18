import styled from "styled-components";

const StyledNotfound = styled.div`
  height: 100vh;
  weight: 100vw;
  background-color: #000000;
  color: #ffffff;
  font-size: 4rem;
  font-family: roboto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Notfound = () => {
  return <StyledNotfound>Not Found</StyledNotfound>;
};

export default Notfound;
