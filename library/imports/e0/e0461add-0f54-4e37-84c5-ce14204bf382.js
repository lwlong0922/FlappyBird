"use strict";
cc._RF.push(module, 'e0461rdD1RON4TFzhQgS/OC', 'PipeLayer');
// Script/Game/PipeLayer.js

"use strict";

function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var ScripeBase = require('ScriptBase');

var Manager = require('Manager');

cc.Class({
  "extends": ScripeBase,
  properties: {
    pipePrefab: cc.Prefab,
    createTime: 0.0
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  onInit: function onInit() {
    this.initPipeNodePool();
    this.schedule(this.createPipe, this.createTime);
  },
  createPipe: function createPipe() {
    var pipeNode;

    if (this.pipePool.size() > 0) {
      pipeNode = this.pipePool.get();
    } else {
      pipeNode = cc.instantiate(this.pipePrefab);
    }

    pipeNode.parent = this.node;
    pipeNode.getComponent('Pipe').init();
  },
  removePipe: function removePipe(pipeNode) {
    this.pipePool.put(pipeNode);
  },
  onUpdate: function onUpdate(dt) {
    for (var _iterator = _createForOfIteratorHelperLoose(this.node.children), _step; !(_step = _iterator()).done;) {
      var child = _step.value;
      child.getComponent('Pipe').onUpdate(dt);
    }
  },
  onLateUpdate: function onLateUpdate(dt) {},
  initPipeNodePool: function initPipeNodePool() {
    this.pipePool = new cc.NodePool();
    var initCount = 5;

    for (var i = 0; i < initCount; ++i) {
      var pipeNode = cc.instantiate(this.pipePrefab);
      this.pipePool.put(pipeNode);
    }
  },
  gameOver: function gameOver() {
    this.unschedule(this.createPipe);
    this.pipePool.clear();
  } // start () {    },
  // update (dt) {},

});

cc._RF.pop();