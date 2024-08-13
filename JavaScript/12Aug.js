let age = prompt("Enter you age");
console.log(`Age ${age} `);
console.log(typeof age);
console.log(age > 18 ? "Eligible" : "Not eligible");

let a = 34;
let b = 10;

let operator = prompt("Enter Operation : ");

switch (operator) {
  case "+":
    console.log(a + b);
    break;
  case "-":
    console.log(a - b);
    break;
  case "*":
    console.log(a * b);
    break;
  case "/":
    console.log(a / b);
    break;
  default:
    console.log("Invalid Operaator");
}
