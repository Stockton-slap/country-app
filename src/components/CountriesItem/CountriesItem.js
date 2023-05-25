import { Link, useLocation } from "react-router-dom";

import styled from "styled-components";

import { Box, Button } from "@mui/material";
import { Text, Title } from "../../utils/commonStyles";
import { DeleteForever, ShoppingCart } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import {
  addCount,
  deleteCountry,
  favoriteCountry,
  switchButton,
} from "../../redux/slices/cartSlice";
import {
  selectButtonSwap,
  selectCartCountries,
  selectCartItem,
} from "../../redux/selectors";
import { useEffect } from "react";
import { toast } from "react-toastify";
import isCountryAlreadyInCart from "../../utils/isCountryAlreadyInCart";

const Card = styled.li`
  background-color: #fff;
  width: 300px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  align-items: unset;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  transition: transform 300ms ease;
  position: relative;
  flex-basis: calc(20%);

  &:hover {
    transform: scale(1.1);
  }

  &:not(:hover) {
    transform: scale(1);
  }
`;

const CountriesItem = ({ country }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const item = useSelector(selectCartItem);
  const buttonSwap = useSelector(selectButtonSwap);
  const cartCountries = useSelector(selectCartCountries);

  useEffect(() => {
    dispatch(switchButton(true));
  }, [dispatch]);

  if (!country) {
    return null;
  }

  const {
    name: { common },
    capital,
    continents,
    flags: { png, alt },
    population,
  } = country;

  const isCountryInCart = isCountryAlreadyInCart(cartCountries, common);

  const handleAddClick = () => {
    if (isCountryInCart) {
      toast.warning("This country is already in the cart.");
      return;
    }

    dispatch(addCount(item + 1));
    dispatch(favoriteCountry(country));
    toast.success("The country has been added to the cart.");
  };

  const handleDeleteClick = () => {
    dispatch(deleteCountry(country.name.common));
    dispatch(addCount(item - 1));
    toast.success("The country has been deleted from the cart.");
  };

  return (
    <Card disablePadding={true}>
      <Link to={`/countries/${common}`} state={{ from: location }}>
        <img
          src={png}
          alt={alt}
          style={{
            width: "100%",
            height: "150px",
            borderBottom: "1px solid grey",
          }}
        />
        <Box sx={{ p: "30px", mb: "20px" }}>
          <Title>{common}</Title>
          <Text>
            <b>Population:</b> {population.toLocaleString()}
          </Text>
          <Text>
            <b>Region:</b> {continents}
          </Text>
          <Text>
            <b>Capital:</b> {capital}
          </Text>
        </Box>
      </Link>
      <Button
        variant="contained"
        size="medium"
        sx={{
          position: "absolute",
          bottom: 20,
          right: 20,
          backgroundColor: !buttonSwap && "red",
        }}
        onClick={buttonSwap ? handleAddClick : handleDeleteClick}
      >
        {buttonSwap ? <ShoppingCart /> : <DeleteForever />}
      </Button>
    </Card>
  );
};

export default CountriesItem;
