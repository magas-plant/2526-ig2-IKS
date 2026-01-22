const pages_02 = [
    {
        id: "02-01",
        layout: "solo",
        bg: "bg_f1",
        texts: [
            {
                content: "Chapter 2",
                font: "ui",
                size: 70,
                y: 210
            },
            {
                content: "The Hunt",
                font: "ui",
                size: 200,
                y: 350
            },
            {
                content: "08 : 15 AM   Open plains",
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
            nextId: "02-02",   //id of the next page
            prev: "p",
            prevId: "01-01"
        }
    },

    {
        id: "02-02",
        layout: "talk",
        bg: "bg_f1",
        character: {
            key: "homo_4",   // images 对象里的 key
            x: 450,          // x 坐标
            y: 430,          // y 坐标
            maxW: 400,       // 最大宽度
            maxH: 400,       // 最大高度
            scale: 1.2,      // 缩放
            breathe: true,    // 是否启用轻微上下浮动

        },
        text: "Hey, grab your tools! \nStep into the forest carefully and check the traps your sister set—there might be food waiting.",
        keys: {
            next: "n",
            nextId: "02-05",   //id of the next page
            prev: "p",
            prevId: "02-01"
        }
    },

    {
        id: "02-05",
        layout: "talk",
        bg: "bg_f1",
        character: {
            key: "homo_4",   // images 对象里的 key
            x: 450,          // x 坐标
            y: 430,          // y 坐标
            maxW: 400,       // 最大宽度
            maxH: 400,       // 最大高度
            scale: 1.2,      // 缩放
            breathe: true,    // 是否启用轻微上下浮动

        },
        text: "Move further into the woods-rabbits are hopping all around.\nBe quick! Tap the rabbit before it escapes!",
        textMode: "instant",
        keys: {
            next: "n",
            nextId: "03-01",   //id of the next page
            prev: "p",
            prevId: "02-01"
        }
    },

];

