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
cardio.addEventListener("click", function (e) {
  container.style.backgroundColor = "red";
  strecthing.style.backgroundColor = "blue";
  strength.style.backgroundColor = "blue";
  cardio.style.backgroundColor = "red";
  // reset.style.display = "flex";
});
strecthing.addEventListener("click", function (e) {
  strecthing.style.backgroundColor = "green";
  container.style.backgroundColor = "green";
  strength.style.backgroundColor = "blue";
  cardio.style.backgroundColor = "blue";
  // reset.style.display = "flex";
});
resetURLBTN.addEventListener("click", function (e) {
  container.style.backgroundColor = "white";
  strength.style.backgroundColor = "blue";
  strecthing.style.backgroundColor = "blue";
  cardio.style.backgroundColor = "blue";
  // window.location.reload;
});
strength.addEventListener("click", function (e) {
  container.style.backgroundColor = "pink";
  strength.style.backgroundColor = "pink";
  strecthing.style.backgroundColor = "blue";
  cardio.style.backgroundColor = "blue";
});

// export const refreshButton = document.querySelector("#refresh-button");

// export const refreshPage = () => {
//   location.reload();
// };

// refreshButton.addEventListener("click", refreshPage);
// strengthURL;
