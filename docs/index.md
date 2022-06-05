# String-shuffle

A JS module for shuffling strings and other helper methods like alphabet generation

A quick reference guide
```ts
import * as shuffle from "string-shuffle";

console.log(shuffle.shuffleString("Hello World")); // dlH ooWler

console.log(shuffle.shuffleString("Hello World")); // rdlloH loWe

console.log(shuffle.shuffleString("Quick rown fox jumps over lazy dog")); // jvyilco owfxud nz  apuo rs rkeoQgm
console.log(shuffle.shuffleString("Quick rown fox jumps over lazy dog")); // jcf ro Qowkna goomvyxd puz er iusl

console.log(shuffle.shuffleString("test123@shuffle.com")); // ecot@shmt.efs2l3fu1
console.log(shuffle.shuffleString("test123@shuffle.com")); // hsms3e@.2t1lcfotufe

```
Other ways
```ts
import { shuffleString } from "string-shuffle";

console.log(shuffleString("Hello World")); // lHlWero odl
console.log(shuffleString("someRandomString")); // irdosaRenSomntgm
console.log(shuffleString("1234IsAnAmazingString@#$%^&*()")); // m41n(I&aA@Sn^i3%)sgzgi#2*rn$At

console.log(shuffleString("Hello World")); // lH oWlolrde
console.log(shuffleString("someRandomString")); // nitRsgoaSmrdeomn
console.log(shuffleString("1234IsAnAmazingString@#$%^&*()")); // t3nAnr@4Ii&n12gAgsa%m*(i$Sz)#^

```
Other included modules include

|Module|Functionality|
|---|---|
|`alphabets`| A method that contains all the `lowercase`,`uppercase`, `numbers` and `symbols` array|
| `lowerCaseLetters`|List of all the Capital letters of the alphabet|
| `capitalize`| A method to make the  `first letter` of a word or statement to uppercase and retain others if they are not lowercase|
| `upperCaseLetters`|List of all the lowercase letters of the alphabet|
| `numbers`|List of numbers from `0-9`|
| `symbols`|Sample list of symbols|
| `generateRandomString`| A method that generates a random strigg based on the number you pass as an argument|
| `generateShuffledPassword`|Generates random paswords with combination of `caps`,`lowercase`,`uppercase`,`numbers` and `symbols` then shuffles the password to achieve randomness|
| `generateUnshuffledPassword`|Generates the normal concatenated cobinaton of characters|
| `shuffleString`|A method that shuffles the string you pass to it as an argument|

## `alphabets` module
```ts
import { alphabets } from "string-shuffle";

const { alphabet, lowerCaseLetters, numbers, symbols, upperCaseLetters } =
  alphabets();

console.log(alphabet.join("")); //ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!"#$%&'()*+,-./

console.log(lowerCaseLetters.join("")); //abcdefghijklmnopqrstuvwxyz

console.log(numbers.join("")); //0123456789
```
Still the modules can be imported from the main package
```diff
- import { alphabets } from "string-shuffle";
+ import {lowerCaseLetters,numbers,symbols,upperCaseLetters} from "string-shuffle";

- const { alphabet, lowerCaseLetters, numbers, symbols, upperCaseLetters } = alphabets();

- console.log(alphabet.join("")); //ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!"#$%&'()*+,-./

console.log(lowerCaseLetters.join("")); //abcdefghijklmnopqrstuvwxyz

console.log(numbers.join("")); //0123456789
```
## `capitalize` module
```ts
import { capitalize } from "string-shuffle";

console.log(capitalize("hello world")); // Hello world

console.log(capitalize("tetris")); // Tetris

console.log(capitalize("my name is a test name")); // My name is a test name

console.log(capitalize("A")); // A

console.log(capitalize("ABC")); // ABC

console.log(capitalize("123")); // 123
```
## `generateRandomString` module
By default it shuffles the string
```ts
import { generateRandomString } from "string-shuffle";

console.log(generateRandomString(5)); // ye!o

console.log(generateRandomString(10)); // #m)tX&Kza8

console.log(generateRandomString(15)); // eTQa1ts$pA8*nwI

console.log(generateRandomString(20)); // Fryo*JEn1i&2Dp7rgqFK

console.log(generateRandomString(30)); // 8+Zs4,XaodpQxHMp,xUw8if0dy)TF+
```
### `generateUnshuffledPassword` module
Disclaimer: Use this at your own risk. It's here for mock apps or just simple programs so be careful on the usage
```ts
import { generateUnshuffledPassword } from "string-shuffle";

console.log(generateUnshuffledPassword({})); // ey99
console.log(generateUnshuffledPassword({ lower: 1, upper: 2, num: 3, symb: 4 })); // pRI.##*369

console.log(generateUnshuffledPassword({ lower: 2, upper: 2, num: 2, symb: 2 })); // jmKE"+89

console.log(generateUnshuffledPassword({ lower: 4, upper: 4, num: 4, symb: 4 })); // gilwLEJW#/,%6959

console.log(generateUnshuffledPassword({ lower: 5, upper: 5, num: 5, symb: 5 })); // rkujyDFOUS%,.)'71677
```

## `generateShuffledPassword` module
```ts
import { generateShuffledPassword, shuffleString } from "string-shuffle";

console.log(generateShuffledPassword(shuffleString)({})); // 3n3r

console.log(generateShuffledPassword(shuffleString)({ lower: 1, upper: 2, num: 3, symb: 4 })); // o9/B3*M&3*

console.log(generateShuffledPassword(shuffleString)({ lower: 2, upper: 2, num: 2, symb: 2 })); // O5g!8A/c

console.log(generateShuffledPassword(shuffleString)({ lower: 4, upper: 4, num: 4, symb: 4 })); // 3p!rP.YI*90z*n7Z

console.log(generateShuffledPassword(shuffleString)({ lower: 5, upper: 5, num: 5, symb: 5 })); // zS7&6*oKk7Wx)Nl'N18.
```


