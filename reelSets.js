/**
 * Created by shieldsy on 01/12/2016.
 */
var reelSet1 = [1,2,1,2,3,3,2,1,2,2,1,2,3,1,2,3,1,2,1,2];
var winsymbols = [[],[],[],[],[]];


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
                tex = PIXI.TextureCache["images/red/vanilla.png"];
                break;
            case 2:
            	  tex = PIXI.TextureCache["images/blue/vanilla.png"];
                break;
            case 3:
            		tex = PIXI.TextureCache["images/green/vanilla.png"];
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