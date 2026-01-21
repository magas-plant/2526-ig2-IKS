function preload(){
  images.bg_f1=loadImage("assets/Backgrounds/Feld_Nachmittag.png");
  images.bg_f2=loadImage("assets/Backgrounds/Feld_Tag.png");
  images.bg_h1=loadImage("assets/Backgrounds/Höhle_Nacht_Feuer.png");
  images.bg_h2=loadImage("assets/Backgrounds/Höhle_Nacht.png");
  images.bg_h3=loadImage("assets/Backgrounds/Höhle_Tag.png");

  images.Bun_1=loadImage("assets/Bunnies/bunny_1_bush.png");
  images.Bun_2=loadImage("assets/Bunnies/bunny_1.png");
  images.Bun_3=loadImage("assets/Bunnies/bunny_2_bush.png");
  images.Bun_4=loadImage("assets/Bunnies/bunny_2.png");
  images.Bun_5=loadImage("assets/Bunnies/bunny_3_bush.png");
  images.Bun_6=loadImage("assets/Bunnies/bunny_3.png");
  
  images.homo_1=loadImage("assets/Homo_Sapiens/waving_hello_2.png");
  images.homo_2=loadImage("assets/Homo_Sapiens/waving_hello.png");
  images.homo_3=loadImage("assets/Homo_Sapiens/sitting_homo_sapiens_happy_end.png");
  images.homo_4=loadImage("assets/Homo_Sapiens/seeking_trails.png");
  images.homo_5=loadImage("assets/Homo_Sapiens/painting_woman.png");
  images.homo_6=loadImage("assets/Homo_Sapiens/painting_man.png");
  images.homo_7=loadImage("assets/Homo_Sapiens/hiding.png");
  images.homo_8=loadImage("assets/Homo_Sapiens/crouching_crafting.png");
  images.homo_9=loadImage("assets/Homo_Sapiens/back_with_bow.png");
  
  images.ui_1=loadImage("assets/UI/text_leather_small.png");
  images.ui_2=loadImage("assets/UI/text_leather_large.png");

}

function setup(){
  createCanvas(1920,1080);
  textSize(36); fill(0);
}

function draw(){
  background(0);
  let page = pages[currentPage];
  if(images[page.bg]) image(images[page.bg],0,0);

  switch(page.layout){
    case "talk": drawTalkLayout(page); break;
    case "solo": drawSoloLayout(page); break;
    case "scene": drawSceneLayout(page); break;
    case "explore": drawExploreLayout(page); break;
    case "special": drawSpecialLayout(page); break;
  }
}
