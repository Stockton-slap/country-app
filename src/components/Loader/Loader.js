import { Box } from "@mui/material";
import { RotatingLines } from "react-loader-spinner";

const Loader = ({ width }) => (
  <Box sx={{ display: "flex", justifyContent: "center", height: "100%" }}>
    <RotatingLines
      strokeColor="#fff"
      strokeWidth="5"
      animationDuration="0.75"
      width={width}
      visible={true}
    />
  </Box>
);

export default Loader;
