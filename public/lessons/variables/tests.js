describe('Your program', () => {
    const output = __consoleOutput[0];
    it('should compute the purchase cost as $3.25 * 11 = $32.75', () => {
        
        assert.ok(output, 'No value was output using console.log');
        const value = Number(output);
        assert.ok(!isNaN(value), `The output '${output}' is not a number`);
        assert.equals(
            value, 
            3.25 * 11,
            `The purchase cost is \$${value.toFixed(2)}`
        );
    });
});