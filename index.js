var numb = 1;
var num = document.getElementById('number');
num.innerHTML=numb;

var note = document.getElementById("note");

document.getElementById("butn1").addEventListener("click", inc);
document.getElementById("butn2").addEventListener("click", dec);
document.getElementById("butn3").addEventListener("click", reset);
document.getElementById("butn4").addEventListener("click", write);

function inc() {
    numb++; 
    num.innerHTML=numb;
}

function dec() {
    numb--;
    if(numb<0){
        numb=0;
    }
    num.innerHTML=numb;
}
   
function reset() {
    numb = 0;
    num.innerHTML=numb
}

function write() {
    numb = +prompt("Write Number");
    if(numb<0){
        numb=-numb;
    }
    num.innerHTML=numb;
}




