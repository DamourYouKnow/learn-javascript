describe('The function list', () => {
    it ('should handle arrays with 2 or more items', () => {
        const input = ['one', 'two', 'three'];
        const expected = 'one, two, and three';
        const result = list(input);
        assert.equals(
            result, 
            expected,
            `The output of ['one, two, three'] is '${result}' but '${expected}'
            was expected`
        );
    });
    it ('should not insert a comma if the array has 2 items', () => {
        const input = ['cat', 'dog'];
        const expected = 'cat and dog';
        const result = list(input);
        assert.equals(
            result, 
            expected,
            `The output of ['cat', 'dog'] is '${result}' but '${expected}'
            was expected`
        );
    });
    it ('should return the item in the array if it has only one', () => {
        const input = ['apple'];
        const expected = 'apple';
        const result = list(input);
        assert.equals(
            result, 
            expected,
            `The output of ['apple'] is '${result}' but '${expected}'
            was expected`
        );
    });
    it ('should return the empty string if the array is empty', () => {
        const input = [];
        const expected = '';
        const result = list(input);
        assert.equals(
            result, 
            expected,
            `The output of [] is '${result}' but '${expected}'
            was expected`
        );
    });
});