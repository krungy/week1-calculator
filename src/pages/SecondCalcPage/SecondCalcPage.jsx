import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import CurrentCurrency from '@components/CurrentCurrency/CurrentCurrency';
import SelectCurrency from '@components/SelectCurrency/SelectCurrency';

const SecondCalcPage = () => {
  const [source, setSource] = useState('USD');
  const [inputValue, setInputValue] = useState('');

  return (
    <Container>
      <Wrap>
        <h1 className="sr-only">환율 계산기</h1>
        <SelectCurrency
          inputValue={inputValue}
          setInputValue={setInputValue}
          setSource={setSource}
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
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border: 3px solid black;
`;

export default SecondCalcPage;
