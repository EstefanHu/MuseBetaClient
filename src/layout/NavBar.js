import React from 'react';
import { FaConnectdevelop } from 'react-icons/fa';
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
  height: 50px;
  z-index: 10;
  color: var(--color);
  padding-left: 20px;
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

const LinkDiv = styled.div`
  padding-right: 20px
`;

const Logo = styled.h1`
  font-family: Heebo;
  margin: 0 25px 0 10px;
  color: white;
`;

const Search = styled.input`
  font-size: 1rem;
  border: none;
  border-radius: 3px;
  padding: 8px 12px;
  outline: none;
  margin-right: 10px;
  width: 200px;
`;

const Button = styled.button`
  border: none;
  border-radius: 5px;
  padding: 4px 10px;
  background-color: var(--color);
  font-size: .9rem;
  font-weight: bold;
  color: white;
  outline: 0;
  margin-left: 10px;

  &:hover {
    background-color: rgba(0,0,0,.1);
  }
`;

export const NavBar = () => (
  <Nav>
    <Div>
      <FaConnectdevelop size={35} color='black' />
      <Logo>:Muse</Logo>
      <Route exact path='/'>
        <>
          <Search placeholder='Search...' />
          <Link to='/new'>
            <Button>New</Button>
          </Link>
        </>
      </Route>
      <Route exact path='/new'>
        <Link to='/'>
          <Button>Cancel</Button>
        </Link>
      </Route>
    </Div>

    <LinkDiv>
      <Link to='/'>
        <Button>Home</Button>
      </Link>
      <Link to='/profile'>
        <Button>Profile</Button>
      </Link>
      <Button>Settings</Button>
    </LinkDiv>
  </Nav>
);