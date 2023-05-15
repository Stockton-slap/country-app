import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectCountries } from "../../redux/selectors";
import getCountries from "../../redux/operations/getCountries";

import CountriesItem from "../CountriesItem";

import { List } from "@mui/material";

const Countries = () => {
  const dispatch = useDispatch();
  const countries = useSelector(selectCountries);

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  return (
    <List
      sx={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "25px",
      }}
    >
      {countries.map((country, i) => (
        <CountriesItem country={country} key={i} />
      ))}
    </List>
  );
};

export default Countries;
