/* var a=10
var b=30

console.log(a+b)  // addition of two numbers
 */


/* function hello(){
    console.log("hello world")
}

function hi(){
    console.log("hi bro")
}

hello(),hi() */ // jst a function call module


function area(l,b){
    var a=l*b
    console.log("Area is :"+a)
}

var length=10
var width =20

area(length,width)

/* math func */

// math.sqrt() - square root 
// math.abs() - absolute whole number (only positive)
// math.sin() -sin value
// math.PI() - pi value
// math.floor() - round to lower number
// math.ceil() - opposite of math.floor
// math.log() - log value
// math.tan - tan value
// math.trunc() - truncate point digits
// math.cos() - cos value
// math.sign() - sign changing
// math.max() - maximum of numbers
// math.min() - minimum of numbers


/* The name attribute is added to radio buttons to group them and select any one from them */



/* strict equality and inequality operator: */
// the "===" or "!==" are the strict equality operator , these operator compares not only values but data type also

/* string slicing: */
// string.slice(x,y) - slices the string from one index to other without modifying the original string.

/* string methods */


// spread operator "..." three dots.

/* it allows an iterable such as a array or string 
    to be expanded into seperate elements (unpacks the elements.)*/


/* for example :

let number=[1,4,5,8] //in this array we need to find the max
let maximum = Math.max(...numbers)//this spread operator separates 
                                 // the elements in array (if we give Math.max(numbers) it won't work)
                                 
console.log(maximum)*/



// rest parameters (...rest) allow a function work with a variable number of arguments by bundling them into an array


// spread expands an array into seperate elements

// rest bundles seperate elements into an array


/* 
function openFridge (...foods) { onsole.log(...foods);
}
const food1 = "pizza";
const food2 = "hamburger";
const food3 = "hotdog";
const food4 = "sushi";

const foods = "ramen";
openFridge (food1, food2, food3, food4, food5); */