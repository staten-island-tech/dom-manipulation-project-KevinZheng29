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
changeLi(); 

const DOMSelectors = {
  button: document.getElementById("btn"),
  box: document.getElementById("container-box"),
  input: document.querySelector(`#input`),
  output: document.getElementById("outputlist"),
};

/* DOMSelectors.box.insertAdjacentHTML("beforebegin", `<h1>We are an H1</h1>`); */

/* DOMSelectors.button.addEventListener("click", function () {
  let input = DOMSelectors.input.value;
  DOMSelectors.box.insertAdjacentHTML("beforeend", `<p>${input}</p>`);
  DOMSelectors.input.value = "";
}); */

/*DOMSelectors.button.addEventListener("click", function () {
  let title = DOMSelectors.title.value;
  DOMSelectors.output.insertAdjacentHTML("afterend", `<p>${title}</p>`);
}); */

const DOMSelectors = {
  button: document.getElementById("btn"),
  title: document.getElementById("title"),
  artist: document.getElementById("artist"),
  url: document.getElementById("url"),
  form: document.getElementById("form"),
  display: document.getElementById("display"),
};

DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();
  output();
  clearInput();
  DOMSelectors.remove = document.querySelector(".remove");
});

function output() {
  DOMSelectors.display.insertAdjacentHTML(
    "beforeend",
    `
<div class="display-card">
<h1 class="display-album">${DOMSelectors.title.value}</h1>
<h1 class="display-artist">${DOMSelectors.artist.value}</h1>
<img class="display-img" src="${DOMSelectors.url.value}"><img>
<button class="remove btn">Remove Album</button>
</div> `
  );
}

function clearInput() {
  DOMSelectors.title.value = "";
  DOMSelectors.artist.value = "";
  DOMSelectors.url.value = "";
}
