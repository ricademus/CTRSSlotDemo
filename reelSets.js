/**
 * Created by shieldsy on 01/12/2016.
 */

function setReelsUp() {
    for(var i=0;i<9;i++) {
        var icon = new createjs.Bitmap("images/emptypotion.png");
        icon.name = "icon" +i.toString();
        icon.id = "icon" +i.toString();
        images[i] = icon;
    }
    //Need to refactor into a loop
    images[0].setTransform(200,100,0.1,0.1);
    images[1].setTransform(300,100,0.1,0.1);
    images[2].setTransform(400,100,0.1,0.1);
    images[3].setTransform(200,200,0.1,0.1);
    images[4].setTransform(300,200,0.1,0.1);
    images[5].setTransform(400,200,0.1,0.1);
    images[6].setTransform(200,300,0.1,0.1);
    images[7].setTransform(300,300,0.1,0.1);
    images[8].setTransform(400,300,0.1,0.1);
    for(var i=0;i<images.length;i++) {
        stage.addChild(images[i]);
    }
}

function addSpin() {
    var spin = new createjs.Bitmap("images/spin.png");
    spin.addEventListener("click", spinning);
    spin.setTransform(500,500,0.5,0.5);
    stage.addChild(spin);
}

function spinning() {
    animater();
    for(var i=0;i<9;i++) {
        var rngNum = randomNumber();
        rngCall[i] = rngNum;
    }
    for(var i=0;i<rngCall.length;i++) {
        switch (rngCall[i]) {
            case 1:
                images[i].image.src = "images/redpotion.png";
                break;
            case 2:
                images[i].image.src = "images/yellowpotion.png";
                break;
            case 3:
                images[i].image.src = "images/bluepotion.png";
                break
        }
    }
    calculateWinnings();
    updateBalance("loss",stake, 0);
}

function animater() {
    var spriteSheet = new createjs.SpriteSheet({
        images: ["images/backgroundlightemptypotion_1x6.png"],
        frames: {height: 1024, count: 6, width: 1024},
        framerate: 10,
        // define two animations, run (loops, 1.5x speed) and jump (returns to run):
        animations: {
            fill: [0, 6,false]
        }
    });

    //Need to break up
    var bmpSeq1 = new createjs.Sprite(spriteSheet);
    var bmpSeq2 = new createjs.Sprite(spriteSheet);
    var bmpSeq3 = new createjs.Sprite(spriteSheet);
    var bmpSeq4 = new createjs.Sprite(spriteSheet);
    var bmpSeq5 = new createjs.Sprite(spriteSheet);
    var bmpSeq6 = new createjs.Sprite(spriteSheet);
    var bmpSeq7 = new createjs.Sprite(spriteSheet);
    var bmpSeq8 = new createjs.Sprite(spriteSheet);
    var bmpSeq9 = new createjs.Sprite(spriteSheet);
    bmpSeq1.setTransform(200,100,0.1,0.1);
    bmpSeq2.setTransform(300,100,0.1,0.1);
    bmpSeq3.setTransform(400,100,0.1,0.1);
    bmpSeq4.setTransform(200,200,0.1,0.1);
    bmpSeq5.setTransform(300,200,0.1,0.1);
    bmpSeq6.setTransform(400,200,0.1,0.1);
    bmpSeq7.setTransform(200,300,0.1,0.1);
    bmpSeq8.setTransform(300,300,0.1,0.1);
    bmpSeq9.setTransform(400,300,0.1,0.1);

    stage.addChild(bmpSeq1,bmpSeq2,bmpSeq3,bmpSeq4,bmpSeq5,bmpSeq6,bmpSeq7,bmpSeq8,bmpSeq9);
    bmpSeq1.gotoAndPlay("fill");
    bmpSeq2.gotoAndPlay("fill");
    bmpSeq3.gotoAndPlay("fill");
    bmpSeq4.gotoAndPlay("fill");
    bmpSeq5.gotoAndPlay("fill");
    bmpSeq6.gotoAndPlay("fill");
    bmpSeq7.gotoAndPlay("fill");
    bmpSeq8.gotoAndPlay("fill");
    bmpSeq9.gotoAndPlay("fill");
}