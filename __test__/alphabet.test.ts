import { lowerCaseLetters } from '../src';

describe('Get alphabets ', () => {
	it('Shoud get all the lowercase letters', () => {
		const l_case = lowerCaseLetters;
		expect(l_case).toBeDefined();
	});
});
