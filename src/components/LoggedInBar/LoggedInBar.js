import { AddShoppingCart } from "@mui/icons-material";
import { Badge, Box, Button } from "@mui/material";

import Filter from "../Filter/Filter";

const LoggedInBar = () => {
  return (
    <>
      <Filter />

      <Box display="flex" alignItems="center">
        <AddShoppingCart sx={{ width: 30, height: 30, mr: "10px" }} />
        <Badge
          badgeContent={0}
          color="secondary"
          sx={{
            width: 30,
            height: 30,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: "orange",
            color: "white",
          }}
        >
          0
        </Badge>
      </Box>
      <Button variant="contained" size="medium">
        Log Out
      </Button>
    </>
  );
};

export default LoggedInBar;
