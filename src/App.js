import 'react-toastify/dist/ReactToastify.css';

import loadable from '@loadable/component';
import React from 'react';
import Helmet from 'react-helmet';
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

const App = () => (
  <>
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
        <Route path='*'>
          <Redirect to='/' />
        </Route>
      </Switch>
    </Page>
  </>
);

export default App;
