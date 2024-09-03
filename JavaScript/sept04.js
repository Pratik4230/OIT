// BOM:
// window
// navigator
// location
// screen

// Event bubbling:

// let con = document.querySelector(".container");
// let body = document.body;


// con.addEventListener(
//   "click",
//   function (a) {
//     console.log("con clicked");
//     a.stopPropagation();
//   },
//   false
// );
// body.addEventListener(
//   "click",
//   function () {
//     console.log("body clicked");
//   },
//   false
// );

// setTimeout and setInterval

// let stopId = setTimeout(function () {
//   console.log("Hello");
// },3000);

// link.addEventListener("click", function (e) {
//     clearTimeout(stopId);
//     e.preventDefault();
//   });

// let IntervalId = setInterval(function () {
//   console.log("Bye");
// }, 500);

// link.addEventListener("click", function (e) {
//   clearInterval(IntervalId);
//   e.preventDefault();
// });

// function AFun() {
//   console.log("Hello");
// }
// let url = "https://www.google.com"
// let features = "height=300;width=300px"

// let link = document.querySelector("#link");
// let newWindow;
// link.addEventListener(
//   "click",
//   function (e) {
//     console.log("Link clicked");
//     e.preventDefault();
//     newWindow = window.open(url, "Google", features);
//   },
//   false
// );

