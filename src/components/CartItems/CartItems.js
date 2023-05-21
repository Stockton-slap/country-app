import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showFilter } from "../../redux/slices/filterSlice";

import { Box, Button } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { KeyboardBackspace } from "@mui/icons-material";
import { selectCurrentCountry } from "../../redux/selectors";

const CartItems = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const currentCountry = useSelector(selectCurrentCountry);
  const countryName = currentCountry?.name?.common || "/";

  useEffect(() => {
    dispatch(showFilter(false));
  }, [dispatch]);

  return (
    <Box
      sx={{
        padding: "0 150px",
        display: "flex",
        flexDirection: "column",
        margin: "0 auto",
      }}
    >
      <Link
        to={{
          pathname: `/countries/${countryName}`,
          state: { from: location.pathname },
        }}
        style={{ display: "inline-block" }}
      >
        <Button variant="contained" sx={{ mb: "80px", width: "150px" }}>
          <KeyboardBackspace sx={{ mr: "20px" }} /> Back
        </Button>
      </Link>
    </Box>
  );
};

export default CartItems;
