//reduce function


//it reduces the orginal araray into a single value


let myarray=[1,2,3,4]

const result=myarray.reduce((previous,next)=>
{

    //return previous+next

    return previous>next ?  previous :next
    //ternary operator for condition check
    //checking gretaest number of array 
    //if previous is gretaer than next , return previous else return next
})
console.log(result)