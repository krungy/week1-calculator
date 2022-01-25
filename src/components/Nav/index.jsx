import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Nav = () => {
  return (
    <Container>
      <NavLink style={linkStyle} to="/">
        FIRST CALCULATOR
      </NavLink>
      <NavLink style={linkStyle} to="/second">
        SECOND CALCULATOR
      </NavLink>
    </Container>
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

export default Nav;
