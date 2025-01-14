
import {GameBase } from "./GameBase.js";
import {Character } from "./Character.js";
import {BattleManager } from "./BattleManager.js";
import {LevelManager } from "./LevelManager.js";
import AudioManager from "./audioManager.js";

function lerp(start, end, amt) {
	// Simple helper function for linear interpolation
	return (1 - amt) * start + amt * end;
}

const sounds = [
	"E_001.webm",
	"E_002.webm",
	"E_003.webm",
	"E_004.webm",
	"E_005.webm",
	"E_006.webm",
	"E_007.webm",
	"E_008.webm",
	"E_009.webm",
	"E_010.webm",
	"E_011.webm",
	"E_012.webm",
	"E_013.webm",
	"E_014.webm",
	"E_015.webm",
	"E_017_001.webm",
	"E_018.webm"
];

class GamePlayer extends GameBase{


	constructor(){

		super();

		this.level = 1;
		this.battleManager=null;
		this.playerCharacter = null;
		this.monsterCharacter = null;
		
		this.progressStatus = 1;
		
		this.isPlaying= false;
		
		this.status = 0;
	}
	
	onpointerdown(){}
	onpointermove(){}
	onpointerup(){}

	update(){

		
		if(!this.isPlaying) return;

		const {runtime, playerCharacter, monsterCharacter} = this;
		const playerInst = playerCharacter.inst;
		const monsterInst = monsterCharacter.inst;
		
		
		if( this.status === 1 ){
		
		}
	
		this.battleManager.update(runtime);
	
	}

	async createPlayer(){

		const {runtime} = this;
		
		this.audioManager = new AudioManager(runtime);
		
		const soundRes = await Promise.all(
			sounds.map((item)=>{
				return  this.audioManager.loadSound(item);
			})
		);
		
		this.soundsMap = new Map();
		
		sounds.forEach((item,i)=>{
			this.soundsMap.set(item, soundRes[i]);
		});
				

		const playerInst = 
			  runtime.objects.Player.createInstance("Game", 400, 800, true);

		const monsterInst = 
			  runtime.objects.Monster5.createInstance(
				  "Game", 
				  runtime.viewportWidth, 800, true
			  );

		const playerCharacter =  new Character("Bear",2, 1, 1, 0.0, 1);
		const monsterCharacter =  new Character("Worlf", 100, 1, 1, .5, 1);
		
		playerCharacter.isPlayer = true;
		
		playerCharacter.bindInst(playerInst);
		monsterCharacter.bindInst(monsterInst);

		this.playerCharacter = playerCharacter;
		this.monsterCharacter = monsterCharacter;

		this.battleManager = new BattleManager(this, playerCharacter, monsterCharacter);
		
		
		this.startLevel();
		
		
		this.isPlaying=true;

	}
	
	async nextMonster(){
	
		
	}

	
	async startLevel(name){
	
		const {runtime, playerCharacter, monsterCharacter} = this;
		
// 		if(true){
// 			this.setGameChapter();
// 		}
		
	
		const playerInst = playerCharacter.inst;
		const monsterInst = monsterCharacter.inst;
		const Background1 = runtime.objects.Background1.getFirstInstance();
		const Background2 = runtime.objects.Background2.getFirstInstance();
		const Background3 = runtime.objects.Background3.getFirstInstance();

		this.audioManager.playSound(this.soundsMap.get("E_017_001.webm"));

// 		playerCharacter.inst.setAnimation("Walk");
		
		const timer =  setInterval(()=>{
			this.audioManager.playSound(this.soundsMap.get("E_008.webm"));
		},800);

	
		await new Promise((resolve,reject)=>{
		
			function ontick(){

				Background1.x -=  10 * runtime.dt;
				Background1.x %= (Background1.width *.5);

				Background2.x -=  50 * runtime.dt;
				Background2.x %= (Background2.width *.5);

				Background3.x -=  100 * runtime.dt;
				Background3.x %= (Background3.width *.5);

				monsterInst.x -=  100 * runtime.dt;

// 				playerInst.x += 100 * runtime.dt;

				if(playerInst.testOverlap(monsterInst)){
					runtime.removeEventListener("tick", ontick);
					resolve();
				}

			}
			
			runtime.addEventListener("tick", ontick);
		
		});
		
		clearInterval(timer);
// 		playerInst.setAnimation("Idle");
		
		this.battleManager.battle();
			
	}

	async retryLevel(){
		
	
	}

	async setGameChapter(){
	
		const {runtime} = this;
		
		const Background1 = runtime.objects.Background1.getFirstInstance();
		const Background2 = runtime.objects.Background2.getFirstInstance();
		const Background3 = runtime.objects.Background3.getFirstInstance();

		const bg1 = await runtime.assets.fetchBlob("bg02-sky.png");
		const bg2 = await runtime.assets.fetchBlob("bg02-hill.png");
		const bg3 = await runtime.assets.fetchBlob("bg02-road.png");

		// 	const bg4 = await runtime.assets.fetchBlob("bg02-road.png");
		// 	const bg5 = await runtime.assets.fetchBlob("bg02-road.png");


		Background1.replaceImage(bg1);
		Background2.replaceImage(bg2);
		Background3.replaceImage(bg3);
		// 	TiledBackground2.replaceImage(bg5);

	}

}

export {GamePlayer};