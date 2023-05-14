import React from "react";
import { ErrorMessage, Form, Formik } from "formik";

import { loginValidationSchema } from "../../utils/validationSchema";

import login from "../../redux/operations/login";
import { useDispatch } from "react-redux";
import {
  Container,
  FormValue,
  SubmitButton,
  Text,
} from "../../utils/authCommonStyles";

const LoginForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={loginValidationSchema}
      onSubmit={(values) => {
        console.log(values);
        dispatch(login(values));
      }}
    >
      <Form>
        <Container>
          <Text sx={{ fontSize: 32 }}>Log in</Text>

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
export default LoginForm;
