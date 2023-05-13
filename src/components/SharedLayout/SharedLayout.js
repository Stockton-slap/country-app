import {
  Badge,
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from "@mui/material";

import { Language, AddShoppingCart } from "@mui/icons-material";
import { Outlet } from "react-router-dom";

const SharedLayout = () => {
  return (
    <>
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid red",
        }}
      >
        <Box display="flex" alignItems="center">
          <Language sx={{ width: 30, height: 30 }} />
          <Typography sx={{ ml: 2 }}>COUNTRY APP</Typography>
        </Box>
        <TextField type="text" variant="outlined" size="small" />
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
        <Button variant="contained" sx={{ width: 100, height: 50 }}>
          Log Out
        </Button>
      </Container>
      <Outlet />
    </>
  );
};

export default SharedLayout;
