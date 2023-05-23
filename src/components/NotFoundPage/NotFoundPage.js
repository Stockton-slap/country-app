import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/selectors";
import { Box, Typography } from "@mui/material";

import notFoundImage from "../../images/404.png";
import BackButton from "../BackButton";
import { SectionContainer } from "../../utils/commonStyles";

const NotFoundPage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <SectionContainer>
      <BackButton />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <img
          src={notFoundImage}
          alt="Error"
          width="250px"
          style={{ marginBottom: "50px" }}
        />
        <Typography variant="h1" sx={{ fontSize: "40px", mb: "30px" }}>
          Oops! Page was not found.
        </Typography>
        <Typography variant="p" sx={{ fontSize: "25px", textAlign: "center" }}>
          The page you are looking for does not exist. Please check the URL or
          go back to the
          <Link
            to={isLoggedIn ? "/countries" : "/"}
            style={{ textDecoration: "underline" }}
          >
            {isLoggedIn ? "Countries" : "Homepage"}
          </Link>
        </Typography>
      </Box>
    </SectionContainer>
  );
};

export default NotFoundPage;
