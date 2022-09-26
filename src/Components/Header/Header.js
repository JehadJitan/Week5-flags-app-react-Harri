import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

export default function NavBar() {
  return (
    <Box
      sx={({ flexGrow: 1 }, { overflow: "hidden", width: "100%" })}
      className="box"
    >
      <AppBar
        position="static"
        sx={{ backgroundColor: "white" }}
        className="appBar"
      >
        <Toolbar
          className="toolBar"
          sx={{
            ml: 4,
            mr: 4,
            display: { xs: "flex" },
            flexDirection: "row",
            backgroundColor: "white",
            justifyContent: "space-between",
            padding: "0px",
          }}
        >
          <Typography
            className="mainTitle"
            variant="h6"
            noWrap
            component="div"
            sx={{
              color: "black",
              fontWeight: 700,
              fontSize: "24px",
            }}
          >
            Where in the world?
          </Typography>
          <Stack direction="row" style={{ alignItems: "center" }}>
            <DarkModeOutlinedIcon
              className="darkModeIcon"
              sx={{ color: "black" }}
            />
            <Button
              className="darkBtn"
              variant="text"
              sx={{ color: "black", textTransform: "none" }}
            >
              Dark Mode
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
