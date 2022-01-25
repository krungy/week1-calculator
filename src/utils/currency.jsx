export const convertCurrency = (source, selected, inputValue) => {
  const result = ((selected / source) * inputValue).toFixed(2);
  return convertComma(result);
};

export const convertComma = (str) => {
  return String(str).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const removeComma = (str) => {
  return String(str).replace(/[^\d]+/g, '');
};

export const inputNumberFormat = (value) => {
  return convertComma(removeComma(value));
};

export const onlyNumber = (str) => {
  return String(str).replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1');
};

export const inputOnlyNumberFormat = (value) => {
  return onlyNumber(removeComma(value));
};
