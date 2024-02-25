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

const StyledButton = styled.button`
  cursor: pointer;
  padding: 0.8rem 1.5rem;
  margin-right: ${(props) => (props.marginRight ? "1rem" : "0")};
  font-family: "SBAggroB";
  color: #ffffff;
  font-size: 1rem;
  border: 2px solid #ffffff;
  border-radius: 0.75rem;
  background-color: #000000;
`;

function Header({ setSigninClicked, setSignupClicked }) {
  function logout() {
    document.cookie =
      "studitAccessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie =
      "studitRefreshToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.location.href = "/";
  }

  const isLoggedIn = document.cookie.includes("studitAccessToken");

  return (
    <StyledHeader>
      <Link to="/home">
        <StyledLogo src={require("../../../assets/logo.png")} alt="logo" />
      </Link>
      <StyledButtonRow>
        {!isLoggedIn && (
          <StyledButton
            className="signin-btn"
            marginRight={true}
            onClick={() => setSigninClicked(true)}
          >
            Sign In
          </StyledButton>
        )}
        {!isLoggedIn && (
          <StyledButton
            className="signup-btn"
            onClick={() => setSignupClicked(true)}
          >
            Sign Up
          </StyledButton>
        )}
        {isLoggedIn && (
          <StyledButton className="logout-btn" onClick={() => logout()}>
            Log Out
          </StyledButton>
        )}
      </StyledButtonRow>
    </StyledHeader>
  );
}

export default Header;
