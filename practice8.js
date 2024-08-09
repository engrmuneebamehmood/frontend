let marks=[87,93,64,99,86];

//applying callback &filter methood



let result=marks.filter((m)=>{

    return m>90;
})
console.log(marks);
console.log(result);
console.log(`Marks of all students : ${marks}`);
console.log(`Marks greater than 90 : ${result}`);


//  making an array 


let n=prompt("Enter a number:");

let myarray=[];

for(let i=1;i<=n;i++)
{
    myarray[i-1]=i;

}
console.log(myarray)


//now sum of all numbers of array

let sum=myarray.reduce((pre,next)=>
{

    return pre+next
})
console.log(sum);


// now product or factorial of all numbers 

let product=myarray.reduce((pre,next)=>{
    return pre*next
})
console.log(product);