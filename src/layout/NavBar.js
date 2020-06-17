import React, { useContext } from 'react';
import { Route, Link } from 'react-router-dom';
import { Context as NewStoryContext } from '../providers/newStoryProvider.js';
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

export const NavBar = () => {
  const { startStory, endStory } = useContext(NewStoryContext);

  return (
    <Nav>
      <Logo>:Muse</Logo>
      <span>
        <Route exact path='/app/home'>
          <>
            <Search placeholder='Search...' />
            <Link to='/app/new'>
              <Button onClick={startStory}>New</Button>
            </Link>
          </>
        </Route>
        <Route exact path='/app/new'>
          <Link to='/app/home'>
            <Button onClick={endStory}>Cancel</Button>
          </Link>
        </Route>
      </span>
    </Nav>
  )
}