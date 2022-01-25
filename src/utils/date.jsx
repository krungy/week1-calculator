import { MONTHS } from '@utils/constants';

export const convertTimestampToDate = (timestamp) => {
  const date = new Date(timestamp * 1000); // UNIX 시간을 JS 시간으로 변환
  const year = date.getFullYear();
  const month = MONTHS[date.getMonth()];
  const day = date.getDate();
  return `${year}-${month}-${day < 10 ? '0' + String(day) : day}`;
};
