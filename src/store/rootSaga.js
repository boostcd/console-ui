import featuresSaga from '../views/Features/state/sagas';
import microserviceSaga from '../views/Microservice/state/sagas';
import microservicesSaga from '../views/Microservices/state/sagas';
import projectSaga from '../views/Project/state/sagas';
import projectsSaga from '../views/Projects/state/sagas';

// Add new sagas to this array
export default [featuresSaga, microserviceSaga, microservicesSaga, projectSaga, projectsSaga];
