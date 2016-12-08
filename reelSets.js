/**
 * Created by shieldsy on 01/12/2016.
 */
var reelSet1 = [1,2,1,2,3,3,2,1,2,2,1,2,3,1,2,3,1,2,1,2];
var visibleSymbols = [];
var impDeathArray = [];
var impDeaths;


function addReelSets() {
		getRNG();
	//	console.log(rngCall.toString());
	//	console.log(reelSet1.toString());
    var xloc = 180;
    var yloc = 150;
    for(var i=0; i<15; i++) {
        var pic = getImageIdLoc(reelSet1[rngCall[i]]);
        pic.x = xloc;
        pic.y = yloc;
        visibleSymbols[i] = reelSet1[rngCall[i]];
        stage.addChild(pic);
        xloc = xloc + 85;
        if(i == 4 || i == 9) {
            xloc = 180;
            yloc = yloc + 85;
        }
    }
    console.log(visibleSymbols.toString());
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
    for(var i=0;i<15;i++) {
        var rngNum = randomNumber();
        rngCall[i] = rngNum;
    }
}

function randomNumber()
{
    rng = Math.floor(Math.random()*17+1);
    return rng;
}

function createSprites(colour) {
    console.log(colour);
    var loc = "images/"+colour.toString()+"/impdeath.png";
    console.log(loc);
    var base = PIXI.utils.TextureCache[loc];
     var texture0 = new PIXI.Texture(base);
     texture0.frame = new PIXI.Rectangle(0, 0, 64, 64);
    var texture1 = new PIXI.Texture(base);
    texture1.frame = new PIXI.Rectangle(64, 0, 64, 64);
    var texture2 = new PIXI.Texture(base);
    texture2.frame = new PIXI.Rectangle(128, 0, 64, 64);
    var texture3 = new PIXI.Texture(base);
    texture3.frame = new PIXI.Rectangle(196, 0, 64, 64);
    var texture4 = new PIXI.Texture(base);
    texture4.frame = new PIXI.Rectangle(260, 0, 64, 64);
    var texture5 = new PIXI.Texture(base);
    texture5.frame = new PIXI.Rectangle(324, 0, 64, 64);
    var texture6 = new PIXI.Texture(base);
    texture6.frame = new PIXI.Rectangle(328, 0, 64, 64);
    impDeathArray = [texture0, texture1, texture2, texture3, texture4, texture5, texture6];
}

function impDeath(whichImp) {
    console.log(whichImp);
    createSprites(whichImp);
    impDeaths = new PIXI.extras.AnimatedSprite(impDeathArray);
    impDeaths.animationSpeed = 0.1;
    impDeaths.scale.set(1.5,1.5);
    impDeaths.x = 10;
    impDeaths.y = 100;
    impDeaths.loop = false;
    impDeaths.play();
    stage.addChild(impDeaths);
    animate();
}

function animate() {
    refresh();
    requestAnimationFrame(animate);
}