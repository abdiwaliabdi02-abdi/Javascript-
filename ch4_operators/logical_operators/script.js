// Logical Operators in One Script

let age = 20;
let hasID = true;
let isMember = false;

// AND (&&) → True only if both sides are true
console.log("AND Example:");
console.log(age >= 18 && hasID); // true → both are true

// OR (||) → True if at least one side is true
console.log("\nOR Example:");
console.log(isMember || hasID); // true → hasID is true even though isMember is false

// NOT (!) → Reverses true/false
console.log("\nNOT Example:");
console.log(!isMember); // true → because isMember is false

// Combined Example
console.log("\nCombined Example:");
if ((age >= 18 && hasID) || isMember) {
  console.log("✅ Access granted!");
} else {
  console.log("❌ Access denied!");
}

// Another combined NOT example
let loggedIn = false;
if (!loggedIn) {
  console.log("\nPlease log in to continue."); // will run because !false = true
}
