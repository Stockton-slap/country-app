import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

import { v4 as uuidv4 } from "uuid";

import getCountryDetails from "../../redux/operations/getCountryDetails";
import { selectCurrentCountry } from "../../redux/selectors";

import { Box, List, ListItem, ListItemButton } from "@mui/material";

import { Text, Title } from "../../utils/commonStyles";

const CountryDetails = () => {
  const { countryId } = useParams();
  const dispatch = useDispatch();
  const currentCountry = useSelector(selectCurrentCountry);

  useEffect(() => {
    dispatch(getCountryDetails(countryId));
  }, [countryId, dispatch]);

  if (!currentCountry) {
    return <div>Loading...</div>;
  }

  const {
    borders,
    capital,
    continents,
    currencies,
    name: { common, official },
    flags: { svg, alt },
    languages,
    population,
    area,
  } = currentCountry;

  const languagesList = Object.values(languages).map((language) => language);

  const currency = Object.values(currencies).map((currency) => currency.name);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        padding: "0 50px",
        gap: "calc(35px + 5vw)",
      }}
    >
      <img src={svg} alt={alt} width="500px" />
      <Box sx={{ p: "20px" }}>
        <Title>{common}</Title>
        <Box sx={{ display: "flex", gap: "30px", mb: "20px" }}>
          <Box>
            <Text>
              <b>Official name: </b>
              {official}
            </Text>
            <Text>
              <b>Region: </b>
              {continents}
            </Text>
            <Text>
              <b>Capital: </b>
              {capital}
            </Text>
            <Text>
              <b>Population: </b>
              {population.toLocaleString()}
            </Text>
          </Box>

          <Box>
            <Text>
              <b>Total area: </b>
              {area.toLocaleString()}
            </Text>
            <Text>
              <b>Currencies: </b>
              {currency}
            </Text>
            <Text>
              <b>Official languages: </b>
              {languagesList.join(", ")}
            </Text>
          </Box>
        </Box>
        <List>
          <Text>
            <b>Border countries:</b>
          </Text>
          <ListItem
            disableGutters={true}
            focusVisible
            key={uuidv4()}
            sx={{
              gridGap: "7px",
              display: "grid",
              flex: "1 1",
              gap: "7px",
              gridTemplateColumns: "repeat(auto-fill,minmax(90px,1fr))",
            }}
          >
            {borders === undefined ? (
              <ListItemButton selected>None</ListItemButton>
            ) : (
              borders.map((country) => (
                <ListItemButton
                  selected
                  sx={{
                    mr: "10px",
                    justifyContent: "center",
                    borderRadius: "5px",
                  }}
                >
                  <Link>{country}</Link>
                </ListItemButton>
              ))
            )}
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default CountryDetails;
