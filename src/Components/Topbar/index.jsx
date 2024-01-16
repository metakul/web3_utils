import React, { useContext } from "react";
import { ColorModeContext } from "../../themes/themes";
import { LightModeOutlined, DarkModeOutlined } from "@mui/icons-material";
import { styled, useTheme } from "@mui/system";
import { Box, AppBar, IconButton, Toolbar } from "@mui/material";

const Topbar = ({}) => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <AppBar
      sx={{
        display: "flex",
        background: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(10px)",
        boxShadow: "2",
        transition: "background 0.3s, backdrop-filter 0.3s, box-shadow 0.3s",
      }}
    >
      <Toolbar  sx={{ justifyContent: "center" }}>
        <IconButton onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlined />
            ) : (
              <LightModeOutlined />
            )}
          </IconButton>
      </Toolbar>
   
    </AppBar>
  );
};

export default Topbar;
