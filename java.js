/* const button = document.getElementById("btn");
const text = document.querySelector("#text");
console.log(button);
console.log(text); */

/*const DOMSelectors = {
  button: document.getElementById("btn"),
  text: document.querySelector("#text"),
  point: document.querySelectorAll(".point"), //if you have multiple element with the same class, use document.querySelectorAll
  pointtwo: document.getElementById("pointtwo"),
};
console.log(DOMSelectors.button);
console.log(DOMSelectors.point);
console.log(DOMSelectors.pointtwo);*/

const DOMSelectors = {
  button: document.getElementById("btn"),
  text: document.querySelector("#text"),
  box: document.getElementById("big-black-box"),
  points: document.querySelectorAll(".point"),
};

function backgroundAndText(background, text) {
  background.style.backgroundColor = "red";
  text.innerHTML = "This is now a big red box";
}
backgroundAndText(DOMSelectors.box, DOMSelectors.text);
