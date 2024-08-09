// call back function

//forEach loop// for each element in array

// it is a methood, when we associate a function to an object it becomes methood


// it is a function that is passed as an argument or parameter  to another function




let myarray=[1,2,3,4,5];

// 3 parametres in call back
//value , index, array

/*
myarray.forEach(function  print(value)// value at each index of array

{
    console.log(value)

})

*/


// arrow function

/*
let abcarray=["A", "B","C"]
abcarray.forEach((alphabet)=>
{
    console.log(alphabet)
})

*/


//higher order function or methood

//ya tu dosry function ko kuch return krty hain ya usko as a parameter lety hn

//call back higher order function hai


let SqaureArray=[2,3,4,5,6,10]

//way 1

SqaureArray.forEach(function(number){

    let sqaureroot= number * number;
    console.log (sqaureroot)

})

// another way 

let CalculateSqaure=(num)=>{

        let sqaureroot= num * num;
        console.log (sqaureroot)
    
    
}
SqaureArray.forEach(CalculateSqaure);