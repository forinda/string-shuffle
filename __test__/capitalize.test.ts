import {  capitalize } from '../src';
import { lowerCaseLetters } from '../src/utils/alphabet';

describe('Capitalize a letter in a sequence', () => {
	it('Should capitalize a given string', () => {
		const string = lowerCaseLetters.slice(3, 8).toString()
        console.log(string,lowerCaseLetters);
        
		const capitalized = capitalize(string);
		expect(capitalized).toMatchInlineSnapshot(`undefined`);
	});
});
console.log(capitalize(lowerCaseLetters.toString()));
