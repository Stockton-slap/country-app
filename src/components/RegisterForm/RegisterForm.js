import React from "react";
import { ErrorMessage, Form, Formik, Field } from "formik";

import { validationSchema } from "../../utils/validationSchema";
import { Box, Button, Typography } from "@mui/material";
import styled from "styled-components";

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 400px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 15px;
`;

const Text = styled(Typography)``;

const FormValue = styled(Field)`
  width: 300px;
`;

const SubmitButton = styled(Button)`
  width: 300px;
`;

const RegisterForm = () => {
  return (
    <Formik
      initialValues={{ username: "", password: "", email: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form>
        <Container>
          <Text sx={{ fontSize: 32 }}>Register</Text>
          <FormValue
            name="username"
            type="text"
            placeholder="Your username..."
          />
          <ErrorMessage name="username" />

          <FormValue
            name="password"
            type="password"
            placeholder="Your password..."
          />
          <ErrorMessage name="password" />

          <FormValue name="email" type="email" placeholder="Your email..." />
          <ErrorMessage name="email" />

          <SubmitButton type="submit" variant="contained">
            Submit
          </SubmitButton>
        </Container>
      </Form>
    </Formik>
  );
};
export default RegisterForm;
