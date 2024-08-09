
//practice cod eon arrays
/*
let markarray=[85,97,44,37,76,60]

let sum=0

for(let i of markarray)
{
    sum=sum+i
    

}
console.log("Sum:",sum)

let average=sum / markarray.length

console.log("Average:",average)

console.log(`The sum is ${sum} and average is ${average}`)
*/


/*

let prices=[250,645,300,900,50]

//10 % off means 
//900-90=810
//300-30=270
//250-25=225
//50-5=45
//645-64.5=580.5

let off=0;
for (let p of prices)
{
    //console.log(` Price Value at index  ${off} = ${p}`)
    
    console.log(`Original Price was : ${p} `)
    let offer=p/10;
    prices[off]=prices[off]-offer;
    console.log(`And Price after 10% off  : ${prices[off]}`)
    off++;
   
}

*/


let companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
console.log(`Companies names are : ${companies}`);

companies.shift()
console.log(`Comapnies names after deleting first name: ${companies} `)

companies.splice(1,1,"Ola")
console.log(`Companies names after replacing uber with ola : ${companies}`)

companies.push("Amazon")
console.log(`Comapnies names after adding amazon : ${companies}`)
