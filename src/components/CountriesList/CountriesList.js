import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectCountries } from "../../redux/selectors";
import getCountries from "../../redux/operations/getCountries";

import CountriesItem from "../CountriesItem";

const Countries = () => {
  const dispatch = useDispatch();
  const countries = useSelector(selectCountries);

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  return (
    <ul>
      {countries.map((country, i) => (
        <CountriesItem country={country} key={i} />
      ))}
    </ul>
  );
};

export default Countries;
