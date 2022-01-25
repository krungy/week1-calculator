import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { requestCalcOne } from '@api/api';
import { calcOneCountryList } from '@utils/calcOneCountry';

const FirstCalcPageContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 400px;
  height: 520px;
  transform: translate(-50%, -50%);
  background-color: white;
  box-shadow: rgb(0 0 0 / 30%) 0px 12px 40px -12px;
  border-radius: 12px;
  box-sizing: border-box;
  padding: 38px 48px;
  text-align: center;
  word-break: keep-all;
`;

const HeaderContainer = styled.h1`
  text-align: center;
  font-size: 24px;
  margin-bottom: 36px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const ItemContainer = styled.div`
  position: relative;
  display: flex;
  gap: 4px;
  align-items: center;
  width: 100%;
`;

const SelectContainer = styled.select`
  display: inline-flex;
  flex-direction: column;
`;

const ButtonContainer = styled.button`
  display: block;
  width: 68px;
  height: 24px;
  margin: 0 auto;
  margin-top: 36px;
  background-color: #24a19c;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:active {
    opacity: 0.6;
  }
`;

const ResultContainer = styled.div`
  margin-top: 82px;
  font-size: 16px;
  color: ${({ color }) => color};
`;

const FirstCalcPage = () => {
  const [initialData, setInitialData] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [currentCountry, setCurrentCountry] = useState('USDKRW');
  const [inputValue, setInputValue] = useState('');
  const [isSubmit, setIsSubmit] = useState(false);

  useEffect(() => {
    const getApi = async () => {
      try {
        setIsLoading(true);
        const data = await requestCalcOne();
        setInitialData(data.quotes);
        setIsLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    getApi();
  }, []);

  const handleDropdownOnChange = useCallback((e) => {
    setCurrentCountry(e.target.value);
    setIsSubmit(false);
  }, []);

  const handleDropdown = (list) => {
    const entries = Object.entries(list);
    const menuList = entries.map(([key, _], index) => (
      <option value={key} key={index}>
        {calcOneCountryList[key]}
      </option>
    ));
    return (
      <SelectContainer defaultValue="USDKOR" onChange={handleDropdownOnChange}>
        {menuList}
      </SelectContainer>
    );
  };

  const handleCurrentExchange = useCallback(() => {
    return (
      <span>
        {Number(initialData[currentCountry]).toFixed(2)}{' '}
        {currentCountry.slice(3, 6)}/{currentCountry.slice(0, 3)}
      </span>
    );
  }, [initialData, currentCountry]);

  const handleSubmit = useCallback(() => {
    setIsSubmit(true);
  }, []);

  const handleOnChange = useCallback((e) => {
    setIsSubmit(false);
    setInputValue(e.target.value);
  }, []);

  const handleInputContainer = useCallback(() => {
    return (
      <input
        type="number"
        value={inputValue}
        onChange={(e) => handleOnChange(e)}
      />
    );
  }, [handleOnChange, inputValue]);

  const handleResultContainer = useCallback(() => {
    const calculatedValue = (
      Number(initialData[currentCountry]) * Number(inputValue)
    ).toFixed(2);
    const resultPrice = calculatedValue
      .toString()
      .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');

    return inputValue === '' || !(inputValue >= 0 && inputValue <= 10000) ? (
      <ResultContainer color="red">
        올바른 송금액을 입력해주세요.
      </ResultContainer>
    ) : (
      <ResultContainer color="black">
        수취금액은 {resultPrice} {currentCountry.slice(3, 6)} 입니다.
      </ResultContainer>
    );
  }, [initialData, currentCountry, inputValue]);

  return (
    <FirstCalcPageContainer>
      <HeaderContainer>환율 계산</HeaderContainer>
      <ContentContainer>
        <ItemContainer>송금국가: 미국(USD)</ItemContainer>
        <ItemContainer>
          수취국가: {!isLoading && handleDropdown(initialData)}
        </ItemContainer>
        <ItemContainer>
          환율: {!isLoading && handleCurrentExchange()}
        </ItemContainer>
        <ItemContainer>
          송금액: {!isLoading && handleInputContainer()} USD
        </ItemContainer>
        <ButtonContainer onClick={handleSubmit}>Submit</ButtonContainer>
        {isSubmit && handleResultContainer()}
      </ContentContainer>
    </FirstCalcPageContainer>
  );
};

export default FirstCalcPage;
