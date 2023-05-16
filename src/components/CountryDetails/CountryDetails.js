import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import getCountryDetails from "../../redux/operations/getCountryDetails";
import { selectCurrentCountry } from "../../redux/selectors";

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
    <div>
      <img src={svg} alt={alt} />
      <div>
        <h2>{common}</h2>
        <div>
          <p>
            <b>Official name: </b>
            {official}
          </p>
          <p>
            <b>Region: </b>
            {continents}
          </p>
          <p>
            <b>Capital: </b>
            {capital}
          </p>
          <p>
            <b>Population: </b>
            {population.toLocaleString()}
          </p>
        </div>
        <div>
          <p>
            <b>Total area: </b>
            {area.toLocaleString()}
          </p>
          <p>
            <b>Currencies: </b>
            {currency}
          </p>
          <p>
            <b>Official languages: </b>
            {languagesList.join(", ")}
          </p>
        </div>
        <ul>
          {borders.map((country, i) => (
            <li key={i}>
              <Link>{country}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CountryDetails;
