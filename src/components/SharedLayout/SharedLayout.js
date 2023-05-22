import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { selectIsLoggedIn } from "../../redux/selectors";
import { useSelector } from "react-redux";

import { Box, Container } from "@mui/material";

import LoggedInBar from "../LoggedInBar";
import LoggedOutBar from "../LoggedOutBar";
import Logo from "../Logo";
import Loader from "../Loader";

const SharedLayout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Container disableGutters={true} maxWidth="100%">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxShadow:
            "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
          height: "100px",
          mb: "40px",
          p: "0 50px",
          backgroundColor: "#fff",
        }}
      >
        <Logo />
        {isLoggedIn ? <LoggedInBar /> : <LoggedOutBar />}
      </Box>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout;
