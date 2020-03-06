import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import configureStore from './store';
import fetchMicroservicesSaga from './views/Microservices/state/sagas';

const store = configureStore(window.__PRELOADED_STATE__);

store.runSaga(fetchMicroservicesSaga);

hydrate(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
