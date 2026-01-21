let images = [];
let currentState = 0;

function preload() {
  images[0] = loadImage("assets/ch0/00-01.png");
  images[1] = loadImage("assets/ch1/01-01.png");
}

function setup() {
  createCanvas(1920, 1080);
}

function draw() {
  background(0);
  if (images[currentState]) {
    let img = images[currentState];
    let scaleFactor = min(width / img.width, height / img.height);
    let w = img.width * scaleFactor;
    let h = img.height * scaleFactor;
    image(img, (width-w)/2, (height-h)/2, w, h);
  }
}


// 键盘翻页
function keyPressed() {
  if (key === 'n') { // 下一张
    currentState++;
    if (currentState >= images.length) currentState = images.length - 1;
  }
  if (key === 'p') { // 上一张
    currentState--;
    if (currentState < 0) currentState = 0;
  }
}
