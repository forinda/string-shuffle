import {
	lowerCaseLetters,
	upperCaseLetters,
	symbols,
	numbers
} from './alphabet';
import { ShuffleStringType } from './shuffle-string';

type GenPropType = {
	lower?: number;
	upper?: number;
	symb?: number;
	num?: number;
	shuffle?: boolean;
};

type GeneratorType = ({
	lower,
	num,
	shuffle,
	symb,
	upper
}?: Partial<GenPropType>) => string;

/**
 *You pass the shuffle property to the function to get a random string and in the factory function you can pass the number of characters you want to generate and whether you want to shuffle the string or not.
 The function returns a string. and you choose the number of characters you want to generate and to ignore some characters you can pass 0 as an argument not to generate them.
 * @param {ShuffleStringType} shuffleString
 * @returns
 */
export function generateShuffledPassword(
	shuffleString: ShuffleStringType
): GeneratorType {
	/**
	 * Generate random string from concatenation of lowercase letters, uppercase letters, numbers and symbols
	 * @param {number} lower A number for number of required lower case letters
	 * @param {number} upper A number for number of required upper case letters
	 * @param {number} symb A number for number of required symbols
	 * @param {number} num A number for number of required numbers
	 * @returns {string} A generated shuffled string if
	 */
	return <GeneratorType>(<unknown>(({
		lower = 2,
		num = 2,
		symb = 0,
		upper = 0,
		shuffle = true
	}: GenPropType): string => {
		let string = '';
		for (let low = 0; low < lower; low++) {
			string +=
				lowerCaseLetters[
					Math.floor(Math.random() * lowerCaseLetters.length)
				];
		}
		for (let up = 0; up < upper; up++) {
			string +=
				upperCaseLetters[
					Math.floor(Math.random() * upperCaseLetters.length)
				];
		}
		for (let sym = 0; sym < symb; sym++)
			string += symbols[Math.floor(Math.random() * symbols.length)];

		for (let nums = 0; nums < num; nums++)
			string += numbers[Math.floor(Math.random() * numbers.length)];

		return shuffle ? shuffleString(string) : string;
	}));
}

/**
 * Generate random string from concatenation of lowercase letters, uppercase letters, numbers and symbols
 * @param {number} lower A number for number of required lower case letters
 * @param {number} upper A number for number of required upper case letters
 * @param {number} symb A number for number of required symbols
 * @param {number} num A number for number of required numbers
 * @returns {string} A generated unshuffled string
 *
 */
export const generateUnshuffledPassword = ({
	lower = 2,
	num = 2,
	symb = 0,
	upper = 0
}: GenPropType): string => {
	let string = '';
	for (let low = 0; low < lower; low++) {
		string +=
			lowerCaseLetters[
				Math.floor(Math.random() * lowerCaseLetters.length)
			];
	}
	for (let up = 0; up < upper; up++) {
		string +=
			upperCaseLetters[
				Math.floor(Math.random() * upperCaseLetters.length)
			];
	}
	for (let sym = 0; sym < symb; sym++)
		string += symbols[Math.floor(Math.random() * symbols.length)];

	for (let nums = 0; nums < num; nums++)
		string += numbers[Math.floor(Math.random() * numbers.length)];

	return string;
};
