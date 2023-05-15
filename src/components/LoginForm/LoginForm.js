import React from "react";
import { ErrorMessage, Form, Formik } from "formik";

import { loginValidationSchema } from "../../utils/validationSchema";

import login from "../../redux/operations/login";
import { useDispatch } from "react-redux";
import {
  Container,
  FormValue,
  SubmitButton,
} from "../../utils/authCommonStyles";
import { FormLabel, Typography } from "@mui/material";

const LoginForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={loginValidationSchema}
      onSubmit={(values) => {
        dispatch(login(values));
      }}
    >
      <Form>
        <Container>
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

          <SubmitButton type="submit" variant="contained">
            Submit
          </SubmitButton>
        </Container>
      </Form>
    </Formik>
  );
};
export default LoginForm;
