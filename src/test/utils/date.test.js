import { convertTimestampToDate } from '@utils/date';

describe('Function convertTimeStampToDate', () => {
  it('takes some date and converts to date string', () => {
    expect(convertTimestampToDate(Date.UTC(2022, 0, 1) / 1000)).toEqual(
      '2022-Jan-01',
    );
    expect(convertTimestampToDate(Date.UTC(1997, 0, 31) / 1000)).toEqual(
      '1997-Jan-31',
    );
    expect(convertTimestampToDate(Date.UTC(1789, 11, 25) / 1000)).toEqual(
      '1789-Dec-25',
    );
    expect(convertTimestampToDate(Date.UTC(1999, 3, 4) / 1000)).toEqual(
      '1999-Apr-04',
    );
  });
});
