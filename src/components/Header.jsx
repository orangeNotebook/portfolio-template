import * as React from "react";
import AppBar from "@mui/material/AppBar";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function Header() {
  return (
    <AppBar position="relative">
      <Toolbar>
        <ViewInArIcon sx={{ mr: 2 }} />
        <Typography variant="h6" color="inherit" noWrap>
          qyuupi
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
