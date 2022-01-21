"use strict";

let selectImg = document.getElementsByTagName("img");
console.log(selectImg);

// Mette un ID dans le HTML
let imageChange = document.querySelector("#chat img");

imageChange.addEventListener("click", () => {
  imageChange.src = "img/10.jpg";
});
