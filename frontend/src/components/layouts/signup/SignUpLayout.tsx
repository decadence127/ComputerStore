/** @jsxImportSource @emotion/react */
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  FormControl,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  RegistrationRequest,
  useRegistrationMutation,
} from "../../../redux/services/authService";
import { UserState } from "../../../redux/slices/userSlice";
import { SIGN_IN_ROUTE } from "../../../utils/constants/routeNames";
import { snackActions } from "../../../utils/helpers/snackBarUtils";
import styles from "./styles";

interface SignUpLayoutProps {}

const SignUpLayout: React.FC<SignUpLayoutProps> = () => {
  const [register, { isLoading }] = useRegistrationMutation();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [userData, setUserData] = useState<RegistrationRequest>({
    username: "",
    password: "",
    accountData: { email: "" },
  });
  const handleMouseHoldPassword = (e: React.MouseEvent<HTMLButtonElement>) => {
    setShowPassword(!showPassword);
  };

  const returnHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    navigate(-1);
  };
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "email") {
      setUserData({ ...userData, accountData: { email: e.target.value } });
    } else {
      setUserData({
        ...userData,
        [e.target.name]: e.target.value,
      });
    }
  };
  const submitHandler = async (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await register(userData);
    console.log(result);
    snackActions.success("You have successfully registered. Proceed to login");
    navigate(SIGN_IN_ROUTE);
  };

  return (
    <Container maxWidth="md">
      <Box css={styles.wrapperContainer}>
        <Typography variant="h4" fontWeight="bold" component="h1" gutterBottom>
          SIGN UP
        </Typography>
        <Paper elevation={4} css={styles.innerBox}>
          <form onSubmit={submitHandler}>
            <FormControl sx={{ minWidth: "95%", margin: "0 20px" }}>
              <TextField
                onChange={changeHandler}
                required
                name="username"
                variant="outlined"
                label="Username"
                id="username"
              />
            </FormControl>
            <FormControl sx={{ minWidth: "95%", margin: "0 20px" }}>
              <TextField
                onChange={changeHandler}
                required
                name="email"
                variant="outlined"
                label="Email address"
                id="email"
              />
            </FormControl>
            <FormControl sx={{ minWidth: "95%", margin: "0 20px" }}>
              <TextField
                type={showPassword ? "text" : "password"}
                onChange={changeHandler}
                required
                name="password"
                variant="outlined"
                label="Password"
                id="password"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onMouseUp={handleMouseHoldPassword}
                        onMouseDown={handleMouseHoldPassword}
                        edge="end"
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </FormControl>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-around",
                "& button": {
                  width: "120px",
                },
              }}
            >
              <Button onClick={returnHandler} variant="contained" color="info">
                Back
              </Button>
              <Button
                disabled={isLoading}
                type="submit"
                variant="contained"
                color="primary"
              >
                SIGN UP
              </Button>
            </Box>
          </form>
        </Paper>
      </Box>
    </Container>
  );
};
export default SignUpLayout;
