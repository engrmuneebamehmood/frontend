// checking  if a number is a multiple of 5 or not


/*let num=prompt("Enter any number");

if(num % 5===0)
{

    console.log(num,"is a multiple of 5")
}
else{
    console.log(num, "is not a multiple of 5")
}
    */


let marks=prompt("Enter your marks:")

if(marks>=80 && marks<=100)
{
    console.log("your grade is A")
}
else if (marks>=70 && marks<=89)
{
    console.log("your grade is B")
}

else if (marks>=60 && marks<=69)
{
    console.log("your grade is C")
}

else if (marks>=50 && marks<=59)
{
    console.log("your grade is D")
}

else{
    console.log("your grade is F")

}