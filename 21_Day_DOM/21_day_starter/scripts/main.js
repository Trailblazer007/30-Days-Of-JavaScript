// Exercise: Level 1
// 1. Create an index.html file and put four p elements as above: Get the first paragraph by using document.querySelector(tagname) and tag name
let firstParagraph = document.querySelector("p");
// let firstPar = document.getElementsByTagName("p");

console.log(firstParagraph);
// console.log(firstPar);

// 2. Get each of the the paragraph using document.querySelector('#id') and by their id
let par1 = document.querySelector("#p1");
let par2 = document.querySelector("#p2");
let par3 = document.querySelector("#p3");
let par4 = document.querySelector("#p4");
console.log(par1);
console.log(par2);
console.log(par3);
console.log(par4);

// 3. Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name
let paragraphs = document.querySelectorAll("p");
console.log(paragraphs);

// 4. Loop through the nodeList and get the text content of each paragraph
for (let i = 0; i < paragraphs.length; i++) {
  console.log(paragraphs[i].innerHTML);
}

// 5. Set a text content to paragraph the fourth paragraph,Fourth Paragraph
paragraphs[3].innerHTML = "Fourth Paragraph";
console.log(paragraphs[3]);

// 6. Set id and class attribute for all the paragraphs using different attribute setting methods
// for the id attribute
par1.setAttribute("id", "top1");
par2.setAttribute("id", "top2");
par3.setAttribute("id", "top3");
par4.setAttribute("id", "top4");

// for the class attribute
par1.setAttribute("class", "top");
par2.classList.add("top");
par3.setAttribute("class", "top");
par4.classList.add("top");

// Exercise: Level 2
// 1. Change stye of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)
paragraphs[0].style.color = "gray";
paragraphs[1].style.backgroundColor = "purple";
paragraphs[2].style.border = "2px solid brown";
paragraphs[3].style.fontSize = "20px";

// 2. Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color
for (let i = 0; i < paragraphs.length; i++) {
  if (i % 2 == 1) {
    paragraphs[i].style.color = "red";
  } else {
    paragraphs[i].style.color = "green";
  }
}

// 3. Set text content, id and class to each paragraph
for (let a = 0; a < paragraphs.length; a++) {
  paragraphs[a].textContent = "Text content has been updated.";
  paragraphs[a].setAttribute("class", "class" + a);
  paragraphs[a].setAttribute("id", "id" + a);
}

// The last exercise is in another file: main2.js
