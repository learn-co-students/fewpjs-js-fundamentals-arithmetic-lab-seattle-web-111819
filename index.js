// Write your code here
// 1. multiply - an equation whose multiplied results will equal 62
const num1 = 2
const num2 = 31
const multiply = num1 * num2

// 2. random - generates a random integer greater than 0
const random = Math.floor(Math.random() * 10) + 1
/* Math.random() returns a number between 0 and 0.999..., 
which we multiply by 10 to give us a number between 0 and 9.999.... 
We then pass that number to Math.floor(),
which returns an integer between 0 and 9. */

// 3. mod - generates a remainder that is equal to 4:
const mod = 20 % 8

// const mod = Number.parseInt('100', 2)
/* parseInt() Accepts a string as its first argument and parses it as an integer. 
The second argument is the base that should be used in parsing (e.g., 2 for binary or 10 for decimal)
The second argument is optional, but you should always provide it to avoid confusion.
 */

// 4. max - will return 20 as the highest number in the set
const max = Math.max(10, 15, 20)