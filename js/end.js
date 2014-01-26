
game.EndScreen = me.ScreenObject.extend({
    // constructor
    init: function () {
        this.parent(true);
      	this.end == null;
    },

    // reset function
    onResetEvent: function () {
        if (this.end== null) {
            // init stuff if not yet done
            this.end = me.loader.getImage("cover_wide3");
        }

        me.input.bindKey(me.input.KEY.ENTER, "enter", true);
        me.audio.playTrack("technicolour");
    },

    // update function
    update: function () {
        if (me.input.isKeyPressed('enter')) {
            me.audio.stopTrack("technicolour");
        }
        return true;
    },

    // draw function
    draw: function (context) {
        context.drawImage(this.end, 0, 0);
    },

    // destroy function
    onDestroyEvent: function () {
        me.input.unbindKey(me.input.KEY.ENTER);
    }

});
