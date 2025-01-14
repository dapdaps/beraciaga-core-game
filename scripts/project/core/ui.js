



import {GameBase} from "./GameBase.js";

const gridCols = 5; // 列数
const gridRows = 5; // 行数
const slotSize = 120; // 格子大小（包含间距）
const startX = 0; // 起始 X 坐标
const startY = 0; // 起始 Y 坐标


export class GameEquipmentUI extends GameBase{

	constructor(){
		super();
		
	}
	
	generage(){
		
		const {runtime} = this;
		
			// 动态生成装备栏格子
		for (let row = 0; row < gridRows; row++) {
			for (let col = 0; col < gridCols; col++) {
				// 创建格子
				const slot = runtime.objects.Slot.createInstance(
					"EquipmentLayer", 
					startX + col * slotSize, startY + row * slotSize
				);

				// 设置格子索引
				slot.instVars.gridX = col;
				slot.instVars.gridY = row;

				// 添加到装备栏
				console.log(`格子位置：(${slot.instVars.gridX}, ${slot.instVars.gridY})`);
			}
		}
	}

}