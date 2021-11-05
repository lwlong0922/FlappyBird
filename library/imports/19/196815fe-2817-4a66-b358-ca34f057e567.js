"use strict";
cc._RF.push(module, '19681X+KBdKZrNYyjTwV+Vn', 'Player');
// Script/Game/Player.js

"use strict";

var ScripeBase = require('ScriptBase');

cc.Class({
  "extends": ScripeBase,
  properties: {
    accel: 0,
    jumpSpeed: 0
  },
  onInit: function onInit() {
    this.score = 0;
    this.speed = 0;
  },
  onUpdate: function onUpdate(dt) {
    this.speed += this.accel * dt;
    this.node.y += this.speed * dt;
    this.node.angle -= 80 * dt;

    if (this.node.angle <= -90) {
      this.node.angle = -90;
    }
  },
  onLateUpdate: function onLateUpdate(dt) {
    // console.log(this.node.y);
    if (this.node.y >= 1250) {
      this.node.y = 1250;
      this.speed = 0;
    }

    if (this.node.y < 30) {
      this.node.parent.getComponent('Game').gameOver();
    }

    this.score += dt;
    cc.find('Canvas/UIRoot/Score').getComponent(cc.Label).string = '得分: ' + this.score.toFixed(2);
  },
  jump: function jump() {
    this.speed = this.jumpSpeed;
    this.node.angle = 60;
  },
  onCollisionEnter: function onCollisionEnter(other, self) {
    // console.log('ddd');
    this.node.parent.getComponent('Game').gameOver();
  } // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  // start () {},
  // update (dt) {},

});

cc._RF.pop();