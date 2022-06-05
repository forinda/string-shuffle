import * as shuffle from './utils';

export default shuffle;

export const {
	alphabets,
	capitalize,
	generateRandomString,
	lowerCaseLetters,
	shuffleString,
	symbols,
	upperCaseLetters,
	numbers,
	generateShuffledPassword,
	generateUnshuffledPassword
} = shuffle;

export type AlphabetType = typeof alphabets;
export type CapitalizeType = typeof capitalize;
export type LowerCaseLetterType = typeof lowerCaseLetters;
export type UpperCaseLetterType = typeof upperCaseLetters;
export type NumberType = typeof numbers;
export type SymbolType = typeof symbols;
export type GenerateRandomstringType = typeof generateRandomString;
export type ShuffleStringType = typeof shuffleString;
export type GenerateUnshuffledPasswordType = typeof generateUnshuffledPassword;
export type GenerateShuffledPasswordType = typeof generateShuffledPassword;
