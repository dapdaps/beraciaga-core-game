function calculateDamage(attacker, defender) {
    const attack = attacker.instVars.Attack;
    const defense = defender.instVars.Defense;
    const damage = Math.max(attack - defense, 0);
    return damage;
}

function playerAttack(runtime) {
    const Fur = runtime.objects.Fur.getFirstInstance();
    const Monster = runtime.objects.Monster.getFirstInstance();
    if (!Monster || Monster.instVars.Health <= 0) return;

    const damage = calculateDamage(Fur, Monster);
    Monster.instVars.Health -= damage;

    // 检查怪物是否死亡
    if (Monster.instVars.Health <= 0) {
//         Monster.destroy();
        console.log("Monster defeated!");
    }
}

function monsterAttack(runtime) {
    const Fur = runtime.objects.Fur.getFirstInstance();
    const Monster = runtime.objects.Monster.getFirstInstance();

    if (!Fur || Fur.instVars.Health <= 0) return;

    const damage = calculateDamage(Monster, Fur);
    Fur.instVars.Health -= damage;


	const HealthText = runtime.objects.HealthText.getFirstInstance();
    HealthText.text = `Health: ${Fur.instVars.Health}`;
	console.log("damage",runtime.objects);
		
    // 检查玩家是否死亡
    if (Fur.instVars.Health <= 0) {
        console.log("Player defeated!");
        // 可添加失败逻辑，例如重试选项
    }
}

export {playerAttack, monsterAttack};
