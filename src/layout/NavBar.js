import React from 'react';
import { Route, Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: var(--color);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  z-index: 10;
  color: var(--color);
  padding-left: 20px;
`;

const Logo = styled.h1`
  font-family: Heebo;
  margin-right: 25px;
  margin-bottom: 0px;
  color: white;
`;

const Search = styled.input`
  font-size: 1rem;
  border: none;
  border-radius: 3px;
  padding: 10px 12px;
  outline: none;
  margin-right: 10px;
`;

const Button = styled.button`
  border: none;
  border-radius: 5px;
  padding: 4px 10px;
  background-color: var(--color);
  font-size: .9rem;
  font-weight: bold;
  color: white;

  &:hover {
    background-color: rgba(0,0,0,.1);
  }
`;

export const NavBar = ({ navigation }) => {

  return (
    <Nav>
      <Logo>:Muse</Logo>
      <span>
        <Route exact path='/app/home' component={Create} />
        <Route exact path='/app/new' component={Tools} />
      </span>
    </Nav>
  )
}

const Create = ({ toggleCreate }) => {
  return (
    <>
      <Search placeholder='Search...' />
      <Link to='/app/new'>
        <Button onClick={toggleCreate}>New</Button>
      </Link>
    </>
  )
}

const Tools = ({ toggleCreate }) => {
  return (
    <Link to='/app/home'>
      <Button onClick={toggleCreate}>Cancel</Button>
    </Link>
  )
}