import React from "react";
import { ErrorMessage, Formik } from "formik";

import { loginValidationSchema } from "../../utils/validationSchema";

import login from "../../redux/operations/login";
import { useDispatch, useSelector } from "react-redux";
import {
  AuthWrapper,
  AuthContainer,
  FormValue,
  SubmitButton,
} from "../../utils/commonStyles";
import { FormLabel, Typography } from "@mui/material";
import Loader from "../Loader";
import { selectIsAuthError, selectIsAuthLoading } from "../../redux/selectors";

const LoginForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsAuthLoading);
  const isError = useSelector(selectIsAuthError);

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={loginValidationSchema}
      onSubmit={(values) => {
        dispatch(login(values));
      }}
    >
      <AuthWrapper>
        <AuthContainer sx={{ margin: 0, backgroundColor: "#fff" }}>
          <Typography sx={{ fontSize: 32, mt: "20px", mb: "20px" }}>
            LOG IN
          </Typography>

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
        </AuthContainer>
      </AuthWrapper>
    </Formik>
  );
};
export default LoginForm;
