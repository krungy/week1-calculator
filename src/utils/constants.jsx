const { REACT_APP_API_KEY } = process.env;

export const API_POINT = 'http://www.apilayer.net/api/live';

export const DEFAULT_URL = API_POINT + '?access_key=' + REACT_APP_API_KEY;

export const RATE_LIST = [
  { country: 'USD' },
  { country: 'CAD' },
  { country: 'KRW' },
  { country: 'HKD' },
  { country: 'JPY' },
  { country: 'CNY' },
];

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
