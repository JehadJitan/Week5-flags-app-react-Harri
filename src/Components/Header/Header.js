import * as React from "react";
import { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import "./Header.css";
import { ToggleColorMode } from "../../Context/ThemeProvider";
import { useTheme } from "@mui/material/styles";

export default function NavBar() {
  const { handleToggleColor } = useContext(ToggleColorMode);
  const theme = useTheme();
  const temp = () => {
    const mode = theme.palette.mode === "dark" ? "light" : "dark";
    handleToggleColor(mode);
  };
  return (
    <Box
      sx={({ flexGrow: 1 }, { overflow: "hidden", width: "100%" })}
      className="box"
    >
      <AppBar position="static" className="appBar">
        <Toolbar
          className="toolBar"
          sx={{
            mx: 3,
            display: { xs: "flex" },
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            className="mainTitle"
            variant="h5"
            component="div"
            noWrap
            sx={{
              color: "text.primary",
              fontWeight: 800,
            }}
          >
            Where in the world?
          </Typography>
          <Stack direction="row" style={{ alignItems: "center" }}>
            <Button
              className="darkMode"
              onClick={temp}
              variant="h6"
              sx={{
                textTransform: "none",
                color: "text.primary",
                fontWeight: 700,
                fontSize: "16px",
              }}
            >
              {theme.palette.mode === "dark" ? (
                <DarkModeIcon className="moonIcon" />
              ) : (
                <DarkModeOutlinedIcon className="moonIcon" />
              )}
              Dark Mode
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
