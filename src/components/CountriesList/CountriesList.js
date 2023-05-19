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

import CountryNotFound from "../CountryNotFound/CountryNotFound";

const Countries = () => {
  const dispatch = useDispatch();
  const countries = useSelector(selectCountries);
  const isLoading = useSelector(selectAreCountriesLoading);
  const filter = useSelector(selectFilter);
  const trimmedFilter = filter.trim();

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  const filteredCountries = useMemo(() => {
    const sortedCountries = [...countries].sort((a, b) => {
      return a.name.common.localeCompare(b.name.common);
    });

    return sortedCountries.filter(({ name: { common: countryName } }) =>
      countryName.toLowerCase().startsWith(trimmedFilter.toLowerCase())
    );
  }, [countries, trimmedFilter]);

  return isLoading ? (
    <Loader />
  ) : filteredCountries.length === 0 ? (
    <CountryNotFound />
  ) : (
    <List
      sx={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "40px",
      }}
    >
      {filteredCountries.map((country) => (
        <CountriesItem country={country} key={uuidv4()} />
      ))}
    </List>
  );
};

export default Countries;
