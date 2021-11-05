let ScriptBase = require('ScriptBase')
let Manager = require('Manager')
cc.Class({
    extends: cc.Component,

    properties: {

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        // this.bgScrollJs = this.node.getChildByName('FloorNode').getComponent('Scroll')
        // if (this.bgScrollJs.onInit) {
        //     this.bgScrollJs.onInit();
        // }
        cc.director.getCollisionManager().enabled = true;
        this._registerManager()
        Manager.getInstance().onInitManager()
    },

    start() {
        Manager.getInstance().onLateInitManager()
    },

    update(dt) {
        Manager.getInstance().onUpdateManager(dt)
    },

    lateUpdate(dt) {
        Manager.getInstance().onLateUpdateManager(dt)
    },

    gameOver() {
        let GameOverUI = cc.find('Canvas/UIRoot/GameOver')
        console.log(GameOverUI);
        GameOverUI.active = true;

        let score = Manager.getInstance().getMgr('Player').score;
        GameOverUI.getChildByName('score2').getComponent(cc.Label).string = score.toFixed(2);
        GameOverUI.getChildByName('BestScore').getComponent(cc.Label).string = score.toFixed(2);
        GameOverUI.getChildByName('score2').active = true;
        GameOverUI.getChildByName('BestScore').active = true;
        if (score > 100) {
            GameOverUI.getChildByName('yellow').active = true;
        } else {
            GameOverUI.getChildByName('gray').active = true;
        }

        Manager.getInstance().gameOver()
        Manager.getInstance().clear()
    },

    reStart() {
        cc.director.loadScene("GameScene");
    },

    _registerManager() {
        let children = this.node.children;
        for (let value of children) {
            let comJs = value.getComponent(ScriptBase);
            if (!comJs) {
                continue;
            }
            Manager.getInstance().addMgr(value.name, comJs);
        }
    }
});
