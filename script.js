
var total = "" ;
function press(num){
    displayDiv.innerText += num
    total += num
    console.log(total)
} 
function setOP(opt){
    total += opt
    displayDiv.innerText= ""
    console.log(total)
}
function clr(){
    displayDiv.innerText= ""
    total = ""
}
function calculate(){
    displayDiv.innerText= ""
    total = eval(total).toString();
    displayDiv.innerText= total
    console.log(total)
}


var numData = document.querySelectorAll=(".data-number");
var operator = document.querySelectorAll=(".operator");

var displayDiv = document.querySelector("#display");
displayDiv.innerText = "";