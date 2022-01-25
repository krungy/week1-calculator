import React from 'react';
import styled from 'styled-components';

const dummyData = [
  {
    title: "송금국가",
    value: "미국(USD)",
    status: "fixed"
  },
  {
    title: "수취국가",
    value: "",
    status: "select"
  },
  {
    title: "환율",
    value: "1193.93 KRW/USD",
    status: "fixed"
  },
  {
    title: "송금액",
    value: "USD",
    status: "input"
  }
];

const dummySelect = [
  {
    value: "1",
    country: "한국(KRW)"
  },
  {
    value: "2",
    country: "일본(JPY)"
  },
  { 
    value: "3",
    country: "필리핀(PHP)"
  }
]

const HeaderContainer = styled.h1`
  font-size: 24px;
  margin-bottom: 14px;
`;

const ExchangeList = styled.div`
  display: flex;
  flex-direction: column;
`;

const ListContent = styled.div`
  line-height: 1.4;
`;

const SubmitBtn = styled.button`
  display: block;
  width: 100px;
  height: 24px;
  margin-top: 8px;
`;

const ResultContainer = styled.div`
  margin-top: 32px;
`

const FirstCalcPage = () => {
  const getOption = () => dummySelect.map((item, idx) => {
    return (
      <option key={idx} value={item.value}>{item.country}</option>
    )
  });

  const getList = () => dummyData.map((item, idx) => {
    return (
      <ListContent>
        <span>{item.title}: </span>
        <span>{item.value}</span>
        { item.status === "select" ? <select value={"1"}>{getOption()}</select> : item.status === "input" ? <input /> : null }
      </ListContent>
    )
  })

  return (
    <>
      <HeaderContainer>환율 계산</HeaderContainer>
      <ExchangeList>{getList()}</ExchangeList>
      <SubmitBtn>Submit</SubmitBtn>
      <ResultContainer>수취금액은 111993.00 KRW입니다.</ResultContainer>
    </>
  );
};

export default FirstCalcPage;
