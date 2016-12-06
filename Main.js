/**
 * Created by rshields 5-12-16
 */

//var Container = PIXI.Container;
//var autoDetectRenderer = PIXI.autoDetectRenderer;
//var loader = PIXI.loader;
//var resources = PIXI.loader.resources;
//var Sprite = PIXI.Sprite;

var rng;
var renderer, stage,stakeAmount,balanceAmount;
var images = [];
var rngCall = [];
var initialStake = 2.00;
var balance = 20000;
var winlines = [[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[1,7,13,9,5],[11,7,3,9,15]];
var winner;

function init() {
    renderer = PIXI.autoDetectRenderer(512,512);
    document.body.appendChild(renderer.view);
    stage = new PIXI.Container();

    //renderer.view.style.position = "absolute";
   // renderer.view.style.display = "block";
    renderer.autoResize = true;
    renderer.resize(window.innerWidth, window.innerHeight);

    window.addEventListener("resize", function(event){
        scaleToWindow(renderer.view);
    });

    PIXI.loader
    .add(["images/BG2.png","images/spin.png","images/balance.png","images/up.png","images/down.png","images/stake.png","images/fill.png",
    "images/red/vanilla.png","images/blue/vanilla.png","images/green/vanilla.png"])
    .on("progress",loadProgressHandler)
    .on("complete", onAssetsLoaded)
    .load();

}

function onAssetsLoaded() {

    var background = new PIXI.Sprite(PIXI.loader.resources["images/BG2.png"].texture);
    var spinButton = new PIXI.Sprite(PIXI.loader.resources["images/spin.png"].texture);
    var balanceField = new PIXI.Sprite(PIXI.loader.resources["images/balance.png"].texture);
    var downStake = new PIXI.Sprite(PIXI.loader.resources["images/down.png"].texture);
    var upStake = new PIXI.Sprite(PIXI.loader.resources["images/up.png"].texture);
    var stakeField = new PIXI.Sprite(PIXI.loader.resources["images/stake.png"].texture);
    
    spinButton.scale.set(0.3,0.3);
    spinButton.position.set(800,600);
    spinButton.interactive =true;
    upStake.interactive =true;
    downStake.interactive =true;

    stakeAmount = new PIXI.Text(initialStake.toString(),{fontFamily : 'Arial', fontSize: 60,  align : 'center'});
    stakeAmount.anchor.set(-5, -0.6);
    stakeField.addChild(stakeAmount);

    balanceAmount = new PIXI.Text(balance.toString(),{fontFamily : 'Arial', fontSize: 40,  align : 'center'});
    balanceAmount.anchor.set(-0.7, -0.5);
    balanceField.addChild(balanceAmount);

    downStake.scale.set(0.3,0.3);
    downStake.position.set(400,600);
    upStake.scale.set(0.3,0.3);
    upStake.position.set(600,600);
    stakeField.scale.set(0.3,0.3);
    stakeField.position.set(465,600);

    spinButton
        .on("mousedown",spinTheGame);
    spinButton
        .on("tap",spinTheGame);
   downStake
        .on("mousedown",stakeDown);
    upStake
        .on("mousedown",stakeUp);

    stage.addChild(background,spinButton,balanceField,downStake,upStake,stakeField);
    addReelSets();
    refresh();
}

function refresh() {
    renderer.render(stage);
}

function loadProgressHandler(loader, resource) {
 //   console.log("loading: " + resource.url);
 //   console.log("progress: " + loader.progress + "%");
}

function spinTheGame() {
    console.log("Arggggg");
    getRNG();
    stakeDeduction();
    addReelSets();
    refresh();
}

