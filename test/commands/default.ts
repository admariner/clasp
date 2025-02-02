import {expect} from 'chai';
import {describe, it} from 'mocha';

import {runClasp} from '../functions.js';

describe('Test missing command function', () => {
  it('should report missing command correctly', () => {
    const result = runClasp(['parboil']);
    const expected = 'Unknown command "clasp parboil"';
    expect(result.stderr).to.contain(expected);
    expect(result.status).to.equal(1);
  });
});
