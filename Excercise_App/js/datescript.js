import { date, timeOfDay } from "./variables.js";

// Data Structures - Arrays and Objects
// const weekDay = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];

// const month = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];

const timePeriods = [
  "Morning",
  "Late Morning",
  "Afternoon",
  "Late Afternoon",
  "Evening",
  "Late Evening",
];
export const changeInDay = function () {
  const hour = date.getHours();
  if (hour <= 3 && hour < 4) {
    timeOfDay.style.backgroundColor = "blue";
    document.querySelector(".date-item-2").style.backgroundColor = "blue";
    timeOfDay.style.color = "white";
    timeOfDay.textContent = `${timePeriods[1]}`;
    console.log(`It is ${timePeriods[1]}`);
  }
  if (hour >= 10 && hour <= 12) {
    timeOfDay.style.backgroundColor = "blue";
    document.querySelector(".date-item-2").style.backgroundColor = "blue";
    timeOfDay.style.color = "white";
    timeOfDay.textContent = `${timePeriods[1]}`;
    console.log(`It is ${timePeriods[1]}`);
  } else if (hour >= 12 && hour <= 15) {
    timeOfDay.style.backgroundColor = "purple";
    document.querySelector(".date-item-2").style.backgroundColor = "purple";
    timeOfDay.style.color = "white";
    timeOfDay.textContent = `${timePeriods[2]}`;
    console.log(`It is ${timePeriods[2]}`);
  } else if (hour > 15 && hour < 18) {
    document.querySelector(".date-item-2").style.backgroundColor = "red";
    timeOfDay.style.backgroundColor = "red";
    timeOfDay.style.color = "white";
    timeOfDay.textContent = `${timePeriods[3]}`;
    console.log(`It is ${timePeriods[3]}`);
  } else if (hour > 18 && hour <= 23) {
    timeOfDay.style.backgroundColor = "green";
    document.querySelector(".date-item-2").style.backgroundColor = "green";
    timeOfDay.style.color = "white";
    timeOfDay.textContent = `${timePeriods[4]}`;
    console.log(`It is ${timePeriods[4]}`);
  }
};

changeInDay();
