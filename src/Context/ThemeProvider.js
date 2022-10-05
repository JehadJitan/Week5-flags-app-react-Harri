import React, { createContext, useState, useMemo, useEffect } from "react";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider as MuiThemeProvider, alpha } from "@mui/material/styles";

export const ToggleColorMode = createContext({
  handleToggleColor: () => {},
});

const ThemeProvider = ({ children }) => {
  const [colorMode, setColorMode] = useState(
    () => localStorage.getItem("colorMode") ?? "light"
  );

  const handle = (vr) => {
    if (vr === "dark") {
      document.documentElement.style.setProperty(
        "--scroll-bg-color",
        "#343a40"
      );
      document.documentElement.style.setProperty(
        "--dropdown-bg-color",
        "#1e1e1e"
      );
      document.documentElement.style.setProperty("--bg-color", "#121212");
      document.documentElement.style.setProperty(
        "--favourites-bg-color",
        "#1e1e1e"
      );
      document.documentElement.style.setProperty("--card-bg-color", "#1e1e1e");
      document.documentElement.style.setProperty(
        "--header-bg-color",
        "#1e1e1e"
      );
      document.documentElement.style.setProperty("--box-shadow", "none");
    } else {
      document.documentElement.style.setProperty(
        "--scroll-bg-color",
        "#f5f5f5"
      );
      document.documentElement.style.setProperty(
        "--dropdown-bg-color",
        "#ffffff"
      );
      document.documentElement.style.setProperty(
        "--box-shadow",
        "0 4px 10px -8px gray"
      );
      document.documentElement.style.setProperty("--bg-color", "#fafafa");
      document.documentElement.style.setProperty(
        "--favourites-bg-color",
        "#ffffff"
      );
      document.documentElement.style.setProperty("--card-bg-color", "#ffffff");
      document.documentElement.style.setProperty(
        "--header-bg-color",
        "#ffffff"
      );
    }
  };

  useEffect(() => {
    handle(colorMode);
    localStorage.setItem("colorMode", colorMode);
  }, [colorMode]);

  const theme = useMemo(() => {
    const theme = createTheme({
      typography: {
        fontFamily: '"Nunito Sans", sans-serif',
      },
      palette: {
        mode: colorMode,
      },
    });
    return createTheme(theme, {
      MuiButton: {
        variants: [
          {
            props: { variant: "contained", color: "grey" },
            style: {
              color: theme.palette.getContrastText(theme.palette.grey[300]),
            },
          },
          {
            props: { variant: "outlined", color: "grey" },
            style: {
              color: theme.palette.text.primary,
              borderColor:
                theme.palette.mode === "light"
                  ? "rgba(0, 0, 0, 0.23)"
                  : "rgba(255, 255, 255, 0.23)",
              "&.Mui-disabled": {
                border: `1px solid ${theme.palette.action.disabledBackground}`,
              },
              "&:hover": {
                borderColor:
                  theme.palette.mode === "light"
                    ? "rgba(0, 0, 0, 0.23)"
                    : "rgba(255, 255, 255, 0.23)",
                backgroundColor: alpha(
                  theme.palette.text.primary,
                  theme.palette.action.hoverOpacity
                ),
              },
            },
          },
          {
            props: { color: "grey", variant: "text" },
            style: {
              color: theme.palette.text.primary,
              "&:hover": {
                backgroundColor: alpha(
                  theme.palette.text.primary,
                  theme.palette.action.hoverOpacity
                ),
              },
            },
          },
        ],
      },
    });
  }, [colorMode]);

  return (
    <ToggleColorMode.Provider value={{ handleToggleColor: setColorMode }}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ToggleColorMode.Provider>
  );
};

export default ThemeProvider;
