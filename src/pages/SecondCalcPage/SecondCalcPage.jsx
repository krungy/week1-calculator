import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import CurrentCurrency from '@components/CurrentCurrency/CurrentCurrency';
import SelectCurrency from '@components/SelectCurrency/SelectCurrency';

const SecondCalcPage = () => {
  const [source, setSource] = useState('USD');
  const [inputValue, setInputValue] = useState('');
  // 로직은 컴포넌트 분리하면서 생각
  return (
    <Container>
      <Wrap>
        <h1 className="sr-only">환율 계산기</h1>
        <SelectCurrency
          inputValue={inputValue}
          setInputValue={setInputValue}
          setSource={setSource}
        />
        <CurrentCurrency source={source} />
      </Wrap>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 25rem;
  width: 20rem;
  border: 1px solid red;
  background-color: aqua;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 20rem;
  width: 15rem;
  background-color: beige;
`;

export default SecondCalcPage;
