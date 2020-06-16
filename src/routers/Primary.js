import React from 'react';
import { Route } from 'react-router-dom';

import { NavBar } from '../layout/NavBar.js';
import { Background } from '../layout/background';

import { Home } from '../views/Home.js';
import { New } from '../views/New.js';

import styled from 'styled-components';

const Main = styled.main`
  position: fixed;
  top: 60px;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: row;
`;

export const Primary = () => {
  return (
    <>
      <NavBar />
      <Main>
        <Route exact path='/app/home' component={Home} />
        <Route exact path='/app/new' component={New} />
        <Background />
      </Main>
    </>
  )
}