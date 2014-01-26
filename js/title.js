game.TitleScreen = me.ScreenObject.extend({
    // constructor
    init: function () {
        this.parent(true);
        this.title = null;
        
    },

    // reset function
    onResetEvent: function () {
        if (this.title == null) {
            // init stuff if not yet done
            this.title = me.loader.getImage("background");
        }

        me.input.bindKey(me.input.KEY.ENTER, "enter", true);

    },

    // update function
    update: function () {
        if (me.input.isKeyPressed('enter')) {
            me.state.change(me.state.PLAY);
        }
        return true;

    },

    // draw function
    draw: function (context) {
        context.drawImage(this.title, 0, 0);

    },

    // destroy function
    onDestroyEvent: function () {
        me.input.unbindKey(me.input.KEY.ENTER);
    }

});


