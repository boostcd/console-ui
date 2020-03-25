const fixedDate = new Date('2020-02-24T00:00:00');

/**
 * This is to be used for mocking with a fixed date
 */
class MockDate extends Date {
  constructor() {
    super();

    return fixedDate;
  }
}

export default MockDate;
