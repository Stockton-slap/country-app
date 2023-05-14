import { Link, Outlet } from "react-router-dom";

import { selectIsLoggedIn } from "../../redux/selectors";
import { useSelector } from "react-redux";

import { Box, Container, Typography } from "@mui/material";
import { Language } from "@mui/icons-material";

import LoggedInBar from "../LoggedInBar";
import LoggedOutBar from "../LoggedOutBar/LoggedOutBar";

const SharedLayout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid red",
          height: "80px",
        }}
      >
        <Link to="/">
          <Box display="flex" alignItems="center">
            <Language sx={{ width: 50, height: 50 }} />
            <Typography sx={{ ml: 2 }}>COUNTRY APP</Typography>
          </Box>
        </Link>

        {isLoggedIn ? <LoggedInBar /> : <LoggedOutBar />}
      </Container>
      <Outlet />
    </>
  );
};

export default SharedLayout;
