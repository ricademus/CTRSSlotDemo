/**
 * Created by cturner on 29/11/2016.
 */

var rng;
var stage;
var images = [];
var rngCall = [];
var winlines = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
var winner;

function init() {
    stage = new createjs.Stage("SlotGame");
    addBackground();
    setReelsUp();
    addSpin();
    addStakeFields();
    displayInitialBalance();
    setInitialBalance();
    setDefaultStake();
    addWinField();
    createjs.Ticker.on("tick", tick);
}

function addBackground() {
    var background = new createjs.Bitmap("images/BG.png");
    stage.addChild(background);
}

function addStakeFields() {
    var stakeup = new createjs.Bitmap("images/up.png");
    var stakedown = new createjs.Bitmap("images/down.png");
    var stakeDisplay = new createjs.Bitmap("images/stake.png");
    stakeup.addEventListener("click", stakeUp);
    stakedown.addEventListener("click", stakeDown);
    stakeup.setTransform(400,500,0.5,0.5);
    stakeDisplay.setTransform(180,500,0.5,0.5);
    stakedown.setTransform(75,500,0.5,0.5);
    stage.addChild(stakeup, stakedown, stakeDisplay);
}

function addWinField() {
    var winField = new createjs.Bitmap("images/stake.png");
    winField.setTransform(700,500,0.5,0.5);
    winner = new createjs.Text("0", "30px Arial");
    winner.x = 800;
    winner.y = 525;
    stage.addChild(winField,winner);
}


function tick(event) {
    stage.update(event);
}

function randomNumber()
{
    rng = Math.floor(Math.random()*3+1);
    return rng;
}

function calculateWinnings() {
    var winningsAmount = 0;
    for(var i=0; i<winlines.length; i++) {
        console.log(rngCall.toString());
        if(rngCall[winlines[i][0]-1]==rngCall[winlines[i][1]-1] && rngCall[winlines[i][1]-1]==rngCall[winlines[i][2]-1] ) {
            console.log("Won on the Line" + i.toString());
                switch (rngCall[winlines[i][0]-1]) {
                case 1:
                    updateBalance("win", parseFloat(stake.text)*2);
                    winningsAmount = winningsAmount + (parseFloat(stake.text)*2);
                    break;
                case 2:
                    updateBalance("win", parseFloat(stake.text)*3);
                    winningsAmount = winningsAmount + (parseFloat(stake.text)*3);
                    break;
                case 3:
                    updateBalance("win", parseFloat(stake.text)*4);
                    winningsAmount = winningsAmount + (parseFloat(stake.text)*4);
                    break;
                }
        }
    }
    winner.text = winningsAmount.toString();
}

