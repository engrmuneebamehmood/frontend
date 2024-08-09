//string practice 

let FullName =prompt("Enter your Full Name without spaces:")

FullName=FullName.toLowerCase();
let namelength=FullName.length;


//@ muneebamehmood 14
//console.log(`@ ${FullName} ${namelength}`);

//@muneebamehmood14
let username='@' +FullName+ namelength;

console.log("Hey your username is " + username)
