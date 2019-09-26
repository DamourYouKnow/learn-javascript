describe('The function purchaseCost', () => {
    it('should compute the purchase cost as $3.25 * 11 = $32.75', () => {
        assert.equals(
            purchaseCost(), 
            3.25 * 11,
            `The purchase cost is \$${purchaseCost().toFixed(2)}`
        );
    });
});