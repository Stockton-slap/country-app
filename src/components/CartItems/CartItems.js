import BackButton from "../BackButton";
import { useDispatch, useSelector } from "react-redux";
import { selectCartCountries } from "../../redux/selectors";
import CountriesItem from "../CountriesItem";
import { CountriesList, SectionContainer } from "../../utils/commonStyles";
import { useEffect } from "react";
import { switchButton } from "../../redux/slices/cartSlice";

const CartItems = () => {
  const cartCountries = useSelector(selectCartCountries);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(switchButton(false));
  }, [dispatch]);

  return (
    <SectionContainer>
      <BackButton />
      <div style={{ position: "relative" }}>
        <CountriesList>
          {cartCountries.map((country) => (
            <CountriesItem country={country} key={country.name.common} />
          ))}
        </CountriesList>
      </div>
    </SectionContainer>
  );
};

export default CartItems;
