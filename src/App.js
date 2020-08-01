import React, { useEffect, useContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import decode from 'jwt-decode';

import { Context as AuthContext } from './providers/authProvider.js';
import { Context as LocationContext } from './providers/locationProvider.js';

import { Landing } from './routers/Landing.js';
import { Primary } from './routers/Primary';
import { FourOhFour } from './views/FourOhFour';

import './App.css';

const AuthRoute = ({ component: Component, ...rest }) => {
  const { state: { token }, logout } = useContext(AuthContext);
  const [isValid, setIsValid] = useState(true);

  console.log(isValid)

  useEffect(() => {
    try {
      const expDate = decode(token);
      if (expDate.exp < new Date().getTime() / 1000)
        setIsValid(false);
    } catch (error) {
      setIsValid(false);
    }

    if (!isValid) logout();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token, isValid]);

  return (
    <Route {...rest} render={props => (
      isValid ? (
        <Component {...props} />
      ) : (
          <Redirect to={{ pathname: '/' }} />
        )
    )} />
  )
}

export const App = () => {
  const { state: { token }, tryLocalLogin } = useContext(AuthContext);
  const { approximateLocation } = useContext(LocationContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      await approximateLocation();
      await tryLocalLogin();
      setIsLoading(false);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) return null;

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
};