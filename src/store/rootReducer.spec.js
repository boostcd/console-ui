import rootReducer from './rootReducer';
import { fetchUsersPending } from './users/actions';

describe('Store: rootReducer', () => {
  it('should be a function', () => {
    expect(rootReducer).toBeInstanceOf(Function);
  });

  it('should have all the reducers defined', () => {
    const reducer = rootReducer();

    expect(reducer).toHaveProperty('users');
    expect(reducer).toHaveProperty('features');
    expect(reducer).toHaveProperty('microservice');
    expect(reducer).toHaveProperty('microservices');
    expect(reducer).toHaveProperty('project');
    expect(reducer).toHaveProperty('projects');
  });

  it('should handle actions and return the correct state', () => {
    const action = fetchUsersPending();
    const reducer = rootReducer(undefined, action);

    expect(reducer.users.loading).toBe(true);
    expect(reducer.users.error).toBe(false);
  });
});
