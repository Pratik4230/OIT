// let HERO = document.getElementById("hero");

// console.log(HERO.innerText);

// let sibli = HERO.nextElementSibling;

// console.log(sibli.textContent);

// let parent = sibli.parentElement;

// console.log(parent);

// let p = document.querySelector("#list")

// let lastChild = p.lastElementChild;

// console.log(lastChild.innerText);

// let firstChild = p.firstElementChild;

// console.log(firstChild.innerText);

// let childs = p.children;

// console.log(childs[1].innerText);


let list = document.getElementById("list");

let elem = list.firstElementChild.nextElementSibling;

let newitem = document.createElement("li")
newitem.innerText = "item 4"

list.insertBefore(newitem  , elem )
// list.appendChild(newitem)





