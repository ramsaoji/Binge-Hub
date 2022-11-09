import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { theme } from "../Theme/Theme";

const Navbar = () => {
  return (
    <AppBar
      position="fixed"
      sx={{ boxShadow: 3 }}
      color="myColor"
      enableColorOnDark
      onClick={() => window.scroll(0, 0)}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
        <Typography
          fontSize={{ xs: "30px", md: "45px" }}
          fontFamily={theme.customFont}
          textTransform={"uppercase"}
          letterSpacing={"0.3rem"}
          sx={{ cursor: "pointer" }}
        >
          🎬 Binge Hub 🎥
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
