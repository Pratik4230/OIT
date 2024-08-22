// Recursion:
// Defination:
// A function that calls itself in its
// body, untill it reach to its base
// condition.

// let a = 0;
// function sayhello() {
//     if (a > 3) {
//         return
//     }
//     console.log("Hello, World!");
//     console.log("Bye bye");
//     a++;
//     sayhello();
// }

// sayhello();


// sum of wholenums recursively


function sum(n){
    if (n <= 0) {
        return n;
    }
    return ans = n + sum(n-1)
}

console.log(sum(5))
