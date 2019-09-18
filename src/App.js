import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HomePage, DiscoverPage } from './pages';

const App = () =>
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/discover" component={DiscoverPage} />
    </Switch>
  </BrowserRouter>
;

export default App;
