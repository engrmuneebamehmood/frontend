//printing even numbers

/*for(let num=0;num<=100;num++)
{
    if (num%2==0)
    {
        console.log(num)
    }
   
}
    */

//number guessing game

let game_num=7;
let guess_num;
prompt("Guess the number:)",guess_num);

while(guess_num!=game_num)
{
   guess_num= prompt("Guess the number again :");

}

alert("Hey you won:)")
    