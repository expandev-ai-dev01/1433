/**
 * @summary
 * Global test environment setup and configuration
 *
 * @module tests
 */

/**
 * @remarks
 * Configure test environment variables
 */
process.env.NODE_ENV = 'test';
process.env.PORT = '3001';

/**
 * @remarks
 * Global test setup runs before all tests
 */
beforeAll(() => {
  console.log('Test environment initialized');
});

/**
 * @remarks
 * Global test teardown runs after all tests
 */
afterAll(() => {
  console.log('Test environment cleanup completed');
});
