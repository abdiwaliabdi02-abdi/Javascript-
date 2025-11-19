// Comparison Operators in JavaScript

let a = 10;
let b = 5;
let c = "10";

console.log("a == c :", a == c); // true  (Equal to, compares values only)
console.log("a === c :", a === c); // false (Strict equal to, compares value + type)
console.log("a != b :", a != b); // true  (Not equal to)
console.log("a !== c :", a !== c); // true  (Strict not equal to)
console.log("a > b :", a > b); // true  (Greater than)
console.log("a < b :", a < b); // false (Less than)
console.log("a >= 10 :", a >= 10); // true  (Greater than or equal to)
console.log("b <= 5 :", b <= 5); // true  (Less than or equal to)

// You can also combine them in logical comparisons:
console.log("(a > b) && (a === 10):", a > b && a === 10); // true
console.log("(a < b) || (b === 5):", a < b || b === 5); // true
