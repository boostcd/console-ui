import React from 'react';
import Helmet from 'react-helmet';
import { Redirect, Route, Switch } from 'react-router-dom';

import Environments from './views/Environments';
import Features from './views/Features';
import Landing from './views/Landing';
import Microservices from './views/Microservices';

const App = () => (
  <>
    <Helmet defaultTitle='' titleTemplate='Estafet Boost - %s' />
    <Switch>
      <Route path='/' component={Landing} />
      <Route path='/features' component={Features} />
      <Route path='/microservices' component={Microservices} />
      <Route path='/environments' component={Environments} />
      <Route path='*'>
        <Redirect to='/' />
      </Route>
    </Switch>
  </>
);

export default App;
