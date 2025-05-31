//Function Declaration

function userProfile(name){

console.log("Hello, " + name + "!");    
}
userProfile("Ganitha");

//Arrow Function
let double =(num)=>{
  
    return num;
}

let num = 6;
console.log(double(num));


//Anonymous Function
const timeOut = globalThis.setTimeout;

let funNme = function()

{
    console.log("This message is delayed by 2 seconds");
    setTimeout(timeOut(),20000);
}
funNme();

// //Immediately Invoke Function

// (function(name){
//     console.log("Immediately Invoked Functions Value is " + name);
// })
// let name;
// (Ganitha);

