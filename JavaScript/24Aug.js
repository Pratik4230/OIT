let day = ["Sunday" , "Monday" , "Tuesday", "wensday" , "thursday" , "friday" , "saturday" ];

console.log(day[2]);
console.log(day[3][2]);

console.log(day);

day[2] = "tuesday"

console.log(day);

console.log("*************************************************");


let nums = [2,5,89,4,7];

console.log(nums);

nums.push(100);

console.log(nums);

nums.pop();
nums.pop();

console.log(nums);

nums.unshift(101);

console.log(nums);

nums.shift();

console.log(nums);

console.log("**************************************");

let abc = [12,3,456,67,78,45,43,76,8,87,667,88,];
console.log(abc.concat(day));
console.log(abc);
 
abc.splice(2,5);  // delete items from Second to *NEXT 5* elements (including second) delete from original array
console.log(abc);

console.log(abc.indexOf(76));


abc.slice(2,5);
console.log(abc.slice(2,5));  //delete items from secondNext index to 5th index -> just taking elements Copy


console.log("**********************************************");

console.log("for loooop");

for (let i = 0; i < abc.length; i++) {
    console.log(abc[i]);     
}

console.log("for of loooop");
for (const i of abc) {
    console.log(i);
    
}

console.log("for each loooop");
abc.forEach( i => {
    console.log(i);
    
});

console.log("*****************************");

let book = new Array("eng" , "maths" , "sci");

console.log(book);

book.length = 0;

console.log(book);



















