import { applyMiddleware, compose, createStore } from 'redux';
import logger from 'redux-logger';

import rootReducer from './rootReducer';

const composeEnhancers =
  (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

// TODO: Disable logging in production
export default createStore(rootReducer, composeEnhancers(applyMiddleware(logger)));
