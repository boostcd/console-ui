import { applyMiddleware, compose, createStore } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware, { END } from 'redux-saga';

import fetchMicroservicesSaga from '../views/Microservices/state/sagas';
import rootReducer from './rootReducer';

const sagaMiddleware = createSagaMiddleware();

// TODO: Disable logging in production
const middleware = [logger, sagaMiddleware];

const composeEnhancers =
  (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export default (initialState) => {
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleware))
  );

  // TODO:
  sagaMiddleware.run(fetchMicroservicesSaga);

  store.close = () => store.dispatch(END);

  return store;
};
