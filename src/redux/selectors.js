export const selectName = (state) => state.auth.user.name;
export const selectPassword = (state) => state.auth.user.password;
export const selectEmail = (state) => state.auth.user.email;
export const selectToken = (state) => state.auth.token;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectIsLoading = (state) => state.auth.isLoading;
export const selectIsError = (state) => state.auth.isError;

export const selectCountries = (state) => state.countries.countries;
export const selectCurrentCountry = (state) => state.countries.currentCountry;
