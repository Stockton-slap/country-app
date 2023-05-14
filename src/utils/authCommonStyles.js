import { Box, Button, Typography } from "@mui/material";
import { Field } from "formik";
import styled from "styled-components";

export const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 400px;
  height: 400px;
  margin-top: 100px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 15px;
`;

export const Text = styled(Typography)``;

export const FormValue = styled(Field)`
  width: 300px;
`;

export const SubmitButton = styled(Button)`
  width: 300px;
`;
