import loadable from '@loadable/component';
import React from 'react';
import Helmet from 'react-helmet';
import { Redirect, Route, Switch } from 'react-router-dom';

import Page from './components/Page';
import GlobalStyles from './styles';

const Features = loadable(() => import('./views/Features'));
const Microservices = loadable(() => import('./views/Microservices'));
const Microservice = loadable(() => import('./views/Microservice'));
const Environments = loadable(() => import('./views/Environments'));

const App = () => (
  <>
    <Helmet titleTemplate={`${PRODUCT_DESCRIPTION} - %s`} />
    <GlobalStyles />
    <Page>
      <Switch>
        <Route exact path='/'>
          <Redirect to='/features' />
        </Route>
        <Route path='/features' component={Features} />
        <Route path='/microservices/:environment/:appName' component={Microservice} />
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
