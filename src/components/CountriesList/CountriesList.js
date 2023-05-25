import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  selectCountries,
  selectAreCountriesLoading,
  selectFilter,
  selectIsCountriesError,
} from "../../redux/selectors";
import getCountries from "../../redux/operations/getCountries";

import CountriesItem from "../CountriesItem";
import Filter from "../Filter";

import { Box } from "@mui/material";
import Loader from "../Loader";

import CountryNotFound from "../CountryNotFound";
import Pagination from "../Pagination";
import { CountriesList, SectionContainer } from "../../utils/commonStyles";

const Countries = () => {
  const [countriesOffset, setCountriesOffset] = useState(0);
  const dispatch = useDispatch();
  const countries = useSelector(selectCountries);
  const isLoading = useSelector(selectAreCountriesLoading);
  const isError = useSelector(selectIsCountriesError);
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
    <SectionContainer>
      <Filter />
      {isLoading && !isError ? (
        <Box>
          <Loader />
        </Box>
      ) : currentCountries.length === 0 ? (
        <CountryNotFound />
      ) : (
        <>
          <CountriesList>
            {currentCountries.map((country) => (
              <CountriesItem country={country} key={country.name.common} />
            ))}
          </CountriesList>
          <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />
        </>
      )}
    </SectionContainer>
  );
};

export default Countries;
