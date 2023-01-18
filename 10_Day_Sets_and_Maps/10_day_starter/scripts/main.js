import { countries } from "../data/countries_data.js";

// Excercise Level 1

const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
const countries1 = ["Finland", "Sweden", "Norway"];

// 1. create an empty set
const emptySet = new Set();

// 2. Create a set containing 0 to 10 using loop
const newSet = new Set();
for (let i = 1; i <= 10; i++) {
  newSet.add(i);
}
console.log(newSet);

// 3. Remove an element from a set
console.log(newSet.delete(5));

// 4. Clear a set
const newSet2 = new Set(newSet);
console.log(newSet2.clear());

// 5. Create a set of 5 string elements from array
let array1 = ["man", "woman", "boy", "girl", "gender"];
let array1Set = new Set(array1);
console.log(array1Set);

// 6. Create a map of countries and number of characters of a country
let container = [];
for (const country of countries) {
  container.push([country.name, country.name.length]);
}
const countryChar = new Map(container);
console.log(countryChar);

// Exercise Level 2

// 1. Find a union b
const c = [...a, ...b];
const A = new Set(a);
const B = new Set(b);
const C = new Set(c);
console.log(C);

// 2. Find a intersection b
const aIntB = a.filter((num) => B.has(num));
console.log(aIntB);

// 3. Find the difference of a with b
const aNotInB = a.filter((num) => !B.has(num));
console.log(aNotInB);

// Exercise Level 3
// 1. How many languages are there in the countries object file.

// 2. *** Use the countries data to find the 10 most spoken languages:
