let button = document.querySelector("#btn");
let input = document.querySelector("#in");
let box = document.querySelector("#box");

function Display() {
  console.log("Button is Clicked!");
  button.style.backgroundColor = "red";
}

// button Events:
button.addEventListener("click", function () {
  console.log("Button is Clicked!");
  button.classList.toggle("bg-red");
});
button.addEventListener("dblclick", function () {
  console.log("Button is Clicked!");
  button.classList.toggle("bg-red");
});

// input Events:
input.addEventListener("focus", function () {
  input.classList.toggle("bg-yellow");
});

input.addEventListener("blur", function () {
  input.classList.toggle("bg-yellow");
});

input.addEventListener("change", function () {
  console.log("input content change to: " + this.value);
});

input.addEventListener("input", function () {
  console.log("input content change to: " + this.value);
});

// mouse Events:
box.addEventListener("mouseover", function (e) {
  console.log("Mouse is Over the box");
  console.log("Mouse position: " + e.clientX + " " + e.clientY);
});
box.addEventListener("mouseenter", function (e) {
  console.log("Mouse is Entered in box");
});
box.addEventListener("mouseleave", function () {
  console.log("Mouse is Exit the box");
});
box.addEventListener("mouseup", function () {
  console.log("Mouse is Up");
});
box.addEventListener("mousedown", function () {
  console.log("Mouse is down");
});
