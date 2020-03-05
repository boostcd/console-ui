import createRequestReducer from '../../../utils/createRequestReducer';
import {
  FETCH_MICROSERVICES_FAILURE,
  FETCH_MICROSERVICES_PENDING,
  FETCH_MICROSERVICES_SUCCESS,
} from './actions';

export const initialState = {
  data: {},
  loading: false,
  error: false,
};

export default createRequestReducer(initialState, [
  FETCH_MICROSERVICES_PENDING,
  FETCH_MICROSERVICES_SUCCESS,
  FETCH_MICROSERVICES_FAILURE,
]);
