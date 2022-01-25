const { REACT_APP_API_KEY } = process.env;
const calcOneCountries = ['KRW', 'JPY', 'PHP'];
export const SECOND_COUNTRY_LIST = ['USD', 'CAD', 'KRW', 'HKD', 'JPY', 'CNY'];

export const API_POINT = 'http://api.currencylayer.com/live';

export const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export const CALC_ONE_COUNTRIES_URL =
  API_POINT +
  '?access_key=' +
  REACT_APP_API_KEY +
  '&currencies=' +
  calcOneCountries.join(',');
export const CALC_TWO_COUNTRIES_URL =
  API_POINT +
  '?access_key=' +
  REACT_APP_API_KEY +
  '&currencies=' +
  SECOND_COUNTRY_LIST.join(',');
