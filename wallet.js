/**
 * Created by shieldsy on 01/12/2016.
 */
var balance;
var stake;

function displayInitialBalance() {
        var balanceDisplay = new createjs.Bitmap("images/balance.png");
        balanceDisplay.setTransform(10,10,1,1);
        stage.addChild(balanceDisplay);
}

function setInitialBalance() {
    balance = new createjs.Text("2000", "30px Arial");
    balance.x = 150;
    balance.y = 30;
    stage.addChild(balance);
}

function setDefaultStake() {
    stake = new createjs.Text("2","30px Arial");
    stake.x = 300;
    stake.y = 525;
    stage.addChild(stake);
}

function updateBalance(winOrLoss, winAmount) {
    var current = parseFloat(balance.text);
    if(winOrLoss == "loss") {
        current = current - parseFloat(stake.text);
    }else{
        current = current + winAmount
    }
    balance.text = current.toString();
}

function stakeDown() {
    var current = parseFloat(stake.text);
    current = current - 1;
    if(current < 1) {
        current = 1;
    }
    stake.text = current.toString();
}

function stakeUp() {
    var current = parseFloat(stake.text);
    current = current + 1;
    if(current > 10) {
        current = 10;
    }
    stake.text = current.toString();
}