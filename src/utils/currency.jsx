export const convertCurrency = (source, selected, inputValue) => {
  const result = (
    (Number(selected) / Number(source)) *
    Number(inputValue)
  ).toFixed(2);
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
