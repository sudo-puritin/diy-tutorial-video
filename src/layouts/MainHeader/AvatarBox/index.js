import React, { useState } from "react";

import {
  Avatar,
  Box,
  Divider,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { Link, Link as RounterLink, useNavigate } from "react-router-dom";

import useAuth from "../../../hooks/useAuth";

function AvatarBox() {
  const { user, isAuthenticated, logout } = useAuth();

  const [anchorEl, setAnchorEl] = useState(null);

  const navigate = useNavigate();

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    try {
      handleProfileMenuClose();
      await logout(() => {
        navigate("/login");
      });
    } catch (error) {
      console.error(error);
    }
  };

  const renderMenu = (
    <Menu
      id="menu-appbar"
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={Boolean(anchorEl)}
      onClose={handleProfileMenuClose}
    >
      <Box sx={{ my: 1.5, px: 2.5 }}>
        <Typography variant="subtitle2" noWrap>
          {user?.firstName} {user?.lastName}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }} noWrap>
          {user?.email}
        </Typography>
      </Box>
      <Divider sx={{ boderyStyle: "dashed" }} />
      <MenuItem
        onClick={handleProfileMenuClose}
        to="/user"
        component={RounterLink}
        sx={{ mx: 1 }}
      >
        My Profile
      </MenuItem>
      <MenuItem
        onClick={handleProfileMenuClose}
        to="/user/setting"
        component={RounterLink}
        sx={{ mx: 1 }}
      >
        Account settings
      </MenuItem>

      <Divider sx={{ boderyStyle: "dashed" }} />

      <MenuItem onClick={handleLogout} sx={{ mx: 1, color: "red" }}>
        Sign out
      </MenuItem>
    </Menu>
  );

  return (
    <>
      {isAuthenticated ? (
        <div>
          <Avatar
            {...stringAvatar(`${user.lastName}${" "}${user.firstName}`)}
            onClick={handleProfileMenuOpen}
            sx={{ cursor: "pointer" }}
          />
          {renderMenu}
        </div>
      ) : (
        <div>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <Typography
              variant="h6"
              noWrap
              sx={{
                fontFamily: "sans-serif",
                fontWeight: 400,
                fontSize: "1.2rem",
                lineHeight: "32px",
                color: "#C5B38C",
                textDecoration: "none",
              }}
            >
              Sign in
            </Typography>
          </Link>
        </div>
      )}
    </>
  );
}

export default AvatarBox;

//MUI function
function stringToColor(string) {
  let hash = 0;
  let i;

  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}
