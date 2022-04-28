/** @jsxImportSource @emotion/react */
import { Link, Navigate, useNavigate } from "react-router-dom";

import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { AppBar, Box, Button, Toolbar } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";

import logo from "../../../assets/logo512.me.png";
import { HOME_ROUTE, SIGN_IN_ROUTE } from "../../../utils/constants/routeNames";
import styles from "./styles";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

interface HeaderProps {}

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const Header: React.FC<HeaderProps> = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector(
    (store: RootState) => store.userReducer
  );
  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    navigate(e.currentTarget.value);
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
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          {isAuthenticated ? (
            <Button
              onClick={clickHandler}
              value={SIGN_IN_ROUTE}
              sx={{ margin: "0 20px" }}
              variant="contained"
            >
              Cart
            </Button>
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
