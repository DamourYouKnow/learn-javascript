describe('Your program', () => {
    it('should declare a function named volume', () => {
        assert.equals(
            typeof volume, 'function', 'The function volume was not declared');
    });
    it(
        'should return the volume of a box given its length, width, and height',
        () => {
            const result1 = volume(5, 10, 2);
            assert.equals(result1, 100, 'volume(5, 10, 2) does not return 100');

            const result2 = volume(2, 3, 4);
            assert.equals(result2, 24, 'volume(2, 3, 4) does not return 24');
        }
    );
});