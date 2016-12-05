/**
 * Created by rshields 5-12-16
 */

//var Container = PIXI.Container;
//var autoDetectRenderer = PIXI.autoDetectRenderer;
//var loader = PIXI.loader;
//var resources = PIXI.loader.resources;
//var Sprite = PIXI.Sprite;

var rng;
var renderer, stage;
var images = [];
var rngCall = [];
var winlines = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
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
    .add(["images/BG.png","images/bluepotion.png","images/emptypotion.png","images/redpotion.png","images/yellowpotion.png","images/spin.png","images/balance.png",
    "images/up.png","images/down.png","images/stake.png"])
    .on("progress",loadProgressHandler)
    .on("complete", onAssetsLoaded)
    .load();

}

function onAssetsLoaded() {

    var background = new PIXI.Sprite(PIXI.loader.resources["images/BG.png"].texture);
    var spinButton = new PIXI.Sprite(PIXI.loader.resources["images/spin.png"].texture);
    var balanceField = new PIXI.Sprite(PIXI.loader.resources["images/balance.png"].texture);
    var downStake = new PIXI.Sprite(PIXI.loader.resources["images/down.png"].texture);
    var upStake = new PIXI.Sprite(PIXI.loader.resources["images/up.png"].texture);
    var stakeField = new PIXI.Sprite(PIXI.loader.resources["images/stake.png"].texture);
    spinButton.scale.set(0.3,0.3);
    spinButton.position.set(800,600);
    spinButton.interactive =true;

    spinButton
        .on("mousedown",spinTheGame);

    downStake.scale.set(0.3,0.3);
    downStake.position.set(400,600);
    upStake.scale.set(0.3,0.3);
    upStake.position.set(600,600);
    stakeField.scale.set(0.3,0.3);
    stakeField.position.set(465,600);
    stage.addChild(background,spinButton,balanceField,downStake,upStake,stakeField);
    addReelSets();
    refresh();
}

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

function refresh() {
    renderer.render(stage);
}

function loadProgressHandler(loader, resource) {
    console.log("loading: " + resource.url);
    console.log("progress: " + loader.progress + "%");
}

function spinTheGame() {
    console.log("Arggggg");
}

