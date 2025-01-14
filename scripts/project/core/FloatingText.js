

import { GameBase } from "./GameBase.js";

export class FloatingText extends GameBase {

    constructor( floatingName, x, y, duration = 1) {
		super();
	
		this.text="";
        this.duration = duration;
		this.inst = runtime.objects.Floating.createInstance("Info",x, y);
    }

    async start() {
		const { runtime } = this;

		const endY = this.inst.y - 100;
		
		const Tween = this.inst.behaviors.Tween;
		
		await Promise.all([
			Tween.startTween("position", [this.inst.x, endY], this.duration/1000, "out-cubic").finished,
// 			Tween.startTween("angle", 0.3, this.duration/1000, "out-cubic").finished,
			Tween.startTween("opacity", 0, this.duration/1000, "linear").finished,
		]);
		
		this.destroy();

	}

    destroy() {
        if (this.textObject) {
            this.textObject.destroy();
            this.textObject = null;
        }
    }
}



export async function showFloatingText(character, opts={}) {

	const shpereRad = Math.min(character.width,character.height);
    // **随机偏移范围**
    const offsetX = (Math.random() - 0.5) * shpereRad; // -25 到 25 的随机偏移
    const offsetY = (Math.random() - 0.75) * shpereRad*.5; // -15 到 15 的随机偏移
	
	
	const floating = new FloatingText(opts.type, character.x+offsetX,character.y+offsetY, opts.duration);
	
	floating.text = `${opts.value}`;
	floating.start();
	
}

