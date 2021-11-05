// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        logoNode: cc.Node,
        startBtn: cc.Node
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {
        cc.tween(this.logoNode)
            .to(3.0, { position: cc.v2(15.33, 300)}, { easing: 'elasticOut' })
            .start()
        cc.tween(this.startBtn)
            .to(3.0, { position: cc.v2(0, -365) }, { easing: 'elasticOut' })
            .start()
    },

    chanceScene() {
        cc.director.loadScene("GameScene");
    }

    // update (dt) {},
});