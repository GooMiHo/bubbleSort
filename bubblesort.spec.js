
describe('Bubble Sort', function(){
    beforeAll(function() {
        spyOn(window, 'swap').and.callThrough(); //needs to use lowercase w for Jasmine
    });
    it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual( [] );
    });
    it('calls swap x times', function() {
        //spyOn(window, 'swap').and.callThrough();
        bubbleSort([1, 5, 7, 2]);
        expect(window.swap.calls.count()).toEqual(4);
    })
    it('sorts the array', function() {
        //spyOn(window, 'swap').and.callThrough();
        expect(bubbleSort([1, 5, 7, 2])).toEqual([1, 2, 5, 7]);
    })
    it('sorts the array', function() {
        //spyOn(window, 'swap').and.callThrough();
        expect(bubbleSort([9, 12, 22, 50, 1, 5, 7, 2])).toEqual([1, 2, 5, 7, 9, 12, 22, 50]);
    })
  });
