function isCountryAlreadyInCart(cartCountries, common) {
  return cartCountries.map(({ name }) => name.common).includes(common);
}

export default isCountryAlreadyInCart;
