const textbox= document.getElementById("textbox");
const toFarenheit = document.getElementById("toFarenheit");
const toCelcius = document.getElementById("toCelcius");
const result = document.getElementById("result");

let temp;
//functiom to convert 
btn.onclick=function(){
        if(toFarenheit.checked){
            // result.textContent="you have selected farenheit";
            temp = Number(textbox.value);
            temp = temp * 9/5 +32;
            result.textContent= "The temperature is: "+temp.toFixed(1)+ " °F";
        }
        else if(toCelcius.checked){
            // result.textContent="you have selected celcius";
            temp = Number(textbox.value);
            temp = (temp-32) - 5/9;
            result.textContent= "The temperature is: "+temp.toFixed(1)+ " °C";
        }
        else{
            result.textContent = "Select a Conversion"
        }
}
