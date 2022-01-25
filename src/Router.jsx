import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import { FirstCalcPage, SecondCalcPage } from '@pages';
import { Nav } from '@components';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route exact path="/" element={<FirstCalcPage />} />
        <Route exact path="/second" element={<SecondCalcPage />} />
        <Route
          path="*"
          element={
            <NotFound>
              <h1>404 NOT FOUND</h1>
            </NotFound>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

const NotFound = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 2rem;
  }
`;

export default Router;
