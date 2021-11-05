let ScripeBase = require('ScriptBase')
let Manager = require('Manager')
cc.Class({
    extends: ScripeBase,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    onInit() {
        this.playerJs = Manager.getInstance().getMgr('Player');
        this.initTouch();
    },

    onTouchStart(event) {
        console.log('touch')
        this.playerJs.jump();
    },

    initTouch() {
        this.node.on('touchstart', this.onTouchStart, this)
    },

    gameOver() {
        this.node.off('touchstart')
    }

    // onLoad () {},

    // start () {    },

    // update (dt) {},
});
