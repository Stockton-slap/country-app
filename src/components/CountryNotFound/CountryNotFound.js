import { Box, Typography } from "@mui/material";

import desertImage from "../../images/desert.png";

const CountryNotFound = () => {
  return (
    <Box
      sx={{
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography sx={{ mb: "50px", fontSize: "20px" }}>
        Oops! There is no such country.
      </Typography>
      <img src={desertImage} alt="Desert" width="400px" />
    </Box>
  );
};

export default CountryNotFound;
