
// import "https://telegram.org/js/telegram-web-app.js?56"
// import "https://unpkg.com/vconsole@latest/dist/vconsole.min.js"
// var vConsole = new window.VConsole();


// function waitForMessage() {
// 	return new Promise((resolve, reject) => {
// 		const listener = (e) => {
// 			const { data } = e;

// 			// 检查消息类型
// 			if (data?.type !== 'Beraciaga') return;

// 			resolve(data);
// 		};

// 		window.addEventListener('message', listener);
// 	});
// }



// window.waitMessageInstance =  awaitForMessage();

// window.waitMessageInstance.then(data=>{
// 	// 提取数据
// 	const {
// 		// 请求接口
// 		API: api,
// 		TG: telegram,
// 	} = data?.data ?? {};

// 	// 后端需要的 Telegram 签名数据
// 	const { initData } = telegram ?? {};

// 	// TODO: 在这里处理接收到的数据
// 	console.log('API:', api);
// 	console.log('Telegram Data:', initData);

// 	runtime.globalVars.serverUrl = api;
// 	runtime.globalVars.tgtTooken = initData;
// 	runtime.callFunction("serverStartInfo");

// })
