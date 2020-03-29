import rootSaga from './rootSaga';

// This is a purely a smoke test to verify that the root saga is present
describe('Store: rootSaga', () => {
  it('should be a function', () => {
    expect(rootSaga).toBeInstanceOf(Function);
  });
});
