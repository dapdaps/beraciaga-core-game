
export class Equipment {

    static currentId = 100; 
	
	/**
     * 静态方法：生成唯一 ID
     * @returns {number} 唯一 ID
     */
    static generateId() {
        return ++this.currentId;
    }

    /**
     * 创建一个装备实例
     * @param {string} name 装备名称
     * @param {string} type 装备类型 (weapon, armor, etc.)
     * @param {object} bonus 属性加成 (key-value 对，例如 { attackPower: 10 })
     * @param {number} level 装备等级 (默认为1)
     * @param {number} maxLevel 装备最大等级 (默认值为5)
     */
    constructor(name, type, bonus = {}, level = 1, maxLevel = 5) {
        if (!name || !type) {
            throw new Error("装备名称和类型不能为空！");
        }
		
		this.id = Equipment.generateId(); // 唯一 ID
        this.name = name; // 装备名称
        this.type = type; // 装备类型
        this.bonus = bonus; // 属性加成
        this.level = level; // 当前等级
        this.maxLevel = maxLevel; // 最大等级
    }

    /**
     * 获取装备的描述信息
     * @returns {string} 描述信息
     */
    getDescription() {
        let description = `${this.name} (Level ${this.level}/${this.maxLevel}) [${this.type}]\n属性加成:\n`;
        for (const [key, value] of Object.entries(this.bonus)) {
            description += `  - ${key}: ${value}\n`;
        }
        return description.trim();
    }

    /**
     * 合成两件同等级的装备，生成更高等级的装备
     * @param {Equipment} other 另一个同等级的装备
     * @returns {Equipment | null} 返回新装备实例，或 null 表示合成失败
     */
    combine(other) {
        if (this.type !== other.type || this.level !== other.level) {
            throw new Error("只能合成同类型且同等级的装备！");
        }
        if (this.level >= this.maxLevel) {
            console.warn("装备已经达到最高等级，无法合成！");
            return null;
        }

        // 计算新属性加成 (每级提升 20%)
        const newBonus = {};
        for (const [key, value] of Object.entries(this.bonus)) {
            newBonus[key] = Math.round(value * 1.2); // 每次升级增加20%
        }

        return new Equipment(this.name, this.type, newBonus, this.level + 1, this.maxLevel);
    }
	
}
