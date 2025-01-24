const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Timeline,
		C3.Plugins.Mouse,
		C3.Plugins.Touch,
		C3.Plugins.Flowchart,
		C3.Plugins.Audio,
		C3.Plugins.LocalStorage,
		C3.Plugins.PlatformInfo,
		C3.Plugins.EMI_INDO_node_axios,
		C3.Plugins.AdvancedRandom,
		C3.Plugins.Internationalization,
		C3.Plugins.AJAX,
		C3.Plugins.Dictionary,
		C3.Plugins.Json,
		C3.Plugins.Arr,
		C3.Plugins.Date,
		C3.Plugins.Sprite,
		C3.Plugins.TiledBg,
		C3.Behaviors.Physics,
		C3.Behaviors.Tween,
		C3.Behaviors.MoveTo,
		C3.Behaviors.custom,
		C3.Plugins.Spritefont2,
		C3.Behaviors.Bullet,
		C3.Behaviors.skymen_RadialProgress,
		C3.Plugins.NinePatch,
		C3.Plugins.DrawingCanvas,
		C3.Behaviors.DragnDrop,
		C3.Behaviors.Flash,
		C3.Plugins.System.Cnds.IsPreview,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.System.Cnds.Else,
		C3.ScriptsInEvents.Maineventsheet_Event2_Act1,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.ScriptsInEvents.Maineventsheet_Event3_Act1,
		C3.Plugins.System.Cnds.IsGroupActive,
		C3.Plugins.AJAX.Acts.RequestFile,
		C3.Plugins.AJAX.Acts.SetHeader,
		C3.Plugins.AJAX.Acts.OverrideMIMEType,
		C3.Plugins.AJAX.Acts.Request,
		C3.Plugins.Json.Cnds.CompareValue,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.AJAX.Cnds.OnAnyComplete,
		C3.ScriptsInEvents.Maineventsheet_Event7_Act1,
		C3.Plugins.AJAX.Cnds.OnAnyError,
		C3.ScriptsInEvents.Maineventsheet_Event8_Act1,
		C3.Plugins.AJAX.Cnds.OnComplete,
		C3.Plugins.Arr.Acts.JSONLoad,
		C3.Plugins.AJAX.Exps.LastData,
		C3.Plugins.Json.Acts.SetJSON,
		C3.Plugins.AJAX.Acts.Post,
		C3.Plugins.System.Acts.SetTimescale,
		C3.Plugins.Audio.Acts.SetSilent,
		C3.ScriptsInEvents.Maineventsheet_Event22,
		C3.Plugins.System.Acts.Signal,
		C3.Plugins.AJAX.Cnds.OnError,
		C3.Plugins.System.Cnds.OnLoadFinished,
		C3.Plugins.System.Cnds.PickLastCreated,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.Audio.Acts.SetPaused,
		C3.Plugins.TiledBg.Acts.SetInstanceVar,
		C3.Plugins.Json.Exps.Get,
		C3.Behaviors.DragnDrop.Acts.SetEnabled,
		C3.Plugins.System.Acts.SetLayerOpacity,
		C3.Plugins.Sprite.Acts.SetInstanceVar,
		C3.Plugins.System.Acts.WaitForPreviousActions,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Sprite.Acts.SetScale,
		C3.Plugins.Touch.Cnds.IsTouchingObject,
		C3.Plugins.System.Cnds.Compare,
		C3.Plugins.Touch.Cnds.OnTapGestureObject,
		C3.Plugins.Sprite.Cnds.HasTags,
		C3.Plugins.Sprite.Acts.SetVisible,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.Sprite.Acts.SetBoolInstanceVar,
		C3.Plugins.System.Acts.SetFullscreenQuality,
		C3.Plugins.System.Acts.SetLayerInteractive,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.System.Exps.layoutwidth,
		C3.Plugins.System.Exps.layoutheight,
		C3.Plugins.Sprite.Acts.SetSize,
		C3.Plugins.Sprite.Exps.AnimationName,
		C3.Behaviors.Tween.Acts.TweenOneProperty,
		C3.Plugins.System.Cnds.ForEach,
		C3.Plugins.System.Cnds.For,
		C3.Plugins.Json.Exps.ArraySize,
		C3.Plugins.System.Exps.loopindex,
		C3.Plugins.System.Acts.CreateObjectByName,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.Sprite.Acts.ZMoveToObject,
		C3.Plugins.Sprite.Acts.Spawn,
		C3.Plugins.Sprite.Acts.AddChild,
		C3.Plugins.Sprite.Acts.AddInstanceVar,
		C3.ScriptsInEvents.Gameplayereventsheet_Event31_Act1,
		C3.Plugins.System.Cnds.PickByComparison,
		C3.Plugins.Spritefont2.Exps.Tags,
		C3.Plugins.TiledBg.Acts.SetWidth,
		C3.Plugins.Spritefont2.Acts.SetText,
		C3.Plugins.Arr.Exps.At,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.TiledBg.Acts.LoadURL,
		C3.Plugins.System.Cnds.PickAll,
		C3.ScriptsInEvents.Gameplayereventsheet_Event45_Act3,
		C3.Plugins.Sprite.Acts.SetAnimSpeed,
		C3.Behaviors.Tween.Acts.TweenTwoProperties,
		C3.Plugins.Sprite.Cnds.PickByUID,
		C3.Plugins.System.Cnds.Repeat,
		C3.Behaviors.Physics.Acts.ApplyForceAtAngle,
		C3.Plugins.System.Exps.random,
		C3.Plugins.Sprite.Exps.UID,
		C3.Plugins.Sprite.Cnds.CompareInstanceVar,
		C3.Plugins.System.Acts.WaitForSignal,
		C3.Plugins.Json.Cnds.IsBooleanSet,
		C3.Plugins.Json.Acts.SetNull,
		C3.Plugins.Sprite.Acts.SubInstanceVar,
		C3.ScriptsInEvents.Gameplayereventsheet_Event70_Act1,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.Plugins.TiledBg.Exps.BBoxLeft,
		C3.Plugins.Sprite.Exps.Width,
		C3.Plugins.TiledBg.Exps.BBoxRight,
		C3.Plugins.TiledBg.Exps.BBoxTop,
		C3.Plugins.Sprite.Exps.Height,
		C3.Plugins.TiledBg.Exps.BBoxBottom,
		C3.ScriptsInEvents.Gameplayereventsheet_Event77_Act1,
		C3.ScriptsInEvents.Gameplayereventsheet_Event84_Act1,
		C3.Plugins.Sprite.Acts.MoveToTop,
		C3.Plugins.TiledBg.Acts.MoveForward,
		C3.Plugins.System.Exps.dt,
		C3.Plugins.TiledBg.Acts.SetX,
		C3.Plugins.TiledBg.Exps.X,
		C3.Plugins.TiledBg.Exps.ImageWidth,
		C3.Plugins.Sprite.Acts.MoveForward,
		C3.Plugins.Sprite.Cnds.CompareX,
		C3.Plugins.Audio.Acts.Stop,
		C3.Plugins.System.Acts.SetBoolVar,
		C3.Plugins.System.Cnds.CompareBoolVar,
		C3.Plugins.System.Cnds.PickByHighestLowestValue,
		C3.Plugins.Sprite.Exps.Count,
		C3.Plugins.Spritefont2.Cnds.HasTags,
		C3.Plugins.TiledBg.Cnds.CompareInstanceVar,
		C3.Plugins.Audio.Acts.StopAll,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.Sprite.Cnds.IsOnScreen,
		C3.Plugins.Sprite.Cnds.IsBoolInstanceVarSet,
		C3.Plugins.Sprite.Cnds.PickChildren,
		C3.Plugins.System.Exps.min,
		C3.Plugins.System.Exps.max,
		C3.Plugins.Sprite.Acts.SetEffectParam,
		C3.Plugins.TiledBg.Cnds.IsOnScreen,
		C3.Plugins.TiledBg.Cnds.PickChildren,
		C3.Plugins.TiledBg.Acts.SetOpacity,
		C3.Plugins.TiledBg.Exps.Opacity,
		C3.Plugins.TiledBg.Exps.Width,
		C3.Plugins.Sprite.Cnds.OnAnyAnimFinished,
		C3.Plugins.Sprite.Acts.SetDefaultColor,
		C3.ScriptsInEvents.Gameplayereventsheet_Event146_Act3,
		C3.Behaviors.skymen_RadialProgress.Acts.SetValue,
		C3.ScriptsInEvents.Gameplayereventsheet_Event150_Act1,
		C3.Plugins.Sprite.Cnds.IsVisible,
		C3.Plugins.Sprite.Exps.PickedCount,
		C3.Plugins.System.Exps.rgbex255,
		C3.Behaviors.DragnDrop.Cnds.OnDragStart,
		C3.Plugins.Touch.Exps.X,
		C3.Plugins.Touch.Exps.Y,
		C3.Behaviors.DragnDrop.Cnds.IsDragging,
		C3.Behaviors.DragnDrop.Cnds.OnDrop,
		C3.Plugins.Sprite.Cnds.IsOverlapping,
		C3.ScriptsInEvents.Gameplayereventsheet_Event173_Act1,
		C3.ScriptsInEvents.Gameplayereventsheet_Event174_Act1,
		C3.ScriptsInEvents.Gameplayereventsheet_Event182_Act1,
		C3.ScriptsInEvents.Gameplayereventsheet_Event190_Act1,
		C3.Plugins.System.Cnds.ForEachOrdered,
		C3.Plugins.Sprite.Exps.ZIndex,
		C3.Plugins.Sprite.Exps.BBoxLeft,
		C3.Plugins.Sprite.Acts.SetX,
		C3.Plugins.Sprite.Exps.BBoxRight,
		C3.Plugins.Sprite.Exps.BBoxTop,
		C3.Plugins.Sprite.Acts.SetY,
		C3.Plugins.Sprite.Exps.BBoxBottom,
		C3.ScriptsInEvents.Gameplayereventsheet_Event213_Act2,
		C3.Plugins.Sprite.Cnds.OnAnimFinished,
		C3.Plugins.Sprite.Exps.AsJSON,
		C3.Plugins.Sprite.Acts.LoadFromJsonString,
		C3.Plugins.Json.Exps.GetAsCompactString,
		C3.Plugins.Spritefont2.Exps.X,
		C3.Plugins.Spritefont2.Exps.Y,
		C3.Behaviors.Flash.Acts.Flash,
		C3.Plugins.Sprite.Acts.SetCollisions
	];
};
self.C3_JsPropNameTable = [
	{FloatingTimelineController: 0},
	{Mouse: 0},
	{Touch: 0},
	{FlowchartController: 0},
	{Audio: 0},
	{本地存储: 0},
	{设备信息: 0},
	{axios: 0},
	{高级随机: 0},
	{本地化: 0},
	{AJAX: 0},
	{字典: 0},
	{JSON: 0},
	{Array: 0},
	{Day: 0},
	{level: 0},
	{maxLevel: 0},
	{name: 0},
	{health: 0},
	{maxHealth: 0},
	{attack: 0},
	{attackSpeed: 0},
	{defense: 0},
	{dodgeRate: 0},
	{attackTime: 0},
	{hurt: 0},
	{isKnockedBack: 0},
	{KnockbackSpeed: 0},
	{isHealthEffect: 0},
	{healthEffect: 0},
	{equipmentN1: 0},
	{equipmentN2: 0},
	{equipmentN3: 0},
	{isAlive: 0},
	{isPlayer: 0},
	{A_019: 0},
	{void: 0},
	{A_018: 0},
	{A_009: 0},
	{A_002: 0},
	{A_008: 0},
	{A_003: 0},
	{A_004: 0},
	{A_006: 0},
	{A_014: 0},
	{A_011: 0},
	{A_020: 0},
	{A_007: 0},
	{A_017: 0},
	{A_016: 0},
	{A_005: 0},
	{A_012: 0},
	{A_013: 0},
	{A_010: 0},
	{A_015: 0},
	{Player: 0},
	{A_001: 0},
	{type: 0},
	{category: 0},
	{Eq1: 0},
	{Eq2: 0},
	{Eq3: 0},
	{isActive: 0},
	{equipmentCount: 0},
	{equipmentMaxCount: 0},
	{EqCheck: 0},
	{EqTab: 0},
	{EqTarget1: 0},
	{EqTarget2: 0},
	{EqTarget3: 0},
	{ChestCount: 0},
	{ChestMaxCount: 0},
	{nextChestTime: 0},
	{tickTime: 0},
	{Chest: 0},
	{Trash: 0},
	{ChestMask: 0},
	{EquipmentContainer: 0},
	{Ellipse: 0},
	{Rectangle: 0},
	{M_023: 0},
	{M_022: 0},
	{M_021: 0},
	{M_020: 0},
	{M_001: 0},
	{M_011: 0},
	{M_010: 0},
	{M_012: 0},
	{M_013: 0},
	{M_002: 0},
	{M_003: 0},
	{M_004: 0},
	{M_005: 0},
	{M_006: 0},
	{M_008: 0},
	{M_007: 0},
	{M_009: 0},
	{M_016: 0},
	{M_015: 0},
	{M_014: 0},
	{M_024: 0},
	{M_019: 0},
	{M_018: 0},
	{M_017: 0},
	{Group3: 0},
	{Group5: 0},
	{Group8: 0},
	{Group9: 0},
	{HealthInline: 0},
	{showOpcatiy: 0},
	{healthRatio: 0},
	{HealthOutline: 0},
	{LevelInline: 0},
	{levelCount: 0},
	{levelMaxCount: 0},
	{chapterCount: 0},
	{chapterMaxCount: 0},
	{LevelOutline: 0},
	{StartGame: 0},
	{物理: 0},
	{Ground: 0},
	{PlayerStand: 0},
	{PlayerStart: 0},
	{PointerPixel: 0},
	{Tween: 0},
	{移动到: 0},
	{自定义移动: 0},
	{Coin: 0},
	{Boom: 0},
	{Floating: 0},
	{MonsterPointer: 0},
	{Content: 0},
	{TestPointer: 0},
	{targetUid: 0},
	{子弹: 0},
	{BulletN1: 0},
	{BoomN2: 0},
	{FloatingN2: 0},
	{补间动画: 0},
	{ChestN1: 0},
	{Group: 0},
	{Rectangle2: 0},
	{RadialProgress: 0},
	{ChestTimeMask: 0},
	{GridBackgroundN2: 0},
	{Background1: 0},
	{Background2: 0},
	{Background3: 0},
	{BottomBackground: 0},
	{GameMask: 0},
	{TiledBackground2: 0},
	{TiledBackground3: 0},
	{ChapterBackground: 0},
	{画布: 0},
	{精灵: 0},
	{平铺图: 0},
	{精灵2: 0},
	{DragDrop: 0},
	{Equipment: 0},
	{Character: 0},
	{闪烁: 0},
	{Players: 0},
	{Monsters: 0},
	{EquipmentCard: 0},
	{GameObject: 0},
	{serverUrl: 0},
	{tgtTooken: 0},
	{eqName: 0},
	{is_use: 0},
	{chapter: 0},
	{sub_chapter: 0},
	{activated: 0},
	{GameStatus: 0},
	{EqTabNumber: 0},
	{MonsterNumber: 0},
	{CurrentLevel: 0},
	{MaxLevel: 0},
	{usercoins: 0},
	{count: 0},
	{createX: 0},
	{createY: 0},
	{monsterUid: 0},
	{uid: 0},
	{targetX: 0},
	{targetY: 0},
	{uid1: 0},
	{uid2: 0},
	{level1: 0},
	{level2: 0},
	{damage: 0},
	{damageFloating: 0},
	{isFight: 0},
	{isPlayerAttaker: 0},
	{DraggingUID: 0},
	{EqTargetX: 0},
	{EqTargetY: 0},
	{EqStartX: 0},
	{EqStartY: 0},
	{ChestNumber: 0},
	{playerName: 0},
	{ShouldSkip: 0},
	{amount: 0}
];

