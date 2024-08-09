//arrays
//positions in array

let result=[50,70,80];
console.log(result);
console.log(length.result);

console.log(typeof(result));

let names=["Muneeba","Mehmood", "Tahir"]
console.log(names)


//array indices or indexes
console.log(names[2])

names[1]="Daughter"
console.log(names)


//loop in arrays

for(let position=0;position<names.length;position++)
{
    console.log(names[position])
}


//for of loop

for(let item of result)
{
    console.log (item)
}


//objects
//keys in array

let marks={

    student1:50,
    student2:70,
    student3:80
};

console.log(marks.student1)


//
let cities=["Pindigheb","Rawalpindi", "Islamabad"]
for (let destination of cities)
{
    console.log (destination.toLowerCase())
    console.log(destination.toUpperCase())
}


//aray methoods

//push adds at end
//unshift adds at start

//pop deletes from end
//shift deletes from the start

console.log(cities.push("Multan"))// it adds something at end of array

console.log(cities)

console.log(cities.pop())//it deletes item from end of array and returns its value that it has deleted 
console.log(cities)


console.log(cities.toString())// it returns new string

console.log(names.concat(result))// it joins two or more arrays

console.log(cities.unshift("Quetta"))// adds at the start of array //like push
console.log(cities)
//console.log(cities.shift())// delete from the start and return the value that it has deleted // like pop


//slice return a piece of array

//console.log(cities.slice(0,3))

//splice chnage original array , like it ads update or delete
//starting index, kitny item del krny, new value
cities.splice(2,0,"kashmir")// adding kashmir
console.log(cities)

cities.splice(2,2)//deleting kashmir

console.log(cities)

cities.splice(0,1,"Muzaffarabad")// deleting index0 city nd replacing it with new value

console.log(cities)


console.log(result)
result.splice (2,0,60)
console.log(result)
