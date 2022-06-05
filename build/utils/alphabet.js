"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.alphabets = exports.symbols = exports.numbers = exports.upperCaseLetters = exports.alphabet = exports.lowerCaseLetters = void 0;
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
exports.alphabets = alphabets;
_a = alphabets(), exports.lowerCaseLetters = _a.lowerCaseLetters, exports.alphabet = _a.alphabet, exports.upperCaseLetters = _a.upperCaseLetters, exports.numbers = _a.numbers, exports.symbols = _a.symbols;
exports.default = alphabets;
//# sourceMappingURL=alphabet.js.map