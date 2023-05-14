import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

const LoggedOutBar = () => {
  return (
    <Box display="flex" alignItems="center" gap="15px">
      <Link to="/register">
        <Button variant="contained">Register</Button>
      </Link>
      <Link to="/login">
        <Button variant="contained">Log In</Button>
      </Link>
    </Box>
  );
};

export default LoggedOutBar;
