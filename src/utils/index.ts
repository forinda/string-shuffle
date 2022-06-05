import { alphabets } from './alphabet';
import { capitalize } from './capitalize';
import { generateRandomString } from './string-random';
import { lowerCaseLetters } from './alphabet';
import { shuffleString } from './shuffle-string';
import { symbols } from './alphabet';
import { numbers } from './alphabet';
import {
	generateShuffledPassword,
	generateUnshuffledPassword
} from './random-password';
import { upperCaseLetters } from './alphabet';

export {
	alphabets,
	capitalize,
	generateRandomString,
	lowerCaseLetters,
	upperCaseLetters,
	shuffleString,
	symbols,
	numbers,
	generateShuffledPassword,
	generateUnshuffledPassword
};

export type AlphabetType = typeof alphabets;
export type CapitalizeType = typeof capitalize;
export type LowerCaseLetterType = typeof lowerCaseLetters;
export type UpperCaseLetterType = typeof upperCaseLetters;
export type NumberType = typeof numbers;
export type SymbolType = typeof symbols;
export type GenerateUnshuffledPasswordType = typeof generateUnshuffledPassword;
export type GenerateShuffledPasswordType = typeof generateShuffledPassword;
