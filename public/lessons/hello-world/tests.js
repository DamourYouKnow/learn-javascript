describe('The function foo', () => {
    it(`should return the string 'I am a programming wizard!'`, () => {
        assert.equals(
            foo(),
            'I am a programming wizard!',
            `The string equals '${foo()}'`
        );
    });
});