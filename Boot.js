var BunnyDefender = {};

BunnyDefender.Boot = function(game) {};

BunnyDefender.Boot.prototype = {
    
    preload: function() {
        
        this.load.image('preloadBar','images/loader_bar.png');
        this.load.image('titleImage','images/TitleImage.png');
        
    
    },
    
    create:function() {
        this.input.maxPointers = 1;
        this.stage.disableVisibilityChange = false;
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.minWidth = 270;
        this.scale.minHeight = 480;
        this.scale.pageAlignHorizantally = true;
        this.scale.pageAlignVertically = true;
        this.stage.forcePortrait = true;
        this.scale.setScreenSize(true);
        
        this.input.addPointer();
        this.stage.backgroundColor = '#ededfc';
        
        this.state.start('Preloader');
    
    }
};
    