import { Link } from "react-router-dom";

import styled from "styled-components";

import { Box, ListItem } from "@mui/material";
import { Text, Title } from "../../utils/commonStyles";

const Card = styled(ListItem)`
  background-color: gray;
  width: 300px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  align-items: unset;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  transition: transform 300ms ease;

  &:hover {
    transform: scale(1.1);
  }

  &:not(:hover) {
    transform: scale(1);
  }
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
    <Card disablePadding={true}>
      <Link to={`/countries/${common}`}>
        <img
          src={svg}
          alt={alt}
          style={{
            width: "100%",
            height: "150px",
            objectFit: "cover",
          }}
        />
        <Box sx={{ p: "30px" }}>
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
    </Card>
  );
};

export default CountriesItem;
