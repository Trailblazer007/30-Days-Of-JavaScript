import { countries } from "../data/countries_data.js";

// sorting the countries by name
// let sortedByName = countries.sort((a, b) => {
//   return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
// });
// console.log(sortedByName);

// sorting the countries by capital
// let sortedByCapital = countries.sort((a, b) => {
//   return a.capital < b.capital ? -1 : a.capital > b.capital ? 1 : 0;
// });
// console.log(sortedByCapital);

// sorting the countries by population
// let sortedByPopulation = countries.sort((a, b) => a.population - b.population);
// console.log(sortedByPopulation);

// 2. Find the 10 most spoken languages

// using recursion
// const mostSpokenLanguages = (arr, number) => {
//   let holder = [];
//   let answer = [];

//   for (const { languages } of arr) holder.push(languages);

//   function sorter(newArr) {
//     if (!newArr.length) return;

//     let lengthOfLang = newArr.filter((each) => each === newArr[0]).length;
//     let rest = newArr.filter((each) => each != newArr[0]);

//     answer.push({ country: newArr[0], count: lengthOfLang });
//     sorter(rest);
//   }
//   sorter(holder.flat());

//   answer.sort((a, b) => b.count - a.count);
//   return answer.slice(0, number);
// };
// console.log(mostSpokenLanguages(countries, 10));

// using another method

// const mostSpokenLanguages = (arr, number) => {
//   let holder = [];
//   let result = [];

//   for (let { languages } of arr) {
//     holder.push(languages);
//   }

//   holder = holder.flat();

//   let answer = holder.reduce((acc, cv) => {
//     !acc[cv] ? (acc[cv] = 1) : acc[cv]++;
//     return acc;
//   }, {});

//   for (let each in answer) {
//     result.push({ language: each, count: answer[each] });
//   }
//   return result.sort((a, b) => b.count - a.count).slice(0, number);
// };
// console.log(mostSpokenLanguages(countries, 10));
