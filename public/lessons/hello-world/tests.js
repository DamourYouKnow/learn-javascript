describe('Your program', () => {
    const output = __consoleOutput[0];
    it(`should return the string 'I am a programming wizard!'`, () => {
        assert.ok(output, 'No string was output using console.log');
        assert.equals(
            output,
            'I am a programming wizard!',
            `The string equals '${output}'`
        );
    });
});