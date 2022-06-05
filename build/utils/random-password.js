"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateUnshuffledPassword = exports.generateShuffledPassword = void 0;
const alphabet_1 = require("./alphabet");
/**
 *You pass the shuffle property to the function to get a random string and in the factory function you can pass the number of characters you want to generate and whether you want to shuffle the string or not.
 The function returns a string. and you choose the number of characters you want to generate and to ignore some characters you can pass 0 as an argument not to generate them.
 * @param {ShuffleStringType} shuffleString
 * @returns
 */
function generateShuffledPassword(shuffleString) {
    /**
     * Generate random string from concatenation of lowercase letters, uppercase letters, numbers and symbols
     * @param {number} lower A number for number of required lower case letters
     * @param {number} upper A number for number of required upper case letters
     * @param {number} symb A number for number of required symbols
     * @param {number} num A number for number of required numbers
     * @returns {string} A generated shuffled string if
     */
    return (({ lower = 2, num = 2, symb = 0, upper = 0, shuffle = true }) => {
        let string = '';
        for (let low = 0; low < lower; low++) {
            string +=
                alphabet_1.lowerCaseLetters[Math.floor(Math.random() * alphabet_1.lowerCaseLetters.length)];
        }
        for (let up = 0; up < upper; up++) {
            string +=
                alphabet_1.upperCaseLetters[Math.floor(Math.random() * alphabet_1.upperCaseLetters.length)];
        }
        for (let sym = 0; sym < symb; sym++)
            string += alphabet_1.symbols[Math.floor(Math.random() * alphabet_1.symbols.length)];
        for (let nums = 0; nums < num; nums++)
            string += alphabet_1.numbers[Math.floor(Math.random() * alphabet_1.numbers.length)];
        return shuffle ? shuffleString(string) : string;
    });
}
exports.generateShuffledPassword = generateShuffledPassword;
/**
 * Generate random string from concatenation of lowercase letters, uppercase letters, numbers and symbols
 * @param {number} lower A number for number of required lower case letters
 * @param {number} upper A number for number of required upper case letters
 * @param {number} symb A number for number of required symbols
 * @param {number} num A number for number of required numbers
 * @returns {string} A generated unshuffled string
 *
 */
const generateUnshuffledPassword = ({ lower = 2, num = 2, symb = 0, upper = 0 }) => {
    let string = '';
    for (let low = 0; low < lower; low++) {
        string +=
            alphabet_1.lowerCaseLetters[Math.floor(Math.random() * alphabet_1.lowerCaseLetters.length)];
    }
    for (let up = 0; up < upper; up++) {
        string +=
            alphabet_1.upperCaseLetters[Math.floor(Math.random() * alphabet_1.upperCaseLetters.length)];
    }
    for (let sym = 0; sym < symb; sym++)
        string += alphabet_1.symbols[Math.floor(Math.random() * alphabet_1.symbols.length)];
    for (let nums = 0; nums < num; nums++)
        string += alphabet_1.numbers[Math.floor(Math.random() * alphabet_1.numbers.length)];
    return string;
};
exports.generateUnshuffledPassword = generateUnshuffledPassword;
//# sourceMappingURL=random-password.js.map