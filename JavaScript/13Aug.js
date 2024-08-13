// type conversion

let a = 3;
let b = Number("3");
let c = Number(true);

let d = Boolean(-3);

console.log(a + b);
console.log("boolean to number ", c); //  false = 0 otherNo. = true(including negatives)
console.log("number to boolean ", d); //  false = 0 otherNo = true(including negatives)

let n = 5;
let k = "4e";

console.log("number + string : ", n + k);
console.log("type of k = 3e  is", typeof k);
console.log("type of NaN  is", typeof NaN);

let s = Boolean("nr5");
let se = Boolean("");

console.log("string s = nr5 to boolean", s);
console.log(`empty string "" to boolean : ${se}`);

console.log("null to boolean ", Boolean(null));
console.log("undefined to boolean ", Boolean(undefined));

console.log("null to number ", Number(null));
console.log("boolean to number ", Number(Boolean));

// Math module

let h = 5.57;
console.log("h = ", h);
console.log("floor", Math.floor(h));
console.log("ceil", Math.ceil(h));
console.log("round", Math.round(h));
console.log("trunk  it will just remove .", Math.trunc(h));
