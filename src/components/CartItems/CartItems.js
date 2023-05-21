import { Box, Button } from "@mui/material";
import { KeyboardBackspace } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const CartItems = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        padding: "0 150px",
        display: "flex",
        flexDirection: "column",
        margin: "0 auto",
      }}
    >
      <Button
        variant="contained"
        sx={{ mb: "80px", width: "150px" }}
        onClick={() => navigate(-1)}
      >
        <KeyboardBackspace sx={{ mr: "20px" }} /> Back
      </Button>
    </Box>
  );
};

export default CartItems;
