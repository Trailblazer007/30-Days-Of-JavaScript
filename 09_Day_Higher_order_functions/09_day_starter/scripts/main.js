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

// 3. Use countries_data.js file create a function which create the ten most populated countries

// const mostPopulatedCountries = (arr, number) => {
//   return arr.sort((a, b) => b.population - a.population).slice(0, number);
// };

// console.log(mostPopulatedCountries(countries, 10));

// 4. Try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create an object called statistics and create all the functions which do statistical calculations as method for the statistics object. Check the output below.

const ages = [
  31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37,
  31, 34, 24, 33, 29, 26,
];

let ages2 = ages.sort((a, b) => a - b);

const statistics = {
  // median: () => {
  //   if (ages2.length % 2 == 1) {
  //     return ages2[Math.floor(ages2.length / 2)];
  //   }
  //   if (ages2.length % 2 == 1) {
  //     return (
  //       (ages2[Math.floor(ages2.length - 1 / 2)] + ages2[ages2.length / 2]) / 2
  //     );
  //   }
  // },

  mean() {
    let average = 0;
    let sum = 0;
    for (let i = 0; i < ages2.length; i++) {
      sum += ages2[i];
    }
    average = sum / ages2.length;
    return average.toFixed();
  },

  // mode: () => {
  //   let obj = ages2.reduce((acc, cv) => {
  //     !acc[cv] ? (acc[cv] = 1) : acc[cv]++;
  //     return acc;
  //   }, {});

  //   let maxMode = Math.max(...Object.values(obj));
  //   for (let x in obj) {
  //     if (maxMode == obj[x]) {
  //       return { mode: x, count: obj[x] };
  //     }
  //   }
  // },

  // range: () => {
  //   return Math.max(...ages2) - Math.min(...ages2);
  // },

  var: () => {
    const sum = ages2.reduce((acc, cv) => acc + cv);
    const { length: num } = ages2;
    const median = sum / num;
    let variance = 0;
    ages2.forEach((num) => {
      variance += (num - median) * (num - median);
    });
    variance /= num;
    return variance.toFixed(1);
  },

  std: () => {
    const sum = ages2.reduce((acc, cv) => acc + cv);
    const { length: num } = ages2;
    const median = sum / num;
    let variance = 0;
    ages2.forEach((num) => {
      variance += (num - median) * (num - median);
    });
    variance /= num;
    return Math.sqrt(variance).toFixed(1);
  },

  // min() {
  //   return ages2.reduce((acc, cv) => Math.min(acc, cv), +Infinity);
  // },

  // max() {
  //   return ages2.reduce((acc, cv) => Math.max(acc, cv), -Infinity);
  // },

  // count() {
  //   return ages2.length;
  // },

  freqDist() {},
};

// console.log("Count:", statistics.count()); // 25
// console.log('Sum: ', statistics.sum()) // 744
// console.log("Min: ", statistics.min()); // 24
// console.log("Max: ", statistics.max()); // 38
// console.log("Range: ", statistics.range()); // 14
// console.log("Mean: ", statistics.mean()); // 30
// console.log("Median: ", statistics.median()); // 29
// console.log("Mode: ", statistics.mode()); // {'mode': 26, 'count': 5}
console.log("Variance: ", statistics.var()); // 17.5
// console.log("Standard Deviation: ", statistics.std()); // 4.2
// console.log('Variance: ',statistics.var()) // 17.5
// console.log('Frequency Distribution: ',statistics.freqDist()) # [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
