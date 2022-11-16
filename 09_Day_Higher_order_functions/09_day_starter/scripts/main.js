import { countries } from "../data/countries_data.js";

console.log(countries);

// sorting the countries by name
let sortedByName = countries.sort((a, b) => {
  return a.name - b.name;
});
console.log(sortedByName);

// sorting the countries by capital

// sorting the countries by population
