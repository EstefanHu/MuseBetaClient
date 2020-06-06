import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Cookie from 'js-cookie';

import { Landing } from './views/Landing';
import { Primary } from './views/Primary';

import './styles/App.css';

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/app' component={Primary} />
      </Switch>
    </Router>
  );
}