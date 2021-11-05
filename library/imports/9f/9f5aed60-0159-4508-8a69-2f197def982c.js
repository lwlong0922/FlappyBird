"use strict";
cc._RF.push(module, '9f5ae1gAVlFCIppLxl975gs', 'Pipe');
// Script/Game/Pipe.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    speed: 0 // foo: {
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
  onLoad: function onLoad() {
    this.init();
  },
  init: function init() {
    this.node.x = 800;
    this.node.y = this.randomNum(150, 850);
  },
  // start () {},
  randomNum: function randomNum(minNum, maxNum) {
    switch (arguments.length) {
      case 1:
        return parseInt(Math.random() * minNum + 1, 10);
        break;

      case 2:
        return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
        break;

      default:
        return 0;
        break;
    }
  },
  //    update(dt) {
  //         this.node.x += this.speed * dt
  //         if (this.node.x < -200) {
  //             this.node.parent.getComponent('PipeLayer').removePipe(this.node)
  //         }
  //     },
  onUpdate: function onUpdate(dt) {
    // console.log(this.node.y);
    this.node.x += this.speed * dt;

    if (this.node.x < -200) {
      this.node.parent.getComponent('PipeLayer').removePipe(this.node);
    }
  }
});

cc._RF.pop();