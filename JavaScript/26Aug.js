// // Strings

let str = "today's day";

let day = "Monday";

console.log(str +" "+ day);
console.log(str.concat(" "+ day));
console.log(`${str} ${day}`);


console.log(day.toUpperCase());

console.log(day.toLowerCase());

let msg = "Have a nice day";

console.log(msg.indexOf('e'));
console.log(msg.indexOf('e' , 5)); //start searching from index 5

console.log(msg.includes('nice'));

console.log(msg.replace('nice' , 'good'));

console.log(msg.length);

console.log(msg.endsWith("day"));
console.log(msg.startsWith("day"));

console.log(msg.slice(2,5));
console.log(msg.substring(5,2)); // (2,5) / (5,2)

console.log(msg.split(" "));

// .trim() removes spacess  =>  "   ab  c      "  > "ab  c"

console.log(msg);


//Objects


let person = {
    Name : "Abc",
    age : 100,
    city: "Earth"
}

console.log(person);
console.log(person.age);
console.log(person["age"]);

person.DOB = "19/19/1919"; // adding new value 

console.log(person);

console.log("age" in person);


delete person.city;

console.log(person);

person.addr = " newPlanet"

for (const i in person) {

      console.log(person[i] , "loop");
        
};
// //////////////////////////////////////////
let car = {
    brand : "toy",
    model : "0101",
    city : "PlanetEarth",
    run : function () {
        console.log("running");
        
    }
};

car.fly = function () {
    console.log("Flying");
    
}

console.log(car);
