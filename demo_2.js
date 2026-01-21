let bg;
let character;
let bubble;

let message = "Good morning! \nIt’s around 60000 B.C. and you just woke up in your home，lying on grass and fur beside your small tribe. \nA new day begins—it’s time to get to work and survive."; 
let displayText = "";
let index = 0;
let lastTime = 0;
let interval = 50; // 每个字符显示间隔 (毫秒)

function preload() {
  bg = loadImage("assets/Feld_Tag.png");
  character = loadImage("assets/waving_hello.png");
  bubble = loadImage("assets/text_leather_small.png");
}

function setup() {
  createCanvas(1920, 1080);
  textSize(24);
  fill(0);
}

function draw() {
  background(0);

  // 背景
  image(bg, 0, 0);

  // 人物
  image(character, 100, 200); // 可以调整大小

  // 对话气泡
  image(bubble, 450, 50);

  // 打字机文字效果
  if (millis() - lastTime > interval && index < message.length) {
    displayText += message.charAt(index);
    index++;
    lastTime = millis();
  }

  text(displayText, 470, 100, 250); // 在气泡里显示文字
}
