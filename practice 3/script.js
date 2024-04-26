
// .checked is used to check the state of HTML checkbox or radio button 


const checkbtn = document.getElementById("checkbtn");
const visabtn = document.getElementById("visabtn");
const masterbtn = document.getElementById("masterbtn");
const paypalbtn = document.getElementById("paypalbtn");
const submitbtn = document.getElementById("submitbtn");
const subscribeResult = document.getElementById("subscribeResult");
const paymentResult = document.getElementById("paymentResult");


submitbtn.onclick = function(){
    if(checkbtn.checked){
            subscribeResult.textContent="you have subscribed. ";

    }

    else{
        subscribeResult.textContent="you have not subscribed. ";
    }


    if(visabtn.checked){
        paymentResult.textContent="you have selected visa card";

    }
    else if(masterbtn.checked){
        paymentResult.textContent="you have selected master card";
    }

    else if(paypalbtn.checked){
        paymentResult.textContent='you have selected paypal';
    }

    else {
        
        paymentResult.textContent="you have not selected any of the above";
    }
}