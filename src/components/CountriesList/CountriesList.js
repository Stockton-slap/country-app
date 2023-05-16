import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { v4 as uuidv4 } from "uuid";

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
        gap: "40px",
      }}
    >
      {countries.map((country) => (
        <CountriesItem country={country} key={uuidv4()} />
      ))}
    </List>
  );
};

export default Countries;
