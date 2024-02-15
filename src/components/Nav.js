import styled from "styled-components";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { navData } from "../recoil/navData";

const StyledNav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 13.375rem;
  height: 100vh;
  border-right: 1px solid #6b6d6f;
  background-color: #16191c;
`;

const StyledLogo = styled.img`
  margin: 0 auto 2rem auto;
  width: 9rem;
  padding-top: 2rem;
`;

const StyledProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 0rem;
`;

const StyledProfileImage = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  margin-bottom: 1rem;
`;

const StyledProfileName = styled.div`
  color: #dadada;
  font-family: roboto;
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

const StlyedProfileEmail = styled.div`
  color: #dadada;
  font-family: roboto;
  font-size: 0.75rem;
  font-weight: 500;
  margin-bottom: 3rem;
`;

const StyledMenu = styled.div`
  padding: 0rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StyledMenuItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 1.2rem;
`;

const StyledMenuItemIcon = styled.img`
  width: 1.75rem;
  height: 1.75rem;
  margin-right: 0.5rem;
`;

const StyledMenuItemText = styled.div`
  color: ${(props) => (props.isMenuSelected ? "#ffffff" : "#adb3be")};
  font-family: roboto;
  font-size: 1.25rem;
`;

const StyledMenuFooter = styled.div`
  margin-top: auto;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: row;
  width: 12rem;
`;

const StyledDarkLightModeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StyledDarkLightModeBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  margin-right: 0.5rem;
  background-color: ${(props) =>
    props.isModeSelected ? "#353B4B" : "transparent"};
`;

const StyledDarkLightMode = styled.img`
  width: 1.2rem;
  height: 1.2rem;
`;

const StyledHelp = styled.img`
  margin-left: auto;
  width: 1.5rem;
  height: 1.5rem;
`;

function Nav({ selectedMenu }) {
  const [navState, setNavState] = useRecoilState(navData);

  const changeDarkMode = () => {
    setNavState((prevState) => ({
      ...prevState,
      isDarkMode: true,
    }));
  };

  const changeLightMode = () => {
    setNavState((prevState) => ({
      ...prevState,
      isDarkMode: false,
    }));
  };

  return (
    <StyledNav>
      <StyledLogo src={require("../assets/logo.png")} alt="logo" />
      <StyledProfile>
        <StyledProfileImage src={navState.imageUrl} alt="profile" />
        <StyledProfileName>{navState.name}</StyledProfileName>
        <StlyedProfileEmail>{navState.email}</StlyedProfileEmail>
      </StyledProfile>
      <StyledMenu>
        <Link to="/home" style={{ textDecoration: "none" }}>
          <StyledMenuItem>
            <StyledMenuItemIcon
              src={
                selectedMenu == "home"
                  ? require("../assets/home-select.png")
                  : require("../assets/home-unselect.png")
              }
              alt="home"
            />
            <StyledMenuItemText isMenuSelected={selectedMenu == "home"}>
              Home
            </StyledMenuItemText>
          </StyledMenuItem>
        </Link>
        <Link to="/calendar" style={{ textDecoration: "none" }}>
          <StyledMenuItem>
            <StyledMenuItemIcon
              src={
                selectedMenu == "calendar"
                  ? require("../assets/calendar-select.png")
                  : require("../assets/calendar-unselect.png")
              }
              alt="home"
            />
            <StyledMenuItemText isMenuSelected={selectedMenu == "calendar"}>
              Calendar
            </StyledMenuItemText>
          </StyledMenuItem>
        </Link>
        <Link to="/mystudies" style={{ textDecoration: "none" }}>
          <StyledMenuItem>
            <StyledMenuItemIcon
              src={
                selectedMenu == "mystudies"
                  ? require("../assets/mystudies-select.png")
                  : require("../assets/mystudies-unselect.png")
              }
              alt="home"
            />
            <StyledMenuItemText isMenuSelected={selectedMenu == "mystudies"}>
              My Studies
            </StyledMenuItemText>
          </StyledMenuItem>
        </Link>
        <Link to="/settings" style={{ textDecoration: "none" }}>
          <StyledMenuItem>
            <StyledMenuItemIcon
              src={
                selectedMenu == "settings"
                  ? require("../assets/settings-select.png")
                  : require("../assets/settings-unselect.png")
              }
              alt="home"
            />
            <StyledMenuItemText isMenuSelected={selectedMenu == "settings"}>
              Settings
            </StyledMenuItemText>
          </StyledMenuItem>
        </Link>
      </StyledMenu>
      <StyledMenuFooter>
        <StyledDarkLightModeContainer>
          <StyledDarkLightModeBackground
            isModeSelected={navState.isDarkMode == false}
            onClick={changeLightMode}
          >
            <StyledDarkLightMode
              src={
                navState.isDarkMode
                  ? require("../assets/light-unselect.png")
                  : require("../assets/light-select.png")
              }
            />
          </StyledDarkLightModeBackground>
          <StyledDarkLightModeBackground
            isModeSelected={navState.isDarkMode == true}
            onClick={changeDarkMode}
          >
            <StyledDarkLightMode
              src={
                navState.isDarkMode
                  ? require("../assets/dark-select.png")
                  : require("../assets/dark-unselect.png")
              }
            />
          </StyledDarkLightModeBackground>
        </StyledDarkLightModeContainer>
        <StyledHelp src={require("../assets/help.png")} />
      </StyledMenuFooter>
    </StyledNav>
  );
}

export default Nav;
