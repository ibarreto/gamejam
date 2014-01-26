
game.IntroScreen = me.ScreenObject.extend({
    // constructor
    init: function () {
        this.parent(true);
      	this.intro == null;
    },

    // reset function
    onResetEvent: function () {
        if (this.intro== null) {
            // init stuff if not yet done
            this.intro = me.loader.getImage("cover_wide2");
            this.font = new me.BitmapFont("32x32_font", 32);
        }

        me.input.bindKey(me.input.KEY.ENTER, "enter", true);
        me.audio.playTrack("voiceover");
    },

    // update function
    update: function () {
        if (me.input.isKeyPressed('enter')) {
            me.audio.stopTrack("voiceover");
            me.state.change(me.state.PLAY);
        }
        return true;
    },

    // draw function
    draw: function (context) {
        context.drawImage(this.intro, 0, 0);
        this.font.draw(context, "ENTER TO SKIP", 200, 530);
    },

    // destroy function
    onDestroyEvent: function () {
        me.input.unbindKey(me.input.KEY.ENTER);
    }

});
