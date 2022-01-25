import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { RATE_LIST, MONTHS } from '@utils/constants';
import { request } from '@api/api';

const CurrentCurrency = ({ source }) => {
  const [selected, setSelected] = useState('CAD');
  const [date, setDate] = useState();
  const [currency, setCurrency] = useState();
  const getApi = async () => {
    try {
      const { timestamp, quotes } = await request();
      let date = new Date(timestamp * 1000); // UNIX 시간을 JS 시간으로 변경
      console.log(
        timestamp,
        date,
        `${date.getFullYear()}-${MONTHS[date.getMonth()]}-${date.getDate()}`,
      ); // TODO: utils로 빼기
      setDate(
        `${date.getFullYear()}-${MONTHS[date.getMonth()]}-${date.getDate()}`,
      );
      /* NOTE: 문제 찾았음
        timestamp가 갱신되지 않고 있었습니다
        아마 어제 저 서버 구동 끝난 시간에 종료된거 아닌가 싶습니다
        그러면 기준일이 어제 시간으로 나오는 게 맞는 것 같아요
        FAQ: How often are exchange rates refreshed?
        Spot exchange rate data is collected within the 60-second market window.
        Depending on your Subscription Plan, quotes are refreshed every day (Free Plan)
      */
      // 2022-Jan-01
      // TODO: setCurrency(utils)
    } catch (e) {
      console.log(e);
      // TODO: 에러 핸들링
    }
  };

  useEffect(() => {
    getApi();
  }, [selected]);

  return (
    <Wrap>
      <CurrencyBtnWrap>
        {RATE_LIST.map((data, idx) => (
          <div key={idx}>
            {source !== data.country && (
              <CurrencyBtn>{data.country}</CurrencyBtn>
            )}
          </div>
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
  background-color: #fff;
  border-bottom: none;
`;

export default CurrentCurrency;
