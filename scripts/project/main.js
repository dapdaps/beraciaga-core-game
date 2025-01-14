
// // Import any other script files here, e.g.:
// // import * as myModule from "./mymodule.js";

// import {playerAttack, monsterAttack} from "./core/fight.js";
// import {isPointerOverObject} from "./utils.js";

// import { GameBase } from "./core/GameBase.js";
// import { GameEquipmentUI } from "./core/ui.js";
// import { showFloatingText } from "./core/FloatingText.js";

// import { GamePlayer } from "./core/index.js";

// const FPS = 60;
// const EQ_NAMES = [
// 	"eq1",
// 	"eq2",
// 	"eq3",
// 	"eq4",
// 	"eq5",
// 	"eq6",
// 	"eq7",
// 	"eq8",
// ];

// if (screen.orientation && screen.orientation.lock) {
// 	screen.orientation.lock("portrait").catch((err) => {
// 		console.warn("Screen orientation lock failed:", err);
// 	});
// }

// // 初始化全局变量
// const player = {
// 	health: 10,
// 	attack: 10,
// 	defense: 1,
// 	dodgeRate: 0.1,
// 	attackSpeed: 1,
// 	level: 1,
// 	equipment: {
// 		sword: { level: 1, attack: 5, attackSpeed: 0.2 },
// 		armor: { level: 1, defense: 2, dodgeRate: 0.05 },
// 	},
// };

// const monster = {
// 	health: 1000,
// 	attack: 2,
// 	defense: 1,
// 	dodgeRate: 0.1,
// 	attackSpeed: 1,
// 	level: 1,
// 	equipment: {
// 		sword: { level: 1, attack: 5, attackSpeed: 0.2 },
// 		armor: { level: 1, defense: 2, dodgeRate: 0.05 },
// 	},
// };

// let EquipmentLayer;
// let Touch,Mouse,TestPointer,Trash,Chest;
// let Eq1,Eq2,Eq3,Boom,EqCheck, EqTab;
// let TiledBackground6, Background1,Background2,Background3,Player,Monster;
// let TiledBackground2;

// const gamePlayer = new GamePlayer();

// runOnStartup(async runtime =>
// 			 {
// 	// Code to run on the loading screen.
// 	// Note layouts, objects etc. are not yet available.

// 	runtime.addEventListener("beforeprojectstart", () => OnBeforeProjectStart(runtime));
// });

// function lerp(start, end, amt) {
// 	// Simple helper function for linear interpolation
// 	return (1 - amt) * start + amt * end;
// }

// function length(obj1,obj2){

// 	const dx = obj1.x - obj2.x;
// 	const dy = obj1.y - obj2.y;
// 	const distance = Math.sqrt(dx * dx + dy * dy);

// 	return distance;
// }

// function getEventPosition(event) {
// 	if (event.touches && event.touches.length > 0) {
// 		return { x: event.touches[0].clientX, y: event.touches[0].clientY };
// 	} else {
// 		return { x: event.clientX, y: event.clientY };
// 	}
// }

// function startGame(runtime) {

// }

// let eqCheckType = 0;
// let chestNumber = 30;
// let pointer = {x:0,y:0};
// let prePointer = {x:0,y:0};

// function checkEqTab(type){

// 	for(let eq of Eq1.instances()){
// 		eq.isVisible=false;
// 		eq.behaviors.DragDrop.isEnabled = false;
// 	}

// 	for(let eq of Eq2.instances()){
// 		eq.isVisible=false;
// 		eq.behaviors.DragDrop.isEnabled = false;
// 	}

// 	for(let eq of Eq3.instances()){
// 		eq.isVisible=false;
// 		eq.behaviors.DragDrop.isEnabled = false;
// 	}

// 	for(let tab of EqTab.instances()){
// 		tab.setAnimation(type === tab.instVars.type?"tab2":"tab1");
// 	}

