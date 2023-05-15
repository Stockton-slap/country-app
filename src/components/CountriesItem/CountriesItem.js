import { Box, ListItem, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";

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
    borders,
    capital,
    continents,
    currencies,
    flags: { png, alt },
    languages,
    population,
    area,
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
        boxShadow:
          "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
      }}
      disablePadding="true"
    >
      <Link>
        <img
          src={png}
          alt={alt}
          style={{
            width: "300px",
            height: "150px",
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
