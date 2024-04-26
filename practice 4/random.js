const minimum = 1;
const maximum = 100;

const answer = Math.floor(Math.random() * (maximum-minimum +1))+minimum;
console.log(answer);
let attempt = 0;

let guess;

let run=true;

while(run){
    guess=window.prompt(`GUESS A NUMBER BETWEEN ${minimum} - ${maximum}`);
    guess =Number(guess);

    if(isNaN(guess)){
        window.alert("enter a valid number");
    }
    else if(guess < minimum || guess >maximum){
        window.alert("enter a valid number");
    }
    else{
        attempt++;
        if(guess>answer){
            window.alert("your too high!");
            // console.log(answer);
        }
        else if(guess<answer){
            window.alert("your low high");
            // console.log(answer);
        }
        else{
            window.alert(`your guess is crct and the right answer is ${answer}.It took you ${attempt}attempt`);
            run = false;
        }
    }
}

