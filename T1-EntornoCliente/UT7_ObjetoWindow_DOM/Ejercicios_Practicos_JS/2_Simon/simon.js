const colors = ["green", "red", "yellow", "blue"];

let gameSequence = [];
let userSequence = [];
let level = 0;

const startButton = document.getElementById("start");
const nivelButton = document.getElementById("nivel");

startButton.addEventListener("click", startGame);

function startGame() {
  gameSequence = [];
  userSequence = [];
  level = 0;
  nextLevel();
}
function nextLevel() {
  userSequence = [];
  gameSequence.push(colors[Math.floor(Math.random() * colors.length)]);
  level++;
  displayLevel();
  playSequence();
}
function displayLevel() {
  nivelButton.textContent = `Nivel: ${level}`;
}
function playSequence() {
  let i = 0;
  const interval = setInterval(() => {
    activateColor(gameSequence[i]);
    i++;
    if (i >= gameSequence.length) {
      clearInterval(interval);
    }
  }, 1000);
}
function activateColor(color) {
  const colorElement = document.getElementById(color);
  colorElement.classList.add("active");
  setTimeout(() => {
    colorElement.classList.remove("active");
  }, 500);
}
document.querySelectorAll(".color").forEach((colorElement) => {
  colorElement.addEventListener("click", (e) => {
    const color = e.target.id;
    userSequence.push(color);
    activateColor(color);
    checkUserSequence();
  });
  
});

function checkUserSequence() {
  const currentMove = userSequence.length - 1;
  if (userSequence[currentMove] === gameSequence[currentMove]) {
    if (userSequence.length === gameSequence.length) {
      if (level === 4) {
        nivelButton.textContent = "¡Has ganado el juego!";
      } else {
        setTimeout(nextLevel, 1000);
      }
    }
  } else {
    alert("Te has equivocado. Inténtalo de nuevo.");
    startGame();
  }
}
