import { Box } from "@mui/material";
import BackButton from "../BackButton";

const CartItems = () => {
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
