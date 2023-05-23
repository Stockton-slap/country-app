import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { AddShoppingCart } from "@mui/icons-material";
import { Badge, Box, Button } from "@mui/material";

import logout from "../../redux/operations/logout";
import Loader from "../Loader";
import {
  selectCartItem,
  selectIsAuthError,
  selectIsAuthLoading,
} from "../../redux/selectors";

const LoggedInBar = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsAuthLoading);
  const isError = useSelector(selectIsAuthError);
  const item = useSelector(selectCartItem);

  const handleLogoutClick = () => {
    dispatch(logout());
  };

  return (
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
            {item}
          </Badge>
        </Link>
      </Box>

      <Button
        variant="contained"
        size="medium"
        onClick={handleLogoutClick}
        sx={{ width: "150px" }}
      >
        {isLoading && !isError ? <Loader width="25px" /> : "Log Out"}
      </Button>
    </Box>
  );
};

export default LoggedInBar;
