let strname=" Muneeba Mehmood ";
console.log(strname.length)
console.log(strname)
console.log(strname[1],strname[4])

console.log(strname.toUpperCase())
console.log(strname.toLowerCase())//camel case 
console.log(strname.trim())
//trim removes empty spaces from start and end

console.log(strname.slice(1,6))//start and end 1 to 5 print hoga

console.log(strname.replace("e","i"))//replacin e with i 
console.log(strname.replaceAll("e","i"))//replacin e with i 

console.log(strname.charAt(1))

let specialstring=`this is special`;
console.log(typeof(specialstring))

let Name="Muneeba Mehmood";
let Degree="Software Engineering";

console.log(Name.concat( Degree))//concatinating
console.log(Name + Degree)//concatinating


let CGPA=3.33;
let Age=22;
isEmployeed=false;//boolean

//template literals
//string interpolation
console.log(`I am ${Name} and I am doing ${Degree}. I have ${CGPA} CGPA .\n I am doing js these days`)

//escape characters \n next line
//iske length single character ke trh count hoti hy


