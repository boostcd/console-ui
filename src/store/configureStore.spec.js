import configureStore from './configureStore';

// This is a purely a smoke test to verify that the function is present and added methods are on the prototype
describe('Store: configureStore', () => {
  it('should be a function', () => {
    expect(configureStore).toBeInstanceOf(Function);
  });

  it('should have the defined methods for saga handling', () => {
    const store = configureStore();

    expect(store.runSaga).toBeInstanceOf(Function);
    expect(store.close).toBeInstanceOf(Function);
  });
});
