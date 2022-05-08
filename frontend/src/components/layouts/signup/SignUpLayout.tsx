/** @jsxImportSource @emotion/react */
import React from "react";
import { Link, useNavigate } from "react-router-dom";

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

import { useRegistrationMutation } from "../../../redux/services/authService";
import { HOME_ROUTE } from "../../../utils/constants/routeNames";
import styles from "./styles";

interface SignUpLayoutProps {}

const SignUpLayout: React.FC<SignUpLayoutProps> = () => {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [firstname, setFirstName] = React.useState("");
  const [lastname, setLastName] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");

  const [showPassword, setShowPassword] = React.useState<boolean>(false);

  const [register, { isLoading }] = useRegistrationMutation();

  const handleMouseHoldPassword = (e: React.MouseEvent<HTMLButtonElement>) => {
    setShowPassword(!showPassword);
  };

  const returnHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    navigate(-1);
  };
  const submitHandler = async (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = await register({
      email,
      password,
      accountData: { firstname, lastname, phone: phoneNumber },
    });
    if (result && !("error" in result)) {
      navigate(HOME_ROUTE);
    }
  };

  return (
    <Container>
      <Box css={styles.wrapperContainer}>
        <Typography variant="h4" fontWeight="bold" component="h1" gutterBottom>
          SIGN UP
        </Typography>
        <Paper elevation={4} css={styles.innerBox}>
          <form onSubmit={submitHandler}>
            <FormControl sx={{ minWidth: "95%", margin: "0 20px" }}>
              <TextField
                onChange={(e) => setEmail(e.target.value)}
                required
                variant="outlined"
                label="Email"
                id="email"
              />
            </FormControl>
            <Box
              sx={{
                display: "flex",
                minWidth: "95%",
                margin: "0 20px",
                flexWrap: "nowrap",
              }}
            >
              <FormControl fullWidth sx={{ marginRight: "10px" }}>
                <TextField
                  onChange={(e) => setFirstName(e.target.value)}
                  variant="outlined"
                  label="First Name"
                  id="firstname"
                />
              </FormControl>
              <FormControl fullWidth sx={{ marginLeft: "10px" }}>
                <TextField
                  onChange={(e) => setLastName(e.target.value)}
                  variant="outlined"
                  label="Last Name"
                  id="lastname"
                />
              </FormControl>
            </Box>
            <FormControl sx={{ minWidth: "95%", margin: "0 20px" }}>
              <TextField
                type="text"
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
                variant="outlined"
                label="Phone number"
                id="phone"
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
