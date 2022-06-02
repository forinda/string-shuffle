import { generateRandomString } from '../src';

describe('Get random string', () => {
	it('Should generate a random string', () => {
		const string = generateRandomString(10);
		expect(string.length).toBe(10);
		expect(string).toBeDefined();
		expect(string).toMatchInlineSnapshot();
	});
});
