/** @jsxImportSource @emotion/react */
import React from "react";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../../redux/services/authService";
import styles from "./styles";
import { HOME_ROUTE } from "../../../utils/constants/routeNames";
import { Visibility, VisibilityOff } from "@mui/icons-material";
interface SignInLayoutProps {}

const SignInLayout: React.FC<SignInLayoutProps> = () => {
  const navigate = useNavigate();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState<boolean>(false);

  const [login, { isLoading }] = useLoginMutation();

  const handleMouseHoldPassword = (e: React.MouseEvent<HTMLButtonElement>) => {
    setShowPassword(!showPassword);
  };

  const returnHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    navigate(-1);
  };
  const submitHandler = async (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = await login({ username, password });
    console.log(result);

    if (result && !("error" in result)) {
      navigate(HOME_ROUTE);
    }
  };

  return (
    <Container maxWidth="xs">
      <Box css={styles.wrapperContainer}>
        <Typography variant="h4" fontWeight="bold" component="h1" gutterBottom>
          SIGN IN
        </Typography>
        <Paper elevation={4} css={styles.innerBox}>
          <form onSubmit={submitHandler}>
            <FormControl sx={{ minWidth: "95%", margin: "0 20px" }}>
              <TextField
                onChange={(e) => setUsername(e.target.value)}
                required
                variant="outlined"
                label="Username"
                id="username"
              />
            </FormControl>
            <FormControl sx={{ minWidth: "95%", margin: "0 20px" }}>
              <TextField
                type={showPassword ? "text" : "password"}
                onChange={(e) => setPassword(e.target.value)}
                required
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
                SIGN IN
              </Button>
            </Box>
          </form>
        </Paper>
      </Box>
    </Container>
  );
};
export default SignInLayout;
