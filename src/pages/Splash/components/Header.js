import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 2rem 1rem;
  background-color: #000000;
`;

const StyledLogo = styled.img`
  position: absolute;
  left: 50%;
  top: 2rem;
  transform: translateX(-50%);
  width: 10rem;
`;

const StyledButtonRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledSignin = styled.button`
  cursor: pointer;
  padding: 0.8rem 1.5rem;
  margin-right: 1rem;
  font-family: "SBAggroB";
  color: #ffffff;
  font-size: 1rem;
  border: 2px solid #ffffff;
  border-radius: 0.75rem;
  background-color: #000000;
`;

const StyledSignUp = styled.button`
  cursor: pointer;
  padding: 0.8rem 1.5rem;
  font-family: "SBAggroB";
  color: #ffffff;
  font-size: 1rem;
  border: 2px solid #ffffff;
  border-radius: 0.75rem;
  background-color: #000000;
`;

function Header({ setSigninClicked, setSignupClicked }) {
  return (
    <StyledHeader>
      <Link to="/home">
        <StyledLogo src={require("../../../assets/logo.png")} alt="logo" />
      </Link>
      <StyledButtonRow>
        <StyledSignin
          className="signin-btn"
          onClick={() => setSigninClicked(true)}
        >
          Sign In
        </StyledSignin>
        <StyledSignUp
          className="signup-btn"
          onClick={() => setSignupClicked(true)}
        >
          Sign Up
        </StyledSignUp>
      </StyledButtonRow>
    </StyledHeader>
  );
}

export default Header;