self.InstanceType = {
	FloatingTimelineController: class extends self.IInstance {},
	Mouse: class extends self.IInstance {},
	Touch: class extends self.IInstance {},
	FlowchartController: class extends self.IInstance {},
	Audio: class extends self.IInstance {},
	本地存储: class extends self.IInstance {},
	设备信息: class extends self.IInstance {},
	axios: class extends self.C3.Plugins.EMI_INDO_node_axios.Instance {},
	高级随机: class extends self.IInstance {},
	本地化: class extends self.IInstance {},
	AJAX: class extends self.IInstance {},
	字典: class extends self.IDictionaryInstance {},
	JSON: class extends self.IJSONInstance {},
	Array: class extends self.IArrayInstance {},
	Day: class extends self.IInstance {},
	A_019: class extends self.ISpriteInstance {},
	void: class extends self.ISpriteInstance {},
	A_018: class extends self.ISpriteInstance {},
	A_009: class extends self.ISpriteInstance {},
	A_002: class extends self.ISpriteInstance {},
	A_008: class extends self.ISpriteInstance {},
	A_003: class extends self.ISpriteInstance {},
	A_004: class extends self.ISpriteInstance {},
	A_006: class extends self.ISpriteInstance {},
	A_014: class extends self.ISpriteInstance {},
	A_011: class extends self.ISpriteInstance {},
	A_020: class extends self.ISpriteInstance {},
	A_007: class extends self.ISpriteInstance {},
	A_017: class extends self.ISpriteInstance {},
	A_016: class extends self.ISpriteInstance {},
	A_005: class extends self.ISpriteInstance {},
	A_012: class extends self.ISpriteInstance {},
	A_013: class extends self.ISpriteInstance {},
	A_010: class extends self.ISpriteInstance {},
	A_015: class extends self.ISpriteInstance {},
	Player: class extends self.ISpriteInstance {},
	A_001: class extends self.ISpriteInstance {},
	Eq1: class extends self.ISpriteInstance {},
	Eq2: class extends self.ISpriteInstance {},
	Eq3: class extends self.ISpriteInstance {},
	EqCheck: class extends self.ISpriteInstance {},
	EqTab: class extends self.ISpriteInstance {},
	EqTarget1: class extends self.ISpriteInstance {},
	EqTarget2: class extends self.ISpriteInstance {},
	EqTarget3: class extends self.ISpriteInstance {},
	Chest: class extends self.ISpriteInstance {},
	Trash: class extends self.ISpriteInstance {},
	ChestMask: class extends self.ITiledBackgroundInstance {},
	EquipmentContainer: class extends self.ISpriteInstance {},
	Ellipse: class extends self.ISpriteInstance {},
	Rectangle: class extends self.ISpriteInstance {},
	M_023: class extends self.ISpriteInstance {},
	M_022: class extends self.ISpriteInstance {},
	M_021: class extends self.ISpriteInstance {},
	M_020: class extends self.ISpriteInstance {},
	M_001: class extends self.ISpriteInstance {},
	M_011: class extends self.ISpriteInstance {},
	M_010: class extends self.ISpriteInstance {},
	M_012: class extends self.ISpriteInstance {},
	M_013: class extends self.ISpriteInstance {},
	M_002: class extends self.ISpriteInstance {},
	M_003: class extends self.ISpriteInstance {},
	M_004: class extends self.ISpriteInstance {},
	M_005: class extends self.ISpriteInstance {},
	M_006: class extends self.ISpriteInstance {},
	M_008: class extends self.ISpriteInstance {},
	M_007: class extends self.ISpriteInstance {},
	M_009: class extends self.ISpriteInstance {},
	M_016: class extends self.ISpriteInstance {},
	M_015: class extends self.ISpriteInstance {},
	M_014: class extends self.ISpriteInstance {},
	M_024: class extends self.ISpriteInstance {},
	M_019: class extends self.ISpriteInstance {},
	M_018: class extends self.ISpriteInstance {},
	M_017: class extends self.ISpriteInstance {},
	Group3: class extends self.ISpriteInstance {},
	Group5: class extends self.ISpriteInstance {},
	Group8: class extends self.ISpriteInstance {},
	Group9: class extends self.ISpriteInstance {},
	HealthInline: class extends self.ITiledBackgroundInstance {},
	HealthOutline: class extends self.ITiledBackgroundInstance {},
	LevelInline: class extends self.ITiledBackgroundInstance {},
	LevelOutline: class extends self.ITiledBackgroundInstance {},
	StartGame: class extends self.ISpriteInstance {},
	Ground: class extends self.ISpriteInstance {},
	PlayerStand: class extends self.ISpriteInstance {},
	PlayerStart: class extends self.ISpriteInstance {},
	PointerPixel: class extends self.ISpriteInstance {},
	Coin: class extends self.ISpriteInstance {},
	Boom: class extends self.ISpriteInstance {},
	Floating: class extends self.ISpriteFontInstance {},
	MonsterPointer: class extends self.ISpriteInstance {},
	Content: class extends self.ISpriteFontInstance {},
	TestPointer: class extends self.ISpriteInstance {},
	BulletN1: class extends self.ISpriteInstance {},
	BoomN2: class extends self.ISpriteInstance {},
	FloatingN2: class extends self.ISpriteFontInstance {},
	ChestN1: class extends self.ISpriteInstance {},
	Group: class extends self.ISpriteInstance {},
	Rectangle2: class extends self.ISpriteInstance {},
	ChestTimeMask: class extends self.ISpriteInstance {},
	GridBackgroundN2: class extends self.IWorldInstance {},
	Background1: class extends self.ITiledBackgroundInstance {},
	Background2: class extends self.ITiledBackgroundInstance {},
	Background3: class extends self.ITiledBackgroundInstance {},
	BottomBackground: class extends self.ITiledBackgroundInstance {},
	GameMask: class extends self.ISpriteInstance {},
	TiledBackground2: class extends self.ITiledBackgroundInstance {},
	TiledBackground3: class extends self.ITiledBackgroundInstance {},
	ChapterBackground: class extends self.ISpriteInstance {},
	画布: class extends self.IDrawingCanvasInstance {},
	精灵: class extends self.ISpriteInstance {},
	平铺图: class extends self.ITiledBackgroundInstance {},
	精灵2: class extends self.ISpriteInstance {},
	Equipment: class extends self.ISpriteInstance {},
	Character: class extends self.ISpriteInstance {},
	Players: class extends self.ISpriteInstance {},
	Monsters: class extends self.ISpriteInstance {},
	EquipmentCard: class extends self.ISpriteInstance {},
	GameObject: class extends self.ISpriteInstance {}
}