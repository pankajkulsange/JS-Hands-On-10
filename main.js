// game logic
let checkNum = document.getElementById("num");
let btn = document.getElementById("checkBtn");
let para = document.getElementById("guessText");
let number = document.getElementById("number");
let para2 = document.getElementById("highScore");
let randomNumber = Math.floor(Math.random() * 100);
console.log(randomNumber);
let counter = 100;
btn.addEventListener("click", () => {
  if (randomNumber < Number(checkNum.value)) {
    para.innerText = "Number is High";
    counter--;
  } else if (randomNumber > Number(checkNum.value)) {
    number.innerText = "Number is Low";
    counter--;
  } else {
    number.innerText = randomNumber;
    para.innerText = "Hurrey correct guess";
    counter--;
    para2.innerText = `Highest Score is ${counter}`;
    let bg = document.getElementsByTagName("body");
    bg[0].style = "background-color: green";
    checkNum.style = "background-color: green";
  }
});
