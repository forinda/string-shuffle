import { generateRandomString } from '../src';

describe('Shuffle a series of characters', () => {
	test('Shuffle a random generated string', () => {
		const random = generateRandomString(10)
		// expect(random.length).toEqual(10);
		expect(random).toMatchInlineSnapshot(`undefined`);
	});
});
