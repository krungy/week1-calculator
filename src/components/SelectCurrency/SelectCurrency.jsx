import React from 'react';
import styled from 'styled-components';
import { RATE_LIST } from '@utils/constants';

const SelectCurrency = ({ handleInput, inputValue, handleOptionChange }) => {
  return (
    <Wrap>
      <input
        type="text"
        onChange={handleInput}
        placeholder="금액을 입력하세요."
        value={inputValue}
      />
      <select name="currency" onChange={handleOptionChange}>
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
    margin-right: 1rem;
    border: 3px solid black;
    border-radius: 0.3rem;
    font-size: 1rem;
    background-color: #f4e8d1;
  }

  select {
    padding: 0.3rem 0.5rem;
    border: 3px solid black;
    border-radius: 0.3rem;
    font-size: 1rem;
    background-color: #f4e8d1;
    cursor: pointer;

    &:hover {
      filter: brightness(1.1);
    }
  }
`;

export default SelectCurrency;
