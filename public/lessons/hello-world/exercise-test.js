describe('Your program', () => {
    const output = __consoleOutput[0];
    it(`should return the string 'I am learning JavaScript!'`, () => {
        assert.ok(output, 'No string was output using console.log');
        assert.equals(
            output,
            'I am learning JavaScript!',
            `The string equals '${output}'`
        );
    });
});