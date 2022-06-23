// const snake = document.getElementById("snake");
// const posX = document.getElementsByClassName("x");
// const posY = document.getElementsByClassName("y");
// let x = 0;
// let y = 0;

const app = document.getElementById("app");
const btnStart = document.createElement('btn');
app.appendChild(btnStart) ;


// const start = () => {
  const snake = [];
  const snakeDiv = document.createElement("div");
  snakeDiv.classList.add("tile");
  snakeDiv.style.top = 0;
  snakeDiv.style.left = 0;
  snake.push(snakeDiv);
  app.appendChild(snakeDiv);

  let appleCoord = {
    x: 100,
    y: 100,
  };

  const apple = document.createElement("div");
  apple.id = "redApple";
  apple.style.top = appleCoord.x + "px";
  apple.style.left = appleCoord.y + "px";
  app.appendChild(apple);
// };

const RIGHT = "RIGHT";
const LEFT = "LEFT";
const TOP = "TOP";
const BOTTOM = "BOTTOM";
let direction = RIGHT;

const buildBonus = () => {
  let find = true;
  do {
    appleCoord.x = Math.floor(Math.random() * 119) * 10;
    appleCoord.y = Math.floor(Math.random() * 59) * 10;
    find = snake.find(
      (data) => data.x === appleCoord.x && data.y === appleCoord.y
    );
  } while (find);
  apple.style.top = appleCoord.y + "px";
  apple.style.left = appleCoord.x + "px";
};

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
  const head = snake[snake.length - 1];
  const y = parseInt(head.style.top);
  const x = parseInt(head.style.left);

  switch (direction) {
    case TOP:
      if (y > 0) {
        let newHead;
        if (x === appleCoord.x && y === appleCoord.y) {
          console.log("tu as mangé");
          newHead = head.cloneNode();
          buildBonus();
        } else {
          newHead = snake.shift();
        }
        newHead.style.left = parseInt(head.style.left) + "px";
        newHead.style.top = parseInt(head.style.top) - 10 + "px";
        snake.push(newHead);
        app.appendChild(newHead);
      }
      break;
    case RIGHT:
      if (x < 1190) {
        let newHead;
        if (x === appleCoord.x && y === appleCoord.y) {
          console.log("tu as mangé");
          newHead = head.cloneNode();
          buildBonus();
        } else {
          newHead = snake.shift();
        }
        newHead.style.top = parseInt(head.style.top) + "px";
        newHead.style.left = parseInt(head.style.left) + 10 + "px";
        snake.push(newHead);
        app.appendChild(newHead);
      }
      break;
    case LEFT:
      if (x > 0) {
        let newHead;
        if (x === appleCoord.x && y === appleCoord.y) {
          console.log("tu as mangé");
          newHead = head.cloneNode();
          buildBonus();
        } else {
          newHead = snake.shift();
        }
        newHead.style.top = parseInt(head.style.top) + "px";
        newHead.style.left = parseInt(head.style.left) - 10 + "px";
        snake.push(newHead);
        app.appendChild(newHead);
      }
      break;
    case BOTTOM:
      if (y < 590) {
        let newHead;
        if (x === appleCoord.x && y === appleCoord.y) {
          console.log("tu as mangé");
          newHead = head.cloneNode();
          buildBonus();
        } else {
          newHead = snake.shift();
        }
        newHead.style.left = parseInt(head.style.left) + "px";
        newHead.style.top = parseInt(head.style.top) + 10 + "px";
        snake.push(newHead);
        app.appendChild(newHead);
      }
      break;
  }
}, 30);
