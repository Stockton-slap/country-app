import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { AddShoppingCart } from "@mui/icons-material";
import { Badge, Box, Button } from "@mui/material";

import logout from "../../redux/operations/logout";

import Filter from "../Filter/Filter";

const LoggedInBar = () => {
  const dispatch = useDispatch();

  const handleLogoutClick = () => {
    dispatch(logout());
  };

  return (
    <>
      <Filter />

      <Box display="flex" gap="40px">
        <Box>
          <Link to="/cart" style={{ display: "flex", alignItems: "center" }}>
            <AddShoppingCart
              sx={{ width: 30, height: 30, mr: "10px", color: "#000" }}
            />
            <Badge
              badgeContent={0}
              color="secondary"
              sx={{
                width: 30,
                height: 30,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: "orange",
                color: "white",
              }}
            >
              0
            </Badge>
          </Link>
        </Box>
        <Button variant="contained" size="medium" onClick={handleLogoutClick}>
          Log Out
        </Button>
      </Box>
    </>
  );
};

export default LoggedInBar;
