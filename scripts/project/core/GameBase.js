

export class GameBase {
	
	constructor(){}

	update(){}
	
	static getInstance() {
		if (this.instance === undefined) {
		  this.instance = new this(...arguments);
		}

		return this.instance;
	}

}