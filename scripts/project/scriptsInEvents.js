


const scriptsInEvents = {

	async Maineventsheet_Event1_Act1(runtime, localVars)
	{
		
		if(window?.Telegram?.WebApp
		&& window.Telegram.WebApp.initData!==""
		){
			runtime.globalVars.tgtTooken
				= window.Telegram.WebApp.initData;
			runtime.callFunction("serverStartInfo")
		} else {
			console.error("Failed to load Telegram WebApp SDK");
		}
		
		console.log("WebApp-initData", window.Telegram.WebApp.initData);
		alert(window.Telegram.WebApp.initData)
		
		
	},

	async Maineventsheet_Event5_Act1(runtime, localVars)
	{
		console.log("server complate")
	},

	async Maineventsheet_Event6_Act1(runtime, localVars)
	{
		console.error("server error")
	},

	async Gameplayereventsheet_Event112_Act3(runtime, localVars)
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

	async Gameplayereventsheet_Event124_Act3(runtime, localVars)
	{
		console.log("skin")
	},

	async Gameplayereventsheet_Event146_Act1(runtime, localVars)
	{
		console.log("Trash")
	},

	async Gameplayereventsheet_Event147_Act1(runtime, localVars)
	{
		console.log("Eq1")
	},

	async Gameplayereventsheet_Event155_Act1(runtime, localVars)
	{
		console.log("Eq2")
	},

	async Gameplayereventsheet_Event163_Act1(runtime, localVars)
	{
		console.log("Eq3")
	},

	async Gameplayereventsheet_Event186_Act2(runtime, localVars)
	{
		console.log("Tile")
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

