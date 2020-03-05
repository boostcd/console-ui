import { combineReducers } from 'redux';

const initialState = { foo: 'bar' };
const foo = (state = initialState) => state;

export default combineReducers({
  foo,
});
