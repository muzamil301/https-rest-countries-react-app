import styled from "styled-components";
import { ReactComponent as MoonIcon } from "../../../assets/icons/moon-outline.svg";
import { ReactComponent as SunIcon } from "../../../assets/icons/sunny-outline.svg";

const Header = (props: any) => {
  const { theme, setTheme } = props;
  return (
    <HeaderWrapper>
      <div className="container">
        <h1 className="logo w800">Where in the world?</h1>
        <div
          className="themeSwitcher"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          <div className="icon">
            {theme === "light" ? <MoonIcon /> : <SunIcon />}
          </div>
          <span className="w600">
            {theme === "light" ? "Dark" : "Light"} Mode
          </span>
        </div>
      </div>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  background-color: #fff;
  box-shadow: 0 3px 4px ${(props) => props.theme.colors.shadow};
  .container {
    min-height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  background-color: ${(props) => props.theme.colors.elements};

  .logo {
    font-size: 1.25rem;
    color: ${(props) => props.theme.colors.text};
  }

  .themeSwitcher {
    display: flex;
    align-items: center;
    cursor: pointer;
    color: ${(props) => props.theme.colors.text};
    .icon {
      width: 17px;
      margin-right: 10px;
      display: flex;
      align-items: center;
      color: ${(props) => props.theme.colors.text};
    }
  }

  @media all and (max-width: 768px) {
    .logo {
      font-size: 1rem;
    }
  }
`;

export default Header;
