import styled from "styled-components";

const StyledNav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 15rem;
  height: 100vh;
  background-color: #000000;
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
  width: 8rem;
  height: 8rem;
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
  margin-bottom: 0.5rem;
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
  color: ${(props) => (props.isSelect ? "#ffffff" : "#adb3be")};
  font-family: roboto;
  font-size: 1.25rem;
`;

function Nav({ imageUrl, name, email, selectedMenu }) {
  return (
    <StyledNav>
      <StyledLogo src={require("../../../assets/logo.png")} alt="logo" />
      <StyledProfile>
        <StyledProfileImage src={imageUrl} alt="profile" />
        <StyledProfileName>{name}</StyledProfileName>
        <StlyedProfileEmail>{email}</StlyedProfileEmail>
      </StyledProfile>
      <StyledMenu>
        <StyledMenuItem>
          <StyledMenuItemIcon
            src={
              selectedMenu == "home"
                ? require("../../../assets/home-select.png")
                : require("../../../assets/home-unselect.png")
            }
            alt="home"
          />
          <StyledMenuItemText isSelect={selectedMenu == "home"}>
            Home
          </StyledMenuItemText>
        </StyledMenuItem>
        <StyledMenuItem>
          <StyledMenuItemIcon
            src={
              selectedMenu == "canlendar"
                ? require("../../../assets/canlendar-select.png")
                : require("../../../assets/canlendar-unselect.png")
            }
            alt="home"
          />
          <StyledMenuItemText isSelect={selectedMenu == "calendar"}>
            {" "}
            Calendar
          </StyledMenuItemText>
        </StyledMenuItem>
        <StyledMenuItem>
          <StyledMenuItemIcon
            src={
              selectedMenu == "mystudies"
                ? require("../../../assets/mystudies-select.png")
                : require("../../../assets/mystudies-unselect.png")
            }
            alt="home"
          />
          <StyledMenuItemText isSelect={selectedMenu == "mystudies"}>
            {" "}
            My Studies
          </StyledMenuItemText>
        </StyledMenuItem>
        <StyledMenuItem>
          <StyledMenuItemIcon
            src={
              selectedMenu == "settings"
                ? require("../../../assets/settings-select.png")
                : require("../../../assets/settings-unselect.png")
            }
            alt="home"
          />
          <StyledMenuItemText isSelect={selectedMenu == "settings"}>
            Settings
          </StyledMenuItemText>
        </StyledMenuItem>
      </StyledMenu>
    </StyledNav>
  );
}

export default Nav;
