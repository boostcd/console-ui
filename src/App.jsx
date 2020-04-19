import 'react-toastify/dist/ReactToastify.css';

import loadable from '@loadable/component';
import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Page from './components/Page/Page';
import { TOAST_CONFIG, TOAST_CONTAINERS } from './constants';
import { PRODUCT_DESCRIPTION } from './constants/env';
import GlobalStyles from './styles/globalStyles';

const Features = loadable(() => import('./views/Features/Features'));
const Microservices = loadable(() => import('./views/Microservices/Microservices'));
const Microservice = loadable(() => import('./views/Microservice/Microservice'));
const Environments = loadable(() => import('./views/Environments/Environments'));
const Environment = loadable(() => import('./views/Environment/Environment'));
// const Libraries = loadable(() => import('./views/Libraries/Libraries'));
const NotFound = loadable(() => import('./views/NotFound/NotFound'));

const App = () => (
  <React.StrictMode>
    <HelmetProvider>
      <Helmet titleTemplate={`${PRODUCT_DESCRIPTION} - %s`} />
      <GlobalStyles />
      <ToastContainer
        containerId={TOAST_CONTAINERS.MAIN}
        position='top-right'
        autoClose={TOAST_CONFIG.AUTO_CLOSE}
        pauseOnFocusLoss={false}
        enableMultiContainer
      />
      <ToastContainer
        containerId={TOAST_CONTAINERS.CONFIRM}
        position='top-center'
        autoClose={false}
        closeOnClick={false}
        enableMultiContainer
      />
      <Page>
        <Switch>
          <Route exact path='/' component={Features} />
          <Route path='/microservices/:environmentName/:appName' component={Microservice} />
          <Route path='/microservices' component={Microservices} />
          <Route path='/environments/add' component={Environment} />
          <Route path='/environments/:namespace/edit' component={Environment} />
          <Route path='/environments' component={Environments} />
          {/* <Route path='/libraries' component={Libraries} /> */}
          <Route path='*' component={NotFound} />
        </Switch>
      </Page>
    </HelmetProvider>
  </React.StrictMode>
);

export default App;
