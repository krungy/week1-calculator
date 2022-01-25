const { REACT_APP_API_KEY } = process.env;
const calcOneCountries = ["KRW", "JPY", "PHP"];
const calcTwoCountries = ["USD", "CAD", "KRW", "HKD", "JPY", "CNY"];

export const API_POINT = 'http://www.apilayer.net/api/live';

export const DEFAULT_URL = API_POINT + '?access_key=' + REACT_APP_API_KEY;

export const CALC_ONE_COUNTRIES_URL = API_POINT + '?access_key=' + REACT_APP_API_KEY + '&currencies=' + calcOneCountries.join(",");
export const CALC_TWO_COUNTRIES_URL = API_POINT + '?access_key=' + REACT_APP_API_KEY + '&currencies=' + calcTwoCountries.join(",");
