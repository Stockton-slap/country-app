import { KeyboardBackspace } from "@mui/icons-material";
import { Button } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

const BackButton = () => {
  const location = useLocation();
  console.log(location.state);
  return (
    <Link to={location.state?.from} style={{ display: "inline-block" }}>
      <Button variant="contained" sx={{ mb: "80px", width: "150px" }}>
        <KeyboardBackspace sx={{ mr: "20px" }} /> Back
      </Button>
    </Link>
  );
};

export default BackButton;
