import {
	lowerCaseLetters,
	numbers,
	symbols,
	upperCaseLetters,
} from './alphabet';

/**
 *A function that generates alphabet characters and symbols on a given length
 * @param {number} numberOfCharacters
 * @returns
 */
function generateRandomString(numberOfCharacters: number) {
	const string = lowerCaseLetters
		.concat(upperCaseLetters)
		.concat(symbols)
		.concat(numbers);
	let randomString = '';
    console.log("Alphabet",string);
    
	for (let i = 0; i < numberOfCharacters; i++) {
		const randomIndex = Math.floor(Math.random() * string.length);
		randomString += string[randomIndex];
	}

	return randomString;
}


export { generateRandomString };

export default generateRandomString;
