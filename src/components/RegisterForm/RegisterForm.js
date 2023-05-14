import React from "react";
import { ErrorMessage, Form, Formik } from "formik";

import { registerValidationSchema } from "../../utils/validationSchema";

import register from "../../redux/operations/register";
import { useDispatch } from "react-redux";
import {
  Container,
  FormValue,
  SubmitButton,
  Text,
} from "../../utils/authCommonStyles";

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
          <Text sx={{ fontSize: 32 }}>Register</Text>

          <FormValue name="name" type="text" placeholder="Your name..." />
          <ErrorMessage name="name" />

          <FormValue name="email" type="email" placeholder="Your email..." />
          <ErrorMessage name="email" />

          <FormValue
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
