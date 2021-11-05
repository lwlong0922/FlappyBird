"use strict";
cc._RF.push(module, '841fbnUcf9OBJNhmOZ3/APr', 'TouchLayer');
// Script/Game/TouchLayer.js

"use strict";

var ScripeBase = require('ScriptBase');

var Manager = require('Manager');

cc.Class({
  "extends": ScripeBase,
  properties: {// foo: {
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
  onInit: function onInit() {
    this.playerJs = Manager.getInstance().getMgr('Player');
    this.initTouch();
  },
  onTouchStart: function onTouchStart(event) {
    console.log('touch');
    this.playerJs.jump();
  },
  initTouch: function initTouch() {
    this.node.on('touchstart', this.onTouchStart, this);
  },
  gameOver: function gameOver() {
    this.node.off('touchstart');
  } // onLoad () {},
  // start () {    },
  // update (dt) {},

});

cc._RF.pop();