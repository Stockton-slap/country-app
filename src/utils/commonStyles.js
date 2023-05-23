import { Box, Button } from "@mui/material";
import { Field, Form } from "formik";
import styled from "styled-components";
import flagsImage from "../images/flags.jpg";

export const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 500px;
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

export const Title = styled.h2`
  margin-bottom: 20px;
  color: #000;
`;

export const Text = styled.p`
  margin-bottom: 10px;
  color: #000;
`;

export const AuthWrapper = styled(Form)`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${flagsImage});
    filter: blur(5px);
    z-index: -1;
  }
`;
