// console.log("if else");

// let num = 40
// if ( num > 20 && num < 50) {
//     console.log("yes");
// }else{
//     console.log("no");

// }

let a = 10;
let b = 15;
let c = 115;

if (a == b && b == c) {
  console.log("Equilateral triangle");
} else if (
  a * a + b * b == c * c ||
  a * a + c * c == b * b ||
  c * c + b * b == a * a
) {
  console.log("Right angled triangle");
} else if (a == b || b == c || c == a) {
  console.log(" isoscales triangle");
} else if (a != b && b !== c && c !== a) {
  console.log(" scalen triangle");
} else {
  ("No triengle");
}
