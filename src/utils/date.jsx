import { MONTHS } from '@utils/constants';

export const convertTimestampToDate = (timestamp) => {
  const date = new Date(timestamp * 1000); // UNIX 시간을 JS 시간으로 변환
  return `${date.getFullYear()}-${MONTHS[date.getMonth()]}-${date.getDate()}`;
};
