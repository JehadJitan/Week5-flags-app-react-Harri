import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

export default function navBar() {
  return (
    <Box
      sx={({ flexGrow: 1 }, { overflow: "hidden", width: "100%" })}
      className="box"
    >
      <AppBar
        position="static"
        style={{
          backgroundColor: "#ffffff",
        }}
      >
        <Toolbar sx={{ ml: 3, mr: 3 }}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              color: "black",
            }}
          >
            Where in the world?
          </Typography>
          <Stack direction="row" style={{ alignItems: "center" }}>
            <DarkModeOutlinedIcon sx={{ color: "black" }} />
            <Button variant="text" sx={{ color: "black" }}>
              Dark Mode
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
