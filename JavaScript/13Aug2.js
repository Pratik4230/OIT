// while loop

let i = 1;

while (i <= 10) {
  console.log((i = i + 2));
}

let j = 2;
while (j <= 10) {
  let k = 1;
  while (k <= 10) {
    console.log(` ${j} * ${k} = ${j * k}`);
    k++;
  }
  console.log("\n");

  j++;
}
