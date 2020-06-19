import React, { useEffect, useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Cookie from 'js-cookie';

import { Context as LocationContext } from './providers/locationProvider.js';

import { Landing } from './routers/Landing.js';
import { Primary } from './routers/Primary';
import { FourOhFour } from './views/FourOhFour';

import './App.css';

const checkAuth = () => {
  const cookie = Cookie.get('museCookie');
  if (!cookie) return false;
  return true;
}

const AuthRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    checkAuth() ? (
      <Component {...props} />
    ) : (
        <Redirect to={{ pathname: '/landing/' }} />
      )
  )} />
)

export const App = () => {
  const { approximateLocation } = useContext(LocationContext);

  useEffect(() => {
    approximateLocation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <Router>
      <Switch>
        <AuthRoute exact path='/(|new|profile|settings)' component={Primary} />
        <Route exact path='/landing/(|terms|forgot|privacy)' component={Landing} />
        <Route component={FourOhFour} />
      </Switch>
    </Router>
  );
}