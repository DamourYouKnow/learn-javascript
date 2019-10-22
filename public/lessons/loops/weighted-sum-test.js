describe('The function weighted sum', () => { 
    it ('should compute the weighted sum of an array of numbers', () => {
        let result = weightedSum([1, 2, 3]);
        let expected = 14;
        assert.equals(
            result, expected,
            `the weighted sum of [1, 2, 3] was ${result} but ${expected} was 
            expected`    
        );

        result = weightedSum([10, 5, 3]);
        expected = 29;
        assert.equals(
            result, expected,
            `the weighted sum of [10, 5, 3] was ${result} but ${expected} was 
            expected`    
        );
    });
    it ('should return 0 when given an empty array', () => {
        const result = weightedSum([]);
        assert.equals(
            result, 0, 
            `the weighted sum of [] was ${result} but 0 was expected`
        );
    })
});