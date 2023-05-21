import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { showFilter } from "../../redux/slices/filterSlice";

import BackButton from "../BackButton";
import { Box } from "@mui/material";

const CartItems = () => {
  const dispatch = useDispatch();

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
      <BackButton />
    </Box>
  );
};

export default CartItems;
