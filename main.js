// const snake = document.getElementById("snake");
// const posX = document.getElementsByClassName("x");
// const posY = document.getElementsByClassName("y");
// let x = 0;
// let y = 0;
const app = document.getElementById("app");
const snake = [
  {
    x: 0,
    y: 0,
  },
];

const tile = document.createElement("div");
tile.classList.add("tile");

tile.style.top = 0;
tile.style.left = 0;
app.appendChild(tile);

const RIGHT = "RIGHT";
const LEFT = "LEFT";
const TOP = "TOP";
const BOTTOM = "BOTTOM";
let direction = RIGHT;
let randomX = Math.floor(Math.random() * 1190);
let randomY = Math.floor(Math.random() * 590);


document.addEventListener("keypress", (e) => {
  if (e.code == "KeyW") {
    direction = TOP;
  } else if (e.code == "KeyS") {
    direction = BOTTOM;
  } else if (e.code == "KeyA") {
    direction = LEFT;
  } else if (e.code == "KeyD") {
    direction = RIGHT;
  }
});

const timer = setInterval(() => {
  switch (direction) {
    case TOP:
    if (snake[0].y > 0) {
      snake[0].y -= 10;
      tile.style.top = snake[0].y + "px";
    }
      break;
    case RIGHT:
    if (snake[0].x < 1190) {
      snake[0].x += 10;
      tile.style.left = snake[0].x + "px";
    }
      break;
    case LEFT:
    if (snake[0].x > 0) {
      snake[0].x -= 10;
      tile.style.left = snake[0].x + "px";
    }
      break;
    case BOTTOM:
    if (snake[0].y < 590) {
      snake[0].y += 10;
      tile.style.top = snake[0].y + "px";
    }
      break;
}
}, 20);
