import React, { useEffect, useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import decode from 'jwt-decode';

import { Context as AuthContext } from './providers/authProvider.js';
import { Context as LocationContext } from './providers/locationProvider.js';

import { Landing } from './routers/Landing.js';
import { Primary } from './routers/Primary';
import { FourOhFour } from './views/FourOhFour';

import './App.css';

const checkAuth = () => {
  const token = localStorage.getItem('token');
  if (!token) return false;

  try {
    const expDate = decode(token);
    if (expDate < new Date().getTime() / 1000)
      return false;
  } catch (error) {
    return false;
  }

  return true;
}

const AuthRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    checkAuth() ? (
      <Component {...props} />
    ) : (
        <Redirect to={{ pathname: '/' }} />
      )
  )} />
)

export const App = () => {
  const { state: { token }, tryLocalLogin } = useContext(AuthContext);
  const { approximateLocation } = useContext(LocationContext);

  useEffect(() => {
    approximateLocation();
    tryLocalLogin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Router>
      <Switch>
        {
          token ?
            <AuthRoute exact path='/(|new|profile|settings)' component={Primary} />
            : <Route exact path='/(|terms|forgot|privacy)' component={Landing} />
        }
        <Route component={FourOhFour} />
      </Switch>
    </Router>
  );
}