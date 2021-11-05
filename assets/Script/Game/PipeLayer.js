let ScripeBase = require('ScriptBase')
let Manager = require('Manager')
cc.Class({
    extends: ScripeBase,

    properties: {
        pipePrefab: cc.Prefab,
        createTime: 0.0
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    onInit() {
        this.initPipeNodePool()
        this.schedule(this.createPipe, this.createTime)
    },

    createPipe() {
        let pipeNode;
        if (this.pipePool.size() > 0) {
            pipeNode = this.pipePool.get();
        } else {
            pipeNode = cc.instantiate(this.pipePrefab);
        }
        pipeNode.parent = this.node;
        pipeNode.getComponent('Pipe').init();
    },

    removePipe(pipeNode) {
        this.pipePool.put(pipeNode)
    },

    onUpdate(dt) {
        for (let child of this.node.children) {
            child.getComponent('Pipe').onUpdate(dt);
        }
    },

    onLateUpdate(dt) {
       
    },


    initPipeNodePool() {
        this.pipePool = new cc.NodePool();
        let initCount = 5;
        for (let i = 0; i < initCount; ++i) {
            let pipeNode = cc.instantiate(this.pipePrefab);
            this.pipePool.put(pipeNode);
        }
    },
    gameOver() {
        this.unschedule(this.createPipe)
        this.pipePool.clear()
    }


    // start () {    },

    // update (dt) {},
});
