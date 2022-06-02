import { generateRandomString } from '../src';

describe('Get random string', () => {
	it('Should generate a random string', () => {
		const string = generateRandomString(10);
		expect(string).toMatchInlineSnapshot(`undefined`);
	});
});

console.log(generateRandomString(10));
