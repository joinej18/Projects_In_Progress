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

const nameQ = document.getElementById("name-question");
const ageQ = document.getElementById("age-question");
const weightQ = document.getElementById("weight-question");
const compsQ = document.getElementById("comp-question");
const yearsQ = document.getElementById("years-question");
const beltQ = document.getElementById("belt-question");
const martialArtsQ = document.getElementById("martial-arts-question");
const quizShowing = document.querySelector("shown");
const quizHidden = document.querySelector("hidden");
const forwardBTN = document.getElementById("forward");
const backBTN = document.querySelector("#back");

const userBG = document.getElementById("user-type");

const checkedNew = document.getElementById("new").value;
const checkedReturn = document.getElementById("return").value;
const nameInput = document.querySelector("#name");
const ageInput = document.querySelector("#age");
const weightInput = document.querySelector("#weight");
const yearsInput = document.querySelector("#years");
const martialArtsInput = document.querySelector("#martial-arts");
const compsInput = document.querySelector("#comps");
const beltLvlInput = document.querySelector("#belt-lvl");

let result = document.getElementById("result");

document.body.addEventListener("change", (e) => {
  let target = e.target;
  let message;

  switch (target.id) {
    case "new":
      message = "You are a new user";
      userBG.style.background = "purple";
      break;
    case "return":
      message = "You are a returning user";
      userBG.style.background = "blue";
  }

  result.textContent = message;
});

document.body.addEventListener("click", (e) => {
  let target = e.target;
  if (localStorage.getItem(`Competitor_Info`) == null) {
    localStorage.setItem("Competitor_Info", "[]");
  }
  if (target.id === "submit-user") {
    const userBox = document.querySelector(".user");
    let competitor_data = JSON.parse(localStorage.getItem("Competitor_Info"));
    while (competitor_data.length >= 10) {
      let num = 1;
      let new_comp = localStorage.setItem("user", `${num++}`);
      competitor_data.push(new_comp);
    }

    userBox.style.display = "none";
  }
});

const docuBod = document.body;

docuBod.addEventListener("click", (e) => {
  let target = e.target;

  switch (target.id) {
    case "name":
      break;
    case "age":
      localStorage.setItem("age", ageInput.value);
      break;
    case "weight":
      localStorage.setItem("weight", weightInput.value);
      break;
  }
});

forwardBTN.addEventListener("click", (e) => {
  console.log("The button works");
  if (nameQ.className === "active") {
    nameQ.className = "hidden";
    nameQ.style.display = "none";
    ageQ.style.display = "flex";
    ageQ.className = "active";
    console.log(nameQ.className);
  } else if (ageQ.className === "active") {
    // nameQ.className = "hidden";
    ageQ.className = "hidden";
    ageQ.style.display = "none";
    weightQ.style.display = "flex";
    weightQ.className = "active";
  } else if (weightQ.className === "active") {
    // nameQ.className = "hidden";
    weightQ.className = "hidden";
    weightQ.style.display = "none";
    compsQ.style.display = "flex";
    compsQ.className = "active";
  } else if (compsQ.className === "active") {
    // nameQ.className = "hidden";
    compsQ.className = "hidden";
    compsQ.style.display = "none";
    yearsQ.style.display = "flex";
    yearsQ.className = "active";
  } else if (yearsQ.className === "active") {
    // nameQ.className = "hidden";
    yearsQ.className = "hidden";
    yearsQ.style.display = "none";
    martialArtsQ.style.display = "flex";
    martialArtsQ.className = "active";
  } else if (martialArtsQ.className === "active") {
    // nameQ.className = "hidden";
    martialArtsQ.className = "hidden";
    martialArtsQ.style.display = "none";
    beltQ.style.display = "flex";
    beltQ.className = "active";
  } else if (beltQ.className === "active") {
    // nameQ.className = "hidden";
    martialArtsQ.className = "hidden";
    martialArtsQ.style.display = "none";
    beltQ.style.display = "flex";
    beltQ.className = "active";
  }
});

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

// const currContainer = document.getElementById("quest").parentElement;
// const nextContainer = currContainer.nextElementSibling;

// console.log(currContainer);
// console.log(nextContainer);
// const userInfo = [];
// saveBTN.addEventListener("click", (e) => {
//   const userInfo = [];
//   userInfo.push(localStorage.setItem("Competitor Name", nameInput.value));
//   console.log(nameInput);
//   // localStorage.setItem("Competitor Weight", weightInput.value);
//   // localStorage.setItem("Competitor Age", ageInput.value);
//   // localStorage.setItem("Years Training", yearsInput.value);
//   // localStorage.setItem("Martial Arts Studied", martialArtsInput.value);
//   // localStorage.setItem("Competitions Completed", compsInput.value);
//   // localStorage.setItem("BJJ Belt", beltLvlInput.value);
//   console.log(userInfo);
// });

// backBTN.addEventListener();

// class newCompetitor {}

// addEventListener("click", (e) => {
//   const name_data = document.getElementById("name").value;
//   const age_data = document.getElementById("age").value;

//   console.log(name_data);
//   console.log(e.target);
//   console.log(e.target.className);
//   // if there is nothing saved at the start then save an empty array
//   if (localStorage.getItem("Competitor Info") == null) {
//     localStorage.setItem("Competitor Info", "[]");
//     let competitor_data = JSON.parse(localStorage.getItem("Competitor_Info"));
//     competitor_data.push(name_data);
//     return "completed";
//   }

//   // get old data and add to new data

//   localStorage.setItem("Competitor Info", JSON.stringify(competitor_data));

//   if (localStorage.getItem("Competitor Info")) {
//     console.log("Saved");
//   }
// });
// addEventListener("click", (e) => {
//   const name_data = document.getElementById("name").value;
//   const age_data = document.getElementById("age").value;
//   const competitor_data = JSON.parse(localStorage.getItem("Competitor Info"));
//   console.log(name_data);
//   console.log(e.target);
//   console.log(e.target.className);
//   // if there is nothing saved at the start then save an empty array
//   if (localStorage.getItem("Competitor Info") == null) {
//     localStorage.setItem("Competitor Info", "[]");
//   } else if (localStorage.getItem("Competitor Info")) {
//     competitor_data.push(name_data);
//   }

//   // get old data and add to new data

//   localStorage.setItem("Competitor Info", JSON.stringify(competitor_data));

//   if (localStorage.getItem("Competitor Info")) {
//     console.log("Saved");
//   }
// });

// function save() {
//   // get data from input box
//   var new_data = document.getElementById("name").value;

//   // if there is nothing saved at the start then save an empty array
//   if (localStorage.getItem("data") == null) {
//     localStorage.setItem("data", "[]");
//   }

//   // get old data and add to new data
//   const old_data = JSON.parse(localStorage.getItem("data"));
//   old_data.push(new_data);

//   localStorage.setItem("data", JSON.stringify(old_data));

// }

const clearStorage = document.getElementById("button-delete");

// localStorage.clear();
