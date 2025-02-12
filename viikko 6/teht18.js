//a)

const prompt = require('prompt-sync')();


function maxNum(){
    let num1 = parseFloat(prompt("Syota luku:"));
    let num2 = parseFloat(prompt("Syota toinen luku:"));

    if (num1 > num2){
        console.log(num1 + " on suurempi");
    }
    else if  (num1 < num2){
        console.log(num2 + " on suurempi");
    }
    else{
        console.log("Luvut yhta suuria");
    }
}

maxNum();

//b)

function palindromi(){
    let sana = prompt("Syota sana:");

    if (sana == sana.split('').reverse().join('')){
        console.log("Sana on palindromi");
    }
    else{
        console.log("Sana ei ole palindromi");
    }
}

palindromi();