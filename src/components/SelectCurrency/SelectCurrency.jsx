import React from 'react';
import styled from 'styled-components';
import { RATE_LIST } from '@utils/constants';
import { inputNumberFormat } from '@utils/currency';

const SelectCurrency = ({ setSource, setInputValue, inputValue }) => {
  const handleChange = (e) => {
    setSource(e.target.value);
  };

  const handleInput = (e) => {
    setInputValue(inputNumberFormat(e.target.value));
  };

  return (
    <Wrap>
      <input
        type="text"
        onChange={handleInput}
        placeholder="금액을 입력하세요."
        value={inputValue}
      />
      <select name="currency" onChange={handleChange}>
        {RATE_LIST.map((data, idx) => {
          return (
            <option value={data.country} key={idx}>
              {data.country}
            </option>
          );
        })}
      </select>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 1rem;

  input {
    padding: 0.3rem 0.5rem;
    font-size: 1rem;
    border: 3px solid black;
    margin-right: 1rem;
  }

  select {
    padding: 0.3rem 0.5rem;
    font-size: 1rem;
    border: 3px solid black;
  }
`;

export default SelectCurrency;
