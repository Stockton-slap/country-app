import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

import desertImage from "../../images/flags.jpeg";

const StyledLink = styled(Link)`
  margin: 0 auto;
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

const appearAnimation = keyframes`
 0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Wrapper = styled(Box)`
  height: 100vh;
  background-image: url(${desertImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const WelcomeBox = styled(Box)`
  width: 500px;
  height: 250px;
  background-color: #fff;
  border-radius: 30px;
  padding: 30px;
  animation: ${appearAnimation} 2s ease-in;
`;

const WelcomeScreen = () => {
  return (
    <Wrapper
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <WelcomeBox>
        <Typography sx={{ textAlign: "center", fontSize: "30px", mb: "40px" }}>
          Welcome to the Country App!
        </Typography>
        <Box sx={{ display: "flex" }}>
          <StyledLink to="/register">
            <Button
              variant="contained"
              sx={{ width: "200px", fontSize: "30px", borderRadius: "30px" }}
            >
              Register
            </Button>
          </StyledLink>
          <StyledLink to="/login">
            <Button
              variant="contained"
              sx={{ width: "200px", fontSize: "30px", borderRadius: "30px" }}
            >
              Login
            </Button>
          </StyledLink>
        </Box>
      </WelcomeBox>
    </Wrapper>
  );
};

export default WelcomeScreen;
