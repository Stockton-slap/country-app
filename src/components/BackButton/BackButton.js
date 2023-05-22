import { KeyboardBackspace } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <Button
      variant="contained"
      sx={{ mb: "80px", width: "150px" }}
      onClick={() => navigate(-1)}
    >
      <KeyboardBackspace sx={{ mr: "20px" }} /> Back
    </Button>
  );
};

export default BackButton;
