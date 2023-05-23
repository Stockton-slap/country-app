import React from "react";
import { ErrorMessage, Formik } from "formik";

import { registerValidationSchema } from "../../utils/validationSchema";

import register from "../../redux/operations/register";
import { useDispatch, useSelector } from "react-redux";
import {
  AuthWrapper,
  Container,
  FormValue,
  SubmitButton,
} from "../../utils/commonStyles";
import { FormLabel, Typography } from "@mui/material";
import { selectIsAuthError, selectIsAuthLoading } from "../../redux/selectors";
import Loader from "../Loader";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsAuthLoading);
  const isError = useSelector(selectIsAuthError);

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      validationSchema={registerValidationSchema}
      onSubmit={(values) => {
        dispatch(register(values));
      }}
    >
      <AuthWrapper>
        <Container sx={{ margin: 0, backgroundColor: "#fff" }}>
          <Typography sx={{ fontSize: 32, mt: "20px", mb: "20px" }}>
            REGISTER
          </Typography>

          <FormLabel htmlFor="name" sx={{ mb: "5px" }} required>
            Username
          </FormLabel>
          <FormValue
            id="name"
            name="name"
            type="text"
            placeholder="Your username..."
          />
          <ErrorMessage name="name" />

          <FormLabel htmlFor="email" sx={{ mb: "5px" }} required>
            Email
          </FormLabel>
          <FormValue
            id="email"
            name="email"
            type="email"
            placeholder="Your email..."
          />
          <ErrorMessage name="email" />

          <FormLabel htmlFor="password" sx={{ mb: "5px" }} required>
            Password
          </FormLabel>
          <FormValue
            id="password"
            name="password"
            type="password"
            placeholder="Your password..."
          />
          <ErrorMessage name="password" />

          <SubmitButton type="submit" variant="contained" sx={{ mb: "50px" }}>
            {isLoading && !isError ? <Loader /> : "Submit"}
          </SubmitButton>
        </Container>
      </AuthWrapper>
    </Formik>
  );
};
export default RegisterForm;
