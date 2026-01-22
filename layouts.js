
function drawImageContain(img, x, y, maxW, maxH, scale = 1) {
    let baseScale = min(maxW / img.width, maxH / img.height);
    let s = baseScale * scale;

    let w = img.width * s;
    let h = img.height * s;

    image(img, x, y, w, h);
}

// 对话布局
function drawTalkLayout(page) {
    let t = millis() * 0.003;
    let breatheY = sin(t * 0.8) * 2;   // 2px 的轻微上下浮动
    drawImageContain(images.ui_1, 470, 700, 1000, 800, 1.4);
    drawImageContain(images.homo_2, 450 + breatheY, 430, 400, 400, 1.5);

    drawTypewriter(page.text, 750, 820, 980);
    drawImageContain(images.ui_3, 1600, 830, 150, 150, 1.4);

}

//章节标题
function drawSoloLayout(page) {
    if (!page.texts) return;

    push();
    textAlign(CENTER, TOP);

    for (let t of page.texts) {
        textFont(t.font === "ui" ? fontUI : fontText);
        textSize(t.size || 28);

        if (t.color) fill(...t.color);
        else fill('#FFEDB2');

       text(
        t.content,
        width / 2,     // x 居中
        t.y || 200,    // y
        
    );
    }

    pop();
}


function drawSceneLayout(page) {
    image(images.homo_1, 800, 400);
}

function drawExploreLayout(page) {
    image(images.homo_1, 600, 500);
    textSize(36);
    text(page.text, 200, 200, 1600, 200);
}
