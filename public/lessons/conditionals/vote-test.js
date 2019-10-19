describe('Your program', () => {
    const eligible = 'You are eligible to vote!';
    const notEligible = 'You are not eligible to vote!';
    it(`should output either '${eligible}' or '${notEligible}'`, () => {
        const results = [
            eligibleToVote(true, 18),
            eligibleToVote(true, 20),
            eligibleToVote(false, 17),
            eligibleToVote(true, 17),
            eligibleToVote(false, 18)
        ];
        const valid = [eligible, notEligible]
        const tests = results.map((result) => valid.includes(result));
        assert.ok(!tests.includes(false), 'An invalid string was returned');
    });
    it(`should output '${eligible}' if a person can vote`, () => {
        assert.equals(
            eligibleToVote(true, 18),
            eligible,
            `Your program determined an 18 year old citizen was not eligible to 
            vote`
        );
        assert.equals(
            eligibleToVote(true, 20),
            eligible,
            `Your program determined a 20 year old citizen was not eligible to 
            vote`
        );
    });
    it(`should output '${notEligible}' if a person can't vote'`, () => {
        assert.equals(
            eligibleToVote(false, 17),
            notEligible,
            `Your program determined a 17 year old non-citizen was eligible 
            to vote`
        );
        assert.equals(
            eligibleToVote(true, 17),
            notEligible,
            `Your program determined a 17 year old citizen was eligible 
            to vote`
        );
        assert.equals(
            eligibleToVote(false, 18),
            notEligible,
            `Your program determined a 20 year old non-citizen was eligible 
            to vote`
        );
    });
});