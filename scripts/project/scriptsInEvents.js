function getHashParam(param) {
  const hash = window.location.hash.substring(1); // 去除 `#`
  const params = new URLSearchParams(hash);
  return params.get(param);
}

const scriptsInEvents = {
  async Maineventsheet_Event4_Act1(runtime, localVars) {
    console.log("server complate");
  },

  async Maineventsheet_Event5_Act1(runtime, localVars) {
    console.error("server error");
  },

  async Maineventsheet_Event16_Act1(runtime, localVars) {},

  async Maineventsheet_Event18_Act1(runtime, localVars) {
    const search = new URLSearchParams(location.search);
    let initData = search.get("initData");
    initData = initData && atob(initData);

    let api = search.get("api");
    api = api && atob(api);

    if (!initData || !api) return;

    runtime.globalVars.serverUrl = api + "/api/hunter";
    runtime.globalVars.tgtTooken = initData;

    console.log("initData:", api, initData);
    runtime.callFunction("serverStartInfo");
  },

  async Maineventsheet_Event22(runtime, localVars) {
    window.addEventListener("hashchange", function () {
      const activated = getHashParam("activated");
      if (activated === "1") {
        console.log("Activated is 1");
        runtime.callFunction("playStateFunc", Number(activated));
      } else if (activated === "0") {
        console.log("Activated is not 1");
        runtime.callFunction("playStateFunc", Number(activated));
      }
    });
  },

  async Gameplayereventsheet_Event31_Act1(runtime, localVars) {
    const json = runtime.objects.JSON.getFirstInstance();
    const LevelOutline = runtime.objects.LevelOutline.getFirstInstance();
    const MonsterPointers = runtime.objects.MonsterPointer.getPickedInstances();

    const jsonCopy = json.getJsonDataCopy();

    const chapters = jsonCopy.gameInfo.data.chapters;
    const monsters = jsonCopy.gameInfo.data.monsters;

    const chapter = LevelOutline.instVars.chapterCount;
    const sub_chapter = LevelOutline.instVars.levelCount;

    const chapterData = chapters.find(
      (item) => item.chapter === chapter && item.sub_chapter === sub_chapter
    );

    if (chapterData !== undefined) {
      const monsterNames = chapterData.monsters.split(",");
      // 	const monsterNames = ["M_004","M_002","M_003"];
      const currentMonsterNames = [];

      for (let idx = 0; idx < monsterNames.length; idx++) {
        if (idx > 2) break;

        const monsterData = monsters.find(
          (item) => item.monster_id === monsterNames[idx]
        );

        currentMonsterNames[idx] = monsterData;
      }
      jsonCopy.currentMonsterNames = currentMonsterNames;
      json.setJsonDataCopy(jsonCopy);
    }
  },

  async Gameplayereventsheet_Event45_Act3(runtime, localVars) {
    const json = runtime.objects.JSON.getFirstInstance();
    const LevelOutline = runtime.objects.LevelOutline.getFirstInstance();
    const jsonCopy = json.getJsonDataCopy();

    const chapters = jsonCopy.gameInfo.data.chapters;
    const chapter = LevelOutline.instVars.chapterCount;
    const sub_chapter = LevelOutline.instVars.levelCount;

    const maxChapter = chapters.filter(
      (item) => item.chapter === chapter
    ).length;

    LevelOutline.instVars.levelMaxCount = maxChapter;
  },

  async Gameplayereventsheet_Event70_Act1(runtime, localVars) {
    const Chest = runtime.objects.Chest.getFirstInstance();

    Chest.instVars.nextChestTime = new Date().getTime() * 0.001 + 30;
  },

  async Gameplayereventsheet_Event77_Act1(runtime, localVars) {
    const Chest = runtime.objects.Chest.getFirstInstance();

    Chest.instVars.nextChestTime = new Date().getTime() * 0.001 + 30;
  },

  async Gameplayereventsheet_Event84_Act1(runtime, localVars) {
    const Chest = runtime.objects.Chest.getFirstInstance();

    Chest.instVars.nextChestTime = new Date().getTime() * 0.001 + 30;
  },

  async Gameplayereventsheet_Event146_Act3(runtime, localVars) {
    console.log("skin");
  },

  async Gameplayereventsheet_Event150_Act1(runtime, localVars) {
    const Chest = runtime.objects.Chest.getFirstInstance();
    Chest.instVars.tickTime = new Date().getTime() * 0.001;
  },

  async Gameplayereventsheet_Event173_Act1(runtime, localVars) {
    console.log("Trash");
  },

  async Gameplayereventsheet_Event174_Act1(runtime, localVars) {
    console.log("Eq1");
  },

  async Gameplayereventsheet_Event184_Act1(runtime, localVars) {
    console.log("Eq2");
  },

  async Gameplayereventsheet_Event194_Act1(runtime, localVars) {
    console.log("Eq3");
  },

  async Gameplayereventsheet_Event219_Act2(runtime, localVars) {
    console.log("Tile");
  },
};

self.C3.ScriptsInEvents = scriptsInEvents;
