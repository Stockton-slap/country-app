import { Language } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <Box display="flex" alignItems="center">
        <Language sx={{ width: 50, height: 50 }} />
        <Typography sx={{ ml: 2 }}>COUNTRY APP</Typography>
      </Box>
    </Link>
  );
};

export default Logo;
