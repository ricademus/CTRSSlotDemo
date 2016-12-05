/**
 * Created by shieldsy on 01/12/2016.
 */
function addReelSets() {
    for(var i=0; i<15; i++) {
        var reelIcon = new PIXI.Sprite(PIXI.loader.resources["images/emptypotion.png"].texture);
        images[i] = reelIcon;
    }
    images[0].scale.set(0.1,0.1);
    images[1].scale.set(0.1,0.1);
    images[2].scale.set(0.1,0.1);
    images[3].scale.set(0.1,0.1);
    images[4].scale.set(0.1,0.1);
    images[5].scale.set(0.1,0.1);
    images[6].scale.set(0.1,0.1);
    images[7].scale.set(0.1,0.1);
    images[8].scale.set(0.1,0.1);
    images[9].scale.set(0.1,0.1);
    images[10].scale.set(0.1,0.1);
    images[11].scale.set(0.1,0.1);
    images[12].scale.set(0.1,0.1);
    images[13].scale.set(0.1,0.1);
    images[14].scale.set(0.1,0.1);

    images[0].position.set(200,150);
    images[1].position.set(300,150);
    images[2].position.set(400,150);
    images[3].position.set(500,150);
    images[4].position.set(600,150);
    images[5].position.set(200,250);
    images[6].position.set(300,250);
    images[7].position.set(400,250);
    images[8].position.set(500,250);
    images[9].position.set(600,250);
    images[10].position.set(200,350);
    images[11].position.set(300,350);
    images[12].position.set(400,350);
    images[13].position.set(500,350);
    images[14].position.set(600,350);
    for(var i=0;i<images.length;i++) {
        stage.addChild(images[i]);
    }
}

function getRNG() {
    for(var i=0;i<15;i++) {
        var rngNum = randomNumber();
        rngCall[i] = rngNum;
    }
}

function updateReelSet() {
    for(var i=0;i<rngCall.length;i++) {
        switch (rngCall[i]) {
            case 1:
                images[i].texture = PIXI.loader.resources["images/redpotion.png"].texture;
                break;
            case 2:
                images[i].texture = PIXI.loader.resources["images/yellowpotion.png"].texture;
                break;
            case 3:
                images[i].texture = PIXI.loader.resources["images/bluepotion.png"].texture;
                break
        }
    }
}

function randomNumber()
{
    rng = Math.floor(Math.random()*3+1);
    return rng;
}