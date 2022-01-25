import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { requestCalcOne } from '@api/api';
import { calcOneCountryList } from '@utils/calcOneCountry';

const FirstCalcPageContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 400px;
  height: 460px;
  transform: translate(-50%, -50%);
  background-color: #d3dedc;
  box-shadow: rgb(0 0 0 / 30%) 0px 12px 40px -12px;
  border: 8px solid #686868;
  border-radius: 12px;
  box-sizing: border-box;
  padding: 16px;
  text-align: center;
  word-break: keep-all;
  font-size: 16px;
`;

const HeaderContainer = styled.h1`
  text-align: center;
  font-size: 24px;
  margin-bottom: 24px;
  padding: 8px 0;
  border-radius: 12px;
  background-color: #fff;
  font-weight: 600;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  border-radius: 12px;
  background-color: #fff;
  font-weight: 600;
  padding: 24px;
  box-sizing: border-box;
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
  align-items: center;
  border-radius: 4px;
  padding: 4px 2px;
  box-sizing: border-box;
`;

const InputContainer = styled.input`
  padding: 5px 2px;
  border: 1px solid;
  border-radius: 4px;
  ::-webkit-inner-spin-button {
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
  }
  ::placeholder {
    text-align: center;
  }
`;

const ButtonContainer = styled.button`
  display: block;
  width: 108px;
  height: 36px;
  margin: 0 auto;
  background-color: #24a19c;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  &:active {
    opacity: 0.6;
  }
`;

const ExchangedMoney = styled.span`
  padding-left: 8px;
  font-weight: 600;
  color: #e07a5f;
`;

const ResultContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
  font-size: 18px;
  font-weight: 600;
  background-color: #fff;
  height: 52px;
  padding: 12px 0;
  border-radius: 12px;
  line-height: 1.2;
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
      <ExchangedMoney>
        {Number(initialData[currentCountry]).toFixed(2)}{' '}
        {currentCountry.slice(3, 6)}/{currentCountry.slice(0, 3)}
      </ExchangedMoney>
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
      <InputContainer
        type="number"
        value={inputValue}
        placeholder="송금액을 입력해주세요."
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
      <span style={{ color: 'red' }}>올바른 송금액을 입력해주세요.</span>
    ) : (
      <span>
        수취금액은 {resultPrice} {currentCountry.slice(3, 6)} 입니다.
      </span>
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
        <ItemContainer
          style={{
            fontWeight: 400,
            fontSize: 14,
            justifyContent: 'center',
            opacity: 0.4,
          }}
        >
          10,000 USD 이하의 금액만 확인할 수 있습니다.
        </ItemContainer>
        <ButtonContainer onClick={handleSubmit}>Submit</ButtonContainer>
      </ContentContainer>
      <ResultContainer>{isSubmit && handleResultContainer()}</ResultContainer>
    </FirstCalcPageContainer>
  );
};

export default FirstCalcPage;
