import axios from 'axios';
import { DEFAULT_URL } from '@utils/constants';

export const request = async () => {
  return await axios.get(DEFAULT_URL).then((response) => response.data);
};
