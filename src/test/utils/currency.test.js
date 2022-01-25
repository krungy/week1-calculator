import {
  convertCurrency,
  convertComma,
  removeComma,
  inputNumberFormat,
} from '@utils/currency';

describe('Function convertComma', () => {
  it('takes numbers under 1,000', () => {
    expect(convertComma('123')).toEqual('123');
    expect(convertComma('456')).toEqual('456');
    expect(convertComma('789')).toEqual('789');
  });

  it('takes numbers over 1,000 under 1,000,000', () => {
    expect(convertComma('1000')).toEqual('1,000');
    expect(convertComma('1234')).toEqual('1,234');
    expect(convertComma('6789')).toEqual('6,789');
  });

  it('takes numbers over 1,000,000 under 1,000,000,000', () => {
    expect(convertComma('1000000')).toEqual('1,000,000');
    expect(convertComma('1234567')).toEqual('1,234,567');
    expect(convertComma('6789876')).toEqual('6,789,876');
  });
});

describe('Function removeComma', () => {
  it('takes numbers under 1,000', () => {
    expect(removeComma('123')).toEqual('123');
    expect(removeComma('456')).toEqual('456');
    expect(removeComma('789')).toEqual('789');
  });

  it('takes numbers over 1,000 under 1,000,000', () => {
    expect(removeComma('1,000')).toEqual('1000');
    expect(removeComma('1,234')).toEqual('1234');
    expect(removeComma('6,789')).toEqual('6789');
  });

  it('takes numbers over 1,000,000 under 1,000,000,000', () => {
    expect(removeComma('1,000,000')).toEqual('1000000');
    expect(removeComma('1,234,567')).toEqual('1234567');
    expect(removeComma('6,789,876')).toEqual('6789876');
  });
});

describe('Function inputNumberFormat', () => {
  it('takes numbers over 1,000 under 1,000,000', () => {
    expect(inputNumberFormat('1234')).toEqual('1,234');
    expect(inputNumberFormat('4567')).toEqual('4,567');
    expect(inputNumberFormat('9999')).toEqual('9,999');
  });

  it('takes numbers over 1,000,000 under 1,000,000,000', () => {
    expect(inputNumberFormat('1000000')).toEqual('1,000,000');
    expect(inputNumberFormat('1234567')).toEqual('1,234,567');
    expect(inputNumberFormat('6789876')).toEqual('6,789,876');
  });
});

describe('Function convertCurrency', () => {
  it('change USD to CAD', () => {
    expect(convertCurrency('3', '9', 3)).toEqual('9.00');
    expect(convertCurrency('4', '16', 3)).toEqual('12.00');
    expect(convertCurrency('7', '49', 5)).toEqual('35.00');
  });
});
