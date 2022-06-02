/**
 *A function to shuffle a string passed as an argument
 * @param {string} word
 * @returns
 */
function shuffleString(word: string) {
	const stringArray = word.split('');
	const wordLength = stringArray.length;

	for (let index = wordLength - 1; index > 0; index--) {
		const temp = Math.floor(Math.random() * (index + 1));
		const tmp = stringArray[index];
		stringArray[index] = stringArray[temp];
		stringArray[temp] = tmp;
	}

	return stringArray.join('');
}

export { shuffleString };

export default shuffleString;

export type shuffleStringType = typeof shuffleString;
