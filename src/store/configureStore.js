import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';

import rootReducer from './rootReducer';

export default (initialState) => {
  const sagaMiddleware = createSagaMiddleware();

  let store;
  const middleware = [sagaMiddleware];

  // Conditionally require the tools only for development
  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line global-require
    const { createLogger } = require('redux-logger');
    // eslint-disable-next-line global-require
    const { composeWithDevTools } = require('redux-devtools-extension');

    const logger = createLogger({
      collapsed: () => true,
    });

    store = createStore(
      rootReducer,
      initialState,
      composeWithDevTools(applyMiddleware(...[...middleware, logger]))
    );
  } else {
    store = createStore(rootReducer, initialState, applyMiddleware(...middleware));
  }

  // Extending the store to be able to run sagas from the instance
  store.runSaga = sagaMiddleware.run;
  store.close = () => store.dispatch(END);

  // Hot reload the root reducer
  if (module.hot) {
    module.hot.accept('./rootReducer', () => {
      // eslint-disable-next-line global-require
      const nextReducer = require('./rootReducer').default;
      store.replaceReducer(nextReducer);
    });
  }

  return store;
};
