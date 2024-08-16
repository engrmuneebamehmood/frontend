// button click , form filling , form submitting , keyboard typing , keys up down left right, mouse clicks, 

//change in state of object


//low battery etc
/*

let btn1 = document.querySelector("#btn1");

btn1.onclick = () => {
    console.log("button 1 was clicked");
    let abc = 7;
    abc++;
    console.log(abc);
};

btn1.addEventListener("click",()=>{
    console.log("button 1 was clicked)")
})*/


let mode= document.querySelector("#mode");
let current = "light";
mode.addEventListener("click",()=>{
    if(current==="light"){
        current="dark;"
    }
    else{
        current="light"
    }
    console.log("mode changed");

})
   

