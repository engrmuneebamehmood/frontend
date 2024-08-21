//asynchronous programming

//callback hell
//promise chain
//async await best hy



//synch means k jis sequence mn hum ny code likha hy usi mn woh liny by line runhoga, hr next instruction pichli wali k complete hony ka wait kry ge

//asynchronus means k hum bagier sequence k bagier wait kiye he hum code execute kr skty hn, yh flow ko block ni hony deta

// api k leye hum asynchronus programming he krty hn

//parallel exeution hoti rehi hy is mn

//set timeout fuction 

//-----------------------------------------------------

/*console.log("hi")

function hello()
{
    console.log("how are you??")
}
setTimeout(hello,2000) //function ka nam ur sath time

// 2 second =2000
// yh bta rha hai k 2 sec k bad yh helo function runhoga

console.log("bye")
--------------------------------------------------

//callback ek function hy ju dosry function mein as an argument pass hota hy
// callback function ko call krne k liye dosry function ko call karna hota hy
/*
--------------------------------------
function sum (a,b){
    console.log(a+b)
}


function calculator(a,b,sum)
    {
        sum(a,b)

    }


calculator(3,6,sum);
------------------------------------------------------

// callback hell ek msla hy callback ko use krny sy ju ata hy

//nested callbacks below one another

//ek callback k ander dosra callback us k ander ek ur callback


/*function getdata(dataid){
    this.dataid=dataid;
    console.log("data id :", dataid);
}

//getdata(9)
setTimeout(getdata(7),1000)

function getdata(dataid,getnextdata){
setTimeout(()=>{
    console.log("data id :", dataid);
    if( getnextdata){
        getnextdata();
    }
   
},2000)}

//call back function

//call back hell

getdata(9,()=>{
    getdata(10,()=>{
        getdata(11,()=>{
            getdata(12)
        })
    })
});
*/

// tu to solve this, we have promise




//promise
//promise is a object that has two methods resolve and reject
/*


let promise=new Promise((resolve ,reject)=>{

    console.log("i am a promise");
   // resolve("success");
    reject("failed")

});
*/

//resolve reject du handlers hn

//states : pending,fullfilled, rejected

//then and catch sy hum promise ko use krty

//then for resolve
//catch for reject


//api hamien promise bhjti hy k data fetch ho jaye ga
//jisy hum promise feature sy deal krty



/*
-------------------
function getdata(dataid,getnextdata){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data id :", dataid);
            if( getnextdata){
                getnextdata();
            }
           
        },2000)}
      )}

      getdata();
      ------------------------------------------------
    const getPromise=()=>{

        return new Promise((resolve,reject)=>{

            console.log("i am a promise");
            //resolve("promise is fullfilled");
            reject("promise is rejected");
          })
      };


     let mypromise=getPromise();


     mypromise.then((res)=>{
        console.log("yayyyyyyyyyyyyyyy");
     })

    mypromise.catch((err)=>{
        console.log("oh nooooo")
     })
     */

     
//promise chaining
     let asyncmyfunction1=()=>{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                console.log("i am a promise data1");
                resolve("i am a done");
        },2000)
     })};

     let asyncmyfunction2=()=>{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                console.log("i am a promise data2");
                resolve("i am a done");
        },2000)
     })};

    console.log("fetching first......")
     let p1=asyncmyfunction1();
     p1.then((res)=>{
        console.log("successfully promise resolved",res)
                console.log("fetching second......")
                let p2=asyncmyfunction2();
                 p2.then((res)=>{
                console.log("successfully promise resolved",res)
            })
     })

     