// 	switch(type){
// 		case 0:
// 			for(let eq of Eq1.instances()){
// 				eq.isVisible=true;
// 				eq.behaviors.DragDrop.isEnabled = true;
// 			}
// 			break;
// 		case 1:
// 			for(let eq of Eq2.instances()){
// 				eq.isVisible=true;
// 				eq.behaviors.DragDrop.isEnabled = true;
// 			}
// 			break;
// 		case 2:
// 			for(let eq of Eq3.instances()){
// 				eq.isVisible=true;
// 				eq.behaviors.DragDrop.isEnabled = true;
// 			}
// 			break;

// 	}

// }

// function getRandomPointInBounds(bounds, step, padding=0) {
// 	// 计算可以生成点的范围
// 	const minX = bounds.x + padding;
// 	const maxX = bounds.x + bounds.width - padding;
// 	const minY = bounds.y + padding;
// 	const maxY = bounds.y + bounds.height - padding;

// 	// 在步长的基础上随机生成点
// 	const randomX = minX + Math.floor(Math.random() * (maxX - minX) / step) * step;
// 	const randomY = minY + Math.floor(Math.random() * (maxY - minY) / step) * step;

// 	return { x: randomX, y: randomY };
// }


// function openChest(){

// 	if(chestNumber <= 0) return;
// 	chestNumber--;

// 	let inst;
// 	switch(eqCheckType){
// 		case 0:
// 			inst = Eq1;
// 			break;
// 		case 1:
// 			inst = Eq2;
// 			break;
// 		case 2:
// 			inst = Eq3;
// 			break;
// 	}
	
// 	let bounds = TiledBackground2.getBoundingBox();
// 	let	point = getRandomPointInBounds(bounds, 150, 150);

// 	// 	item.instVars.level = chest.instVars.level;

// 	const equipment = inst.createInstance("EquipmentLayer", point.x,point.y);

// 	equipment.behaviors.DragDrop.addEventListener("dragstart", function(){

// 		prePointer.x = equipment.x;
// 		prePointer.y = equipment.y;

// 		equipment.moveToTop();
// 	});

// // 	equipment.behaviors.DragDrop.addEventListener("drop", async function(event){

// // 		let overlap = null;

// // 		const [mouseX, mouseY] = [pointer.x,pointer.y];
		
// // 		const EqTarget1 = runtime.objects.EqTarget1.getFirstInstance();
// // 		if(EqTarget1.containsPoint(mouseX, mouseY) && equipment.testOverlap(EqTarget1)){
// // 			EqTarget1.setAnimation(equipment.animation.name);
// // 			gamePlayer.audioManager.playSound(gamePlayer.soundsMap.get("E_004.webm"));
// // 			return;
// // 		}
		
// // 		const EqTarget2 = runtime.objects.EqTarget1.getFirstInstance();
// // 		if(EqTarget2.containsPoint(mouseX, mouseY) && equipment.testOverlap(EqTarget2)){
// // 			EqTarget2.setAnimation(equipment.animation.name);
// // 			gamePlayer.audioManager.playSound(gamePlayer.soundsMap.get("E_004.webm"));
// // 			return;
// // 		}
		
// // 		const EqTarget3 = runtime.objects.EqTarget1.getFirstInstance();
// // 		if(EqTarget3.containsPoint(mouseX, mouseY) && equipment.testOverlap(EqTarget3)){
// // 			EqTarget3.setAnimation(equipment.animation.name);
// // 			gamePlayer.audioManager.playSound(gamePlayer.soundsMap.get("E_004.webm"));
// // 			return;
// // 		}

// // 		if(Trash.containsPoint(mouseX, mouseY) && equipment.testOverlap(Trash)){

// // 			const Tween = equipment.behaviors.Tween;

// // 			const tween = Tween.startTween("value", 1, .3, "linear", {
// // 				startValue: 0
// // 			});

// // 			const pointX = equipment.x;
// // 			const pointY = equipment.y;
// // 			const bounds = equipment.getBoundingBox();

// // 			function tick(){
// // 				equipment.x = Trash.x + (pointX - Trash.x) * (1.-tween.value);
// // 				equipment.y =  Trash.y + (pointY - Trash.y) * (1.-tween.value);
// // 				equipment.opacity = (1.-tween.value);
// // 				equipment.setSize(bounds.width* (1.-tween.value),bounds.height* (1.-tween.value));
// // 			}

