// const a = document.getElementById("loginBtn");
// const b = document.getElementById("registerBtn");
const loginContain = document.getElementById("login");
const registerContain = document.getElementById("register");
const registerBTN = document.querySelector(".signup");
const loginBTN = document.querySelector(".login");

const registerSubmit = document.querySelector(".submit-register");

registerBTN.addEventListener("click", function (e) {
  console.log(e, "this is the register switch");
  console.log("Yes this works from line 7");
  registerContain.style.right = "4px";
  loginContain.style.left = "-520px";
});
loginBTN.addEventListener("click", function (e) {
  console.log(e, "this is for the login switch at top of container");
  console.log("Yes this works from line 13");
  registerContain.style.right = "-520px";
  loginContain.style.left = "4px";
});

// //////////////////////////// LOCAL STORAGE /////////////////////////////////
// Labels //

const firstNameEntry = document.querySelector(".firstname").value;
const lastNameEntry = document.querySelector(".lastname").value;
const emailEntry = document.querySelector(".email").value;
const passwordEntry = document.querySelector(".psw-set").value;

registerSubmit.addEventListener("click", function (e) {
  console.log(e);
  console.log("The event listner works");
  console.log(firstNameEntry);
  console.log(lastNameEntry);
  console.log(emailEntry);
  console.log(passwordEntry);
  if (!firstNameEntry) {
    alert("There needs to be an entry for the first name");
  } else {
    localStorage.setItem("firstname", firstNameEntry);
  }
  if (!firstNameEntry) {
    alert("There needs to be an entry for the first name");
  } else {
    localStorage.setItem("lastname", lastNameEntry);
  }
  if (!emailEntry) {
    alert("Please Enter your email");
  } else {
    localStorage.setItem("email", emailEntry);
  }

  if (!passwordEntry) {
    alert("Please enter in a password");
  } else {
    localStorage.setItem("password", passwordEntry);
  }
});

// loginSubmit.addEventListener("click", function () {});
const savedLogins = [];
// localStorage.setItem("firstname", in);

const createUserName = (f, l) => {
  //  const firstName = localStorage.getItem(firstNameEntry);
  //  const lastName = localStorage.getItem(lastNameEntry)
  const first = f.slice(-1);
  const last = l.slice(2);

  console.log(first, last);
};

createUserName("Joshua", "Joiner");
