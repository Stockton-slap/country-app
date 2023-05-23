import { Language } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/selectors";

const Logo = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Link to={isLoggedIn ? "/countries" : "/"}>
      <Box display="flex" alignItems="center">
        <Language sx={{ width: 50, height: 50 }} />
        <Typography sx={{ ml: 2 }}>COUNTRY APP</Typography>
      </Box>
    </Link>
  );
};

export default Logo;
