import { alphabets } from './alphabet';
import { capitalize } from './capitalize';
import { generateRandomString } from './string-random';
import { lowerCaseLetters } from './alphabet';
import { shuffleString } from './shuffle-string';
import { symbols } from './alphabet';
import { upperCaseLetters } from './alphabet';

export {
	alphabets,
	capitalize,
	generateRandomString,
	lowerCaseLetters,
	upperCaseLetters,
	shuffleString,
	symbols,
};

export type AlphabetType = typeof alphabets;
export type CapitalizeType = typeof capitalize;
export type LowerCaseLetterType = typeof lowerCaseLetters;
export type UpperCaseLetterType = typeof upperCaseLetters;
export type NumberType = typeof symbols;
export type SymbolType = typeof symbols;
