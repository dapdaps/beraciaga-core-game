export class FloatingText {

	constructor( ) {
		
    }

    async start(runtime,text,x,y, duration = 1000) {
		
		const inst = runtime.objects.Floating.createInstance("Info",x, y);
		inst.text = text;
		
		const Tween = inst.behaviors.Tween;
		const tween = Tween.startTween("value", 1, duration, "out-cubic", {
			startValue: 0
		});
		
		function ontick(){
			if(!tween.isReleased){
				inst.y -= runtime.dt * tween.value * 300;
				inst.opacity = (1-tween.value*0.3);
			}
		}

		runtime.addEventListener("tick", ontick);
		await tween.finished;
		runtime.removeEventListener("tick", ontick);
		
		inst.destroy();
	

	}

}


class BattleManager {
    constructor(gamePlayer, player, monster) {
		
		this.gamePlayer = gamePlayer;
	
        this.player = player;
        this.monster = monster;
		this.round = 1;
		
		
    }
	
	update(runtime){
		
		this.player && this.player.update(runtime)
		this.monster && this.monster.update(runtime)
	
	}
	
	async playAttack(attacker, attackered, amount){
		
		const {gamePlayer} = this;

		attacker.playerState=1;
		attackered.playerState=2;
		
		attacker.inst.stopAnimation();
		attacker.inst.setAnimation("Attack");
		attacker.inst.timeScale = attacker.attackSpeed;
		
		attacker.inst.moveToTop();
			
		let floatingText = "";
		if(amount>0){
			floatingText = amount + "";
		} else {
			floatingText = "Miss";
		}
		
		if(attacker.isPlayer){
			gamePlayer.audioManager.playSound(gamePlayer.soundsMap.get("E_009.webm"));
		} else {
			gamePlayer.audioManager.playSound(gamePlayer.soundsMap.get("E_011.webm"));
		}
		
		const boomInst = runtime.objects.Boom.createInstance("Game", attackered.inst.x,attackered.inst.y-100);
		boomInst.addEventListener("animationend", (e) => e.instance.destroy());
		
		setTimeout(()=>{
			attackered.playerState=0;
			if(!attacker.isPlayer){
				gamePlayer.audioManager.playSound(gamePlayer.soundsMap.get("E_018.webm"));
			}
			new FloatingText().start(runtime, floatingText, attackered.inst.x,attackered.inst.y-200,500/1000);
		},100);
		
		await new Promise((resolve,reject)=>{
			setTimeout(()=>{
				attacker.playerState=0;
				attacker.inst.timeScale = 1;
				attacker.inst.setAnimation("Idle");
				resolve();
			},1000/attacker.attackSpeed)
		});
		
	}
	
    async battle() {
		
		const {player,monster} = this;
			
		let nextAttackTimeA = 1 / player.attackSpeed; // 初始为 1 秒
		let nextAttackTimeB = 1 / monster.attackSpeed; // 初始为 0.5 秒
		let attacker = player, attackered = monster;
		
		player.nextAttackTime = 1 / player.attackSpeed;
		monster.nextAttackTime = 1 / monster.attackSpeed;

        while ( this.player.isAlive && this.monster.isAlive) {
            console.log(`=== 第 ${this.round} 回合 ===`,player,monster);
			
			if(player.nextAttackTime <= monster.nextAttackTime){
				attacker = player;
				attackered = monster;
				player.nextAttackTime += 1 / player.attackSpeed;
			} else{
				attacker = monster;
				attackered = player;
				monster.nextAttackTime += 1 / monster.attackSpeed;
			}
			
			const damage = attacker.attack(attackered);			
			const amount = attackered.takeDamage(attacker, damage);

			await this.playAttack(attacker,attackered, amount);
			
            this.round++;
			
        }
		
        this.checkBattleResult();
		
    }

    // 判定战斗结果
    checkBattleResult() {
		const {gamePlayer} = this;
        if (!this.player.isAlive) {
			this.player.playerState = 3;
			this.player.inst.setAnimation("Death");
			gamePlayer.audioManager.playSound(gamePlayer.soundsMap.get("E_014.webm"));
            console.log("战斗失败！玩家倒下...");
        } else {
			this.monster.playerState = 3;
			gamePlayer.audioManager.playSound(gamePlayer.soundsMap.get("E_013.webm"));
            console.log("战斗胜利！怪物全部击败。");
        }
    }
}


export {BattleManager};