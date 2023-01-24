// Exercises: Level 1
// 1. Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’
let line =
  "He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.";

let pattern = /\d+/gi;
let holder = line.match(pattern);

let netIncome = Number(holder[0]) + Number(holder[1]) - Number(holder[2]);
console.log(netIncome);

// 2.The position of some particles on the horizontal x-axis -1, 2, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and
// find the distance between the two furthest particles.

let statement =
  "The position of some particles on the horizontal x-axis -1, 2, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction.";
let pattern2 = /-?\d+/gi;
const points = statement.match(pattern2);
const sortedPoints = points.sort((a, b) => a - b);
const distance = sortedPoints[sortedPoints.length - 1] - sortedPoints[0];
console.log(distance);

// 3. Write a pattern which identifies if a string is a valid JavaScript variable

const is_valid_variable = (variable) => {
  const regex = /^[[a-zA-Z_$][0-9a-zA-Z_$]*$/g;
  console.log(regex.test(variable));
};

is_valid_variable("first_name"); // # True
is_valid_variable("first-name"); // # False
is_valid_variable("1first_name"); // # False
is_valid_variable("firstname"); // # True

// Exercises: Level 2

// 1. Write a function called tenMostFrequentWords which get the ten most frequent words from a string?
paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop 
an application what else can you love.`;

const tenMostFrequentWords = (string, number) => {
  const stringArr = string.replaceAll(/\./g, "").split(" ");

  return stringArr
    .map((words) => words.toLowerCase())
    .reduce((acc, cv) => {
      for (let i = 0; i <= acc.length; i++) {
        if (acc[i]?.word === cv) {
          acc[i].count++;
          return acc;
        }
      }
      acc.push({ word: cv, count: 1 });
      return acc.sort((a, b) => b.count - a.count).slice(0, number);
    }, []);
};
console.log(tenMostFrequentWords(paragraph, 10));

// Exercises: Level 3
// 1. Write a function which cleans text. Clean the following text. After cleaning, count three most frequent words in the string.

sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re 
interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;
