// reloading page
const reloadPage = () => {
  window.location.reload(true);
};

// finding elements
let randomNumber = Math.floor(Math.random() * 100 + 1); // random number generate
let checkNum = document.getElementById("num"); // input element
let para = document.getElementById("guessText"); // start guessing text
let number = document.getElementById("number"); // ? text
let para1 = document.getElementById("chances"); // changes element
let para2 = document.getElementById("highScore"); // highscore element
let bg = document.getElementsByTagName("body"); // body

let counter = 100;
let highScore = 0;
console.log(randomNumber);

// logic
const checkNumber = () => {
  if (counter === 1) {
    reloadPage();
  }
  let value = Number(checkNum.value);
  // console.log(value);
  if (randomNumber > value) {
    // Number is low
    para.innerText = "Number is low";
  } else if (randomNumber === value) {
    para.innerText = "Hurrey correct guess";
    number.innerText = `${value}`;
    highScore = `${100 - counter + 1}`;
    checkNum.style.backgroundColor = "green";
    bg[0].style = "background-color: green";
  } else {
    para.innerText = "Number is high";
  }
  counter--;
  para1.innerText = `${counter}`;
  para2.innerText = `${highScore}`;
};
