// Exercises
// Exercises: Level 1
// 1. Create a closure which has one inner function
function sum(a) {
  return function (b) {
    return a + b;
  };
}

console.log(sum(1)(2));

// Exercises: Level 2
// 1. Create a closure which has three inner functions
function multiply(a) {
  return function (b) {
    return function (c) {
      return b * c * a;
    };
  };
}

console.log(multiply(2)(3)(4));

// Exercises: Level 3
// 1. Create a personAccount out function. It has firstname, lastname, incomes, expenses inner variables.
// It has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance inner functions.
// Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
