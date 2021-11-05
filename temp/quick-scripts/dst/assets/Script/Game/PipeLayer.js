
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/PipeLayer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxHYW1lXFxQaXBlTGF5ZXIuanMiXSwibmFtZXMiOlsiU2NyaXBlQmFzZSIsInJlcXVpcmUiLCJNYW5hZ2VyIiwiY2MiLCJDbGFzcyIsInByb3BlcnRpZXMiLCJwaXBlUHJlZmFiIiwiUHJlZmFiIiwiY3JlYXRlVGltZSIsIm9uSW5pdCIsImluaXRQaXBlTm9kZVBvb2wiLCJzY2hlZHVsZSIsImNyZWF0ZVBpcGUiLCJwaXBlTm9kZSIsInBpcGVQb29sIiwic2l6ZSIsImdldCIsImluc3RhbnRpYXRlIiwicGFyZW50Iiwibm9kZSIsImdldENvbXBvbmVudCIsImluaXQiLCJyZW1vdmVQaXBlIiwicHV0Iiwib25VcGRhdGUiLCJkdCIsImNoaWxkcmVuIiwiY2hpbGQiLCJvbkxhdGVVcGRhdGUiLCJOb2RlUG9vbCIsImluaXRDb3VudCIsImkiLCJnYW1lT3ZlciIsInVuc2NoZWR1bGUiLCJjbGVhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxVQUFVLEdBQUdDLE9BQU8sQ0FBQyxZQUFELENBQXhCOztBQUNBLElBQUlDLE9BQU8sR0FBR0QsT0FBTyxDQUFDLFNBQUQsQ0FBckI7O0FBQ0FFLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0osVUFESjtBQUdMSyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsVUFBVSxFQUFFSCxFQUFFLENBQUNJLE1BRFA7QUFFUkMsSUFBQUEsVUFBVSxFQUFFO0FBRkosR0FIUDtBQVFMO0FBRUE7QUFFQUMsRUFBQUEsTUFaSyxvQkFZSTtBQUNMLFNBQUtDLGdCQUFMO0FBQ0EsU0FBS0MsUUFBTCxDQUFjLEtBQUtDLFVBQW5CLEVBQStCLEtBQUtKLFVBQXBDO0FBQ0gsR0FmSTtBQWlCTEksRUFBQUEsVUFqQkssd0JBaUJRO0FBQ1QsUUFBSUMsUUFBSjs7QUFDQSxRQUFJLEtBQUtDLFFBQUwsQ0FBY0MsSUFBZCxLQUF1QixDQUEzQixFQUE4QjtBQUMxQkYsTUFBQUEsUUFBUSxHQUFHLEtBQUtDLFFBQUwsQ0FBY0UsR0FBZCxFQUFYO0FBQ0gsS0FGRCxNQUVPO0FBQ0hILE1BQUFBLFFBQVEsR0FBR1YsRUFBRSxDQUFDYyxXQUFILENBQWUsS0FBS1gsVUFBcEIsQ0FBWDtBQUNIOztBQUNETyxJQUFBQSxRQUFRLENBQUNLLE1BQVQsR0FBa0IsS0FBS0MsSUFBdkI7QUFDQU4sSUFBQUEsUUFBUSxDQUFDTyxZQUFULENBQXNCLE1BQXRCLEVBQThCQyxJQUE5QjtBQUNILEdBMUJJO0FBNEJMQyxFQUFBQSxVQTVCSyxzQkE0Qk1ULFFBNUJOLEVBNEJnQjtBQUNqQixTQUFLQyxRQUFMLENBQWNTLEdBQWQsQ0FBa0JWLFFBQWxCO0FBQ0gsR0E5Qkk7QUFnQ0xXLEVBQUFBLFFBaENLLG9CQWdDSUMsRUFoQ0osRUFnQ1E7QUFDVCx5REFBa0IsS0FBS04sSUFBTCxDQUFVTyxRQUE1Qix3Q0FBc0M7QUFBQSxVQUE3QkMsS0FBNkI7QUFDbENBLE1BQUFBLEtBQUssQ0FBQ1AsWUFBTixDQUFtQixNQUFuQixFQUEyQkksUUFBM0IsQ0FBb0NDLEVBQXBDO0FBQ0g7QUFDSixHQXBDSTtBQXNDTEcsRUFBQUEsWUF0Q0ssd0JBc0NRSCxFQXRDUixFQXNDWSxDQUVoQixDQXhDSTtBQTJDTGYsRUFBQUEsZ0JBM0NLLDhCQTJDYztBQUNmLFNBQUtJLFFBQUwsR0FBZ0IsSUFBSVgsRUFBRSxDQUFDMEIsUUFBUCxFQUFoQjtBQUNBLFFBQUlDLFNBQVMsR0FBRyxDQUFoQjs7QUFDQSxTQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdELFNBQXBCLEVBQStCLEVBQUVDLENBQWpDLEVBQW9DO0FBQ2hDLFVBQUlsQixRQUFRLEdBQUdWLEVBQUUsQ0FBQ2MsV0FBSCxDQUFlLEtBQUtYLFVBQXBCLENBQWY7QUFDQSxXQUFLUSxRQUFMLENBQWNTLEdBQWQsQ0FBa0JWLFFBQWxCO0FBQ0g7QUFDSixHQWxESTtBQW1ETG1CLEVBQUFBLFFBbkRLLHNCQW1ETTtBQUNQLFNBQUtDLFVBQUwsQ0FBZ0IsS0FBS3JCLFVBQXJCO0FBQ0EsU0FBS0UsUUFBTCxDQUFjb0IsS0FBZDtBQUNILEdBdERJLENBeURMO0FBRUE7O0FBM0RLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImxldCBTY3JpcGVCYXNlID0gcmVxdWlyZSgnU2NyaXB0QmFzZScpXHJcbmxldCBNYW5hZ2VyID0gcmVxdWlyZSgnTWFuYWdlcicpXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IFNjcmlwZUJhc2UsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIHBpcGVQcmVmYWI6IGNjLlByZWZhYixcclxuICAgICAgICBjcmVhdGVUaW1lOiAwLjBcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9LFxyXG5cclxuICAgIG9uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmluaXRQaXBlTm9kZVBvb2woKVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy5jcmVhdGVQaXBlLCB0aGlzLmNyZWF0ZVRpbWUpXHJcbiAgICB9LFxyXG5cclxuICAgIGNyZWF0ZVBpcGUoKSB7XHJcbiAgICAgICAgbGV0IHBpcGVOb2RlO1xyXG4gICAgICAgIGlmICh0aGlzLnBpcGVQb29sLnNpemUoKSA+IDApIHtcclxuICAgICAgICAgICAgcGlwZU5vZGUgPSB0aGlzLnBpcGVQb29sLmdldCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHBpcGVOb2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5waXBlUHJlZmFiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcGlwZU5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIHBpcGVOb2RlLmdldENvbXBvbmVudCgnUGlwZScpLmluaXQoKTtcclxuICAgIH0sXHJcblxyXG4gICAgcmVtb3ZlUGlwZShwaXBlTm9kZSkge1xyXG4gICAgICAgIHRoaXMucGlwZVBvb2wucHV0KHBpcGVOb2RlKVxyXG4gICAgfSxcclxuXHJcbiAgICBvblVwZGF0ZShkdCkge1xyXG4gICAgICAgIGZvciAobGV0IGNoaWxkIG9mIHRoaXMubm9kZS5jaGlsZHJlbikge1xyXG4gICAgICAgICAgICBjaGlsZC5nZXRDb21wb25lbnQoJ1BpcGUnKS5vblVwZGF0ZShkdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBvbkxhdGVVcGRhdGUoZHQpIHtcclxuICAgICAgIFxyXG4gICAgfSxcclxuXHJcblxyXG4gICAgaW5pdFBpcGVOb2RlUG9vbCgpIHtcclxuICAgICAgICB0aGlzLnBpcGVQb29sID0gbmV3IGNjLk5vZGVQb29sKCk7XHJcbiAgICAgICAgbGV0IGluaXRDb3VudCA9IDU7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbml0Q291bnQ7ICsraSkge1xyXG4gICAgICAgICAgICBsZXQgcGlwZU5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnBpcGVQcmVmYWIpO1xyXG4gICAgICAgICAgICB0aGlzLnBpcGVQb29sLnB1dChwaXBlTm9kZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGdhbWVPdmVyKCkge1xyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLmNyZWF0ZVBpcGUpXHJcbiAgICAgICAgdGhpcy5waXBlUG9vbC5jbGVhcigpXHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIHN0YXJ0ICgpIHsgICAgfSxcclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcclxufSk7XHJcbiJdfQ==