// // 			runtime.addEventListener("tick",tick);

// // 			await tween.finished;
// // 			runtime.removeEventListener("tick", tick);

// // 			equipment.destroy();
			
// // 			gamePlayer.audioManager.playSound(gamePlayer.soundsMap.get("E_003.webm"));

// // 			return;
// // 		}

// // 		for(let eq of inst.instances()){
// // 			if(eq!== equipment && eq.animation.name === equipment.animation.name){
// // 				if (eq.containsPoint(mouseX, mouseY) && equipment.testOverlap(eq)) {
// // 					overlap = eq;
// // 					break;
// // 				}
// // 			}
// // 		}


// // 		if(overlap!==null){
// // 			const Tween = equipment.behaviors.Tween;

// // 			const tween = Tween.startTween("value", 1, .3, "in-back", {
// // 				startValue: 0
// // 			});

// // 			const pointX = overlap.x;
// // 			const pointY = overlap.y;

// // 			const boom = Boom.createInstance("EquipmentLayer",pointX,pointY);
// // 			boom.moveToTop();
// // 			boom.addEventListener("animationend", (e) => e.instance.destroy());

// // 			function tick(){
// // 				overlap.x = pointX - 100 * (1.-tween.value);
// // 				equipment.x = pointX + 100 * (1.-tween.value);
// // 				equipment.y = pointY;
// // 			}

// // 			runtime.addEventListener("tick",tick);

// // 			await tween.finished;
// // 			runtime.removeEventListener("tick", tick);

// // 			const eqNameIndex =  EQ_NAMES.findIndex(v=>v===overlap.animation.name);

// // 			if(eqNameIndex>-1&&EQ_NAMES[eqNameIndex+1]){
// // 				// 				overlap.moveToTop();
// // 				overlap.setAnimation(EQ_NAMES[eqNameIndex+1]);
// // 				equipment.destroy();
// // 			}

// // 			gamePlayer.audioManager.playSound(gamePlayer.soundsMap.get("E_001.webm"));

// // 			return;

// // 		}

// // 		if(!isPointInBoundsWithPadding(equipment.x, equipment.y,TiledBackground2.getBoundingBox(), 150)
// // 		  ){

// // 			const Tween = equipment.behaviors.Tween;

// // 			const tween = Tween.startTween("value", 1, .3, "linear", {
// // 				startValue: 0
// // 			});

// // 			const pointX = equipment.x;
// // 			const pointY = equipment.y;

// // 			function tick(){
// // 				equipment.x = prePointer.x + ( pointX - prePointer.x) * (1.-tween.value);
// // 				equipment.y =  prePointer.y + (pointY - prePointer.y) * (1.-tween.value);
// // 			}
// // 			runtime.addEventListener("tick",tick);

// // 			await tween.finished;
// // 			runtime.removeEventListener("tick", tick);
// // 		}

// // 	});

// 	// 	runtime.getInstanceByUid(41).text =  chestNumber + "/99";

// }

// function trashEq(){



// }

// function isPointInBoundsWithPadding(x, y, bounds, padding) {
// 	const paddedBounds = {
// 		x: bounds.x + padding,
// 		y: bounds.y + padding,
// 		width: bounds.width - 2 * padding,
// 		height: bounds.height - 2 * padding
// 	};

// 	// 确保缩小后区域有效，避免负值
// 	if (paddedBounds.width < 0 || paddedBounds.height < 0) {
// 		return false;
// 	}

// 	return (
// 		x >= paddedBounds.x &&
// 		x <= paddedBounds.x + paddedBounds.width &&
// 		y >= paddedBounds.y &&
// 		y <= paddedBounds.y + paddedBounds.height
// 	);
// }



// async function OnBeforeProjectStart(runtime)
// {
// 	window.runtime=runtime;
// 	GameBase.prototype.runtime=runtime;

// 	const GamePlayerLayout = runtime.getLayout("GamePlayer");

