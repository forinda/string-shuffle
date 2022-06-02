/**
 *
 * A function that generates alphabet characters and symbols
 *
 */
declare function alphabets(): {
    alphabet: string[];
    lowerCaseLetters: string[];
    upperCaseLetters: string[];
    numbers: string[];
    symbols: string[];
};
export declare const lowerCaseLetters: string[], alphabet: string[], upperCaseLetters: string[], numbers: string[], symbols: string[];
export { alphabets };
export default alphabets;
export declare type LowerCaseLetterType = typeof lowerCaseLetters;
export declare type UpperCaseLetterType = typeof upperCaseLetters;
export declare type NumberType = typeof numbers;
export declare type SymbolType = typeof symbols;
export declare type AlphabetType = typeof alphabet;
export declare type AlphabetTypeWithLowerCase = LowerCaseLetterType & UpperCaseLetterType & NumberType & SymbolType;
//# sourceMappingURL=alphabet.d.ts.map