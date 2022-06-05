import * as shuffle from './utils';
export default shuffle;
export declare const alphabets: typeof shuffle.alphabets, capitalize: typeof shuffle.capitalize, generateRandomString: typeof shuffle.generateRandomString, lowerCaseLetters: string[], shuffleString: typeof shuffle.shuffleString, symbols: string[], upperCaseLetters: string[], numbers: string[], generateShuffledPassword: typeof shuffle.generateShuffledPassword, generateUnshuffledPassword: ({ lower, num, symb, upper }: {
    lower?: number | undefined;
    upper?: number | undefined;
    symb?: number | undefined;
    num?: number | undefined;
    shuffle?: boolean | undefined;
}) => string;
export declare type AlphabetType = typeof alphabets;
export declare type CapitalizeType = typeof capitalize;
export declare type LowerCaseLetterType = typeof lowerCaseLetters;
export declare type UpperCaseLetterType = typeof upperCaseLetters;
export declare type NumberType = typeof numbers;
export declare type SymbolType = typeof symbols;
export declare type GenerateRandomstringType = typeof generateRandomString;
export declare type ShuffleStringType = typeof shuffleString;
export declare type GenerateUnshuffledPasswordType = typeof generateUnshuffledPassword;
export declare type GenerateShuffledPasswordType = typeof generateShuffledPassword;
//# sourceMappingURL=index.d.ts.map