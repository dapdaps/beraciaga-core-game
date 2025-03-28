function getHashParam(param) {
	const hash = window.location.hash.substring(1); // 去除 `#`
	const params = new URLSearchParams(hash);
	return params.get(param);
}


const scriptsInEvents = {

	async Gameplayereventsheet_Event2_Act3(runtime, localVars)
	{
		console.error("chestAddInfo")
	},

	async Gameplayereventsheet_Event4_Act3(runtime, localVars)
	{
		console.error("chestInfo")
	},

	async Gameplayereventsheet_Event6_Act3(runtime, localVars)
	{
		console.error("deleteInfo")
	},

	async Gameplayereventsheet_Event8_Act3(runtime, localVars)
	{
		console.error("changeEquipmentInfo")
	},

	async Gameplayereventsheet_Event10_Act3(runtime, localVars)
	{
		console.error("craftEquipmentInfo")
	},

	async Gameplayereventsheet_Event12_Act3(runtime, localVars)
	{
		console.error("changeChapterInfo")
	},

	async Gameplayereventsheet_Event31_Act1(runtime, localVars)
	{
		
		const json = runtime.objects.JSON.getFirstInstance();
		const LevelOutline = runtime.objects.LevelOutline.getFirstInstance();
		const MonsterPointers = runtime.objects.MonsterPointer.getPickedInstances();
		
		const jsonCopy = json.getJsonDataCopy();
		
		const chapters =  jsonCopy.gameInfo.data.chapters;
		const monsters =  jsonCopy.gameInfo.data.monsters;
		
		const chapter = LevelOutline.instVars.chapterCount;
		const sub_chapter = LevelOutline.instVars.levelCount;
		
		
		const chapterData = chapters.find(item=>(item.chapter === chapter&&item.sub_chapter === sub_chapter));
		
		console.log(jsonCopy, chapter, sub_chapter, chapterData);
		
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

	async Gameplayereventsheet_Event45_Act3(runtime, localVars)
	{
		
		const json = runtime.objects.JSON.getFirstInstance();
		const LevelOutline = runtime.objects.LevelOutline.getFirstInstance();
		const jsonCopy = json.getJsonDataCopy();
		
		const chapters =  jsonCopy.gameInfo.data.chapters;
		const chapter = LevelOutline.instVars.chapterCount;
		const sub_chapter = LevelOutline.instVars.levelCount;
		
		
		
		const maxChapter = chapters.filter(item=>item.chapter === chapter).length;
		
		LevelOutline.instVars.levelMaxCount = maxChapter;
		
	},

	async Gameplayereventsheet_Event70_Act1(runtime, localVars)
	{
		const Chest = runtime.objects.Chest.getFirstInstance();
		
		Chest.instVars.nextChestTime = new Date().getTime()*0.001 + 30;
		
		
	},

	async Gameplayereventsheet_Event77_Act1(runtime, localVars)
	{
		const Chest = runtime.objects.Chest.getFirstInstance();
		
		Chest.instVars.nextChestTime = new Date().getTime()*0.001 + 30;
		
		
	},

	async Gameplayereventsheet_Event84_Act1(runtime, localVars)
	{
		const Chest = runtime.objects.Chest.getFirstInstance();
		
		Chest.instVars.nextChestTime = new Date().getTime()*0.001 + 30;
		
		
	},

	async Gameplayereventsheet_Event147_Act3(runtime, localVars)
	{
		console.log("skin")
	},

	async Gameplayereventsheet_Event151_Act1(runtime, localVars)
	{
		const Chest = runtime.objects.Chest.getFirstInstance();
		Chest.instVars.tickTime = new Date().getTime()*0.001;
		
	},

	async Gameplayereventsheet_Event174_Act1(runtime, localVars)
	{
		console.log("Trash")
	},

	async Gameplayereventsheet_Event175_Act1(runtime, localVars)
	{
		console.log("Eq1")
	},

	async Gameplayereventsheet_Event185_Act1(runtime, localVars)
	{
		console.log("Eq2")
	},

	async Gameplayereventsheet_Event195_Act1(runtime, localVars)
	{
		console.log("Eq3")
	},

	async Gameplayereventsheet_Event220_Act2(runtime, localVars)
	{
		console.log("Tile")
	},

	async Maineventsheet_Event2_Act1(runtime, localVars)
	{
		console.log("severStartInfo:start");
	},

	async Maineventsheet_Event2_Act13(runtime, localVars)
	{
		console.log("severStartInfo:end");
	},

	async Maineventsheet_Event3_Act1(runtime, localVars)
	{
		console.log("gameplayer:start");
	},

	async Maineventsheet_Event4_Act1(runtime, localVars)
	{
		console.log("server complate")
	},

	async Maineventsheet_Event5_Act1(runtime, localVars)
	{
		console.error("server error")
	},

	async Maineventsheet_Event6_Act1(runtime, localVars)
	{
		console.log("loadtestdata:0");
	},

	async Maineventsheet_Event7_Act1(runtime, localVars)
	{
		console.log("loadtestdata:1");
	},

	async Maineventsheet_Event8_Act1(runtime, localVars)
	{
		console.log("loadtestdata:2");
	},

	async Maineventsheet_Event9_Act1(runtime, localVars)
	{
		console.log("loadtestdata:3");
	},

	async Maineventsheet_Event16_Act1(runtime, localVars)
	{
		
	},

	async Maineventsheet_Event18_Act1(runtime, localVars)
	{
		const search = new URLSearchParams(location.search);
		let initData = search.get("initData");
		initData = initData && atob(initData);
		
		let api = search.get("api");
		api = api && atob(api);
		
		if (!initData || !api) return;
		
		runtime.globalVars.serverUrl = api + "/api/hunter";
		runtime.globalVars.tgtTooken = initData;
		runtime.callFunction("serverStartInfo");
	},

	async Maineventsheet_Event22(runtime, localVars)
	{
		
		window.addEventListener('hashchange', function() {
			const activated = getHashParam('activated');
			if (activated === '1') {
				console.log('Activated is 1');
				runtime.callFunction("playStateFunc", Number(activated));
			} else if(activated==="0"){
				console.log('Activated is not 1');
				runtime.callFunction("playStateFunc", Number(activated));
			}
		});
	},

	async Gameplayereventsheet_Event231_Act2(runtime, localVars)
	{
		setTimeout(()=>{
		const json = runtime.objects.JSON.getFirstInstance();
		const player = runtime.objects.Players.getFirstInstance();
		const jsonCopy = json.getJsonDataCopy();
		
		Object.assign(player.instVars, JSON.parse(jsonCopy["player"]["iVars"]));
		
		});
	},

	async Gameplayereventsheet_Event230_Act2(runtime, localVars)
	{
		const json = runtime.objects.JSON.getFirstInstance();
		const player = runtime.objects.Players.getFirstInstance();
		
		const jsonCopy = json.getJsonDataCopy();
		
		console.log("player.instVars",player.instVars.attackSpeed)
		
		jsonCopy.player = {
			info:{},
			iVars: JSON.stringify(player.instVars)
		}
		
		
		json.setJsonDataCopy(jsonCopy);
		
	}
};

self.C3.ScriptsInEvents = scriptsInEvents;
