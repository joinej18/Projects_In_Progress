"user strict";
const date = new Date();
const dayofWeek = date.getDay();
const hourOfDay = date.getHours();
console.log(date);
console.log(date.getDay());
console.log(date.getTime());
console.log(date.getHours());

const container = document.querySelector(".container");
const toggleBG = document.querySelector(".toggle-bg");
const circle = document.querySelector(".circle-pink");
const circle2 = document.querySelector(".circle-brown");

addEventListener("click", (e) => {
  const target = e.target;
  console.log(target);
  if (target == circle && circle.classList == "circle-pink") {
    // circle.style.float = "right";
    // toggleBG.style.background = "brown";
    // circle.style.backgroundColor = "grey";
    circle.classList.add = "circle-brown";
    circle.classList.remove = "circle-pink";
  }
});

const clockedIn = document.getElementById("clock-in");
const clockedOut = document.getElementById("clock-out");
const timeStamp = new Date().getTime().valueOf();
const dateClocked = Date.now();
addEventListener("click", (e) => {
  const target = e.target;
  console.log(target);
  if (target == clockedIn) {
    alert("Clocked in");
    console.log(timeStamp);
    console.log(dateClocked);
  }
  if (target == clockedOut) {
    alert("Clocked Out");
    console.log(timeStamp);
    console.log(dateClocked);
  }
});

const newEmployee = document.getElementById("new-employee");

addEventListener("click", () => {
  if (target == newEmployee) {
  }
});
