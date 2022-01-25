import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { RATE_LIST } from '@utils/constants';
import { convertTimestampToDate } from '@utils/date';
import { convertCurrency } from '@utils/currency';
import { request } from '@api/api';

const CurrentCurrency = ({ source, inputValue }) => {
  const [selected, setSelected] = useState('CAD');
  const [date, setDate] = useState();
  const [currency, setCurrency] = useState('');
  const getApi = async () => {
    try {
      const { timestamp, quotes } = await request();
      setDate(convertTimestampToDate(timestamp));
      setCurrency(
        convertCurrency(
          quotes[`USD${source}`],
          quotes[`USD${selected}`],
          inputValue.split(',').join(''),
        ),
      );
    } catch (e) {
      console.log(e);
    }
  };

  const handleCurrencyClick = (e) => {
    setSelected(e.target.innerText);
  };

  useEffect(() => {
    if (source === selected) {
      setSelected(
        RATE_LIST.filter((rate) => rate.country !== source)[0].country,
      );
    }
    getApi();
  }, [source, selected, inputValue]);

  return (
    <Wrap>
      <CurrencyBtnWrap>
        {RATE_LIST.map((data, idx) => (
          <React.Fragment key={idx}>
            {source !== data.country && (
              <CurrencyBtn
                selected={selected === data.country}
                onClick={handleCurrencyClick}
              >
                {data.country}
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
  color: ${(props) => (props.selected ? 'black' : 'gray')};

  &:last-child {
    border-right: none;
  }
`;

const CurrencyResult = styled.div`
  padding: 1.5rem;

  h2 {
    display: inline-block;
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    font-size: 1.3rem;
    font-weight: bold;
  }

  h3 {
    margin-bottom: 0.5rem;
    font-size: 1.3rem;
    font-weight: bold;
  }

  p {
    font-size: 1rem;
  }
`;

export default CurrentCurrency;
