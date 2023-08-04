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
export const workoutCard = document.querySelector(".workout-card");
export const searchTitle = document.querySelector(".search-title");
export const btnSubmitWorkout = document.querySelector(".submit-container");
export const cardio = document.querySelector(".cardio-btn");
export const strecthing = document.querySelector(".strecthing-btn");
export const strength = document.querySelector(".strength-btn");
export const reset = document.querySelector(".reset-btn");
export const checkbox = document.getElementById("workout-option");
cardio.addEventListener("click", function (e) {
  container.style.backgroundColor = "red";
  strecthing.style.display = "none";
  strength.style.display = "none";
  reset.style.display = "flex";
});
strecthing.addEventListener("click", function (e) {
  container.style.backgroundColor = "green";
  cardio.style.display = "none";
  strength.style.display = "none";
  reset.style.display = "flex";
});
reset.addEventListener("click", function (e) {
  container.style.backgroundColor = "white";
  strecthing.style.display = "flex";
  strength.style.display = "flex";
  reset.style.display = "none";
  cardio.style.display = "flex";
  // window.location.reload;
});
export const strengthURL = strength.addEventListener("click", function (e) {
  container.style.backgroundColor = "pink";
  console.log(e.currentTarget);

  strecthing.style.display = "flex";
  cardio.style.display = "none";
  reset.style.display = "none";
  if (e.currentTarget === this) {
    console.log("This works and you clicked on the strength  button");
    // return console.log(this);
  }
  // urls(this);
});

// export const refreshButton = document.querySelector("#refresh-button");

// export const refreshPage = () => {
//   location.reload();
// };

// refreshButton.addEventListener("click", refreshPage);
// strengthURL;
