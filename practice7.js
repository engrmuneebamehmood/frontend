//practice code on functions


function CountVowels()

{

    let input_text=prompt("Enter a text:")
    let count=0;
    for(const alphabet of input_text)
    {
        //a, e, i, o , u

        if(alphabet==="a"|| alphabet==="e"||alphabet==="i"|| alphabet==="o"|| alphabet==="u")
        {
            count++
            
        }


    }
    console.log("Number of vowels in this text are :", count)


      

}
//CountVowels()


//with arrow functions

const countvowels=(text)=>
{
    
    let input_text=prompt("Enter a text:")
    let count=0;
    for(const alphabet of input_text)
    {
        //a, e, i, o , u

        if(alphabet==="a"|| alphabet==="e"||alphabet==="i"|| alphabet==="o"|| alphabet==="u")
        {
            count++
            
        }


    }
    console.log("Number of vowels in this text are :", count)


}
countvowels()

