import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";

import desertImage from "../../images/flags.jpeg";

const Wrapper = styled(Box)`
  height: 100vh;
  background-image: url(${desertImage});
  background-size: cover;
  background-position: center;
`;

const StyledLink = styled(Link)`
  margin: 0 auto;
  &:not(:last-child) {
    margin-right: 10px;
  }
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
      <Box
        sx={{
          width: "500px",
          height: "250px",
          backgroundColor: "#fff",
          borderRadius: "10px",
          padding: "30px",
        }}
      >
        <Typography sx={{ textAlign: "center", fontSize: "30px", mb: "40px" }}>
          Welcome to the Country App!
        </Typography>
        <Box sx={{ display: "flex" }}>
          <StyledLink to="/register">
            <Button
              variant="contained"
              sx={{ width: "200px", fontSize: "30px" }}
            >
              Register
            </Button>
          </StyledLink>
          <StyledLink to="/login">
            <Button
              variant="contained"
              sx={{ width: "200px", fontSize: "30px" }}
            >
              Login
            </Button>
          </StyledLink>
        </Box>
      </Box>
    </Wrapper>
  );
};

export default WelcomeScreen;
