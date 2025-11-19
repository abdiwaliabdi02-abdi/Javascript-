// Examples of let, var, and const

// 1️⃣ var → can be re-declared & updated (function-scoped)
var name = "Abdi";
console.log("var name =", name);

var name = "Ali"; // re-declared
name = "Hassan"; // updated
console.log("After re-declare & update →", name);

// 2️⃣ let → can be updated but NOT re-declared in the same scope (block-scoped)
let age = 20;
console.log("\nlet age =", age);

// let age = 25; ❌ Error: cannot re-declare in the same scope
age = 25; // ✅ can update
console.log("After update →", age);

// 3️⃣ const → cannot be re-declared OR updated (block-scoped)
const country = "Somalia";
console.log("\nconst country =", country);

// country = "Kenya"; ❌ Error: cannot change const value
// const country = "Ethiopia"; ❌ Error: cannot re-declare const

// 4️⃣ Example showing scope difference
if (true) {
  var city = "Mogadishu"; // var → function-scoped
  let town = "Hargeisa"; // let → block-scoped
  const code = 252; // const → block-scoped
  console.log("\nInside block:", city, town, code);
}

console.log("\nOutside block:");
// var is accessible outside block
console.log("city =", city);

// let and const are NOT accessible outside the block
// console.log(town); ❌ Error
// console.log(code); ❌ Error
