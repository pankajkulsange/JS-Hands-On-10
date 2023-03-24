// answer for question 1
let element1 = document.getElementById("text");
console.log("Answer of first Question:");
console.log(element1);

// answer for question 2
let element2 = document.getElementsByTagName("h1");
console.log("Answer of second Question:");
console.log(element2[0]);

// answer for question 3
let element3 = document.getElementsByClassName("box");
console.log("Answer of third Question:");
console.log(element3[0]);

// answer for question 4
let element4 = document.getElementById("heading2");
console.log("Answer of fourth Question:");
element4.textContent = "Hello World";
console.log(element4);

// answer for question 5
let element5 = document.getElementById("text2");
console.log("Answer of fifth Question:");
function replaceText() {
  element5.innerText = "Welcome to Elevation Academy";
}
console.log(element5);

// answer for question 6
let element6 = document.getElementById("heading");
let color = (element6.style = "color: red");
console.log("Answer of sixth Question:");
console.log(color);

// answer for question 7
let element7 = document.getElementById("cards");
let count = 0;
function changeDir() {
  if (count % 2 === 0) {
    element7.style = "flex-direction: column";
    count++;
  } else {
    element7.style = "flex-direction: row";
    count++;
  }
}
console.log("Answer of seventh Question:");
console.log("click on Change Flex Direction button to toggle flex direction");
console.log("Answer of eight Question:");
console.log("Answer is present in pre tag");

// answer for question 9
setInterval(function () {
  const timer = document.getElementById("timer");
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  const currentTime = hours + ":" + minutes + ":" + seconds;
  timer.innerText = currentTime;
}, 1000);
console.log("Answer of ninth Question:");
console.log("Clock is changing every second");

// game logic
let randomNumber = Math.floor(Math.random() * 100);
