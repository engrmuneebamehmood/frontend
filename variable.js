console.log(" This is js code written by muneeba");// printing
console.log("Muneeba Mehmood is a software Engineer")


// variables
// var can be re declared & updates, it has a global scope

//let    can not be re declared but can be updated, it has a block scope

//block is curly brackets 
// {

//  let year=2024
//here year has block scope
// }

// const can not be re declared or updated , it has  ablock scope, its value cant be chnaged.


// we only use let now

//js new standard is ES6 , according to this , we use let and const now, var is old



let Name="Muneeba Mehmood";
let Degree="Software Engineering";
let CGPA=3.33;
let Age=22;
isEmployeed=false;//boolean


console.log(`I am ${Name} and I am doing ${Degree}. I have ${CGPA} CGPA .`)

y=undefined;


/*console.log("Name:" +Name);
console.log("Degree:" +Degree);
console.log("Cgpa:"+CGPA);
console.log("Age :"+Age);
console.log("Employement status:"+isEmployeed);
*/

console.log(y);


// primitive data types 7
// Numbers,
let year=2024
console.log("year:"+year)
console.log(typeof(year))// checking data type

//string , boolean,null, Bigint Symbol, undefined jin mein koi value nah ho,

let abc=BigInt("123");
console.log(typeof(abc));
console.log(abc)

//Non primitive 
//objects(arrays, functions)

//object is a collection of values
//it has key:value pair

const StudentData={
    name:"Muneeba",
    age:22,
    cgpa:3.33,
    ispass:true

};

//adding anything in string just appears as written
console.log(StudentData);
console.log(typeof(StudentData));

console.log(StudentData["name"])// accessing only name, name is a key

console.log(StudentData.cgpa)//another way of accessing keys
    
StudentData.age=StudentData.age+1;//updating record 
console.log(StudentData)