// 	GamePlayerLayout.addEventListener("beforelayoutstart", async function(){

// // 		await gamePlayer.createPlayer();

// 	});

// 	Mouse = runtime.objects.Mouse;
// 	Touch = runtime.objects.Touch;

// 	TestPointer = runtime.objects.TestPointer.getFirstInstance();
// 	Trash = runtime.objects.Trash.getFirstInstance();
// 	Chest = runtime.objects.Chest.getFirstInstance();

// 	Background1 = runtime.objects.Background1.getFirstInstance();
// 	Background2 = runtime.objects.Background2.getFirstInstance();
// 	Background3 = runtime.objects.Background3.getFirstInstance();
// 	TiledBackground2 = runtime.objects.TiledBackground2.getFirstInstance();
// 	TiledBackground6 = runtime.objects.TiledBackground6.getFirstInstance();
// 	Eq1 = runtime.objects.Eq1;
// 	Eq2 = runtime.objects.Eq2;
// 	Eq3 = runtime.objects.Eq3;
// 	EqTab = runtime.objects.EqTab;
// 	Boom = runtime.objects.Boom;
// 	EqCheck = runtime.objects.EqCheck;

// 	Player = runtime.objects.Player;
// 	Monster = runtime.objects.Monster;


// 	// 	runtime.getInstanceByUid(41).text =  chestNumber + "/99";
// 	checkEqTab(0);

// 	runtime.addEventListener("pointerdown", (event) => {


// 		const [mouseX, mouseY] =
// 			  runtime.layout.getLayer("EquipmentLayer").cssPxToLayer(event.clientX, event.clientY);

// 		pointer.x = mouseX;
// 		pointer.y = mouseY;

// // 		if(Chest.containsPoint(mouseX,mouseY)){
// // 			openChest();
// // 			gamePlayer.audioManager.playSound(gamePlayer.soundsMap.get("E_005.webm"));
// // 			return;
// // 		}

// // 		for(let eqCheck of EqCheck.instances()){
// // 			if (eqCheck.containsPoint(mouseX, mouseY)) {
// // 				if(eqCheckType!==eqCheck.instVars.type){
// // 					eqCheckType = eqCheck.instVars.type;
// // 					checkEqTab(eqCheckType);
// // 					gamePlayer.audioManager.playSound(gamePlayer.soundsMap.get("E_004.webm"));

// // 				}
// // 			}
// // 		}

// 	});

// 	function pointerMove(event){

// 		gamePlayer.onpointermove(event);
		
// 		const [mouseX, mouseY] =
// 			  runtime.layout.getLayer("EquipmentLayer").cssPxToLayer(event.clientX, event.clientY);

// 		pointer.x = mouseX;
// 		pointer.y = mouseY;
		
		

// 	}

// 	function pointerDown(event){

// 		runtime.addEventListener("pointermove", pointerMove);
// 		runtime.addEventListener("pointerup", pointerUp);
		
		
// 		gamePlayer.onpointerdown(event);
		
// 	}


// 	function pointerUp(event){
	
// 		runtime.removeEventListener("pointermove", pointerMove);
// 		runtime.removeEventListener("pointerup", pointerUp);
		
// 		gamePlayer.onpointerup(event);
		
// 	}

// 	runtime.addEventListener("pointerdown",pointerDown);


// 	startGame(runtime);


// 	// 	GameEquipmentUI.getInstance().generage();

// 	const GameLayer = runtime.layout.getLayer("Game");
// 	const UILayer = runtime.layout.getLayer("UI");


// 	// 	const Fur = runtime.objects.Fur.getFirstInstance();
// 	// 	Fur.instVars.Health = player.health;
// 	// 	Fur.instVars.Attack = player.attack;
// 	// 	Fur.instVars.Defense = player.defense;
// 	// 	Fur.instVars.DodgeRate = player.dodgeRate;
// 	// 	Fur.instVars.AttackSpeed = player.attackSpeed;


