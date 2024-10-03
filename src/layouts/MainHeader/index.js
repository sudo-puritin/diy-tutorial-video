import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import { AppBar, Menu, MenuItem, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import "./MainHeader.scss";

import AvatarBox from "./AvatarBox";

function MainHeader() {
  const [anchorEl, setAnchorEl] = useState(null);

  const navigate = useNavigate();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLink = (link) => {
    handleClose();
    navigate(`/${link}`);
  };

  return (
    <AppBar
      position="static"
      sx={{
        width: "100%",
        backgroundColor: "#3F5B5C",
      }}
    >
      <div className="appBar_container">
        <div className="appBar_menuIcon">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenu}
          >
            <MenuIcon sx={{ width: "32px", height: "32px" }} />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={() => handleLink("category")}>CATEGORY</MenuItem>
            <MenuItem onClick={() => handleLink("collection")}>
              MY COLLECTION
            </MenuItem>
          </Menu>
        </div>
        <div className="appBar_navigate">
          <Link to="/" height="100%">
            <img
              src="../images/logoLight.png"
              alt="Logo"
              width="70"
              height="61"
            />
          </Link>

          <div className="appBar_navigate_list">
            <Typography
              className="appBar_navigation_option"
              variant="h6"
              onClick={() => navigate("/category")}
            >
              CATEGORY
            </Typography>

            <Typography
              className="appBar_navigation_option"
              variant="h6"
              onClick={() => navigate("/collection")}
            >
              COLLECTION
            </Typography>
          </div>
        </div>
        <AvatarBox />
      </div>
    </AppBar>
  );
}

export default MainHeader;
