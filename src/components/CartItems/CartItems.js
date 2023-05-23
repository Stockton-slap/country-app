import BackButton from "../BackButton";
import { useSelector } from "react-redux";
import { selectCartCountries } from "../../redux/selectors";
import CountriesItem from "../CountriesItem";
import { v4 as uuidv4 } from "uuid";
import { CountriesList, SectionContainer } from "../../utils/commonStyles";

const CartItems = () => {
  const cartCountries = useSelector(selectCartCountries);
  console.log(cartCountries);
  return (
    <SectionContainer>
      <BackButton />
      <div style={{ position: "relative" }}>
        <CountriesList>
          {cartCountries.map((country) => (
            <CountriesItem country={country} key={uuidv4()} />
          ))}
        </CountriesList>
      </div>
    </SectionContainer>
  );
};

export default CartItems;
