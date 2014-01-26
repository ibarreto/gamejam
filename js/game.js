/**
 * main
 */
var game = {

	/** 
	 * object where to store game global data
	 */
	data : {
		// score
		score : 0,
		carry : 0,
		kidX : 30,
		kidY : 300,
		kidZ : 0,
		dinoX : 400,
		dinoY : 200,
		dinoZ : 0,
		dinoTime : 0,
		//kidTime : 750000000000000
	},
	
	/**
	 *
	 * Initialize the application
	 */
	onload: function() {
	
		// init the video
		if (!me.video.init('screen', 1000, 600, true, 'auto')) {
			alert("Sorry but your browser does not support html 5 canvas. Please try with another one!");
			return;
		}

		// add "#debug" to the URL to enable the debug Panel
		if (document.location.hash === "#debug") {
			window.onReady(function () {
				me.plugin.register.defer(debugPanel, "debug");
			});
		}
		
		// initialize the "sound engine"
		me.audio.init("mp3");
		
		// set all ressources to be loaded
		me.loader.onload = this.loaded.bind(this);
		
		// set all ressources to be loaded
		me.loader.preload(game.resources);
		
		// load everything & display a loading screen
		me.state.change(me.state.LOADING);
	},
	
	
	/**
	 * callback when everything is loaded
	 */
	loaded: function ()	{
		me.state.set(me.state.MENU, new game.TitleScreen());
	
		// set the "Play/Ingame" Screen Object
		me.state.set(me.state.PLAY, new game.PlayScreen());

		me.state.set(me.state.INTRO, new game.IntroScreen());
		
		// set the fade transition effect
		me.state.transition("fade","#FFFFFF", 250);
		
		// add our player entity in the entity pool
		me.entityPool.add("mainPlayer", game.PlayerEntity);
		me.entityPool.add("dinasaurPlayer", game.DinasaurEntity);
		// add our enemy entity in the entity pool
		me.entityPool.add("SlimeEntity", game.SlimeEnemyEntity);
		me.entityPool.add("FlyEntity", game.FlyEnemyEntity);
		me.entityPool.add("CoinEntity", game.CoinEntity);
		me.entityPool.add("DinoStuffyEntity", game.DinoStuffyEntity);
		me.entityPool.add("KidStuffyEntity", game.KidStuffyEntity);
		me.input.bindKey(me.input.KEY.W, "goToImaginary", true);
		me.input.bindKey(me.input.KEY.Q, "goToReal", true);
		
		// load the texture atlas file
		// this will be used by object entities later
		game.texture = new me.TextureAtlas(me.loader.getJSON("texture"), me.loader.getImage("texture"));
		
		// switch to PLAY state
		me.state.change(me.state.MENU);
	}
};

