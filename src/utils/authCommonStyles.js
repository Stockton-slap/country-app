import { Box, Button } from "@mui/material";
import { Field } from "formik";
import styled from "styled-components";

export const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 500px;
  height: 500px;
  margin-top: 100px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 15px;
`;

export const FormValue = styled(Field)`
  width: 350px;
  height: 50px;
  border-radius: 10px;
  border: none;
  background-color: #d3d3d3;
  padding-left: 15px;
  margin-bottom: 25px;
`;

export const SubmitButton = styled(Button)`
  width: 350px;
  height: 50px;
`;
