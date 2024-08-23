// fibonacci with recursion

function fibo(n) {
    if(n == 0 || n ==1){
        return n;
    }
 
    
    return fibo(n-1) + fibo(n-2)
    
}
console.log(fibo(6));

for(let i = 0 ;i<= 10 ; i++){
    console.log(fibo(i));
    
}


// Anonymous 👽👻Function -> A function without any name
const hey = function () {
    console.log("hii");
};


// IIFE (Imediatly Invoked Function Expression)

(function(){
    console.log("✅✅✅✅");
})();