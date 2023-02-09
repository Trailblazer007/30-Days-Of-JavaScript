const countriesAPI = "https://restcountries.com/v2/all";
const catsAPI = "https://api.thecatapi.com/v1/breeds";

const exercises = async () => {
  //Exercises

  // Exercises: Level 1
  // 1. Read the countries API using fetch and print the name of country, capital, languages, population and area.
  // fetch(countriesAPI)
  //   .then((response) => response.json())
  //   .then((data) => console.log(data))
  //   .catch((err) => console.error(err));

  const getCountries = async () => {
    let countriesData = [];
    try {
      const response = await fetch(countriesAPI);
      countriesData = await response.json();
    } catch (err) {
      console.warn(err);
    }
    return countriesData;
  };

  const countries = await getCountries();
  console.log(countries);

  // Exercises: Level 2
  // 1. Print out all the cat names in to catNames variable.
  const getCats = async () => {
    let catsArray = [];
    try {
      const response = await fetch(catsAPI);
      catsArray = await response.json();
    } catch (err) {
      console.error(err);
    }

    return catsArray;
  };

  const allCats = await getCats();

  const catNames = allCats.map((cat) => cat.name);
  console.log(catNames);

  // Exercises: Level 3
  // 1. Read the cats api and find the average weight of cat in metric unit.
  const catsAverageWeight = allCats.map((cat) => [cat.name, cat.weight.metric]);
  console.log(catsAverageWeight);

  // 2. Read the countries api and find out the 10 largest countries
  const tenLargestCountries = countries
    .sort((a, b) => b.population - a.population)
    .slice(0, 10)
    .map((country) => country.name);
  console.log(tenLargestCountries);

  // 3. Read the countries api and count total number of languages in the world used as officials.
  // Arabic, Chinese, English, French, Russian and Spanish
  let langs = ["Arabic", "Chinese", "English", "French", "Russian", "Spanish"];

  const countriesWithOffLangs = countries.filter((country) => {
    let foundLanuage = false;

    for (let i = 0; i < country.languages.length; i++) {
      if (langs.includes(country.languages[i].name)) {
        foundLanuage = true;
        break;
      }
    }
    return foundLanuage;
  });
  console.log(countriesWithOffLangs);
};

exercises();
