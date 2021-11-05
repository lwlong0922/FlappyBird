
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/TouchLayer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxHYW1lXFxUb3VjaExheWVyLmpzIl0sIm5hbWVzIjpbIlNjcmlwZUJhc2UiLCJyZXF1aXJlIiwiTWFuYWdlciIsImNjIiwiQ2xhc3MiLCJwcm9wZXJ0aWVzIiwib25Jbml0IiwicGxheWVySnMiLCJnZXRJbnN0YW5jZSIsImdldE1nciIsImluaXRUb3VjaCIsIm9uVG91Y2hTdGFydCIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsImp1bXAiLCJub2RlIiwib24iLCJnYW1lT3ZlciIsIm9mZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxVQUFVLEdBQUdDLE9BQU8sQ0FBQyxZQUFELENBQXhCOztBQUNBLElBQUlDLE9BQU8sR0FBR0QsT0FBTyxDQUFDLFNBQUQsQ0FBckI7O0FBQ0FFLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0osVUFESjtBQUdMSyxFQUFBQSxVQUFVLEVBQUUsQ0FDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFmUSxHQUhQO0FBcUJMO0FBRUFDLEVBQUFBLE1BdkJLLG9CQXVCSTtBQUNMLFNBQUtDLFFBQUwsR0FBZ0JMLE9BQU8sQ0FBQ00sV0FBUixHQUFzQkMsTUFBdEIsQ0FBNkIsUUFBN0IsQ0FBaEI7QUFDQSxTQUFLQyxTQUFMO0FBQ0gsR0ExQkk7QUE0QkxDLEVBQUFBLFlBNUJLLHdCQTRCUUMsS0E1QlIsRUE0QmU7QUFDaEJDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVo7QUFDQSxTQUFLUCxRQUFMLENBQWNRLElBQWQ7QUFDSCxHQS9CSTtBQWlDTEwsRUFBQUEsU0FqQ0ssdUJBaUNPO0FBQ1IsU0FBS00sSUFBTCxDQUFVQyxFQUFWLENBQWEsWUFBYixFQUEyQixLQUFLTixZQUFoQyxFQUE4QyxJQUE5QztBQUNILEdBbkNJO0FBcUNMTyxFQUFBQSxRQXJDSyxzQkFxQ007QUFDUCxTQUFLRixJQUFMLENBQVVHLEdBQVYsQ0FBYyxZQUFkO0FBQ0gsR0F2Q0ksQ0F5Q0w7QUFFQTtBQUVBOztBQTdDSyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgU2NyaXBlQmFzZSA9IHJlcXVpcmUoJ1NjcmlwdEJhc2UnKVxyXG5sZXQgTWFuYWdlciA9IHJlcXVpcmUoJ01hbmFnZXInKVxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBTY3JpcGVCYXNlLFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyBmb286IHtcclxuICAgICAgICAvLyAgICAgLy8gQVRUUklCVVRFUzpcclxuICAgICAgICAvLyAgICAgZGVmYXVsdDogbnVsbCwgICAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcclxuICAgICAgICAvLyAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XHJcbiAgICAgICAgLy8gICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyBiYXI6IHtcclxuICAgICAgICAvLyAgICAgZ2V0ICgpIHtcclxuICAgICAgICAvLyAgICAgICAgIHJldHVybiB0aGlzLl9iYXI7XHJcbiAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgLy8gICAgIHNldCAodmFsdWUpIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuX2JhciA9IHZhbHVlO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSxcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMucGxheWVySnMgPSBNYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0TWdyKCdQbGF5ZXInKTtcclxuICAgICAgICB0aGlzLmluaXRUb3VjaCgpO1xyXG4gICAgfSxcclxuXHJcbiAgICBvblRvdWNoU3RhcnQoZXZlbnQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygndG91Y2gnKVxyXG4gICAgICAgIHRoaXMucGxheWVySnMuanVtcCgpO1xyXG4gICAgfSxcclxuXHJcbiAgICBpbml0VG91Y2goKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKCd0b3VjaHN0YXJ0JywgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpXHJcbiAgICB9LFxyXG5cclxuICAgIGdhbWVPdmVyKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5vZmYoJ3RvdWNoc3RhcnQnKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fSxcclxuXHJcbiAgICAvLyBzdGFydCAoKSB7ICAgIH0sXHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcbn0pO1xyXG4iXX0=