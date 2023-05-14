import { AddShoppingCart } from "@mui/icons-material";
import { Badge, Box, Button, TextField } from "@mui/material";

const LoggedInBar = () => {
  return (
    <>
      <TextField
        type="text"
        variant="outlined"
        placeholder="Find the country..."
        size="small"
      />
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
