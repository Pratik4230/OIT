// let n = prompt("Enter a number ");
let n = 5;

console.log(typeof n);

for (let i = 1; i < 11; i++) {
  console.log(` ${n} * ${i} =  ${n * i}`);
  console.log(typeof (n * i));
}







// let facto = Number(prompt("Enter a number"));
let facto = 5;
let ans = 1;

for (let i = 1; i <= facto; i++) {
  ans = ans * i;
}

console.log(ans);






// let c = Number(prompt("Enter a number"));
let c = 5;
let values = [];
for (let i = 1; i <= c; i++) {
  values.push(Math.pow(i, 3));
  //   console.log(Math.pow(i, 3));
}

console.log(values.join());








GCD
let x = 18;
let y = 12;

let i;

if (x == y) {
  return x;
}

x > y ? (i = y) : (i = x);

for (i; i >= 1; i--) {
  if (x % i == 0 && y % i == 0) {
    console.log(i);
    return;
  }

  if (i == 1) {
    console.log(1);
    return;
  }
}
