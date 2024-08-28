// getElementById
let heroElem = document.getElementById("hero");
console.log(heroElem);
heroElem.innerText = "New Text";

// getElementsByClassName:
let elements = document.getElementsByClassName("elem");

console.log(elements);

for (let i = 0; i < elements.length; i++) {
    console.log(elements[i]);
}

// getElementsByTagName
let ListElems = document.getElementsByTagName("li");

console.log(ListElems);

for(let i = 0;i < ListElems.length; i++){
    console.log(ListElems[i]);
}


let heroElement = document.querySelector("#hero");

console.log(heroElement.innerText);

let listElements = document.querySelectorAll(".elem");

console.log(listElements);

let item = document.querySelectorAll("#hero");

let item2= item.nextElementSibling;

 let back = item2.previousElementsSibling;

 let parent = item.parentElement;

 let parentSibling = parent.nextElementSibling;

 let p2ChildFirst =  parentSibling.firstElementChild;

 let p2ChildLast =  parentSibling.lastElementChild;

 let p2ChildAll =  parentSibling.childern;
