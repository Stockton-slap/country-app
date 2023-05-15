import { Link, Outlet } from "react-router-dom";

import { selectIsLoggedIn } from "../../redux/selectors";
import { useSelector } from "react-redux";

import { Box, Typography } from "@mui/material";
import { Language } from "@mui/icons-material";

import LoggedInBar from "../LoggedInBar";
import LoggedOutBar from "../LoggedOutBar/LoggedOutBar";

const SharedLayout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxShadow:
            "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
          height: "80px",
          maxWidth: "100%",
          marginBottom: "40px",
        }}
      >
        <Link to="/">
          <Box display="flex" alignItems="center">
            <Language sx={{ width: 50, height: 50 }} />
            <Typography sx={{ ml: 2 }}>COUNTRY APP</Typography>
          </Box>
        </Link>

        {isLoggedIn ? <LoggedInBar /> : <LoggedOutBar />}
      </Box>
      <Outlet />
    </>
  );
};

export default SharedLayout;
