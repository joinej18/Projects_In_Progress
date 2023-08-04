import { changeInDay } from "./datescript.js";
import {
  showAllBttn,
  workoutCard,
  btnSubmitWorkout,
  searchTitle,
  muscleDOM,
  cardio,
} from "./variables.js";
import { options, loadMuscleGroup } from "./model.js";
import { checkbox } from "./variables.js";

changeInDay();
options;

btnSubmitWorkout.style.display = "none";
showAllBttn.addEventListener("click", function (muscle) {
  const searchMuscle = document.querySelector("#muscle-group").value;
  if (!searchMuscle) {
    alert("Please enter a muscle");
  } else {
    searchTitle.style.display = "none";

    loadMuscleGroup(searchMuscle);

    workoutCard.removeAttribute("#hidden");
    btnSubmitWorkout.style.display = "";
  }
});

// window.addEventListener("click", function (event) {
//   // console.log(document.querySelectorAll("input[type=checkbox]"));
//   console.log(document.getElementById("rendered").textContent);
//   if (event.target === "workout-option") {
//     console.log("This is true");
//   }
// });

// refreshButton.addEventListener("click", refreshPage);
// cardio.addEventListener("click", function (e) {
//   // container.style.backgroundColor = "red";
//   strecthing.style.display = "none";
//   strength.style.display = "none";
//   reset.style.display = "flex";
// });
