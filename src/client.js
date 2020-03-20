import { loadableReady } from '@loadable/component';
import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import configureStore from './store';
import featuresSaga from './views/Features/state/sagas';
import microserviceSaga from './views/Microservice/state/sagas';
import microservicesSaga from './views/Microservices/state/sagas';
import projectSaga from './views/Project/state/sagas';
import projectsSaga from './views/Projects/state/sagas';

const store = configureStore(window.__PRELOADED_STATE__);

// TODO: Figure out a way to prevent sagas to re-run on HMR
[featuresSaga, microserviceSaga, microservicesSaga, projectSaga, projectsSaga].map(store.runSaga);

loadableReady(() => {
  hydrate(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>,
    document.getElementById('root')
  );
});

if (module.hot) {
  module.hot.accept();
}
