import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { CurrentCurrency, SelectCurrency } from '@components';
import { inputNumberFormat } from '@utils/currency';

const SecondCalcPage = () => {
  const [source, setSource] = useState('USD');
  const [inputValue, setInputValue] = useState('');

  const handleOptionChange = (e) => {
    setSource(e.target.value);
  };

  const handleInput = (e) => {
    setInputValue(inputNumberFormat(e.target.value));
  };

  return (
    <Container>
      <Wrap>
        <h1 className="sr-only">환율 계산기</h1>
        <SelectCurrency
          inputValue={inputValue}
          handleOptionChange={handleOptionChange}
          handleInput={handleInput}
        />
        <CurrentCurrency source={source} inputValue={inputValue} />
      </Wrap>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 5rem;
  left: 0;
  right: 0;
  bottom: 0;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border: 8px solid #686868;
  border-radius: 0.5rem;
  background-color: #f5aea8;
  box-shadow: rgb(0 0 0 / 70%) 0px 12px 40px -12px;
`;

export default SecondCalcPage;