// 	// 	const Monster = runtime.objects.Monster.getFirstInstance();
// 	// 	Monster.instVars={};
// 	// 	Monster.instVars.Health = monster.health;
// 	// 	Monster.instVars.Attack = monster.attack;
// 	// 	Monster.instVars.Defense = monster.defense;
// 	// 	Monster.instVars.DodgeRate = monster.dodgeRate;
// 	// 	Monster.instVars.AttackSpeed = monster.attackSpeed;


// 	runtime.addEventListener("tick", () => Tick(runtime));



// // 	// 点击事件：打开宝箱
// // 	runtime.addEventListener("dblclick", (event) => {

// // 		const clientX = event.clientX;
// // 		const clientY = event.clientY;

// // 		const [x, y] = GameLayer.cssPxToLayer(clientX,clientY);

// // 		const chests = runtime.objects.Chest.getAllInstances();
// // 		const chest = chests.find(chest => isPointerOverObject(x, y, chest));
// // 		if (chest) openChest(chest);
// // 	});

// }

// let gostate= 1;
// window.nextLevel=nextLevel
// async function nextLevel(){


// 	const playerInst = Player.getFirstInstance();
// 	const monsterInst = Monster.createInstance("Game", playerInst.x + runtime.viewportWidth, playerInst.y);

// 	playerInst.setAnimation("Walk");

// 	function ontick(){
// 		console.log(123123)
// 		Background1.x -=  .1 * FPS * runtime.dt;
// 		Background1.x %= (Background1.width *.5);

// 		Background2.x -=  .5 * FPS * runtime.dt;
// 		Background2.x %= (Background2.width *.5);

// 		Background3.x -=  2. * FPS * runtime.dt;
// 		Background3.x %= (Background3.width *.5);

// 		monsterInst.x -=  2 * FPS * runtime.dt;

// 		if(playerInst.testOverlap(monsterInst)){
// 			runtime.removeEventListener("tick", ontick);
// 			playerInst.setAnimation("Idle");
// 		}
// 	}

// 	runtime.addEventListener("tick", ontick);

// }

// async function nextChapter(){

// 	const bg1 = await runtime.assets.fetchBlob("bg02-sky.png");
// 	const bg2 = await runtime.assets.fetchBlob("bg02-hill.png");
// 	const bg3 = await runtime.assets.fetchBlob("bg02-road.png");

// 	// 	const bg4 = await runtime.assets.fetchBlob("bg02-road.png");
// 	// 	const bg5 = await runtime.assets.fetchBlob("bg02-road.png");


// 	Background1.replaceImage(bg1);
// 	Background2.replaceImage(bg2);
// 	Background3.replaceImage(bg3);
// 	// 	TiledBackground2.replaceImage(bg5);


// }

// function Tick(runtime)
// {	

// 	// // 	if(eqCheckType)

// 	// 	Background1.x -= gostate * .1 * FPS * runtime.dt;
// 	// 	Background1.x %= (Background1.width *.5);

// 	// 	Background2.x -= gostate * .3 * FPS * runtime.dt;
// 	// 	Background2.x %= (Background2.width *.5);

// 	// 	Background3.x -= gostate * 1. * FPS * runtime.dt;
// 	// 	Background3.x %= (Background3.width *.5);


// 	// 	Monster.x -= gostate * 2 * FPS * runtime.dt;

// 	// 	if(	Math.abs(Monster.x) <= 762){
// 	// // 		gostate = 0;
// 	// 		Monster.x+=700;
// 	// 	}

// 	// Code to run every tick
// 	// 玩家攻击怪物
// 	//     if (runtime.gameTime % 1 < 0.016) {
// 	//         playerAttack(runtime);
// 	//     }

// 	//     // 怪物攻击玩家
// 	//     if (runtime.gameTime % 1.5 < 0.01667) {
// 	//         monsterAttack(runtime);
// 	// 		// 示例：扣血
// 	// 		const Monster = runtime.objects.Monster.getFirstInstance();
// 	// 		showFloatingText(Monster, {
// 	// 		type: "FloatingMiss",
// 	// 		value: 13, 
// 	// 			duration:500
// 	// 		});
// 	//     }
	
	
// 	gamePlayer.update();

// }







