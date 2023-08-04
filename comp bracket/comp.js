"use strict";

const password = "comptraining";

const passwordInput = document.getElementById("pwd");
const inputType = [
  "name",
  "age",
  "weight",
  "years",
  "martial-arts",
  "comps",
  "belt",
];

const saveBTN = document.querySelector(".button-save-name");

const forwardBTN = document.getElementById("forward");
const backBTN = document.querySelector("#back");
addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    if (passwordInput.value === password) {
      alert("The password is correct");
      sectionShown.style.display = "grid";
      document.querySelector(".left").style.display = "none";
    } else {
      alert("You are not allowed in");
    }
    console.log(passwordInput.value);
  }
});

const nameInput = document.querySelector("#name");
const ageInput = document.querySelector("#weight");
const weightInput = document.querySelector("#weight");
const yearsInput = document.querySelector("#years");
const martialArtsInput = document.querySelector("#martial-arts");
const compsInput = document.querySelector("#comps");
const beltLvlInput = document.querySelector("#belt-lvl");

// const currContainer = document.getElementById("quest").parentElement;
// const nextContainer = currContainer.nextElementSibling;

// console.log(currContainer);
// console.log(nextContainer);
const userInfo = [];
saveBTN.addEventListener("click", (e) => {
  const userInfo = [];
  userInfo.push(localStorage.setItem("Competitor Name", nameInput.value));
  console.log(nameInput);
  // localStorage.setItem("Competitor Weight", weightInput.value);
  // localStorage.setItem("Competitor Age", ageInput.value);
  // localStorage.setItem("Years Training", yearsInput.value);
  // localStorage.setItem("Martial Arts Studied", martialArtsInput.value);
  // localStorage.setItem("Competitions Completed", compsInput.value);
  // localStorage.setItem("BJJ Belt", beltLvlInput.value);
  console.log(userInfo);
});

addEventListener("click", (e) => {
  if (currContainer.classList === "shown") {
    currContainer.classList = "hidden";
    // nextContainer.classList = "shown";
    console.log("true");
  }
});
// backBTN.addEventListener();
