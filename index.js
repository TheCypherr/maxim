"use strict";
// DOM ELEMENTS
const menuSection = document.querySelector("#menuSection");
const menuToggle = document.querySelector("#menuToggle");
const deleteBtn = document.querySelectorAll(".delete");
const deleteDiv = document.querySelectorAll("#delete");
const plusBtn = document.querySelectorAll(".plus-btn");
const minusBtn = document.querySelectorAll(".minus-btn");
const countOrder = document.querySelectorAll("#count");

// Function to toggle the menu
function toggleMenu() {
  if (menuSection.classList.contains("active")) {
    closeMenu();
  } else {
    openMenu();
  }
}

// Function to show the Menu
const openMenu = function () {
  menuSection.classList.add("active");
};

// Function to hide the menu
const closeMenu = function () {
  menuSection.classList.remove("active");
};

// Add event listener to menu toggle button
menuToggle.addEventListener("click", toggleMenu);

// Function to close menu-items on click
function exitMenu() {
  menuSection.classList.add("active");
}

// Function to delete an order onClick
for (let i = 0; i < deleteDiv.length; i++) {
  deleteBtn[i].addEventListener("click", () => {
    deleteDiv[i].remove();
  });
}
// Function to Increase Count
for (let i = 0; i < countOrder.length; i++) {
  plusBtn[i].addEventListener("click", () => {
    let count = parseInt(countOrder[i].textContent);
    count++;
    countOrder[i].textContent = count;
  });
}

// Function to Decrease Count
for (let i = 0; i < countOrder.length; i++) {
  minusBtn[i].addEventListener("click", () => {
    let count = parseInt(countOrder[i].textContent);
    count--;
    countOrder[i].textContent = count;
  });
}
