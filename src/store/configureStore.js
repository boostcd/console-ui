import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import createSagaMiddleware, { END } from 'redux-saga';

import rootReducer from './rootReducer';

const isDevelopment = process.env.NODE_ENV === 'development';

export default (initialState) => {
  const sagaMiddleware = createSagaMiddleware();
  const logger = createLogger({
    collapsed: () => true,
  });

  // Add development specific middleware
  let middleware = [sagaMiddleware];
  if (isDevelopment) {
    middleware.push(logger);
  }

  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  );

  // Extending the store to be able to run sagas from the instance
  store.runSaga = sagaMiddleware.run;
  store.close = () => store.dispatch(END);

  // Hot reload the root reducer
  if (module.hot) {
    module.hot.accept('./rootReducer', () => {
      const nextReducer = require('./rootReducer').default;
      store.replaceReducer(nextReducer);
    });
  }

  return store;
};
