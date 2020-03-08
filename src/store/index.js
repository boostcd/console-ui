import { applyMiddleware, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware, { END } from 'redux-saga';

import rootReducer from './rootReducer';

const sagaMiddleware = createSagaMiddleware();
const logger = createLogger({
  collapsed: () => true,
});

// Add development specific middleware
let middleware = [sagaMiddleware];
if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

const composeEnhancers =
  (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export default (initialState) => {
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleware))
  );

  store.runSaga = sagaMiddleware.run;
  store.close = () => store.dispatch(END);

  return store;
};
