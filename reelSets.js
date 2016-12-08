/**
 * Created by shieldsy on 01/12/2016.
 */
var reelSet1 = [1,2,1,2,3,3,2,1,2,2,1,2,3,1,2,3,1,2,1,2];
var winsymbols = [[],[],[],[],[]];
var impDeathArray = [];
var impDeaths;


function addReelSets() {
		getRNG();
		console.log(rngCall.toString());
		console.log(reelSet1.toString());
		var xloc = 180;
    var yloc = 150;
    for(var i=0; i<rngCall.length; i++) {
    var pic,pic2,pic3;
    pic = getImageIdLoc(reelSet1[rngCall[i]]);
    pic2 = getImageIdLoc(reelSet1[rngCall[i]+1]);
    pic3 = getImageIdLoc(reelSet1[rngCall[i]+2]);
    
    pic.x = xloc;
    pic.y = yloc;
		pic2.x = xloc;
    pic2.y = yloc+100;
		pic3.x = xloc;
    pic3.y = yloc+200;
    winsymbols[i][0] = reelSet1[rngCall[i]];
    winsymbols[i][1] = reelSet1[rngCall[i]+1];
    winsymbols[i][2] = reelSet1[rngCall[i]+2];
        xloc = xloc+100;
        console.log(xloc + " " + yloc);
        stage.addChild(pic,pic2,pic3);
    }
    console.log(winsymbols.toString());
}

function getImageIdLoc(iden)
{
var pic,tex;
switch (iden) {
            case 1:
                tex = PIXI.utils.TextureCache["images/red/vanilla.png"];
                break;
            case 2:
            	  tex = PIXI.utils.TextureCache["images/blue/vanilla.png"];
                break;
            case 3:
            		tex = PIXI.utils.TextureCache["images/green/vanilla.png"];
                break;
        }   
        var red = new PIXI.Rectangle(0,128,64,64);
        tex.frame = red;
        pic = new PIXI.Sprite(tex);
        pic.scale.set(1.5,1.5);
        return pic;     
}

function getRNG() {
    for(var i=0;i<5;i++) {
        var rngNum = randomNumber();
        rngCall[i] = rngNum;
    }
}

function randomNumber()
{
    rng = Math.floor(Math.random()*17+1);
    return rng;
}

function createSprites() {

    var base = PIXI.utils.TextureCache["images/red/impdeath.png"];
     var texture0 = new PIXI.Texture(base);
     texture0.setFrame(new PIXI.Rectangle(0, 0, 64, 64));
    var texture1 = new PIXI.Texture(base);
    texture1.setFrame(new PIXI.Rectangle(64, 0, 64, 64));
    var texture2 = new PIXI.Texture(base);
    texture2.setFrame(new PIXI.Rectangle(128, 0, 64, 64));
    var texture3 = new PIXI.Texture(base);
    texture3.setFrame(new PIXI.Rectangle(196, 0, 64, 64));
    var texture4 = new PIXI.Texture(base);
    texture4.setFrame(new PIXI.Rectangle(260, 0, 64, 64));
    var texture5 = new PIXI.Texture(base);
    texture5.setFrame(new PIXI.Rectangle(324, 0, 64, 64));
    var texture6 = new PIXI.Texture(base);
    texture6.setFrame(new PIXI.Rectangle(328, 0, 64, 64));
    impDeathArray = [texture0, texture1, texture2, texture3, texture4, texture5, texture6];
}

function impDeath() {
    createSprites();

    impDeaths = new PIXI.extras.AnimatedSprite(impDeathArray);
    impDeaths.animationSpeed = 0.1;
    impDeaths.scale.set(1.5,1.5);
    impDeaths.x = 10;
    impDeaths.y = 100;
    impDeaths.play();
    stage.addChild(impDeaths);
    console.log("Hmmmmmmmmm " + impDeathArray.length);
    animate();
}

function animate() {
    console.log("hmm");
    console.log(impDeaths.playing);
    refresh();
    requestAnimationFrame(animate);
}