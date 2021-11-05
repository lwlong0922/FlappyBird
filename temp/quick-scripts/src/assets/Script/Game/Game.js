"use strict";
cc._RF.push(module, 'c33b9DaFkZA9I5cRMnoOyR2', 'Game');
// Script/Game/Game.js

"use strict";

function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var ScriptBase = require('ScriptBase');

var Manager = require('Manager');

cc.Class({
  "extends": cc.Component,
  properties: {},
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    // this.bgScrollJs = this.node.getChildByName('FloorNode').getComponent('Scroll')
    // if (this.bgScrollJs.onInit) {
    //     this.bgScrollJs.onInit();
    // }
    cc.director.getCollisionManager().enabled = true;

    this._registerManager();

    Manager.getInstance().onInitManager();
  },
  start: function start() {
    Manager.getInstance().onLateInitManager();
  },
  update: function update(dt) {
    Manager.getInstance().onUpdateManager(dt);
  },
  lateUpdate: function lateUpdate(dt) {
    Manager.getInstance().onLateUpdateManager(dt);
  },
  gameOver: function gameOver() {
    var GameOverUI = cc.find('Canvas/UIRoot/GameOver');
    console.log(GameOverUI);
    GameOverUI.active = true;
    var score = Manager.getInstance().getMgr('Player').score;
    GameOverUI.getChildByName('score2').getComponent(cc.Label).string = score.toFixed(2);
    GameOverUI.getChildByName('BestScore').getComponent(cc.Label).string = score.toFixed(2);
    GameOverUI.getChildByName('score2').active = true;
    GameOverUI.getChildByName('BestScore').active = true;

    if (score > 100) {
      GameOverUI.getChildByName('yellow').active = true;
    } else {
      GameOverUI.getChildByName('gray').active = true;
    }

    Manager.getInstance().gameOver();
    Manager.getInstance().clear();
  },
  reStart: function reStart() {
    cc.director.loadScene("GameScene");
  },
  _registerManager: function _registerManager() {
    var children = this.node.children;

    for (var _iterator = _createForOfIteratorHelperLoose(children), _step; !(_step = _iterator()).done;) {
      var value = _step.value;
      var comJs = value.getComponent(ScriptBase);

      if (!comJs) {
        continue;
      }

      Manager.getInstance().addMgr(value.name, comJs);
    }
  }
});

cc._RF.pop();