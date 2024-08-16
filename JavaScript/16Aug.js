display();


function display(){
    console.log("Hoisting");
    
}

function double(d){
    return 2 * d
}
console.log(double(5));


let  w = 11;
let e = 8;

function GCD(x,y) {
    let i;
    x > y ? (i = y) : (i = x);
    
    for (i; i >= 1; i--) {
      if (x % i == 0 && y % i == 0) {
        return i;
      }
    
      if (i == 1) {
        return i;
    
      }
    }  
}

let gcd =  GCD(8, 10)


function LCM(x,y , gcd){
   return x * y / gcd
}

console.log("LCM : " , LCM(8,10 , gcd ));

