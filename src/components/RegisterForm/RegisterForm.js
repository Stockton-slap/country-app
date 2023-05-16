import React from "react";
import { ErrorMessage, Form, Formik } from "formik";

import { registerValidationSchema } from "../../utils/validationSchema";

import register from "../../redux/operations/register";
import { useDispatch } from "react-redux";
import { Container, FormValue, SubmitButton } from "../../utils/commonStyles";
import { FormLabel, Typography } from "@mui/material";

const RegisterForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      validationSchema={registerValidationSchema}
      onSubmit={(values) => {
        dispatch(register(values));
      }}
    >
      <Form>
        <Container>
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

          <SubmitButton type="submit" variant="contained">
            Submit
          </SubmitButton>
        </Container>
      </Form>
    </Formik>
  );
};
export default RegisterForm;
