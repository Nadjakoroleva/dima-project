let x = 0;
let v = 5;
let y = 10;
let v1 = 7;
let c = 0;
let s = 120;
let r = 50;

function setup() {
  createCanvas(1000, 500);
  noStroke();
}

function draw() {
  background("#FFFFFF");
  fill("#080101");
  ellipse(x, y, r, r);
  rect(mouseX, 400, s, 20);

  if (x < 0 || x > width) {
    v = -v;
  }

  if (y < 0) {
    v1 = -v1;
  }

  if (x > mouseX && x < mouseX + 120) {
    if (y > height - 120) {
      v1 = -v1;
      c = c + 1;
      if (c > 1 && c < 8) {
        s = s - 12;
        r = r - 6;
      }
    }
  } // Удар шарика об платформу

  textSize(50);
  text(c, 900, 100); //Счет

  if (y > height + 30) {
    v1 = 0;
    v = 0;
    textSize(50);
    text("Lost", 420, 200);
    x = 4000;
    y = 4000;
  }
  x = x + v;
  y = y + v1;
}
