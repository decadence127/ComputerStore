/** @jsxImportSource @emotion/react */
import { Link, Navigate, useNavigate } from "react-router-dom";

import { AppBar, Box, Button, Toolbar } from "@mui/material";

import logo from "../../../assets/logo512.me.png";
import {
  CART_ROUTE,
  HOME_ROUTE,
  SIGN_IN_ROUTE,
} from "../../../utils/constants/routeNames";
import styles from "./styles";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import ProfileMenu from "../../profileMenu/ProfileMenu";
import React from "react";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const { isAuthenticated } = useSelector(
    (store: RootState) => store.userReducer
  );
  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    navigate(e.currentTarget.value);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="sticky" css={styles.appBarStyles}>
      <Toolbar css={styles.toolBarStyles}>
        <Link to={HOME_ROUTE} css={styles.linkStyle}>
          <Box
            component="img"
            draggable="false"
            src={logo}
            alt="logo"
            css={styles.imgBoxStyles}
          />
        </Link>
        <Box display="flex">
          {isAuthenticated ? (
            <ProfileMenu
              anchorEl={anchorEl}
              handleClose={handleClose}
              handleMenu={handleMenu}
            />
          ) : (
            <Button
              onClick={clickHandler}
              value={SIGN_IN_ROUTE}
              sx={{ margin: "0 20px" }}
              variant="contained"
            >
              Sign in
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
