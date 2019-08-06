document.body.style.backgroundColor = "#66ffcc";


let tenSec = document.getElementById('secondTens');
let oneSec = document.getElementById('secondOnes');
let hundreds = document.getElementById('msHundreds');
let tens = document.getElementById('msTens');
let digit = document.querySelectorAll('.digit');
let total = 0;
let count = null;

tenSec.textContent = 0;
oneSec.textContent = 0;
hundreds.textContent = 0;
tens.textContent = 0;

//creating buttons on DOM
let digits = document.querySelector('.digits');
const buttonContainer = document.createElement('div');
buttonContainer.setAttribute('class', "button");
digits.appendChild(buttonContainer);

const startButton = document.createElement('button');
startButton.setAttribute('class', "start");
startButton.textContent = "start";
buttonContainer.appendChild(startButton);

const resetButton = document.createElement('button');
resetButton.setAttribute('class', "reset");
resetButton.textContent = "reset";
buttonContainer.appendChild(resetButton);

function tenSecCount (){
    startButton.style.visibility = "hidden";
    ++total;

    var OneSeconds = Math.floor(total / 100);
    oneSec.textContent = OneSeconds;//did not figure out the rest of numbers

    var tenSeconds = Math.floor(total / 1000); //to ten seconds = one
    if (tenSeconds == 1) {
        clearInterval(count);
        digit.setAttribute('class', "redDigit");
    }      
}

startButton.addEventListener("click", () => {
    count = window.setInterval(tenSecCount, 10);
  });

  resetButton.addEventListener("click", () => {
    clearInterval(count);
    total = 0;
    tenSec.textContent = 0;
    oneSec.textContent = 0;
    hundreds.textContent = 0;
    tens.textContent = 0;
    startButton.style.visibility = "visible";
  });