import { ThemeProvider } from "styled-components";

export const themeLight = {
  colors: {
    elements: "hsl(0, 0%, 100%)",
    text: "hsl(200, 15%, 8%)",
    bg: "hsl(0, 0%, 98%)",
    inputColor: "hsl(0, 0%, 52%)", //dark grey
    shadow: "rgb(214 208 208 / 33%)",
  },
};

export const themeDark = {
  colors: {
    elements: "hsl(209, 23%, 22%)",
    text: "hsl(0, 0%, 100%)",
    bg: "hsl(207, 26%, 17%)",
    inputColor: "hsl(0, 0%, 100%)",
    shadow: "rgba(0, 0,0,0.2)",
  },
};

export const Theme = ({ children, theme }: any) => (
  <ThemeProvider theme={theme === "light" ? themeLight : themeDark}>
    {children}
  </ThemeProvider>
);
