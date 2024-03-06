import { Link } from "react-router-dom";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { validateToken } from "../../../services/api";

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
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  function logout() {
    setIsAuthenticated(false);
    localStorage.removeItem("studitAccessToken");
    localStorage.removeItem("studitRefreshToken");
  }

  // 컴포넌트가 렌더링 될 때마다 토큰이 유효한지 확인
  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const isAuthenticated = await validateToken(
          localStorage.getItem("studitAccessToken"),
        );
        setIsAuthenticated(isAuthenticated);
      } catch (error) {
        setIsAuthenticated(false);
      }
    };

    checkAuthentication();
  }, []);

  return (
    <StyledHeader>
      <Link to="/home">
        <StyledLogo src={require("../../../assets/logo.png")} alt="logo" />
      </Link>
      <StyledButtonRow>
        {!isAuthenticated && (
          <StyledButton
            className="signin-btn"
            marginRight={true}
            onClick={() => setSigninClicked(true)}
          >
            Sign In
          </StyledButton>
        )}
        {!isAuthenticated && (
          <StyledButton
            className="signup-btn"
            onClick={() => setSignupClicked(true)}
          >
            Sign Up
          </StyledButton>
        )}
        {isAuthenticated && (
          <StyledButton className="logout-btn" onClick={() => logout()}>
            Log Out
          </StyledButton>
        )}
      </StyledButtonRow>
    </StyledHeader>
  );
}

export default Header;
