const pages_01 = [
    {
        id: "01-01",
        layout: "solo",
        bg: "bg_f2",
        texts: [
            {
                content: "Chapter 1",
                font: "ui",
                size: 70,
                y: 210
            },
            {
                content: "Wake up ",
                font: "ui",
                size: 200,
                y: 350
            },
            {
                content: "05 : 30 AM   River camp",
                size: 60,
                y: 670
            },
            {
                content: "Continue",
                font: "ui",
                size: 60,
                y: 840
            }
        ],
        keys: {
            next: "n",
            nextId: "01-02",   //id of the next page
            prev: "p",
            prevId: null
        }
    },
    {
        id: "01-02",
        layout: "talk",
        bg: "bg_f1",
        character: {
            key: "homo_2",   // images 对象里的 key
            x: 450,          // x 坐标
            y: 430,          // y 坐标
            maxW: 400,       // 最大宽度
            maxH: 400,       // 最大高度
            scale: 1.5,      // 缩放
            breathe: true    // 是否启用轻微上下浮动
        },
        text: "Good morning! \nIt's around 60000 B.C. and you just woke up in your home,lying on grass and fur beside your small tribe. \nA new day begins-it's time to get to work and survive.",
        keys: {
            next: "n",
            nextId: "01-03",   //id of the next page
            prev: "p",
            prevId: "01-01"
        }
    },
    {
        id: "01-03",
        layout: "talk",
        bg: "bg_f1",
        character: {
            key: "homo_2",   // images 对象里的 key
            x: 450,          // x 坐标
            y: 430,          // y 坐标
            maxW: 400,       // 最大宽度
            maxH: 400,       // 最大高度
            scale: 1.5,      // 缩放
            breathe: true    // 是否启用轻微上下浮动
        },
        text: "Pick your materials before you go hunting.\nThe glowing circles show where the materials lie-\ncollect what you need.",
        textMode: "instant",
        keys: {
            next: "n",
            nextId: "01-06",   //id of the next page
            prev: "p",
            prevId: "01-02"
        }
    },
    {
        id: "01-06",
        layout: "talk",
        bg: "bg_f1",
        character: {
            key: "homo_2",   // images 对象里的 key
            x: 450,          // x 坐标
            y: 430,          // y 坐标
            maxW: 400,       // 最大宽度
            maxH: 400,       // 最大高度
            scale: 1.5,      // 缩放
            breathe: true    // 是否启用轻微上下浮动
        },
        text: "Nice! Your new stone tool is ready to use!\nTime to move on! Flip the page to start the next chapter. ",
        textMode: "instant",
        keys: {
            next: "n",
            nextId: "02-01",   //id of the next page
            prev: "p",
            prevId: "01-03"
        }
    },
];

