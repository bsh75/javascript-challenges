/* Question 1:
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23. Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Note: If the number is a multiple of both 3 and 5, only count it once. Also, if a number is negative, return 0.
*/
const solution = number => {
  // Your solution
};

console.log(solution(0)); // 0
console.log(solution(-15)); // 0
console.log(solution(10)); // 23
console.log(solution(20)); // 78
console.log(solution(200)); // 9168


/* Question 2:
Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
*/
const even_or_odd = number => {
  // Your solution
};

console.log(even_or_odd(0)); // 'Even'
console.log(even_or_odd(2)); // 'Even'
console.log(even_or_odd(3)); // 'Odd'
console.log(even_or_odd(-3)); // 'Odd'


/* Question 3:
The clock shows h hours (0 <= h <= 23), m minutes (0 <= m <= 59) and s seconds (0 <= s <= 59) after midnight. Your task is to write a function which returns the time since midnight in milliseconds. There are 1,000 milliseconds in a second.
*/
const past = (h, m, s) => {
  // Your solution
};

console.log(past(0, 0, 0)); // 0
console.log(past(0, 1, 1)); // 61000
console.log(past(1, 0, 0)); // 3600000
console.log(past(1, 0, 1)); // 3601000
console.log(past(1, 1, 1)); // 3661000


/* Question 4:
Write a function that given the input string name, returns the greeting statement Hello, <name> how are you doing today?
*/

const greet = name => {
  //Your solution
};

console.log(greet('Ryan')); // "Hello, Ryan how are you doing today?"
console.log(greet('Sara')); // "Hello, Sara how are you doing today?"


/* Question 5:
The first century spans from the year 1 up to and including the year 100, The second - from the year 101 up to and including the year 200, etc. Given a year, return the century it is in.
*/
const century = year => {
  // Your solution
};

console.log(century(1705)); // 18
console.log(century(1900)); // 19
console.log(century(1601)); // 17
console.log(century(2000)); // 20
console.log(century(89)); // 1


/* Question 6:
Keep Hydrated!
Nathan loves cycling. Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling. Given the time in hours, you need to return the number of litres of water that Nathan will drink, rounded to the smallest value.
*/

const litres = time => {
  // Your solution
};

console.log(litres(0)); // 0
console.log(litres(2)); // 1
console.log(litres(1.4)); // 0
console.log(litres(12.3)); // 6
console.log(litres(0.82)); // 0
console.log(litres(11.8)); // 5
console.log(litres(1787)); // 893


/* Question 7:
Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.
*/
const isDivisible = (n, x, y) => {
  // Your solution
};

console.log(isDivisible(3, 3, 4)); // false
console.log(isDivisible(12, 3, 4)); // true
console.log(isDivisible(8, 3, 4)); // false
console.log(isDivisible(48, 3, 4)); // true


/* Question 8:
Return the number (count) of vowels (a, e, i, o, u) in the given string. The input string will only consist of lower case letters and/or spaces.
*/

const getCount = str => {
  // Your solution
};

console.log(getCount('my pyx')); // 0
console.log(getCount('pear tree')); // 4
console.log(getCount('abracadabra')); // 5
console.log(getCount('o a kak ushakov lil vo kashu kakao')); // 13


/* Question 9:
Trolls are attacking your comment section! A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat. Your task is to write a function that takes a string and returns a new string with all vowels (a, e, i, o, u) removed.
*/
const disemvowel = str => {
  // Your solution
};

console.log(disemvowel('This website is for losers LOL!')); // 'Ths wbst s fr lsrs LL!'

/* Question 10:
10. Find the Odd Int
Given an array of integers, find the one that appears an odd number of times. There will always be only one integer that appears an odd number of times.
*/
const findOdd = arr => {
  // Your solution
};

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5])); // 5
console.log(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5])); // 5
console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5])); // -1
console.log(findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10])); // 1
console.log(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1])); // 10
console.log(findOdd([10])); // 10


/* Question 11:
*/


/* Question 12:
*/


/* Question 13:
*/


/* Question 14:
*/


/* Question 15:
*/


/* Question 16:
*/


/* Question 17:
*/


/* Question 18:
*/


/* Question 19:
*/


/* Question 20:
*/


/* Question 21:
*/


/* Question 22:
*/


/* Question 23:
*/


/* Question 24:
*/


/* Question 25:
*/


/* Question 26:
*/


/* Question 27:
*/


/* Question 28:
*/


/* Question 29:
*/


/* Question 30:
*/


/* Question 31:
*/


/* Question 32:
*/


/* Question 33:
*/


/* Question 34:
*/


/* Question 35:
*/


/* Question 36:
*/


/* Question 37:
*/


/* Question 38:
*/


/* Question 39:
*/


/* Question 40:
*/


/* Question 41:
*/


/* Question 42:
*/


/* Question 43:
*/


/* Question 44:
*/


/* Question 45:
*/


/* Question 46:
*/


/* Question 47:
*/


/* Question 48:
*/


/* Question 49:
*/


/* Question 50:
*/


/* Question 51:
*/


/* Question 52:
*/


/* Question 53:
*/


/* Question 54:
*/


/* Question 55:
*/


/* Question 56:
*/


/* Question 57:
*/


/* Question 58:
*/


/* Question 59:
*/


/* Question 60:
*/




