import React from 'react';
import { Route } from 'react-router-dom';

import { NavBar } from '../layout/NavBar.js';
import { Background } from '../layout/background';

import { Home } from '../views/Home.js';
import { New } from '../views/New.js';
import { Profile } from '../views/Profile.js';

import styled from 'styled-components';

const Main = styled.main`
  position: fixed;
  top: 50px;
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
        <Route exact path='/' component={Home} />
        <Route exact path='/new' component={New} />
        <Route exact path='/profile' component={Profile} />
        <Background />
      </Main>
    </>
  );
};