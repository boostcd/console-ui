import 'react-toastify/dist/ReactToastify.css';

import loadable from '@loadable/component';
import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Redirect, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Page from './components/Page/Page';
import { TOAST_CONFIG } from './constants';
import GlobalStyles from './styles/globalStyles';

const Features = loadable(() => import('./views/Features/Features'));
const Microservices = loadable(() => import('./views/Microservices/Microservices'));
const Microservice = loadable(() => import('./views/Microservice/Microservice'));
const Projects = loadable(() => import('./views/Projects/Projects'));
const Project = loadable(() => import('./views/Project/Project'));
const Libraries = loadable(() => import('./views/Libraries/Libraries'));

const App = () => (
  <React.StrictMode>
    <HelmetProvider>
      <Helmet titleTemplate={`${PRODUCT_DESCRIPTION} - %s`} />
      <GlobalStyles />
      <ToastContainer autoClose={TOAST_CONFIG.AUTO_CLOSE} pauseOnFocusLoss={false} />
      <Page>
        <Switch>
          <Route exact path='/'>
            <Redirect to='/features' />
          </Route>
          <Route path='/features' component={Features} />
          <Route path='/microservices/:environmentName/:appName' component={Microservice} />
          <Route path='/microservices' component={Microservices} />
          <Route path='/projects/add' component={Project} />
          <Route path='/projects/:namespace/edit' component={Project} />
          <Route path='/projects' component={Projects} />
          <Route path='/libraries' component={Libraries} />
          <Route path='*'>
            <Redirect to='/' />
          </Route>
        </Switch>
      </Page>
    </HelmetProvider>
  </React.StrictMode>
);

export default App;
