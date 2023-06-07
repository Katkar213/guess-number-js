// Q10 .....

let randomNumber=parseInt(Math.random()*100+1);
console.log(randomNumber)


let inputvalue=document.querySelector("input");
inputvalue.style.border="2px solid black";

let result=document.getElementsByClassName("randomNumber")

let chace=document.getElementById("count")


let highscore=document.getElementById("highscore");
let body=document.querySelector("body");
 
let count=100;


function check(){

    let a=typeof(inputvalue.value)

   

     if(inputvalue.value>randomNumber){
       result[0].innerText="Your Guess Is High"
       count--;
       chace.innerText=`💯Chances: ${count}`
    //    highscore.innerText=`High Score: ${count}`

    }
    
    else if(inputvalue.value<randomNumber){
        result[0].innerText="Your Guess Is Low"
        count--;
        chace.innerText=`💯Chances: ${count}`
        // highscore.innerText=`High Score: ${count}`
     
     }

    else{
        let colors=result[0].innerText="😍Hurray You Won😍"
        result[0].style.color="blue";
        count--;
        chace.innerText=`💯 Chances: ${count}`
        highscore.innerText=`🤌 High Score: ${count}`
       body.style.backgroundColor="lightgreen"
       
     } 
}
function reload(){
    count=100;
    chace.innerText=`💯Chances: ${count}`
    inputvalue.value=null;
 }