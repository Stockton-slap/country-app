import { Link } from "react-router-dom";

import styled from "styled-components";

import { Box, ListItem } from "@mui/material";

const Title = styled.h2`
  margin-bottom: 20px;
  color: #000;
`;

const Text = styled.p`
  margin-bottom: 10px;
  color: #000;
`;

const CountriesItem = ({ country }) => {
  const {
    name: { common },
    capital,
    continents,
    flags: { svg, alt },
    population,
  } = country;

  return (
    <ListItem
      sx={{
        backgroundColor: "gray",
        width: "300px",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        alignItems: "unset",
        boxShadow:
          "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
      }}
      disablePadding={true}
    >
      <Link to={`/countries/${common}`}>
        <img
          src={svg}
          alt={alt}
          style={{
            width: "100%",
            height: "150px",
            // objectFit: "cover",
          }}
        />
        <Box sx={{ padding: "30px" }}>
          <Title>{common}</Title>
          <Text>
            <b>Population:</b> {population.toLocaleString()}
          </Text>
          <Text>
            <b>Region:</b> {continents}
          </Text>
          <Text>
            <b>Capital:</b> {capital}
          </Text>
        </Box>
      </Link>
    </ListItem>
  );
};

export default CountriesItem;
