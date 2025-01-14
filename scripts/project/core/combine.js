
// 合成装备
function combineItems(item1, item2) {
    if (
        item1.instVars.ItemType === item2.instVars.ItemType &&
        item1.instVars.ItemLevel === item2.instVars.ItemLevel
    ) {
        const newItem = runtime.objects[item1.instVars.ItemType].createInstance(
            "Game",
            (item1.x + item2.x) / 2,
            (item1.y + item2.y) / 2
        );
        newItem.instVars.ItemLevel = item1.instVars.ItemLevel + 1;

        item1.destroy();
        item2.destroy();
        console.log("合成成功！");
    }
}

// 检查释放位置
runtime.on("dragend", (event, item) => {
    const items = runtime.objects[item.instVars.ItemType].instances();
    for (const otherItem of items) {
        if (item !== otherItem && runtime.isOverlapping(item, otherItem)) {
            combineItems(item, otherItem);
            break;
        }
    }
});
