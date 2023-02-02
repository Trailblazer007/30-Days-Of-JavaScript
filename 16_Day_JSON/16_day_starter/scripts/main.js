const skills = ["HTML", "CSS", "JS", "React", "Node", "Python"];
let age = 250;
let isMarried = true;
const student = {
  firstName: "Asabeneh",
  lastName: "Yetayehe",
  age: 250,
  isMarried: true,
  skills: ["HTML", "CSS", "JS", "React", "Node", "Python"],
};
const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`;

// Exercises Level 1

// 1. Change skills array to JSON using JSON.stringify()

const skillsText = JSON.stringify(skills, undefined, 3);
console.log(skillsText);

// 2. Stringify the age variable
const ageText = JSON.stringify(age);
console.log(ageText);

// 3. Stringify the isMarried variable
const isMarriedText = JSON.stringify(isMarried);
console.log(isMarriedText);

// 4. Stringify the student object
const studentText = JSON.stringify(student, undefined, 4);
console.log(studentText);

// Exercises Level 2

// 1. Stringify the students object with only firstName, lastName and skills properties
const studentText2 = JSON.stringify(
  student,
  ["firstName", "lastName", "skills"],
  4
);
console.log(studentText2);

// Exercises Level 3

// 1. Parse the txt JSON to object.
const txtObject = JSON.parse(txt);
console.log(txtObject);

// 2. Find the user who has many skills from the variable stored in txt.
let individual = Object.entries(txtObject);

const mostSkilled = () => {
  let highest = 0;
  let person;

  for (const [key, value] of individual) {
    highest < value.skills.length
      ? (highest = value.skills.length)
      : value.skills.length;
    person = key;
  }
  return person;
};

console.log(mostSkilled());
