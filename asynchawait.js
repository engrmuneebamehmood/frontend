// asynch

//it returns a promise

//await

//yh wait krta hai promise k fullfill ya reject hony ka
//yh sirf asynch function ke exection ko stop krta hai jb tk k promise fullfill ya reject mah ho jaye





function myapi(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{

        console.log(" i am an api");
        //resolve("data fetch successfully");
        //resolve(200)
        reject("oh no")
        },2000)
        
})
}
async function getweatherdata()
{
    await myapi();
    await myapi();
}

getweatherdata()




//iife    immediately invoked function expression

// yh woh function hai ju define hoty sath he call ho jat hai
