import React from 'react';
import styled from 'styled-components';
import { FaShoppingCart, FaUser } from 'react-icons/fa';

const HeaderBar = styled.header`
  width: 100%;
  padding: 1.2rem 2.5rem;
  background: #6b6e58;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 20;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
`;
const Logo = styled.div`
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  font-weight: bold;
  color: #fff;
  letter-spacing: 0.02em;
`;
const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 2.5rem;
  flex: 1;
  justify-content: center;
  @media (max-width: 900px) {
    gap: 1.5rem;
    justify-content: flex-start;
    margin-left: 2rem;
  }
`;
const NavLink = styled.a`
  color: #fff;
  font-size: 1.05rem;
  text-decoration: none;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  letter-spacing: 0.01em;
  transition: color 0.2s;
  &:hover {
    color: #b08d57;
  }
`;
const IconGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin-left: 2rem;
`;
const Icon = styled.div`
  color: #fff;
  font-size: 1.3rem;
  cursor: pointer;
  transition: color 0.2s;
  &:hover {
    color: #b08d57;
  }
`;

export default function Header() {
  return (
    <HeaderBar>
      <Logo>Bakerville</Logo>
      <Nav>
        <NavLink href="#story">Our Story</NavLink>
        <NavLink href="#catalog">Baker catalog</NavLink>
        <NavLink href="#shop">Shop now</NavLink>
        <NavLink href="#bulk">Bulk orders</NavLink>
      </Nav>
      <IconGroup>
        <Icon><FaShoppingCart /></Icon>
        <Icon><FaUser /></Icon>
      </IconGroup>
    </HeaderBar>
  );
}
