// count program 
const btninc = document.getElementById("btninc")
const btndecrease = document.getElementById("btndecrease")
const btnreset = document.getElementById("btnreset")
const lal  = document.getElementById("lal")
let count = 0;

btninc.onclick = function(){
    count ++;
    lal.textContent=count;
}
btndecrease.onclick = function(){
    count-=1;
    lal.textContent = count;
}

btnreset.onclick = function(){
    count = 0;
    lal.textContent = count;
}