const snake = document.getElementById("snake");
const posX = document.getElementsByClassName("x");
const posY = document.getElementsByClassName("y");
let x = 0;
let y = 0;

window.addEventListener("keypress", (e) => {
  if (e.code == "KeyW") {
    x += 1;
    distanceXMax(e);
    console.log(x, y);
    console.log("key Z");
  } else if (e.code == "KeyS") {
    x -= 1;
    distanceXMax(e);
    console.log(x, y);
    console.log("key S");
  } else if (e.code == "KeyA") {
    y -= 1;
    distanceYMax(y);
    console.log(x, y);
    console.log("key Q");
  } else if (e.code == "KeyD") {
    y += 1;
    distanceYMax(y);
    console.log(x, y);
    console.log("key D");
  }
});

const distanceXMax = (e) => {
  while (x < 20 && y < 20) {
    setInterval(() => {
        
    }, 100);
  }
};

const distanceYMax = (e) => {
    while (x < 20 && y < 20) {
      setInterval(() => {
          
      }, 100);
    }
  };
  