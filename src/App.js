import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import { Landing } from './views/Landing';
import { Primary } from './views/Primary';
import { FourOhFour } from './views/FourOhFour';

import './styles/App.css';

export const App = () => {
  useEffect(() => {
    fetch('http://ip-api.com/json')
      .then(res => res.json())
      .then(console.log)
      .catch(console.error);
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/app/(home|profile|settings)' component={Primary} />
        <Route component={FourOhFour} />
      </Switch>
    </Router>
  );
}