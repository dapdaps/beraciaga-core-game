


const scriptsInEvents = {

	async Maineventsheet_Event3_Act1(runtime, localVars)
	{
		
		
		// if(window?.Telegram?.WebApp
		//    && window.Telegram.WebApp.initData!==""
		//   ){
		// 	runtime.globalVars.tgtTooken
		// 		= window.Telegram.WebApp.initData;
		// 	runtime.callFunction("serverStartInfo")
		// } else {
		// 	console.error("Failed to load Telegram WebApp SDK");
		// }
		
		// console.log("WebApp-initData", window?.Telegram?.WebApp?.initData);
		
		
		
		window.addEventListener('message', (e) => {
			const { data } = e;
		
			// 检查消息类型
			if (data?.type !== 'Beraciaga') return;
		
			// 提取数据
			const {
				// 请求接口
				API: api,
				TG: telegram,
			} = data?.data ?? {};
		
			// 后端需要的 Telegram 签名数据
			const { initData } = telegram ?? {};
		
			// TODO: 在这里处理接收到的数据
			console.log('API:', api);
			console.log('Telegram Data:', initData);
		
			runtime.globalVars.serverUrl = api;
			runtime.globalVars.tgtTooken = initData;
			runtime.callFunction("serverStartInfo")
		});
	},

	async Maineventsheet_Event7_Act1(runtime, localVars)
	{
		console.log("server complate")
	},

	async Maineventsheet_Event8_Act1(runtime, localVars)
	{
		console.error("server error")
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

	async Gameplayereventsheet_Event68_Act1(runtime, localVars)
	{
		const Chest = runtime.objects.Chest.getFirstInstance();
		
		Chest.instVars.nextChestTime = new Date().getTime()*0.001 + 30;
		
		
	},

	async Gameplayereventsheet_Event75_Act1(runtime, localVars)
	{
		const Chest = runtime.objects.Chest.getFirstInstance();
		
		Chest.instVars.nextChestTime = new Date().getTime()*0.001 + 30;
		
		
	},

	async Gameplayereventsheet_Event82_Act1(runtime, localVars)
	{
		const Chest = runtime.objects.Chest.getFirstInstance();
		
		Chest.instVars.nextChestTime = new Date().getTime()*0.001 + 30;
		
		
	},

	async Gameplayereventsheet_Event144_Act3(runtime, localVars)
	{
		console.log("skin")
	},

	async Gameplayereventsheet_Event148_Act1(runtime, localVars)
	{
		const Chest = runtime.objects.Chest.getFirstInstance();
		Chest.instVars.tickTime = new Date().getTime()*0.001;
		
	},

	async Gameplayereventsheet_Event171_Act1(runtime, localVars)
	{
		console.log("Trash")
	},

	async Gameplayereventsheet_Event172_Act1(runtime, localVars)
	{
		console.log("Eq1")
	},

	async Gameplayereventsheet_Event180_Act1(runtime, localVars)
	{
		console.log("Eq2")
	},

	async Gameplayereventsheet_Event188_Act1(runtime, localVars)
	{
		console.log("Eq3")
	},

	async Gameplayereventsheet_Event211_Act2(runtime, localVars)
	{
		console.log("Tile")
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

