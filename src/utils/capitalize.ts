/**
 *
 * A function that capitalizes the first letter of a string
 * @param {string} text
 * @returns {string} text
 * 
 */
function capitalize(text: string): string {
	return text.charCodeAt(0) > 64 && text.charCodeAt(0) < 97
		? text
		: text.charAt(0).toLocaleUpperCase() + text.slice(1);
}

export { capitalize };

export default capitalize;
