const { assert } = require('chai');
const { saveFact } = require('../js/index');

describe('saveFact', () => {
  it('should be a function', () => {
    assert.isFunction(saveFact);
  });
});
