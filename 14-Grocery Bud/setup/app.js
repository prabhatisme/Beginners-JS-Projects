// ****** SELECT ITEMS **********
const alert = document.querySelector(".alert");
const form = document.querySelector(".grocery-form");
const grocery = document.getElementById("grocery");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const submitBtn = document.querySelector(".submit-btn");
const clear = document.querySelector(".clear-btn");

// edit option
let editElement ;
let editFlag = false; 
let editId = "";

// ****** EVENT LISTENERS **********
form.addEventListener("submit", addItem);

// ****** FUNCTIONS **********
function addItem(e) {
    e.preventDefault();
    const value = grocery.value;
    console.log(value);
}

// ****** LOCAL STORAGE **********

 
// ****** SETUP ITEMS **********
