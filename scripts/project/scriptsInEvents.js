


const scriptsInEvents = {

	async Maineventsheet_Event2_Act1(runtime, localVars)
	{
			runtime.callFunction("serverStartInfo")
		
	},

	async Maineventsheet_Event3_Act1(runtime, localVars)
	{
			runtime.callFunction("serverStartInfo")
		
	},

	async Maineventsheet_Event7_Act1(runtime, localVars)
	{
		console.log("server complate")
	},

	async Maineventsheet_Event8_Act1(runtime, localVars)
	{
		console.error("server error")
	},

	async Gameplayereventsheet_Event114_Act3(runtime, localVars)
	{
		
		const json = runtime.objects.JSON.getFirstInstance();
		const LevelOutline = runtime.objects.LevelOutline.getFirstInstance();
		const MonsterPointers = runtime.objects.MonsterPointer.getPickedInstances();
		
		const jsonCopy = json.getJsonDataCopy();
		
		const chapters =  jsonCopy.gameInfo.data.chapters;
		const monsters =  jsonCopy.gameInfo.data.monsters;
		
		
		const chapter = LevelOutline.instVars.chapterCount;
		const sub_chapter = LevelOutline.instVars.levelCount;
		
		const maxChapter = chapters.filter(item=>item.chapter === chapter).length;
		
		LevelOutline.instVars.levelMaxCount = maxChapter;
		
		
		const chapterData = chapters.find(item=>(item.chapter === chapter&&item.sub_chapter === sub_chapter));
		
		if(chapterData!==undefined){
		
			const monsterNames = chapterData.monsters.split(",");
			// 	const monsterNames = ["M_004","M_002","M_003"];
			const currentMonsterNames = [];
		
			for(let idx = 0; idx < monsterNames.length; idx++){
		
				if(idx>2) break;
		
		
				const monsterData = monsters.find(item=>item.monster_id === monsterNames[idx]);
		
				currentMonsterNames[idx] = monsterData;
		
			}
			jsonCopy.currentMonsterNames = currentMonsterNames;
			json.setJsonDataCopy(jsonCopy);
		
		}
		
	},

	async Gameplayereventsheet_Event128_Act3(runtime, localVars)
	{
		console.log("skin")
	},

	async Gameplayereventsheet_Event150_Act1(runtime, localVars)
	{
		console.log("Trash")
	},

	async Gameplayereventsheet_Event151_Act1(runtime, localVars)
	{
		console.log("Eq1")
	},

	async Gameplayereventsheet_Event159_Act1(runtime, localVars)
	{
		console.log("Eq2")
	},

	async Gameplayereventsheet_Event167_Act1(runtime, localVars)
	{
		console.log("Eq3")
	},

	async Gameplayereventsheet_Event190_Act2(runtime, localVars)
	{
		console.log("Tile")
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

