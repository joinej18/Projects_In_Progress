import { changeInDay } from "./datescript.js";
import {
  showAllBttn,
  workoutCard,
  btnSubmitWorkout,
  searchTitle,
  muscleDOM,
  cardio,
  resetBttn,
} from "./variables.js";
import { options, loadMuscleGroup } from "./model.js";
import { checkbox } from "./variables.js";

changeInDay();
options;
const searchMuscle = document.querySelector("#muscle-group").value;
btnSubmitWorkout.style.display = "none";
resetBttn.addEventListener("click", (e) => {
  const searchMuscle = (document.querySelector("#muscle-group").value = "");
});
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
