//functions
//a block of code that does a specific task // and a repeated task

//function defination


function sum(){
    let num1=5;
    let num2=10;

    let sumofnum= num1 + num2;
    console.log(sumofnum)
}



sum();

//function with parameter
//parametres are local variables of function
//they have only block scope like inside the function 

function mysum(a,b){
    let number1=a;
    let number2=b;

    let sumofnumbers= number1+ number2;
    console.log(sumofnumbers);


    //return sumofnumbers;
    // return k badd kuch b likhien woh execute nai hoga
    // return shows the last line of function
    //agr yahan return likhien gy tu bahir phr console krna pry ga 
}


mysum(1,2);




//function that ask user to enter a number
function add() {
    let first = parseFloat(prompt("Enter the first number:"));//converting string to float
    let second = parseFloat(prompt("Enter the second number:"));
    let addition = first + second;
    console.log("The sum is: " + addition);
}
//function call or invoke
add();


//arrow functionis another way to write functions

/*
yh arrow function hy

                =(input 1, input2)=>{
                        }

    equal k peechy just ek variable ka nam hota hai jis mein hum apna arrow function store krwa rhy hoty hn
    
*/



const multiply=(num1,num2)=>{
    let a=num1;
    let b=num2;
    let product= a*b;
    console.log(product)


}
multiply(4,5);