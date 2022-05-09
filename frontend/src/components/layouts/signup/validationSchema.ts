import * as Yup from "yup";
import "yup-phone";

const nameSurname = /[A-Za-zА-Яа-я]+$/;

export const validationSchema = Yup.object().shape({
  firstname: Yup.string()
    .matches(nameSurname, "Please, fill in correct value")
    .max(16, "First name must be no more than 16 characters")
    .required("First name is required"),
  lastname: Yup.string()
    .matches(nameSurname, "Please, fill in correct value")
    .max(16, "Last name must be no more than 16 characters")
    .required("Last name is required"),
  phoneNumber: Yup.string()
    .phone(undefined, undefined, "Phone number is not valid")
    .required("Phone is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords don't match")
    .required("Please confirm your password"),
});
