// Exercises Level 1
// 1. Create an Animal class. The class will have name, age, color, legs properties and create different methods
class Animal {
  constructor(name, age, color, legs) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
  }

  getFullInfo() {
    return `${this.name} is my pet, and is ${this.age} months old. It is also ${this.color} in color and has ${this.legs} legs.`;
  }
}

// 2. Create a Dog and Cat child class from the Animal Class.
class Dog extends Animal {
  saySomething() {
    return "I am a child of the Animal class, and I'm a dog";
  }
}
class Cat extends Animal {
  saySomething() {
    return "I am a child of the Animal class, and I'm a cat";
  }
}

const d = new Dog("Max", 6, "brown", 4);
const c = new Cat("Finch", 3, "white", 4);

console.log(d.getFullInfo());
console.log(c.getFullInfo());

// Exercises Level 2
// 1. Override the method you create in Animal class
class Human extends Animal {
  saySomething() {
    return "I am a higher-level animal.";
  }
}

const human = new Human();
console.log(human.saySomething());

// Exercises Level 3
// 1. Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation).
// In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create a class called Statistics and create all the functions which
// do statistical calculations as methods for the Statistics class. Check the output below.

const ages = [
  31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37,
  31, 34, 24, 33, 29, 26,
];

class Statistics {
  constructor(data) {
    this.data = data;
  }

  sum() {
    return this.data.reduce((a, b) => a + b);
  }

  mean() {
    let sum = 0;
    for (let i = 0; i < this.data.length; i++) {
      sum += this.data[i];
    }
    return (sum / this.data.length).toFixed();
  }

  median() {
    this.data.sort((a, b) => a - b);
    let mid = Math.floor(this.data.length / 2);
    if (this.data.length % 2 !== 0) {
      return this.data[mid];
    } else {
      return (this.data[mid - 1] + this.data[mid]) / 2;
    }
  }

  mode() {
    let frequency = {};
    let maxValue = 0;
    let mode;
    for (let i = 0; i < this.data.length; i++) {
      frequency[this.data[i]] = frequency[this.data[i]] + 1 || 1;
      if (frequency[this.data[i]] > maxValue) {
        maxValue = frequency[this.data[i]];
        mode = this.data[i];
      }
    }
    return { mode: mode, count: frequency[mode] };
  }

  range() {
    this.data.sort((a, b) => a - b);
    return this.data[this.data.length - 1] - this.data[0];
  }

  var() {
    let mean = this.mean();
    let sum = 0;
    for (let i = 0; i < this.data.length; i++) {
      sum += Math.pow(this.data[i] - mean, 2);
    }
    return (sum / (this.data.length - 1)).toFixed(1);
  }

  std() {
    return Math.sqrt(this.var()).toFixed(1);
  }

  min() {
    return Math.min(...this.data);
  }

  max() {
    return Math.max(...this.data);
  }

  count() {
    return this.data.length;
  }

  freqDist() {
    let frequency = {};
    for (let i = 0; i < this.data.length; i++) {
      frequency[this.data[i]] = frequency[this.data[i]] + 1 || 1;
    }
    return frequency;
  }
}

let data = ages;
let statistics = new Statistics(data);

console.log("Count:", statistics.count()); // 25
console.log("Sum: ", statistics.sum()); // 744
console.log("Min: ", statistics.min()); // 24
console.log("Max: ", statistics.max()); // 38
console.log("Range: ", statistics.range()); // 14
console.log("Mean: ", statistics.mean()); // 30
console.log("Median: ", statistics.median()); // 29
console.log("Mode: ", statistics.mode()); // {'mode': 26, 'count': 5}
console.log("Variance: ", statistics.var()); // 18.3
console.log("Standard Deviation: ", statistics.std()); // 4.2
console.log("Frequency Distribution: ", statistics.freqDist()); // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]

// your output should look like this

// console.log(statistics.describe());
// Count: 25
// Sum:  744
// Min:  24
// Max:  38
// Range:  14
// Mean:  30
// Median:  29
// Mode:  (26, 5)
// Variance:  17.5
// Standard Deviation:  4.2
// Frequency Distribution: [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]

// 2. Create a class called PersonAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and
// accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
