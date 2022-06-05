# String-shuffle

A JS module for shuffling strings and other helper methods like alphabet generation

A quick reference
```ts
import * as shuffle from "string-shuffle";

console.log(shuffle.shuffleString("Hello World")); // dlH ooWler

console.log(shuffle.shuffleString("Hello World")); // rdlloH loWe

console.log(shuffle.shuffleString("Quick rown fox jumps over lazy dog")); // jvyilco owfxud nz  apuo rs rkeoQgm
console.log(shuffle.shuffleString("Quick rown fox jumps over lazy dog")); // jcf ro Qowkna goomvyxd puz er iusl

console.log(shuffle.shuffleString("test123@shuffle.com")); // ecot@shmt.efs2l3fu1
console.log(shuffle.shuffleString("test123@shuffle.com")); // hsms3e@.2t1lcfotufe

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
