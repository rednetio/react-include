import sanitize from '../src/sanitize';

describe('sanitize()', () => {
  it('replace dangerous chars', () => {
    expect(sanitize('<>"')).to.equal('&lt;&gt;&quot;');
  });
});
