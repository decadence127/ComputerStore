import { Badge, IconButton, Menu, MenuItem } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import React from "react";
import {
  CART_ROUTE,
  LOGOUT_ROUTE,
  PROFILE_ROUTE,
} from "../../utils/constants/routeNames";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearCredentials } from "../../redux/slices/userSlice";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import { useGetUserCartQuery } from "../../redux/services/cartService";
import { RootState } from "../../redux/store";

interface ProfileMenuProps {
  anchorEl: HTMLElement | null;
  handleClose: () => void;
  handleMenu: (event: React.MouseEvent<HTMLElement>) => void;
}

export default function ProfileMenu({
  anchorEl,
  handleClose,
  handleMenu,
}: ProfileMenuProps) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useSelector((store: RootState) => store.userReducer);
  const { data } = useGetUserCartQuery({ userId: String(id) });

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const { path, action } = e.currentTarget.dataset;

    if (path) {
      navigate(path as string);
      handleClose();
      if (action) {
        action === "LOGOUT" && dispatch(clearCredentials());
      }
    }
  };

  return (
    <div>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
      <Menu
        PaperProps={{ style: { marginTop: "60px", minWidth: "180px" } }}
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
        <MenuItem data-path={CART_ROUTE} onClick={handleClick}>
          <Badge badgeContent={data && data.commodities.length} color="error">
            <ShoppingCartIcon />
          </Badge>
          Cart
        </MenuItem>
        <MenuItem data-path={PROFILE_ROUTE} onClick={handleClick}>
          <PersonIcon />
          My account
        </MenuItem>
        <MenuItem
          data-path={LOGOUT_ROUTE.path}
          data-action={LOGOUT_ROUTE.action}
          onClick={handleClick}
        >
          <LogoutIcon />
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
}
