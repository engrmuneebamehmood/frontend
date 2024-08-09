// loops
// ek he kam ko repeatedly krny k leye

// for(initialization , stopping condition , updating)


for(let a=1; a<=5; a++)
{
    console.log("I am Muneeba Mehmod")
}

//calculating sum of 1 to 5

let sum=0
for(let i=1 ; i<=5 ; i++)
    {

        sum=sum+i
        console.log("my sum is ",sum)
    }

    //an infinite loop


    /*for(let m=1;m>=0;m++)
    {
        console.log('hello')
    }
------------------------------------------------
    */

    //while loop

    //while(stopping condition)
   // {
            //logic
            //++
   // }
  

   let count=1;
   while(count<=10)
   {
    console.log("heloo")
    count++;
   }
//-----------------------------------------------------

   //do while 

   /*
   do {

   }while(stopping condition)

   */
let z
   do{
    console.log("priniting do while")
    z++;

   }
   while(z<=10);

    //----------------------------------------------

   //for  of loop used for strings

  let myname ="Muneeba Mehmood";
  let size=0

  for( let i of myname)
  {
    console.log(i);
    size++;
  }
  console.log(size)

   //----------------------------------------------

  // for in  loop used for objects

  let mydata={
    name:"Muneeba",
    degree:"BSE",
    CGPA:3.33,

  };

  for(let key in mydata)
  {
    console.log("key:",key , "value :" , mydata[key])
  }