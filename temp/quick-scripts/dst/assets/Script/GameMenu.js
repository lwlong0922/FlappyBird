
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/GameMenu.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '780c6oZVfpBJqW1hUJxbVbs', 'GameMenu');
// Script/GameMenu.js

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
    logoNode: cc.Node,
    startBtn: cc.Node
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {
    cc.tween(this.logoNode).to(3.0, {
      position: cc.v2(15.33, 300)
    }, {
      easing: 'elasticOut'
    }).start();
    cc.tween(this.startBtn).to(3.0, {
      position: cc.v2(0, -365)
    }, {
      easing: 'elasticOut'
    }).start();
  },
  chanceScene: function chanceScene() {
    cc.director.loadScene("GameScene");
  } // update (dt) {},

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxHYW1lTWVudS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImxvZ29Ob2RlIiwiTm9kZSIsInN0YXJ0QnRuIiwic3RhcnQiLCJ0d2VlbiIsInRvIiwicG9zaXRpb24iLCJ2MiIsImVhc2luZyIsImNoYW5jZVNjZW5lIiwiZGlyZWN0b3IiLCJsb2FkU2NlbmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxRQUFRLEVBQUVKLEVBQUUsQ0FBQ0ssSUFETDtBQUVSQyxJQUFBQSxRQUFRLEVBQUVOLEVBQUUsQ0FBQ0s7QUFGTCxHQUhQO0FBUUw7QUFFQTtBQUVBRSxFQUFBQSxLQVpLLG1CQVlHO0FBQ0pQLElBQUFBLEVBQUUsQ0FBQ1EsS0FBSCxDQUFTLEtBQUtKLFFBQWQsRUFDS0ssRUFETCxDQUNRLEdBRFIsRUFDYTtBQUFFQyxNQUFBQSxRQUFRLEVBQUVWLEVBQUUsQ0FBQ1csRUFBSCxDQUFNLEtBQU4sRUFBYSxHQUFiO0FBQVosS0FEYixFQUM2QztBQUFFQyxNQUFBQSxNQUFNLEVBQUU7QUFBVixLQUQ3QyxFQUVLTCxLQUZMO0FBR0FQLElBQUFBLEVBQUUsQ0FBQ1EsS0FBSCxDQUFTLEtBQUtGLFFBQWQsRUFDS0csRUFETCxDQUNRLEdBRFIsRUFDYTtBQUFFQyxNQUFBQSxRQUFRLEVBQUVWLEVBQUUsQ0FBQ1csRUFBSCxDQUFNLENBQU4sRUFBUyxDQUFDLEdBQVY7QUFBWixLQURiLEVBQzJDO0FBQUVDLE1BQUFBLE1BQU0sRUFBRTtBQUFWLEtBRDNDLEVBRUtMLEtBRkw7QUFHSCxHQW5CSTtBQXFCTE0sRUFBQUEsV0FyQksseUJBcUJTO0FBQ1ZiLElBQUFBLEVBQUUsQ0FBQ2MsUUFBSCxDQUFZQyxTQUFaLENBQXNCLFdBQXRCO0FBQ0gsR0F2QkksQ0F5Qkw7O0FBekJLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBsb2dvTm9kZTogY2MuTm9kZSxcclxuICAgICAgICBzdGFydEJ0bjogY2MuTm9kZVxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge30sXHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5sb2dvTm9kZSlcclxuICAgICAgICAgICAgLnRvKDMuMCwgeyBwb3NpdGlvbjogY2MudjIoMTUuMzMsIDMwMCl9LCB7IGVhc2luZzogJ2VsYXN0aWNPdXQnIH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5zdGFydEJ0bilcclxuICAgICAgICAgICAgLnRvKDMuMCwgeyBwb3NpdGlvbjogY2MudjIoMCwgLTM2NSkgfSwgeyBlYXNpbmc6ICdlbGFzdGljT3V0JyB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKVxyXG4gICAgfSxcclxuXHJcbiAgICBjaGFuY2VTY2VuZSgpIHtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJHYW1lU2NlbmVcIik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcbn0pOyJdfQ==