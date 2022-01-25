var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    describe('more tests', function (){
        it('case',function (){
            assert.strictEqual(1,1)
        })
    })
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});
