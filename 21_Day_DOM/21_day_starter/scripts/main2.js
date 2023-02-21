// Exercise: Level 3
// DOM: Mini project 1
// Develop the following application, use the following HTML elements to get started with. You will get the same code on starter folder. Apply all the styles and functionality using JavaScript only.

// The year color is changing every 1 second
// The date and time background color is changing every on seconds
// Completed challenge has background green
// Ongoing challenge has background yellow
// Coming challenges have background red

let moment = new Date();

let monthInWords = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let month = monthInWords[moment.getMonth()];
let date = moment.getDate();
let year = moment.getFullYear();
let time = moment.toLocaleTimeString();

let dateHtml = document.getElementById("dateHtml");
dateHtml.innerHTML = `${month} ${date}, ${year} ${time}`;

let yearHtml = document.getElementById("yearHtml");

let interval = setInterval(changeState, 1000);

let colors = [
  "brown",
  "pink",
  "yellow",
  "red",
  "blue",
  "green",
  "indigo",
  "orange",
  "purple",
  "maroon",
];

function changeState() {
  moment = new Date();
  let month = monthInWords[moment.getMonth()];
  let date = moment.getDate();
  let year = moment.getFullYear();
  let time = moment.toLocaleTimeString();
  yearHtml.style.color = colors[Math.floor(Math.random() * colors.length - 1)];
  dateHtml.style.backgroundColor =
    colors[Math.floor(Math.random() * colors.length - 1)];
  dateHtml.innerHTML = `${month} ${date}, ${year} ${time}`;
}

yearHtml.style.fontSize = "70px";
document.querySelector("h1").style.textAlign = "center";
document.querySelector("h2").style.textAlign = "center";
document.querySelector("h2").style.textDecoration = "underline";
dateHtml.style.width = "max-content";
dateHtml.style.margin = "auto";
dateHtml.style.padding = "13px";

let lists = document.getElementsByClassName("list");
for (let i = 0; i < lists.length; i++) {
  if (i == 0) {
    lists[i].style.backgroundColor = "lightGreen";
  }
  if (i == 1) {
    lists[i].style.backgroundColor = "gold";
  }
  if (i > 1) {
    lists[i].style.backgroundColor = "pink";
  }

  lists[i].style.maxWidth = "750px";
  lists[i].style.marginInline = "auto";
  lists[i].style.marginBottom = "3px";
  lists[i].style.listStyleType = "none";
  lists[i].style.padding = "10px";
}
