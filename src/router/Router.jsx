import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import FirstCalcPage from '@pages/FirstCalcPage';
import SecondCalcPage from '@pages/SecondCalcPage/SecondCalcPage';

const Nav = () => {
  return (
    <Container>
      <NavLink style={linkStyle} to="/">FIRST CALCULATOR</NavLink>
      <NavLink style={linkStyle} to="/second">SECOND CALCULATOR</NavLink>
    </Container>
  );
};

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route exact path="/" element={<FirstCalcPage />} />
        <Route exact path="/second" element={<SecondCalcPage />} />
        <Route path="*" element={<NotFound><h1>404 NOT FOUND</h1></NotFound>} />
      </Routes>
    </BrowserRouter>
  );
};

const Container = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  height: 5rem;
  background-color: #f2f2f2;
`;

const NotFound = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 2rem;
  }
`;

const linkStyle = ({ isActive }) => ({
  width: '15em',
  padding: '0.5rem',
  border: '3px solid black',
  borderRadius: '0.5rem',
  textAlign: 'center',
  fontWeight: 'bold',
  color: isActive ? 'white' : 'black',
  backgroundColor: isActive ? 'black' : '#fff',
});

export default Router;
