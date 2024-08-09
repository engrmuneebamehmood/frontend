//filter methhod
// yh bhi new array return krta hai based on cpme condition
//mtlb condition ke base py original array mn sy kuch values filter out kr k new array generate krta hai


let numbers=[10,23,45,65,24,64,100]

let evennumbersarray=numbers.filter((num)=>{
    //return num %2==0;
    return num%2 !==0;
   // return num<50;

})
console.log(numbers)
console.log(evennumbersarray)