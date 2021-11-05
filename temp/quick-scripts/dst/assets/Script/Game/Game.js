
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/Game.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxHYW1lXFxHYW1lLmpzIl0sIm5hbWVzIjpbIlNjcmlwdEJhc2UiLCJyZXF1aXJlIiwiTWFuYWdlciIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwib25Mb2FkIiwiZGlyZWN0b3IiLCJnZXRDb2xsaXNpb25NYW5hZ2VyIiwiZW5hYmxlZCIsIl9yZWdpc3Rlck1hbmFnZXIiLCJnZXRJbnN0YW5jZSIsIm9uSW5pdE1hbmFnZXIiLCJzdGFydCIsIm9uTGF0ZUluaXRNYW5hZ2VyIiwidXBkYXRlIiwiZHQiLCJvblVwZGF0ZU1hbmFnZXIiLCJsYXRlVXBkYXRlIiwib25MYXRlVXBkYXRlTWFuYWdlciIsImdhbWVPdmVyIiwiR2FtZU92ZXJVSSIsImZpbmQiLCJjb25zb2xlIiwibG9nIiwiYWN0aXZlIiwic2NvcmUiLCJnZXRNZ3IiLCJnZXRDaGlsZEJ5TmFtZSIsImdldENvbXBvbmVudCIsIkxhYmVsIiwic3RyaW5nIiwidG9GaXhlZCIsImNsZWFyIiwicmVTdGFydCIsImxvYWRTY2VuZSIsImNoaWxkcmVuIiwibm9kZSIsInZhbHVlIiwiY29tSnMiLCJhZGRNZ3IiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLFVBQVUsR0FBR0MsT0FBTyxDQUFDLFlBQUQsQ0FBeEI7O0FBQ0EsSUFBSUMsT0FBTyxHQUFHRCxPQUFPLENBQUMsU0FBRCxDQUFyQjs7QUFDQUUsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFLEVBSFA7QUFPTDtBQUVBQyxFQUFBQSxNQVRLLG9CQVNJO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQUosSUFBQUEsRUFBRSxDQUFDSyxRQUFILENBQVlDLG1CQUFaLEdBQWtDQyxPQUFsQyxHQUE0QyxJQUE1Qzs7QUFDQSxTQUFLQyxnQkFBTDs7QUFDQVQsSUFBQUEsT0FBTyxDQUFDVSxXQUFSLEdBQXNCQyxhQUF0QjtBQUNILEdBakJJO0FBbUJMQyxFQUFBQSxLQW5CSyxtQkFtQkc7QUFDSlosSUFBQUEsT0FBTyxDQUFDVSxXQUFSLEdBQXNCRyxpQkFBdEI7QUFDSCxHQXJCSTtBQXVCTEMsRUFBQUEsTUF2Qkssa0JBdUJFQyxFQXZCRixFQXVCTTtBQUNQZixJQUFBQSxPQUFPLENBQUNVLFdBQVIsR0FBc0JNLGVBQXRCLENBQXNDRCxFQUF0QztBQUNILEdBekJJO0FBMkJMRSxFQUFBQSxVQTNCSyxzQkEyQk1GLEVBM0JOLEVBMkJVO0FBQ1hmLElBQUFBLE9BQU8sQ0FBQ1UsV0FBUixHQUFzQlEsbUJBQXRCLENBQTBDSCxFQUExQztBQUNILEdBN0JJO0FBK0JMSSxFQUFBQSxRQS9CSyxzQkErQk07QUFDUCxRQUFJQyxVQUFVLEdBQUduQixFQUFFLENBQUNvQixJQUFILENBQVEsd0JBQVIsQ0FBakI7QUFDQUMsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlILFVBQVo7QUFDQUEsSUFBQUEsVUFBVSxDQUFDSSxNQUFYLEdBQW9CLElBQXBCO0FBRUEsUUFBSUMsS0FBSyxHQUFHekIsT0FBTyxDQUFDVSxXQUFSLEdBQXNCZ0IsTUFBdEIsQ0FBNkIsUUFBN0IsRUFBdUNELEtBQW5EO0FBQ0FMLElBQUFBLFVBQVUsQ0FBQ08sY0FBWCxDQUEwQixRQUExQixFQUFvQ0MsWUFBcEMsQ0FBaUQzQixFQUFFLENBQUM0QixLQUFwRCxFQUEyREMsTUFBM0QsR0FBb0VMLEtBQUssQ0FBQ00sT0FBTixDQUFjLENBQWQsQ0FBcEU7QUFDQVgsSUFBQUEsVUFBVSxDQUFDTyxjQUFYLENBQTBCLFdBQTFCLEVBQXVDQyxZQUF2QyxDQUFvRDNCLEVBQUUsQ0FBQzRCLEtBQXZELEVBQThEQyxNQUE5RCxHQUF1RUwsS0FBSyxDQUFDTSxPQUFOLENBQWMsQ0FBZCxDQUF2RTtBQUNBWCxJQUFBQSxVQUFVLENBQUNPLGNBQVgsQ0FBMEIsUUFBMUIsRUFBb0NILE1BQXBDLEdBQTZDLElBQTdDO0FBQ0FKLElBQUFBLFVBQVUsQ0FBQ08sY0FBWCxDQUEwQixXQUExQixFQUF1Q0gsTUFBdkMsR0FBZ0QsSUFBaEQ7O0FBQ0EsUUFBSUMsS0FBSyxHQUFHLEdBQVosRUFBaUI7QUFDYkwsTUFBQUEsVUFBVSxDQUFDTyxjQUFYLENBQTBCLFFBQTFCLEVBQW9DSCxNQUFwQyxHQUE2QyxJQUE3QztBQUNILEtBRkQsTUFFTztBQUNISixNQUFBQSxVQUFVLENBQUNPLGNBQVgsQ0FBMEIsTUFBMUIsRUFBa0NILE1BQWxDLEdBQTJDLElBQTNDO0FBQ0g7O0FBRUR4QixJQUFBQSxPQUFPLENBQUNVLFdBQVIsR0FBc0JTLFFBQXRCO0FBQ0FuQixJQUFBQSxPQUFPLENBQUNVLFdBQVIsR0FBc0JzQixLQUF0QjtBQUNILEdBakRJO0FBbURMQyxFQUFBQSxPQW5ESyxxQkFtREs7QUFDTmhDLElBQUFBLEVBQUUsQ0FBQ0ssUUFBSCxDQUFZNEIsU0FBWixDQUFzQixXQUF0QjtBQUNILEdBckRJO0FBdURMekIsRUFBQUEsZ0JBdkRLLDhCQXVEYztBQUNmLFFBQUkwQixRQUFRLEdBQUcsS0FBS0MsSUFBTCxDQUFVRCxRQUF6Qjs7QUFDQSx5REFBa0JBLFFBQWxCLHdDQUE0QjtBQUFBLFVBQW5CRSxLQUFtQjtBQUN4QixVQUFJQyxLQUFLLEdBQUdELEtBQUssQ0FBQ1QsWUFBTixDQUFtQjlCLFVBQW5CLENBQVo7O0FBQ0EsVUFBSSxDQUFDd0MsS0FBTCxFQUFZO0FBQ1I7QUFDSDs7QUFDRHRDLE1BQUFBLE9BQU8sQ0FBQ1UsV0FBUixHQUFzQjZCLE1BQXRCLENBQTZCRixLQUFLLENBQUNHLElBQW5DLEVBQXlDRixLQUF6QztBQUNIO0FBQ0o7QUFoRUksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsibGV0IFNjcmlwdEJhc2UgPSByZXF1aXJlKCdTY3JpcHRCYXNlJylcclxubGV0IE1hbmFnZXIgPSByZXF1aXJlKCdNYW5hZ2VyJylcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICAvLyB0aGlzLmJnU2Nyb2xsSnMgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ0Zsb29yTm9kZScpLmdldENvbXBvbmVudCgnU2Nyb2xsJylcclxuICAgICAgICAvLyBpZiAodGhpcy5iZ1Njcm9sbEpzLm9uSW5pdCkge1xyXG4gICAgICAgIC8vICAgICB0aGlzLmJnU2Nyb2xsSnMub25Jbml0KCk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl9yZWdpc3Rlck1hbmFnZXIoKVxyXG4gICAgICAgIE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5vbkluaXRNYW5hZ2VyKClcclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgTWFuYWdlci5nZXRJbnN0YW5jZSgpLm9uTGF0ZUluaXRNYW5hZ2VyKClcclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgTWFuYWdlci5nZXRJbnN0YW5jZSgpLm9uVXBkYXRlTWFuYWdlcihkdClcclxuICAgIH0sXHJcblxyXG4gICAgbGF0ZVVwZGF0ZShkdCkge1xyXG4gICAgICAgIE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5vbkxhdGVVcGRhdGVNYW5hZ2VyKGR0KVxyXG4gICAgfSxcclxuXHJcbiAgICBnYW1lT3ZlcigpIHtcclxuICAgICAgICBsZXQgR2FtZU92ZXJVSSA9IGNjLmZpbmQoJ0NhbnZhcy9VSVJvb3QvR2FtZU92ZXInKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKEdhbWVPdmVyVUkpO1xyXG4gICAgICAgIEdhbWVPdmVyVUkuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgbGV0IHNjb3JlID0gTWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldE1ncignUGxheWVyJykuc2NvcmU7XHJcbiAgICAgICAgR2FtZU92ZXJVSS5nZXRDaGlsZEJ5TmFtZSgnc2NvcmUyJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBzY29yZS50b0ZpeGVkKDIpO1xyXG4gICAgICAgIEdhbWVPdmVyVUkuZ2V0Q2hpbGRCeU5hbWUoJ0Jlc3RTY29yZScpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gc2NvcmUudG9GaXhlZCgyKTtcclxuICAgICAgICBHYW1lT3ZlclVJLmdldENoaWxkQnlOYW1lKCdzY29yZTInKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIEdhbWVPdmVyVUkuZ2V0Q2hpbGRCeU5hbWUoJ0Jlc3RTY29yZScpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgaWYgKHNjb3JlID4gMTAwKSB7XHJcbiAgICAgICAgICAgIEdhbWVPdmVyVUkuZ2V0Q2hpbGRCeU5hbWUoJ3llbGxvdycpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgR2FtZU92ZXJVSS5nZXRDaGlsZEJ5TmFtZSgnZ3JheScpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBNYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2FtZU92ZXIoKVxyXG4gICAgICAgIE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5jbGVhcigpXHJcbiAgICB9LFxyXG5cclxuICAgIHJlU3RhcnQoKSB7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiR2FtZVNjZW5lXCIpO1xyXG4gICAgfSxcclxuXHJcbiAgICBfcmVnaXN0ZXJNYW5hZ2VyKCkge1xyXG4gICAgICAgIGxldCBjaGlsZHJlbiA9IHRoaXMubm9kZS5jaGlsZHJlbjtcclxuICAgICAgICBmb3IgKGxldCB2YWx1ZSBvZiBjaGlsZHJlbikge1xyXG4gICAgICAgICAgICBsZXQgY29tSnMgPSB2YWx1ZS5nZXRDb21wb25lbnQoU2NyaXB0QmFzZSk7XHJcbiAgICAgICAgICAgIGlmICghY29tSnMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5hZGRNZ3IodmFsdWUubmFtZSwgY29tSnMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcbiJdfQ==