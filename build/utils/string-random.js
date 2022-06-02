"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRandomString = void 0;
const alphabet_1 = require("./alphabet");
/**
 *A function that generates alphabet characters and symbols on a given length
 * @param {number} numberOfCharacters
 * @returns
 */
function generateRandomString(numberOfCharacters) {
    const string = alphabet_1.lowerCaseLetters
        .concat(alphabet_1.upperCaseLetters)
        .concat(alphabet_1.symbols)
        .concat(alphabet_1.numbers);
    let randomString = '';
    console.log('Alphabet', string);
    for (let i = 0; i < numberOfCharacters; i++) {
        const randomIndex = Math.floor(Math.random() * string.length);
        randomString += string[randomIndex];
    }
    return randomString;
}
exports.generateRandomString = generateRandomString;
exports.default = generateRandomString;
//# sourceMappingURL=string-random.js.map