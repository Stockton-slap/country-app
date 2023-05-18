import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useParams } from "react-router-dom";

import { v4 as uuidv4 } from "uuid";

import getCountryDetails from "../../redux/operations/getCountryDetails";
import {
  selectAreCountriesLoading,
  selectCurrentCountry,
} from "../../redux/selectors";

import { Box, Button, List, ListItem, ListItemButton } from "@mui/material";
import { KeyboardBackspace } from "@mui/icons-material";

import { Text, Title } from "../../utils/commonStyles";
import Loader from "../Loader/Loader";

const CountryDetails = () => {
  const { countryId } = useParams();
  const dispatch = useDispatch();
  const currentCountry = useSelector(selectCurrentCountry);
  const location = useLocation();
  const isLoading = useSelector(selectAreCountriesLoading);

  useEffect(() => {
    dispatch(getCountryDetails(countryId));
  }, [countryId, dispatch]);

  if (!currentCountry) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Loader />
      </Box>
    );
  }

  const {
    borders,
    capital,
    continents,
    currencies,
    name: { common, official },
    flags: { png, alt },
    languages,
    population,
    area,
  } = currentCountry;

  const languagesList = Object.values(languages).map((language) => language);

  const currency = Object.values(currencies).map((currency) => currency.name);

  return isLoading ? (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Loader />
    </Box>
  ) : (
    <Box
      sx={{
        padding: "0 150px",
        display: "flex",
        flexDirection: "column",
        margin: "0 auto",
      }}
    >
      <Link to={location.state.from} style={{ display: "inline-block" }}>
        <Button variant="contained" sx={{ mb: "80px", width: "150px" }}>
          <KeyboardBackspace sx={{ mr: "20px" }} /> Back
        </Button>
      </Link>
      <Box
        sx={{
          display: "flex",
          gap: "calc(35px + 5vw)",
        }}
      >
        <img src={png} alt={alt} width="500px" height="300px" />
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
              sx={{
                gridGap: "7px",
                display: "grid",
                flex: "1 1",
                gap: "7px",
                gridTemplateColumns: "repeat(auto-fill,minmax(90px,1fr))",
              }}
            >
              {borders === undefined ? (
                <p>None</p>
              ) : (
                borders.map((country) => (
                  <ListItemButton
                    key={uuidv4()}
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
    </Box>
  );
};

export default CountryDetails;
