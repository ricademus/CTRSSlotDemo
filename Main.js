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

 	renderer.view.style.position = "absolute";
	renderer.view.style.display = "block";
	renderer.autoResize = true;
	renderer.resize(window.innerWidth, window.innerHeight);

PIXI.loader
.add(["images/BG.png","images/bluepotion.png","images/emptypotion","images/red potion.png","images/yellowpotion.png","images/spin.png"])
.on("progress",loadProgressHandler)
.on("complete", onAssetsLoaded)
.load();

}

function onAssetsLoaded() {

var background = new PIXI.Sprite(PIXI.loader.resources["images/BG.png"].texture);
var spinButton = new PIXI.Sprite(PIXI.loader.resources["images/spin.png"].texture);
spinButton.scale.set(0.3,0.3);
spinButton.position.set(stage.width - 50, stage.height);
stage.addChild(background,spinButton);
refresh();
}

function refresh() {
renderer.render(stage);
}

function loadProgressHandler(loader, resource) {
console.log("loading: " + resource.url);
console.log("progress: " + loader.progress + "%");
}

