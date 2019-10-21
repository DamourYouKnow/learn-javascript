describe('Your program', () => {
    const output = __consoleOutput;

    const typestr = (value) => {
        if (typeof value === 'number') return 'number';
        if (typeof value === 'string') return 'string';
        if (typeof value === 'boolean') return 'boolean';
        if (value === null) return 'null';
        if (value === undefined) return 'undefined';
        return typeof value;
    }

    it('the first value output should be a number', () => {
        assert.ok(
            output.length >= 1, 
            'No values were output with console.log()'
        );
        const type = typestr(output[0]);
        assert.equals(
            type, 'number',
            `The type of the first value was ${type}`
        );
    });
    it('the second value output should be a string', () => {
        assert.ok(
            output.length >= 2, 
            'Two values were not output with console.log()'
        );
        const type = typestr(output[1]);
        assert.equals(
            type, 'string',
            `The type of the second value was ${type}`
        );
    });
    it('the third value output should be a boolean', () => {
        assert.ok(
            output.length >= 3, 
            'Three values were not output with console.log()'
        );
        const type = typestr(output[2]);
        assert.equals(
            type, 'boolean',
            `The type of the third value was ${type}`
        );
    });
    it('the fourth value output should be null', () => {
        assert.ok(
            output.length >= 4, 
            'Four values were not output with console.log()'
        );
        const type = typestr(output[3]);
        assert.equals(
            type, 'null',
            `The type of the fourth value was ${type}`
        );
    });
    it('the fifth value output should be undefined', () => {
        assert.ok(
            output.length >= 4, 
            'Five values were not output with console.log()'
        );
        const type = typestr(output[4]);
        assert.equals(
            type, 'undefined',
            `The type of the fifth value was ${type}`
        );
    });
});