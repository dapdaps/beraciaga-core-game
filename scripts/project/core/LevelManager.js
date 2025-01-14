
import { BeraHunterCharacter, MonsterCharacter } from "./Character.js";

const monsterData = {
	level: 1,
	health: 10,
	attack: 2,
	defense: 1,
	dodgeRate: 0.1,
	attackSpeed: .5,
	equipment: {
		sword: { level: 1, attack: 5, attackSpeed: 0.2 },
		armor: { level: 1, defense: 2, dodgeRate: 0.05 },
	},
};



export class LevelManager {
    constructor(player) {
        this.player = player;
        this.currentLevel = 1;
        this.enemies = this.createEnemyGroup(5);
		
    }


    // 创建敌人队伍
    createEnemyGroup(count) {
        const enemies = [];
        for (let i = 0; i < count; i++) {
            const monsterName = ["暗影狼", "巨型蜘蛛", "森林熊", "熔岩兽"][i % 4];
            enemies.push(new MonsterCharacter(monsterName, monsterData));
        }
        return enemies;
    }	
	
	
	    // 计算攻击队列
    calculateActionQueue(player, monster) {

        const queue = [];
        let currentTime = 0;
        const fightDuration = 30000;  // 战斗最多持续 30 秒
        
        // 计算攻击间隔（毫秒）
        const playerAttackInterval = 1000 / player.attackSpeed;
        const monsterAttackInterval = 1000 / monster.attackSpeed;

        // 生成攻击时间点队列
        while (currentTime <= fightDuration) {
            if (currentTime % playerAttackInterval === 0) {
                queue.push(this.createAttackAction(player, monster, currentTime));
            }
            if (currentTime % monsterAttackInterval === 0) {
                queue.push(this.createAttackAction(monster, player, currentTime));
            }
            currentTime += 100;  // 每100ms递增
        }

        // 按时间排序
        queue.sort((a, b) => a.time - b.time);
        return queue;
    }
	
	
	createAttackAction(attacker, target, time) {
        return {
            name: attacker.name,
			attacker:attacker,
            target: target,
            time: time,
            actionPlay: async () => {
                const damage = attacker.attack(target);
                console.log(`${attacker.name} 攻击 ${target.name}，造成 ${damage} 点伤害`);
                if (!target.isAlive()) {
                    console.log(`${target.name} 倒下了`);
                }
            }
        };
    }
	
	

    // 进入当前关卡
    async startCurrentLevel() {
        console.log(`=== 开始关卡 ${this.currentLevel} ===`);
		
		const player = this.player;
		const monster = this.enemies[this.currentLevel - 1];

 		const roundData = this.calculateActionQueue(player, monster);
		
		console.log(roundData);

//         // 战斗结果处理
//         if (player.isAlive()) {
//             this.nextLevel();
//         } else {
//             alert(`玩家战败，重新挑战关卡 ${this.currentLevel}`);
//         }
    }

    // 进入下一关
    nextLevel() {
        if (this.currentLevel < this.levelData.length) {
            this.currentLevel++;
            this.startCurrentLevel();
        } else {
            alert("所有关卡已通关！");
        }
    }

    // 重试当前关卡
    retryLevel() {
        console.log(`重新开始关卡 ${this.currentLevel}`);
        this.startCurrentLevel();
    }
}

window.LevelManager=LevelManager;
