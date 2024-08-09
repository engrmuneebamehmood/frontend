
//practice codes on conditional statements

let mode='dark';
let background;

if (mode=='dark')
{
    background='black';
}else 

{
    background='white';
}

console.log(background)

let age=22
if (age=22)
{
    console.log("you can drive");
    //alert("Have a safe jounrey")

}else
{
    console.log("you can not drive")
}

//odd even check

let num1=9
if(num1%2===0)// checking even odd
{
    console.log("this number is even")
}

else{
    console.log("this number is odd")
}



//syntax are rules of a programming language

//elseif

let bgmode;
let bgcolor;

if(bgmode==='dark')
{
    console.log("black");
} 
else if(bgmode==="white")
{
    console.log("white");

}
else if(bgmode==="pink")
{
    console.log("pink");
}
else
{
console.log("no color")
}

//ternary operator
//condition? trueoutput:falseoutput

let myage=22;
let eligibility;
eligibility=  myage>18 ? " Can Get admission" : " Can not Get admission"

console.log(eligibility)


