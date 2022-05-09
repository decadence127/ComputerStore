/** @jsxImportSource @emotion/react */
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { css } from "@emotion/react";

import { yupResolver } from "@hookform/resolvers/yup";
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
import { snackActions } from "../../../utils/helpers/snackBarUtils";
import { NavigateState } from "../../common/privateRoute/PrivateRoute";
import styles from "./styles";
import { validationSchema } from "./validationSchema";

interface SignUpLayoutProps {}

interface InputProps {
  firstname: string;
  lastname: string;
  phoneNumber: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUpLayout: React.FC<SignUpLayoutProps> = () => {
  const navigate = useNavigate();

  const formOptions = {
    defaultValues: {
      name: "",
      surname: "",
      email: "",
      password: "",
      phoneNumber: "",
      confirmPassword: "",
    },
    resolver: yupResolver(validationSchema),
  };
  const {
    register: reg,
    handleSubmit,
    formState,
  } = useForm<InputProps>(formOptions);
  const { errors, dirtyFields } = formState;

  const areDirtyFields =
    !dirtyFields.firstname ||
    !dirtyFields.lastname ||
    !dirtyFields.email ||
    !dirtyFields.password ||
    !dirtyFields.phoneNumber ||
    !dirtyFields.confirmPassword;

  const [showPassword, setShowPassword] = React.useState<boolean>(false);

  const [registration, { isLoading }] = useRegistrationMutation();
  const location = useLocation();

  const handleMouseHoldPassword = (e: React.MouseEvent<HTMLButtonElement>) => {
    setShowPassword(!showPassword);
  };

  const returnHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    navigate(-1);
  };

  const onSubmit: SubmitHandler<InputProps> = async (
    formData
  ): Promise<void> => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { confirmPassword, ...requestData } = formData;
    const result = await registration({
      email: formData.email,
      password: formData.password,
      accountData: {
        firstname: formData.firstname,
        lastname: formData.lastname,
        phone: formData.phoneNumber,
      },
    });
    if (result && !("error" in result)) {
      const from =
        (location.state as NavigateState)?.from.pathname || HOME_ROUTE;
      navigate(from);
      snackActions.success("Registration successful");
    }
  };

  return (
    <Container>
      <Box css={styles.wrapperContainer}>
        <Typography variant="h4" fontWeight="bold" component="h1" gutterBottom>
          SIGN UP
        </Typography>
        <Paper elevation={4} css={styles.innerBox}>
          <form
            css={css({
              padding: "0.8rem",
              "&>*": {
                margin: "0.5rem",
              },
            })}
            onSubmit={handleSubmit(onSubmit)}
          >
            <FormControl sx={{ minWidth: "95%", margin: "0 20px" }}>
              <TextField
                required
                variant="outlined"
                label="Email"
                {...reg("email")}
                error={!!errors.email?.message}
                helperText={errors.email?.message}
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
                  required
                  error={!!errors.firstname?.message}
                  helperText={errors.firstname?.message}
                  variant="outlined"
                  {...reg("firstname")}
                  label="First Name"
                  id="firstname"
                />
              </FormControl>
              <FormControl fullWidth sx={{ marginLeft: "10px" }}>
                <TextField
                  required
                  error={!!errors.lastname?.message}
                  helperText={errors.lastname?.message}
                  {...reg("lastname")}
                  variant="outlined"
                  label="Last Name"
                  id="lastname"
                />
              </FormControl>
            </Box>
            <FormControl sx={{ minWidth: "95%", margin: "0 20px" }}>
              <TextField
                required
                error={!!errors.phoneNumber?.message}
                helperText={errors.phoneNumber?.message}
                type="text"
                {...reg("phoneNumber")}
                name="phoneNumber"
                variant="outlined"
                label="Phone number"
                id="phone"
              />
            </FormControl>
            <FormControl sx={{ minWidth: "95%", margin: "0 20px" }}>
              <TextField
                required
                error={!!errors.password?.message}
                helperText={errors.password?.message}
                type={showPassword ? "text" : "password"}
                variant="outlined"
                label="Password"
                {...reg("password")}
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
            <FormControl sx={{ minWidth: "95%", margin: "0 20px" }}>
              <TextField
                required
                error={!!errors.confirmPassword?.message}
                helperText={errors.confirmPassword?.message}
                type={showPassword ? "text" : "password"}
                variant="outlined"
                label="Confirm password"
                {...reg("confirmPassword")}
                id="password"
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
                disabled={areDirtyFields || isLoading}
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
