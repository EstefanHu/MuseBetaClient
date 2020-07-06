import React, { useEffect, useContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import decode from 'jwt-decode';

import { Context as AuthContext } from './providers/authProvider.js';
import { Context as LocationContext } from './providers/locationProvider.js';

import { Landing } from './routers/Landing.js';
import { Primary } from './routers/Primary';
import { FourOhFour } from './views/FourOhFour';

import './App.css';

export const App = () => {
  const { state: { token }, tryLocalLogin, logout } = useContext(AuthContext);
  const { approximateLocation } = useContext(LocationContext);
  const [isLoading, setIsLoading] = useState(true);
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    try {
      const expDate = decode(token);
      console.log(expDate.exp < new Date().getTime() / 1000);
      if (expDate.exp < new Date().getTime() / 1000)
        setIsValid(false);
    } catch (error) {
      setIsValid(false);
    }

    if (!isValid) logout();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

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
            <Route exact path='/(|new|profile|settings)' component={Primary} />
            : <Route exact path='/(|terms|forgot|privacy)' component={Landing} />
        }
        <Route component={FourOhFour} />
      </Switch>
    </Router>
  );
};