import { countries } from "../data/countries_data.js";
// Exercises

// Exercises:Level 1
// 1. Display the countries array as a table
const countries2 = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];
console.table(countries2);

// 2. Display the countries object as a table
console.table(countries);

// 3. Use console.group() to group logs
const users = [
  {
    name: "Asabeneh",
    title: "Programmer",
    country: "Finland",
    city: "Helsinki",
    age: 250,
  },
  {
    name: "Eyob",
    title: "Teacher",
    country: "Sweden",
    city: "London",
    age: 25,
  },
  {
    name: "Asab",
    title: "Instructor",
    country: "Norway",
    city: "Oslo",
    age: 22,
  },
  {
    name: "Matias",
    title: "Developer",
    country: "Denmark",
    city: "Copenhagen",
    age: 28,
  },
];

const user = {
  name: "Asabeneh",
  title: "Programmer",
  country: "Finland",
  city: "Helsinki",
  age: 250,
};

console.group("many_users");
console.log(users);
console.groupEnd();

console.group("single_user");
console.log(user);
console.groupEnd();

// Exercises:Level 2
// 1. 10 > 2 * 10 use console.assert()
console.assert(10 > 2 * 10, "10 is not greater than 20");

// 2. Write a warning message using console.warn()
console.warn("we all must leave this world, one way or another");

// 3. Write an error message using console.error()
console.error("running a loop without an end point can hang your computer");

// Exercises:Level 3
const container = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// 1. Check the speed difference among the following loops: while, for, for of, forEach
console.time("while loop");
let x = 1;
while (x <= 10) {
  console.log(x);
  x++;
}
console.timeEnd("while loop");

console.time("for loop");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
console.timeEnd("for loop");

console.time("forOf loop");
for (let number of container) {
  console.log(number);
}
console.timeEnd("forOf loop");

console.time("forEach loop");
container.forEach((number) => console.log(number));

console.timeEnd("forEach loop");
