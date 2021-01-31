/** @format */
"use strict";

const closeNavBar = document.getElementById("navigation_nav");

const checkbox = function () {
  document.getElementById("nav_toggle").checked = false;
};

closeNavBar.addEventListener("click", checkbox);
