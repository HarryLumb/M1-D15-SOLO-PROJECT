// JS EXERCISES

//         21) Given variables x = "John" and y = "Doe", write on the console "John <> Doe"
let x = "John";
let y = "Doe";
console.log(x + " <> " + y);

//         22) Create an object with properties such name, surname, email

const person = {
  name: "Harry",
  surname: "Lumb",
  email: "harrylumbb@gmail.com",
};
console.log(person);
//         23) Delete the email property from the previously created object

delete person.email;
console.log(person);
//         24) Create an array with 10 strings in it

const array = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
const result = Array.from(new Array(10), (val, index) => "some string ");
console.log(result);

//         25) Print in the console every string from the previous array
console.log(array);
//         26) Create an array with 100 random numbers in it

const arr = [];
for (let i = 1; i <= 100; i++) {
  arr.push(Math.floor(Math.random() * 100));
}
console.log(arr);
//         27) Write a function to get the maximum and minimum values from the previously created array

console.log(Math.min(...arr));
console.log(Math.max(...arr));

//         28) Create an array of arrays, in which every array has 10 random numbers

let randArr = [];
for (let i = 0; i < 4; i++) {
  let current = [];
  for (let j = 0; j < 10; j++) current.push(Math.floor(Math.random() * 10));
  randArr.push(current);
}
console.log(randArr);
console.log("---break---");

//         29) Create a function that gets 2 arrays as parameters and returns the longest one
// const arr1 = [1,2,3,4,5]
// const arr2 = [1,2,3]
// let its1 = arr1.toString();
// let its2 = arr2.toString();

// function longestArray(arr1,arr2){

//      arr1.toString()
//       arr2.toString()
//     if(its1.length > its2.length){
//         console.log(its1)
//     }
//         else{return its2}
// }
// longestArray()

//         30) Create a function that gets 2 arrays of numbers as parameters and returns the one with the higher sum of values

function higherArray(firstArray, SecondArray) {
  const sum1 = firstArray.reduce((accumulator, value) => {
    return accumulator + value;
  }, 0);
  const sum2 = SecondArray.reduce((accumulator, value) => {
    return accumulator + value;
  }, 0);
  if (sum1 > sum2) {
    return sum1;
  } else {
    return console.log(sum2);
  }
}

const arr3 = [1000, 2000, 4000];
const arr4 = [10, 20, 30];
console.log(higherArray(arr3, arr4));

//  DOM EXERCISES

// 31) Get the element with an id of "container" from the page

document.getElementById("id");
// 32) Get every <td> element from the page
const tds = document.querySelectorAll("td");

// 33) Use a loop for printing the text inside of every <td> element in the page

for (let i = 0; i < tds.length; i++) {
  const loop = document.createTextNode(".");
  tds[i].appendChild(loop);
}
// 34) Write a function to change the heading of the page
function changeH1() {
  const h1 = document.querySelector("h1");
  h1.innerHTML = "Its not all about looks";
}
changeH1();
// 35) Write a function to add an extra row to the table

function addRow() {
  const table = document.getElementById("table");
  const rowText = document.createTextNode("THIS IS A ROW APPENDED IN JS");
  const tr = document.createElement("tr");
  tr.appendChild(rowText);
  table.appendChild(tr);
}

addRow();

// 36) Write a function to add a class of "test" to each row in the table

const addClass = function () {
  const allRows = document.querySelectorAll("tr");
  for (const rows of allRows) {
    rows.classList.add("test");
  }
};
addClass();

// 37) Write a function to add a red background to every link in the page

const redBg = function () {
  const allLinks = document.querySelectorAll("a");

  for (const link of allLinks) {
    link.style.backgroundColor = "red";
  }
};
redBg();
// 38) Console log "Page loaded" when the page is correctly loaded

window.onload = (event) => {
  console.log("Page Loaded");
};
// 39) Write a function to add new items to a unordered list

const addItems = function () {
  const ol = document.getElementById("ol");
  const li = document.createElement("li");
  li.appendChild(document.createTextNode("Chelsea - added in JS"));
  ol.appendChild(li);
};

addItems();

// 40) Write a function to empty a list

const emptyList = function () {
  const ol = document.getElementById("ol");
  ol.innerHTML = "";
};
//emptyList();

// EXTRA DOM

// EXTRA EXERCISES

// 41) Add an eventListener to show an alert when the cursor hovers a link, displaying its href property

const links = document.querySelectorAll("a");
for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("mouseover", () => {
    alert(links[i].href);
  });
}
// 42) Create a button that will hide every image on the page when clicked
const newBtn = document.createElement("btn");
const btnDiv = document.getElementById("btnDiv");
newBtn.innerHTML = "Hide/Show Images";
btnDiv.appendChild(newBtn);

newBtn.addEventListener("click", () => {
  const imgs = document.querySelectorAll("img");
  for (let i = 0; i < imgs.length; i++) {
    imgs[i].classList.toggle("hidden");
  }
});

// 43) Create a button that will hide or show the table on the page when clicked

const tableBtn = document.createElement("btn");
const tablebtnDiv = document.getElementById("tableBtnDiv");

tableBtn.innerHTML = "Hide/Show Table";
tablebtnDiv.appendChild(tableBtn);

tableBtn.addEventListener("click", () => {
  const table = document.querySelectorAll("table");
  for (let i = 0; i < table.length; i++) {
    table[i].classList.toggle("hidden");
  }
});
// 44) Write a function for calculating the sum of every number inside all the table cells (if their content is numeric)

// 45) Delete the last letter from the heading each time the user clicks on it
const header = document.querySelector("h1");
header.addEventListener("click", () => {
  header.textContent = header.textContent.slice(0, -1);
});
// 46) Change the background color of a <td> if the user clicks on it

const allTds = document.querySelectorAll("td");
for (let i = 0; i < allTds.length; i++) {
  tds[i].addEventListener("click", () => {
    allTds[i].style.backgroundColor = "red";
  });
}
// 47) Add a delete button at the bottom of the table, when clicked it should delete a random <td>

const dltBtn = document.getElementById("dltBtn");
const randTd = document.querySelector("td");
dltBtn.addEventListener("click", () => {
  for (let i = 0; i < randTd.legnth; i++) {
    randTd[i].remove();
  }
});

// 48) Add automatically a pink border to a cell when the mouse hovers it

const pinkTds = document.querySelectorAll("td");
for (let i = 0; i < pinkTds.length; i++) {
  pinkTds[i].addEventListener("mouseover", () => {
    allTds[i].style.borderColor = "pink";
  });
}
// 49) Write a function to create a table with 4 rows and 3 columns programmatically and add it to the bottom of the page

function addTable() {
  var myTableDiv = document.getElementById("myDynamicTable");

  var table = document.createElement("table");
  table.border = "1";

  var tableBody = document.createElement("tbody");
  table.appendChild(tableBody);

  for (var i = 0; i < 3; i++) {
    var tr = document.createElement("tr");
    tableBody.appendChild(tr);

    for (var j = 0; j < 4; j++) {
      var td = document.createElement("TD");
      td.width = "75";
      td.appendChild(document.createTextNode("Cell " + i + "," + j));
      tr.appendChild(td);
    }
  }
  myTableDiv.appendChild(table);
}
addTable();

// 50) Write a function to remove the last table from the page

const removetable = function () {
  const theTable = document.getElementById("myDynamicTable");
  theTable.remove();
};
// removetable();
