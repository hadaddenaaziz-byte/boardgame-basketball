let btnOneEl = document.getElementById("btn1-el");
let btnTwoEl = document.getElementById("btn2-el");
let btnThreeEl = document.getElementById("btn3-el");
let sum1El = document.getElementById("sum1-el");
let countOne = 0;

let btn12El = document.getElementById("btn12-el");
let btn22El = document.getElementById("btn22-el");
let btn23El = document.getElementById("btn23-el");
let sum2El = document.getElementById("sum2-el"); 
let countTwo = 0;

function incOne(){
    countOne += 1;
    sum1El.textContent = countOne;
}

function incTwo(){
    countOne += 2;
    sum1El.textContent = countOne;
}

function incThree(){
    countOne += 3;
    sum1El.textContent = countOne;
}

function incSecOne(){
    countTwo += 1;
    sum2El.textContent = countTwo;
}

function incSecTwo(){
    countTwo += 2;
    sum2El.textContent = countTwo;
}

function incSecThree(){
    countTwo += 3;
    sum2El.textContent = countTwo;
}

