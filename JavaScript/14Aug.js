let a = 0;

while (a <= 5) {
  console.log(2 ** a);
  a++;
}
/////////////////////////////////////////
let i = 234;
let rev = "";
while (i > 0) {
  rev = rev + (i % 10).toString();
  i = Math.floor(i / 10);
}

console.log(rev);
//////////////////////////////////////////
let n = 1101;
let s = 0;
let p = 0;
while (n > 0) {
  let rem = n % 10;
  sum = s + rem * Math.pow(2, p++);
  n = Math.floor(n / 10);
}
console.log("decimal : ", s);
///////////////////////////////////////////////
let pass;
do {
  pass = prompt("enter password");
} while (pass != "1234");
