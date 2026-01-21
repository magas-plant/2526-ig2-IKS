// layouts.js
function drawTalkLayout(page){
    image(images.homo_1, 200, 420);       
    image(images.ui_1, 900, 220);           
    drawTypewriter(page.text, 950, 280, 600, 200);
}

function drawSoloLayout(page){
    textSize(48);
    text(page.text, 200, 200, 1600, 200);
}

function drawSceneLayout(page){
    image(images.homo_1, 800, 400);
}

function drawExploreLayout(page){
    image(images.homo_1, 600, 500);
    textSize(36);
    text(page.text, 200, 200, 1600, 200);
}
