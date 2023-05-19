import { Box } from "@mui/material";
import { RotatingLines } from "react-loader-spinner";

const Loader = () => (
  <Box sx={{ display: "flex", justifyContent: "center", height: "100%" }}>
    <RotatingLines
      strokeColor="grey"
      strokeWidth="5"
      animationDuration="0.75"
      width="96"
      visible={true}
    />
  </Box>
);

export default Loader;
