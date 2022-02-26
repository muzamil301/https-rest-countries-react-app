import Header from "../partials/header/Header";
import Routing from "../../routes/routing";
import styled from "styled-components";
import { Theme } from "./../../theme/theme";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <Theme theme={theme}>
      <AppWrapper className="App">
        <Header theme={theme} setTheme={setTheme} />
        {/* views mounting via router */}
        <div className="container">
          <Routing />
        </div>
      </AppWrapper>
    </Theme>
  );
}

const AppWrapper = styled.div`
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.bg};
`;

export default App;
