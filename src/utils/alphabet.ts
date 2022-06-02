/**
 *
 * A function that generates alphabet characters and symbols
 *
 */
function alphabets() {
	const lowerCaseLetters = [];
	const upperCaseLetters = [];
	const symbols = [];
	const numbers = [];
	const llRange = [97, 122];
	const symbolRange = [33, 47];
	const numberRange = [48, 57];
	const uppRange = [65, 90];
	/**
	 * Generate lowercase letters
	 */
	for (let index = llRange[0]; index <= llRange[1]; index++)
		lowerCaseLetters.push(String.fromCharCode(index));

	/**
	 * Generate uppercase letters
	 */
	for (let index = uppRange[0]; index <= uppRange[1]; index++)
		upperCaseLetters.push(String.fromCharCode(index));

	/**
	 * Generate numbers
	 */
	for (let index = numberRange[0]; index <= numberRange[1]; index++)
		numbers.push(String.fromCharCode(index));

	/**
	 * Generate Symbols
	 */
	for (let index = symbolRange[0]; index <= symbolRange[1]; index++) {
		// ![34, 39, 44, 46, 58, 59].includes(index) &&
		symbols.push(String.fromCharCode(index));
	}

	const alphabet = upperCaseLetters
		.concat(lowerCaseLetters)
		.concat(numbers)
		.concat(symbols);

	return { alphabet, lowerCaseLetters, upperCaseLetters, numbers, symbols };
}

export const {
	lowerCaseLetters,
	alphabet,
	upperCaseLetters,
	numbers,
	symbols,
} = alphabets();

export default alphabets;
