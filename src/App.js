import loadable from '@loadable/component';
import React from 'react';
import Helmet from 'react-helmet';
import { Redirect, Route, Switch } from 'react-router-dom';

import Page from './components/Page';
import GlobalStyles from './styles';

const Features = loadable(() => import('./views/Features'));
const Microservices = loadable(() => import('./views/Microservices'));
const Environments = loadable(() => import('./views/Environments'));

const App = () => (
  <>
    <Helmet defaultTitle='' titleTemplate='Estafet Boost - %s' />
    <GlobalStyles />
    <Page>
      <Switch>
        <Route exact path='/'>
          <Redirect to='/features' />
        </Route>
        <Route path='/features' component={Features} />
        <Route path='/microservices' component={Microservices} />
        <Route path='/environments' component={Environments} />
        <Route path='*'>
          <Redirect to='/' />
        </Route>
      </Switch>
    </Page>
  </>
);

export default App;
