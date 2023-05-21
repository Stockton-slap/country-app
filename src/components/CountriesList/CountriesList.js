import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { v4 as uuidv4 } from "uuid";

import {
  selectCountries,
  selectAreCountriesLoading,
  selectFilter,
} from "../../redux/selectors";
import getCountries from "../../redux/operations/getCountries";

import CountriesItem from "../CountriesItem";
import Filter from "../Filter";

import { List } from "@mui/material";
import Loader from "../Loader";

import CountryNotFound from "../CountryNotFound";
import Pagination from "../Pagination";

const Countries = () => {
  const [countriesOffset, setCountriesOffset] = useState(0);
  const dispatch = useDispatch();
  const countries = useSelector(selectCountries);
  const isLoading = useSelector(selectAreCountriesLoading);
  const filter = useSelector(selectFilter);
  const trimmedFilter = filter.trim();
  const countriesPerPage = 8;

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

  const endCountriesOffset = countriesOffset + countriesPerPage;

  const currentCountries = filteredCountries.slice(
    countriesOffset,
    endCountriesOffset
  );

  const pageCount = Math.ceil(filteredCountries.length / countriesPerPage);

  const handlePageClick = (e) => {
    const pageNumber = e.selected;

    const newCountriesOffset =
      (pageNumber * countriesPerPage) % filteredCountries.length;

    setCountriesOffset(newCountriesOffset);
  };

  return (
    <>
      <Filter />
      {isLoading ? (
        <Loader />
      ) : currentCountries.length === 0 ? (
        <CountryNotFound />
      ) : (
        <section style={{ padding: "0 50px", position: "relative" }}>
          <List
            sx={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "40px",
              mb: "80px",
            }}
          >
            {currentCountries.map((country) => (
              <CountriesItem country={country} key={uuidv4()} />
            ))}
          </List>
          <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />
        </section>
      )}
    </>
  );
};

export default Countries;
