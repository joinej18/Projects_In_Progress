export const date = new Date();
export const timeOfDay = document.querySelector(".date-item-2");
export const nameDOM = document.querySelector(".name");
export const difficultyDOM = document.querySelector(".difficulty");
export const typeDOM = document.querySelector(".type");
export const muscleDOM = document.querySelector(".muscle");
export const equipDOM = document.querySelector(".equip");
export const container = document.querySelector(".excercise-container");
// export const instructDOM = document.querySelector(".instructions-btn");
export const parentEl = document.querySelector(".workout-container");
export const strengthType = document.querySelector("#type");
export const difficultyType = document.querySelector("#difficulty");
export const showAllBttn = document.querySelector(".submit");
export const resetBttn = document.querySelector(".reset");
export const workoutCard = document.querySelector(".workout-card");
export const searchTitle = document.querySelector(".search-title");
export const btnSubmitWorkout = document.querySelector(".submit-container");
export const cardio = document.querySelector(".cardio-btn");
export const strecthing = document.querySelector(".strecthing-btn");
export const strength = document.querySelector(".strength-btn");
export const reset = document.querySelector(".reset-btn");
export const resetURLBTN = document.querySelector(".resetURL");
export const checkbox = document.getElementById("workout-option");
const strecthView = document.getElementById("strecthing-container");
const strengthView = document.getElementById("strength-container");
const cardioView = document.getElementById("cardio-container");
cardio.addEventListener("click", function (e) {
  cardioView.style.backgroundColor = "red";
  strecthing.style.backgroundColor = "blue";
  strength.style.backgroundColor = "blue";
  cardio.style.backgroundColor = "red";
  strengthView.style.backgroundColor = "white";
  strecthView.style.backgroundColor = "white";
  strengthView.style.display = "none";
  strecthView.style.display = "none";
  cardioView.style.display = "inline";
  return false;
});
strecthing.addEventListener("click", function (e) {
  strecthing.style.backgroundColor = "green";
  strecthView.style.backgroundColor = "green";
  strength.style.backgroundColor = "blue";
  strengthView.style.backgroundColor = "white";
  strengthView.style.display = "none";
  cardioView.style.display = "none";
  strecthView.style.display = "inline";
  cardio.style.backgroundColor = "blue";
  cardioView.style.backgroundColor = "white";
  return false;
});

strength.addEventListener("click", function (e) {
  strengthView.style.backgroundColor = "pink";
  strength.style.backgroundColor = "pink";
  //Background Color Reset
  strecthing.style.backgroundColor = "blue";
  strecthView.style.backgroundColor = "white";
  cardio.style.backgroundColor = "blue";
  cardioView.style.backgroundColor = "white";
  // Display change
  strengthView.style.display = "inline";
  strecthView.style.display = "none";
  cardioView.style.display = "none";
  return false;
});

resetURLBTN.addEventListener("click", function (e) {
  container.style.backgroundColor = "white";
  strength.style.backgroundColor = "blue";
  strecthing.style.backgroundColor = "blue";
  cardio.style.backgroundColor = "blue";
  cardioView.style.backgroundColor = "white";
  strecthView.style.backgroundColor = "white";
  strengthView.style.backgroundColor = "white";
  return false;
});
