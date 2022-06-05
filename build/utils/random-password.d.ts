import { ShuffleStringType } from './shuffle-string';
declare type GenPropType = {
    lower?: number;
    upper?: number;
    symb?: number;
    num?: number;
    shuffle?: boolean;
};
declare type GeneratorType = ({ lower, num, shuffle, symb, upper }?: Partial<GenPropType>) => string;
/**
 *You pass the shuffle property to the function to get a random string and in the factory function you can pass the number of characters you want to generate and whether you want to shuffle the string or not.
 The function returns a string. and you choose the number of characters you want to generate and to ignore some characters you can pass 0 as an argument not to generate them.
 * @param {ShuffleStringType} shuffleString
 * @returns
 */
export declare function generateShuffledPassword(shuffleString: ShuffleStringType): GeneratorType;
/**
 * Generate random string from concatenation of lowercase letters, uppercase letters, numbers and symbols
 * @param {number} lower A number for number of required lower case letters
 * @param {number} upper A number for number of required upper case letters
 * @param {number} symb A number for number of required symbols
 * @param {number} num A number for number of required numbers
 * @returns {string} A generated unshuffled string
 *
 */
export declare const generateUnshuffledPassword: ({ lower, num, symb, upper }: GenPropType) => string;
export {};
//# sourceMappingURL=random-password.d.ts.map