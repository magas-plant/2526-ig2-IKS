
function drawImageContain(img, x, y, maxW, maxH, scale = 1) {
    let baseScale = min(maxW / img.width, maxH / img.height);
    let s = baseScale * scale;

    let w = img.width * s;
    let h = img.height * s;

    image(img, x, y, w, h);
}


function drawTalkLayout(page) {
    let t = millis() * 0.003;
    let breatheY = sin(t * 0.8) * 2;   // 2px 的轻微上下浮动


    drawImageContain(images.ui_1, 500, 750, 900, 800, 1.4);
    drawImageContain(images.homo_2, 500 + breatheY, 600, 400, 400, 1.1);


    //image(images.ui_1, 900, 220);
    drawTypewriter(page.text, 750, 820, 980);
}

function drawSoloLayout(page) {
    textSize(48);
    text(page.text, 200, 200, 1600, 200);
}

function drawSceneLayout(page) {
    image(images.homo_1, 800, 400);
}

function drawExploreLayout(page) {
    image(images.homo_1, 600, 500);
    textSize(36);
    text(page.text, 200, 200, 1600, 200);
}
