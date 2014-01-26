game.TitleScreen = me.ScreenObject.extend({
    // constructor
    init: function () {
        this.parent(true);
        this.title = null;
        this.font = null;        
    },

    // reset function
    onResetEvent: function () {
        if (this.title == null) {
            // init stuff if not yet done
            this.title = me.loader.getImage("cover_wide");
            this.font = new me.BitmapFont("32x32_font", 32);
        }
        me.input.bindKey(me.input.KEY.ENTER, "enter", true);
        me.audio.playTrack("technicolour");
    },

    // update function
    update: function () {
        if (me.input.isKeyPressed('enter')) {
            me.audio.stopTrack("technicolour");
            me.state.change(me.state.PLAY);
        }
        return true;
    },

    // draw function
    draw: function (context) {
        context.drawImage(this.title, 0, 0);
        this.font.draw(context, "PRESS ENTER TO PLAY", 200, 530);
    },

    // destroy function
    onDestroyEvent: function () {
        me.input.unbindKey(me.input.KEY.ENTER);
    }

});


