//DOCUMENT OBJECT  MODEL
// PART 1

//HTML LAYOUT
//CSS STYLE
//JS LOGIC

// when we write separtely , we have readability, browser caching ,modularity

//alert("Registeration Open")
console.log("Welcome to dom")

//window object
//an open window in a browser
//type window in browser console
console.log(window)
window.console.log("hello")

// console.log is a part of window
//alert, prompt etc are also its part
//window.console.log("hello") is same as console.log("hello")


//dom
//document object model
//jb web page load hota hai tu yh dom bnta hy
//html ko js mein access krna
//html k elements ,js mein objects hoty hn , jinko document khty hn
//document is a part of window

console.dir(window.document)// it prints properties of document

//dir special object ke properties ur methood ko print krwata hau
//log object ko as an element print krwata hai , jesy h1, p , 

//html ko js, mein window object k ander document object k ander access krty hain
//document, model hota hai ya representation hota hai html ka, ur yhei dom hy
// ek tree like structure

console.dir(document.body)
console.log(document.body)

console.dir(document.head)
console.log(document.head)

console.dir(document.body.childNodes[1])
console.log(document.body.childNodes[1])

// we use dom for dynamic changes

//by id, class or tag

//by query selector /// it returns node list
/*
let ele=document.querySelectorAll("p")
console.dir(ele)
console.log(ele)

console.log(document.querySelectorAll(".heading2"))
console.log(document.querySelectorAll("#heading"))
*/

let btn=document.createElement("button");
btn.innerText="register";
btn.style.color="white";
btn.style.backgroundColor="pink";


document.querySelector("body").prepend(btn);
//let div=document.querySelectorAll("div");
//div.append(btn)
//



let para=document.querySelector("p")
para.getAttribute("class")
