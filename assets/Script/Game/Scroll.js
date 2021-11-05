let ScripeBase = require('ScriptBase')
cc.Class({
    extends: ScripeBase,

    properties: {
        arrScrollN: [cc.Node],
        speed: -100
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    // start() {},

    // update(dt) {},
    onInit() {

    },
    lateInit() {

    },
    onUpdate(dt) {
        this.arrScrollN[0].x += this.speed * dt;
        this.arrScrollN[1].x += this.speed * dt;
        this.arrScrollN[2].x += this.speed * dt;
        if (this.arrScrollN[0].x <= -this.arrScrollN[0].width * 1.2) {
            this.arrScrollN[0].x = this.arrScrollN[2].x + this.arrScrollN[1].width;
        }
        if (this.arrScrollN[1].x <= -this.arrScrollN[1].width * 1.2) {
            this.arrScrollN[1].x = this.arrScrollN[0].x + this.arrScrollN[1].width;
        }
        if (this.arrScrollN[2].x <= -this.arrScrollN[1].width * 1.2) {
            this.arrScrollN[2].x = this.arrScrollN[1].x + this.arrScrollN[1].width;
        }
    }
});
