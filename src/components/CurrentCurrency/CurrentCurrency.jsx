import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { RATE_LIST } from '@utils/constants';
import { convertTimestampToDate } from '@utils/date';
import { request } from '@api/api';

const CurrentCurrency = ({ source }) => {
  const [selected, setSelected] = useState('CAD');
  const [date, setDate] = useState();
  const [currency, setCurrency] = useState();
  const getApi = async () => {
    try {
      const { timestamp, quotes } = await request();
      setDate(convertTimestampToDate(timestamp));
      // TODO: setCurrency(utils)
    } catch (e) {
      console.log(e);
      // TODO: 에러 핸들링
    }
  };

  const handleCurrencyClick = (e) => {
    console.log(e.target.innerText);
  };

  useEffect(() => {
    getApi();
  }, [selected]);

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
      <div>{selected}</div>
      <div>
        <p>{`${selected} 2,000 !FIXME`}</p>
        <p>기준일 : </p>
        <p>{date}</p>
      </div>
    </Wrap>
  );
};

const Wrap = styled.article`
  border: 3px solid black;
`;

const CurrencyBtnWrap = styled.div`
  display: flex;
`;

const CurrencyBtn = styled.button`
  background-color: red;
  border-right: 3px solid black;
  &:last-child {
    border-right: none;
  }
  border-bottom: ${(props) => (props.selected ? 'none' : '3px solid black')}; ;
`;

export default CurrentCurrency;
