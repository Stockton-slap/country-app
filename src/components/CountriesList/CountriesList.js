import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import { v4 as uuidv4 } from "uuid";

import {
  selectCountries,
  selectAreCountriesLoading,
  selectFilter,
} from "../../redux/selectors";
import getCountries from "../../redux/operations/getCountries";

import CountriesItem from "../CountriesItem";

import { Box, List } from "@mui/material";
import Loader from "../Loader/Loader";

const Countries = () => {
  const dispatch = useDispatch();
  const countries = useSelector(selectCountries);
  const isLoading = useSelector(selectAreCountriesLoading);
  const filter = useSelector(selectFilter);

  const trimmedFilter = filter.trim();
  const countryList = countries.map((country) => country.name.common);

  const filteredCountries = useMemo(
    () =>
      countryList.filter((country) =>
        country.toLowerCase().includes(trimmedFilter.toLowerCase())
      ),
    [countryList, trimmedFilter]
  );

  console.log(filteredCountries);

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  return isLoading ? (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Loader />
    </Box>
  ) : (
    <List
      sx={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "40px",
      }}
    >
      {trimmedFilter === ""
        ? null
        : countries.map((country) => (
            <CountriesItem country={country} key={uuidv4()} />
          ))}
    </List>
  );
};

export default Countries;
