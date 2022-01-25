import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { SECOND_COUNTRY_LIST } from '@utils/constants';
import { convertTimestampToDate } from '@utils/date';
import { convertCurrency } from '@utils/currency';
import { requestCalcTwo } from '@api/api';

const CurrentCurrency = ({ source, inputValue }) => {
  const [selected, setSelected] = useState('CAD');
  const [date, setDate] = useState();
  const [currency, setCurrency] = useState('');

  const getApi = useCallback(async () => {
    try {
      const { timestamp, quotes } = await requestCalcTwo();
      setDate(convertTimestampToDate(timestamp));
      setCurrency(
        convertCurrency(
          quotes[`USD${source}`],
          quotes[`USD${selected}`],
          inputValue.split(',').join(''),
        ),
      );
    } catch (e) {
      alert(`API에서 오류가 발생했습니다: ${e.message}`);
    }
  }, [source, selected, inputValue]);

  const handleCurrencyClick = (e) => {
    setSelected(e.target.innerText);
  };

  useEffect(() => {
    if (source === selected) {
      setSelected(
        SECOND_COUNTRY_LIST.filter((country) => country !== source)[0],
      );
    }
    getApi();
  }, [source, selected, inputValue, getApi]);

  return (
    <Wrap>
      <CurrencyBtnWrap>
        {SECOND_COUNTRY_LIST.map((data, idx) => (
          <React.Fragment key={idx}>
            {source !== data && (
              <CurrencyBtn
                selected={selected === data}
                onClick={handleCurrencyClick}
              >
                {data}
              </CurrencyBtn>
            )}
          </React.Fragment>
        ))}
      </CurrencyBtnWrap>
      <CurrencyResult>
        <h2>
          <span>{selected}</span>
          <span>{currency}</span>
        </h2>
        <h3>기준일</h3>
        <p>{date}</p>
      </CurrencyResult>
    </Wrap>
  );
};

const Wrap = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  border: 3px solid black;
  border-radius: 0.5rem;
`;

const CurrencyBtnWrap = styled.div`
  display: flex;
`;

const CurrencyBtn = styled.button`
  width: 100%;
  padding: 0.3rem 0.5rem;
  border-right: 3px solid black;
  border-bottom: ${(props) =>
    props.selected ? '3px solid transparent' : '3px solid black'};
  font-size: 1rem;
  font-weight: ${(props) => (props.selected ? 'bold' : 'normal')};
  color: ${(props) => (props.selected ? '#1b6139' : '#fff')};
  background-color: ${(props) => (props.selected ? '#f4e8d1' : '#73737a')};

  &:last-child {
    border-right: none;
  }

  &:hover {
    filter: ${(props) =>
      props.selected ? 'brightness(1)' : 'brightness(1.2)'};
  }
`;

const CurrencyResult = styled.div`
  padding: 1.5rem;
  background-color: #f4e8d1;

  h2 {
    display: inline-block;
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    font-size: 1.3rem;
    font-weight: bold;
    color: #1b6139;
  }

  h3 {
    margin-bottom: 0.3rem;
    font-size: 1.2rem;
    font-weight: bold;
  }

  p {
    font-size: 1rem;
  }
`;

export default CurrentCurrency;
