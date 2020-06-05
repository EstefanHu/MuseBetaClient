import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Landing } from './views/Landing';
import { Primary } from './views/Primary';

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