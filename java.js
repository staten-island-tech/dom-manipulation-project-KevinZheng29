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

/*const DOMSelectors = {
  button: document.getElementById("btn"),
  text: document.querySelector("#text"),
  box: document.getElementById("big-black-box"),
  points: document.querySelectorAll(".point"),
};

function backgroundAndText(background, text) {
  background.style.backgroundColor = "red";
  text.textContent = "This is now a big bigger red box";
  text.style.fontSize = "40px";
}

DOMSelectors.button.addEventListener("click", function () {   //addEventListener allows you to make a change when you click on the element
  backgroundAndText(DOMSelectors.box, DOMSelectors.text);
});

function changeLi() {
  let pointIndex = 1;
  DOMSelectors.points.forEach((point) => {
    point.addEventListener("click", function () {
      point.textContent = `Hello I am point ${pointIndex}`;
      pointIndex++;            //pointIndex++ codes it so that if you click again, it will add the value, but the order of which you click will matter
    });
  });
}
changeLi(); */

const DOMSelectors = {
  button: document.getElementById("btn"),
  box: document.getElementById("container-box"),
  input: document.querySelector(`#input`),
};

DOMSelectors.box.insertAdjacentHTML();
