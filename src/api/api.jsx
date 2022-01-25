import axios from 'axios';
import { CALC_ONE_COUNTRIES_URL, CALC_TWO_COUNTRIES_URL } from '@utils/constants';

export const requestCalcOne = async () => {
  return await axios.get(CALC_ONE_COUNTRIES_URL).then((response) => response.data);
};

export const requestCalcTwo = async () => {
  return await axios.get(CALC_ONE_COUNTRIES_URL).then((response) => response.data);
};
