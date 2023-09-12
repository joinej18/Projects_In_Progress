// import { async } from "regenerator-runtime";
import {
  muscleDOM,
  typeDOM,
  nameDOM,
  difficultyDOM,
  parentEl,
  checkbox,
  //   instructDOM,
} from "./variables.js";
import { API_URL } from "./config.js";
export const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "1f889b3e07msh7857be175b1c01fp1fece5jsn03fcf6cb4912",
    "X-RapidAPI-Host": "exercises-by-api-ninjas.p.rapidapi.com",
  },
};
let workout = 1;
// Function to Render Excercises from API
const instructDOM = document.querySelector(".instructions-btn");
function MarkupRender(data) {
  data.map((element) => {
    const muscle = (muscleDOM.textContent = element.muscle);
    const type = (typeDOM.textContent = element.type);
    const name = (nameDOM.textContent = element.name);
    const difficulty = (difficultyDOM.textContent = element.difficulty);

    const markup = `<div class="checkbox-div">
    <input type="checkbox" checked id="workout-option" name="option" value="option" />
            <label for="workout-option"> Select Your Exercise</label><br /><div class="workout-card" id="rendered">
      <input type="checkbox" id="workout-option" name="option" value="option" />
            <label for="workout-option"> Select Your Exercise</label><br />
              <p class="name">Name: ${name}</p>
              <p class="muscle">Muscle: ${muscle}</p>
              <p class="type">Lifting Type:${type}</p>
              <p class="difficulty">Level: ${difficulty}</p>
              <p>Equipment: ${element.equipment}</p>
              <p>Instructions: <button class=instructions-btn><i class="fa-solid fa-circle-question ${workout++}"></i></button></p>
            </div>
</div>
            <div class="workout-card instruct" id="rendered-instruct">
              <p>Instructions: ${element.instructions}</p>
            </div>
            
            `;

    const workoutDisplay = parentEl.insertAdjacentHTML("afterbegin", markup);
    const cb = document.getElementById("workout-option");
    // addEventListener("change", function () {
    //   if (checkbox.checked) {
    //     console.log(true);
    //   } else {
    //     console.log("nothing is selected");
    //   }
    // });

    workoutDisplay;
  });
}

// const savedWorkout = () => {
//   const workout = [];
//   workout.forEach(localStorage.setItem("workout", name));
// };
// const checked =
//   if (this.checked === true) {
//     console.log(true);
//   } else {
//     console.log("nothing is selected");
//   }
// });

// API for Excercises

export const loadMuscleGroup = async function (muscle) {
  try {
    const res = await fetch(
      `${API_URL}level=intermediate&&type=powerlifting&&muscle=${muscle}`,
      // `${API_URL}difficulty=intermediate&&muscle=${muscle}`,
      options
    );
    // const res = await fetch(
    //   `https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?type=strength&&muscle=${muscle}`,
    //   options
    // );
    const data = await res.json();
    const renderedWorkout = data;
    if (renderedWorkout.length > 0) {
      console.log(renderedWorkout);
    } else {
      alert(`No excercise was found for ${muscle} for that level and type`);
    }
    localStorage.setItem("workout", renderedWorkout);

    MarkupRender(data);
    // instructDOM.addEventListener("click", function (e) {
    //   alert(`This button was click`);
    // });
    checkbox.addEventListener("change", function () {
      if (this.checked === true) {
        console.log(true);
      } else {
        console.log("nothing is selected");
      }
    });
  } catch (err) {
    throw err;
  }
};
// export const loadCardioGroup = async function (event, muscle) {
//   try {
//     // if (event == value){
//     //     let res = await fetch(
//     //   `https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?type=cardio&&muscle=${muscle}`,
//     //   options
//     // );
//     // }
//     console.log(e);
//     let res = await fetch(
//       `https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?type=cardio&&muscle=${muscle}`,
//       options
//     );
//     const data = await res.json();

//     // for (let i = 0; i > data.length; i++) {
//     //   localStorage.setItem("example", i);
//     // }
//     console.log(data);
//     MarkupRender(data);
//   } catch (err) {
//     throw err;
//   }
// };

// export const loadStrecthingGroup = async function (muscle) {
//   try {
//     const res = await fetch(
//       `https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?type=stretching&&muscle=${muscle}`,
//       options
//     );
//     const data = await res.json();

//     console.log(data);
//     MarkupRender(data);
//     checkbox.addEventListener("change", function () {
//       if (this.checked === true) {
//         console.log(true);
//       } else {
//         console.log("nothing is selected");
//       }
//     });
//   } catch (err) {
//     throw err;
//   }
// };

addEventListener("click", (e) => {
  const target = e.target;
  console.log(target);

  if (target == "10") {
    alert("The instructions button was clicked");
  }
});

addEventListener("change", (e) => {
  const levelValue = document.querySelector("#difficulty").value;
  const difficultyValue = document.querySelector("#difficulty").value;

  if (levelValue && difficultyValue) {
    // alert(levelValue);
    if (levelValue == "beginner" && difficultyValue == "powerlifting")
      console.log(
        `The selected level is ${levelValue} and the difficulty is ${difficultyValue}`
      );
    return (API_URL = `https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?level=beginner&&type=powerlifting&&muscle=${muscle}`);
  }
});
