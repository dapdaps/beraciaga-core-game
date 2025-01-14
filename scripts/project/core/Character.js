
import { GameBase } from "./GameBase.js";

class Equipment extends GameBase{

	constructor(inst){

		super();

		this.name = "";                 // 角色名字
		this.level = 1;
		this.health = 0;             // 生命值
		this.healthRegen = 0
		this.attackPower = 0;   // 攻击力
		this.defense = 0;           // 防御力
		this.dodgeRate = 0;       // 闪避率（0~1）
		this.attackSpeed = 0;   // 攻击速度（每秒攻击次数）

		this.gameObject = null;

		this.bindCharacter = null;

		this.inst=inst;

	}

	update(){

	}

}

class CannedHoneyEquipment extends Equipment{
	constructor(){

		super();

		this.name = "CannedHoney";

		this.healthRegen = ()=>{
			return this.level * 1;
		};

		this.gameObject = this.runtime.CannedHoney.createInstance("Game", 0, 0);
		// 		this.bindCharacter = bindCharacter;

	}


	update(time, delta){

		if(!!bindCharacter){
			bindCharacter.replayHealth(this.healthRegen());
		}


	}

}

function lerp(start, end, amt) {
	// Simple helper function for linear interpolation
	return (1 - amt) * start + amt * end;
}

export class Character {

	constructor(name, health, attack, defense, dodgeRate, attackSpeed, equipment) {
		// 基础属性
		this.name = name;                 // 角色名字

		this.maxHealth = health;             // 生命值
		this.health = health;             // 生命值
		this.attackPower = attack;   // 攻击力
		this.defense = defense;           // 防御力
		this.dodgeRate = dodgeRate;       // 闪避率（0~1）
		this.attackSpeed = attackSpeed;   // 攻击速度（每秒攻击次数）

		this.equipment = {};

		this.level = 1;

		// 状态
		this.isAlive = true;              // 是否存活
		this.playerState = 0;
		
		this.isPlayer = false;
		this.lastHealth = health;
		
	}

	bindInst(inst){
		this.inst = inst;                 // 角色名字
		
		this.health_f =  this.inst.getChildAt(0);
		this.health_c =  this.health_f.getChildAt(0);
		
	}

	// 攻击方法
	attack(target) {
		if (!this.isAlive) {
			return;
		}

		// 计算实际伤害
		const damage = Math.max(this.attackPower - target.defense, 1); // 至少造成 1 点伤害


		return damage;

	}

	// 受击方法
	takeDamage(attacker, amount) {
		if (!this.isAlive) {
			console.log(`${this.name} 已死亡，无法继续受伤！`);
			return;
		}

		// 计算目标是否闪避攻击
		const dodgeRoll = Math.random();
		if (dodgeRoll < this.dodgeRate) {
			console.log(`${attacker.name} 的攻击被 ${this.name} 闪避！`);
			return 0;
		}

		// 减少生命值
		this.lastHealth = this.health;
		this.health -= amount;
		console.log(`${this.name} 当前生命值：${this.health}`);
		
		// 检查是否死亡
		if (this.health <= 0) {
			this.die();
		}
		
		return amount;
		
	}

	// 死亡方法
	die() {
		this.isAlive = false;
		console.log(`${this.name} 已死亡！`);
	}

	// 装备武器或盔甲
	equip(item) {
		if (!item || !item.type || !item.bonus) {
			console.error("无效的装备！");
			return;
		}

		const { type, bonus } = item;

		if (type !== "weapon" && type !== "armor") {
			console.error("装备类型无效，只能是 weapon 或 armor！");
			return;
		}

		// 如果已有同类型装备，移除当前加成
		if (this.equipment[type]) {
			this.unequip(type);
		}

		// 绑定新装备
		this.equipment[type] = item;

		// 增加装备加成到角色属性
		for (const [stat, value] of Object.entries(bonus)) {
			if (this[stat] !== undefined) {
				this[stat] += value;
			} else {
				console.warn(`角色没有属性 ${stat}，无法增加加成！`);
			}
		}

		console.log(`${this.name} 装备了 ${item.name}，属性已更新！`);
		this.displayStatus();
	}

	// 卸下装备
	unequip(type) {
		if (!this.equipment[type]) {
			console.log(`没有装备 ${type}，无需卸下！`);
			return;
		}

		const item = this.equipment[type];
		const { bonus } = item;

		// 移除装备加成
		for (const [stat, value] of Object.entries(bonus)) {
			if (this[stat] !== undefined) {
				this[stat] -= value;
			}
		}

		console.log(`${this.name} 卸下了 ${item.name}，属性已更新！`);
		this.equipment[type] = null;
		this.displayStatus();
	}

	// 显示角色信息
	displayStatus() {
		console.log(`--- ${this.name} 状态 ---`);
		console.log(`生命值：${this.health}`);
		console.log(`攻击力：${this.attack}`);
		console.log(`防御力：${this.defense}`);
		console.log(`闪避率：${(this.dodgeRate * 100).toFixed(1)}%`);
		console.log(`攻击速度：${this.attackSpeed}`);
		console.log(`是否存活：${this.isAlive}`);
		console.log(`-------------------`);
	}


	update(runtime){

		if(this.playerState === 0){
// 			this.inst.setAnimation("Idle");
			this.inst.timeScale = 1;
		}
		
// 		if(this.playerState === 1){
// 			this.inst.stopAnimation();
// 			this.inst.setAnimation("Attack");
// 			this.inst.timeScale = this.attackSpeed;
// 		}
		
// 		if(this.playerState === 2){
// 			this.inst.setAnimation("UnderAttack");	
// 		}
		
// 		if(this.playerState === 3){
// 			this.inst.setAnimation("Death");
// 		}
		
		this.health = Math.max(Math.min(this.health, this.maxHealth),0);

		this.health_c.width = (
			this.health
		/ this.maxHealth) * this.health_f.width;
			
		if(this.health===0||this.health===this.maxHealth) {
			this.health_f.isVisible = false
			this.health_c.isVisible = false
		} else {
			this.health_f.isVisible = true
			this.health_c.isVisible = true
		}

	}
	

}

export class BeraHunterCharacter extends Character {
	constructor(name, opts) {
		super(name, opts.health, opts.attack, opts.defense, opts.dodgeRate, opts.attackSpeed);
	}

}

export class MonsterCharacter extends Character {
	constructor(name, opts) {
		super(name, opts.health, opts.attack, opts.defense, opts.dodgeRate, opts.attackSpeed);
	}

}


