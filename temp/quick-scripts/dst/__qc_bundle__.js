
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Script/GameMenu');
require('./assets/Script/Game/Game');
require('./assets/Script/Game/Manager');
require('./assets/Script/Game/Pipe');
require('./assets/Script/Game/PipeLayer');
require('./assets/Script/Game/Player');
require('./assets/Script/Game/ScriptBase');
require('./assets/Script/Game/Scroll');
require('./assets/Script/Game/TouchLayer');

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/Manager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2dd31MW39pPIJlLnPkR8R20', 'Manager');
// Script/Game/Manager.js

"use strict";

var Manager = /*#__PURE__*/function () {
  function Manager() {
    this.objMgr = {};
  }

  var _proto = Manager.prototype;

  _proto.getMgr = function getMgr(name) {
    if (name === '' || !this.objMgr[name]) {
      return null;
    }

    return this.objMgr[name];
  };

  _proto.addMgr = function addMgr(name, obj) {
    if (name === '' || !obj) {
      return;
    }

    this.objMgr[name] = obj;
  };

  _proto.remove = function remove(name) {
    if (name === '') {
      return;
    }

    delete this.objMgr[name];
  };

  _proto.clear = function clear() {
    for (var key in this.objMgr) {
      this.remove(key);
    }
  };

  _proto.gameOver = function gameOver() {
    for (var key in this.objMgr) {
      if (this.objMgr[key].gameOver) {
        this.objMgr[key].gameOver();
      }
    }
  };

  _proto.onInitManager = function onInitManager() {
    for (var key in this.objMgr) {
      if (this.objMgr[key].onInit) {
        this.objMgr[key].onInit();
      }
    }
  };

  _proto.onLateInitManager = function onLateInitManager() {
    for (var key in this.objMgr) {
      if (this.objMgr[key].onLateInit) {
        this.objMgr[key].onLateInit();
      }
    }
  };

  _proto.onUpdateManager = function onUpdateManager(dt) {
    for (var key in this.objMgr) {
      if (this.objMgr[key].onUpdate) {
        this.objMgr[key].onUpdate(dt);
      }
    }
  };

  _proto.onLateUpdateManager = function onLateUpdateManager(dt) {
    for (var key in this.objMgr) {
      if (this.objMgr[key].onLateUpdate) {
        this.objMgr[key].onLateUpdate(dt);
      }
    }
  };

  return Manager;
}();

var instance = null;

module.exports.getInstance = function () {
  if (!instance) {
    instance = new Manager();
  }

  return instance;
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxHYW1lXFxNYW5hZ2VyLmpzIl0sIm5hbWVzIjpbIk1hbmFnZXIiLCJvYmpNZ3IiLCJnZXRNZ3IiLCJuYW1lIiwiYWRkTWdyIiwib2JqIiwicmVtb3ZlIiwiY2xlYXIiLCJrZXkiLCJnYW1lT3ZlciIsIm9uSW5pdE1hbmFnZXIiLCJvbkluaXQiLCJvbkxhdGVJbml0TWFuYWdlciIsIm9uTGF0ZUluaXQiLCJvblVwZGF0ZU1hbmFnZXIiLCJkdCIsIm9uVXBkYXRlIiwib25MYXRlVXBkYXRlTWFuYWdlciIsIm9uTGF0ZVVwZGF0ZSIsImluc3RhbmNlIiwibW9kdWxlIiwiZXhwb3J0cyIsImdldEluc3RhbmNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztJQUFNQTtBQUNGLHFCQUFjO0FBQ1YsU0FBS0MsTUFBTCxHQUFZLEVBQVo7QUFDSDs7OztTQUNEQyxTQUFBLGdCQUFPQyxJQUFQLEVBQWE7QUFDVCxRQUFJQSxJQUFJLEtBQUcsRUFBUCxJQUFXLENBQUMsS0FBS0YsTUFBTCxDQUFZRSxJQUFaLENBQWhCLEVBQW1DO0FBQy9CLGFBQU8sSUFBUDtBQUNIOztBQUNELFdBQU8sS0FBS0YsTUFBTCxDQUFZRSxJQUFaLENBQVA7QUFDSDs7U0FDREMsU0FBQSxnQkFBT0QsSUFBUCxFQUFhRSxHQUFiLEVBQWtCO0FBQ2QsUUFBSUYsSUFBSSxLQUFLLEVBQVQsSUFBZSxDQUFDRSxHQUFwQixFQUF5QjtBQUNyQjtBQUNIOztBQUNELFNBQUtKLE1BQUwsQ0FBWUUsSUFBWixJQUFvQkUsR0FBcEI7QUFDSDs7U0FDREMsU0FBQSxnQkFBT0gsSUFBUCxFQUFhO0FBQ1QsUUFBSUEsSUFBSSxLQUFLLEVBQWIsRUFBaUI7QUFDYjtBQUNIOztBQUNELFdBQU8sS0FBS0YsTUFBTCxDQUFZRSxJQUFaLENBQVA7QUFDSDs7U0FDREksUUFBQSxpQkFBUTtBQUNKLFNBQUssSUFBSUMsR0FBVCxJQUFnQixLQUFLUCxNQUFyQixFQUE2QjtBQUN6QixXQUFLSyxNQUFMLENBQVlFLEdBQVo7QUFDSDtBQUNKOztTQUVEQyxXQUFBLG9CQUFXO0FBQ1AsU0FBSyxJQUFJRCxHQUFULElBQWdCLEtBQUtQLE1BQXJCLEVBQTZCO0FBQ3pCLFVBQUksS0FBS0EsTUFBTCxDQUFZTyxHQUFaLEVBQWlCQyxRQUFyQixFQUErQjtBQUMzQixhQUFLUixNQUFMLENBQVlPLEdBQVosRUFBaUJDLFFBQWpCO0FBQ0g7QUFDSjtBQUNKOztTQUVEQyxnQkFBQSx5QkFBZ0I7QUFDWixTQUFLLElBQUlGLEdBQVQsSUFBZ0IsS0FBS1AsTUFBckIsRUFBNkI7QUFDekIsVUFBSSxLQUFLQSxNQUFMLENBQVlPLEdBQVosRUFBaUJHLE1BQXJCLEVBQTZCO0FBQ3pCLGFBQUtWLE1BQUwsQ0FBWU8sR0FBWixFQUFpQkcsTUFBakI7QUFDSDtBQUNKO0FBQ0o7O1NBRURDLG9CQUFBLDZCQUFvQjtBQUNoQixTQUFLLElBQUlKLEdBQVQsSUFBZ0IsS0FBS1AsTUFBckIsRUFBNkI7QUFDekIsVUFBSSxLQUFLQSxNQUFMLENBQVlPLEdBQVosRUFBaUJLLFVBQXJCLEVBQWlDO0FBQzdCLGFBQUtaLE1BQUwsQ0FBWU8sR0FBWixFQUFpQkssVUFBakI7QUFDSDtBQUNKO0FBQ0o7O1NBRURDLGtCQUFBLHlCQUFnQkMsRUFBaEIsRUFBb0I7QUFDaEIsU0FBSyxJQUFJUCxHQUFULElBQWdCLEtBQUtQLE1BQXJCLEVBQTZCO0FBQ3pCLFVBQUksS0FBS0EsTUFBTCxDQUFZTyxHQUFaLEVBQWlCUSxRQUFyQixFQUErQjtBQUMzQixhQUFLZixNQUFMLENBQVlPLEdBQVosRUFBaUJRLFFBQWpCLENBQTBCRCxFQUExQjtBQUNIO0FBQ0o7QUFDSjs7U0FFREUsc0JBQUEsNkJBQW9CRixFQUFwQixFQUF3QjtBQUNwQixTQUFLLElBQUlQLEdBQVQsSUFBZ0IsS0FBS1AsTUFBckIsRUFBNkI7QUFDekIsVUFBSSxLQUFLQSxNQUFMLENBQVlPLEdBQVosRUFBaUJVLFlBQXJCLEVBQW1DO0FBQy9CLGFBQUtqQixNQUFMLENBQVlPLEdBQVosRUFBaUJVLFlBQWpCLENBQThCSCxFQUE5QjtBQUNIO0FBQ0o7QUFDSjs7Ozs7QUFFTCxJQUFJSSxRQUFRLEdBQUcsSUFBZjs7QUFDQUMsTUFBTSxDQUFDQyxPQUFQLENBQWVDLFdBQWYsR0FBMkIsWUFBSTtBQUMzQixNQUFJLENBQUNILFFBQUwsRUFBZTtBQUNYQSxJQUFBQSxRQUFRLEdBQUcsSUFBSW5CLE9BQUosRUFBWDtBQUNIOztBQUNELFNBQU9tQixRQUFQO0FBQ0gsQ0FMRCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgTWFuYWdlcntcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMub2JqTWdyPXt9XHJcbiAgICB9XHJcbiAgICBnZXRNZ3IobmFtZSkge1xyXG4gICAgICAgIGlmIChuYW1lPT09Jyd8fCF0aGlzLm9iak1ncltuYW1lXSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub2JqTWdyW25hbWVdO1xyXG4gICAgfVxyXG4gICAgYWRkTWdyKG5hbWUsIG9iaikge1xyXG4gICAgICAgIGlmIChuYW1lID09PSAnJyB8fCAhb2JqKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5vYmpNZ3JbbmFtZV0gPSBvYmo7XHJcbiAgICB9XHJcbiAgICByZW1vdmUobmFtZSkge1xyXG4gICAgICAgIGlmIChuYW1lID09PSAnJykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlbGV0ZSB0aGlzLm9iak1ncltuYW1lXTtcclxuICAgIH1cclxuICAgIGNsZWFyKCkge1xyXG4gICAgICAgIGZvciAobGV0IGtleSBpbiB0aGlzLm9iak1ncikge1xyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZShrZXkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnYW1lT3ZlcigpIHtcclxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5vYmpNZ3IpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMub2JqTWdyW2tleV0uZ2FtZU92ZXIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub2JqTWdyW2tleV0uZ2FtZU92ZXIoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uSW5pdE1hbmFnZXIoKSB7XHJcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHRoaXMub2JqTWdyKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm9iak1ncltrZXldLm9uSW5pdCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vYmpNZ3Jba2V5XS5vbkluaXQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkxhdGVJbml0TWFuYWdlcigpIHtcclxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5vYmpNZ3IpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMub2JqTWdyW2tleV0ub25MYXRlSW5pdCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vYmpNZ3Jba2V5XS5vbkxhdGVJbml0KClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvblVwZGF0ZU1hbmFnZXIoZHQpIHtcclxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5vYmpNZ3IpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMub2JqTWdyW2tleV0ub25VcGRhdGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub2JqTWdyW2tleV0ub25VcGRhdGUoZHQpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25MYXRlVXBkYXRlTWFuYWdlcihkdCkge1xyXG4gICAgICAgIGZvciAobGV0IGtleSBpbiB0aGlzLm9iak1ncikge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5vYmpNZ3Jba2V5XS5vbkxhdGVVcGRhdGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub2JqTWdyW2tleV0ub25MYXRlVXBkYXRlKGR0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5sZXQgaW5zdGFuY2UgPSBudWxsO1xyXG5tb2R1bGUuZXhwb3J0cy5nZXRJbnN0YW5jZT0oKT0+e1xyXG4gICAgaWYgKCFpbnN0YW5jZSkge1xyXG4gICAgICAgIGluc3RhbmNlID0gbmV3IE1hbmFnZXIoKTtcclxuICAgIH1cclxuICAgIHJldHVybiBpbnN0YW5jZTtcclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/Player.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxHYW1lXFxQbGF5ZXIuanMiXSwibmFtZXMiOlsiU2NyaXBlQmFzZSIsInJlcXVpcmUiLCJjYyIsIkNsYXNzIiwicHJvcGVydGllcyIsImFjY2VsIiwianVtcFNwZWVkIiwib25Jbml0Iiwic2NvcmUiLCJzcGVlZCIsIm9uVXBkYXRlIiwiZHQiLCJub2RlIiwieSIsImFuZ2xlIiwib25MYXRlVXBkYXRlIiwicGFyZW50IiwiZ2V0Q29tcG9uZW50IiwiZ2FtZU92ZXIiLCJmaW5kIiwiTGFiZWwiLCJzdHJpbmciLCJ0b0ZpeGVkIiwianVtcCIsIm9uQ29sbGlzaW9uRW50ZXIiLCJvdGhlciIsInNlbGYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsVUFBVSxHQUFHQyxPQUFPLENBQUMsWUFBRCxDQUF4Qjs7QUFDQUMsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTSCxVQURKO0FBR0xJLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxLQUFLLEVBQUUsQ0FEQztBQUVSQyxJQUFBQSxTQUFTLEVBQUU7QUFGSCxHQUhQO0FBUUxDLEVBQUFBLE1BUkssb0JBUUk7QUFDTCxTQUFLQyxLQUFMLEdBQWEsQ0FBYjtBQUNBLFNBQUtDLEtBQUwsR0FBYSxDQUFiO0FBQ0gsR0FYSTtBQWFMQyxFQUFBQSxRQWJLLG9CQWFJQyxFQWJKLEVBYVE7QUFDVCxTQUFLRixLQUFMLElBQWMsS0FBS0osS0FBTCxHQUFhTSxFQUEzQjtBQUNBLFNBQUtDLElBQUwsQ0FBVUMsQ0FBVixJQUFlLEtBQUtKLEtBQUwsR0FBYUUsRUFBNUI7QUFDQSxTQUFLQyxJQUFMLENBQVVFLEtBQVYsSUFBbUIsS0FBS0gsRUFBeEI7O0FBQ0EsUUFBSSxLQUFLQyxJQUFMLENBQVVFLEtBQVYsSUFBbUIsQ0FBQyxFQUF4QixFQUE0QjtBQUN4QixXQUFLRixJQUFMLENBQVVFLEtBQVYsR0FBa0IsQ0FBQyxFQUFuQjtBQUNIO0FBQ0osR0FwQkk7QUFzQkxDLEVBQUFBLFlBdEJLLHdCQXNCUUosRUF0QlIsRUFzQlk7QUFDYjtBQUNBLFFBQUksS0FBS0MsSUFBTCxDQUFVQyxDQUFWLElBQWUsSUFBbkIsRUFBeUI7QUFDckIsV0FBS0QsSUFBTCxDQUFVQyxDQUFWLEdBQWMsSUFBZDtBQUNBLFdBQUtKLEtBQUwsR0FBYSxDQUFiO0FBQ0g7O0FBQ0QsUUFBSSxLQUFLRyxJQUFMLENBQVVDLENBQVYsR0FBYyxFQUFsQixFQUFzQjtBQUNsQixXQUFLRCxJQUFMLENBQVVJLE1BQVYsQ0FBaUJDLFlBQWpCLENBQThCLE1BQTlCLEVBQXNDQyxRQUF0QztBQUVIOztBQUVELFNBQUtWLEtBQUwsSUFBY0csRUFBZDtBQUNBVCxJQUFBQSxFQUFFLENBQUNpQixJQUFILENBQVEscUJBQVIsRUFBK0JGLFlBQS9CLENBQTRDZixFQUFFLENBQUNrQixLQUEvQyxFQUFzREMsTUFBdEQsR0FBK0QsU0FBUyxLQUFLYixLQUFMLENBQVdjLE9BQVgsQ0FBbUIsQ0FBbkIsQ0FBeEU7QUFDSCxHQW5DSTtBQXFDTEMsRUFBQUEsSUFyQ0ssa0JBcUNFO0FBQ0gsU0FBS2QsS0FBTCxHQUFhLEtBQUtILFNBQWxCO0FBQ0EsU0FBS00sSUFBTCxDQUFVRSxLQUFWLEdBQWtCLEVBQWxCO0FBQ0gsR0F4Q0k7QUEwQ0xVLEVBQUFBLGdCQUFnQixFQUFFLDBCQUFVQyxLQUFWLEVBQWlCQyxJQUFqQixFQUF1QjtBQUNyQztBQUNBLFNBQUtkLElBQUwsQ0FBVUksTUFBVixDQUFpQkMsWUFBakIsQ0FBOEIsTUFBOUIsRUFBc0NDLFFBQXRDO0FBQ0gsR0E3Q0ksQ0ErQ0w7QUFFQTtBQUVBO0FBRUE7O0FBckRLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImxldCBTY3JpcGVCYXNlID0gcmVxdWlyZSgnU2NyaXB0QmFzZScpXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IFNjcmlwZUJhc2UsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGFjY2VsOiAwLFxyXG4gICAgICAgIGp1bXBTcGVlZDogMFxyXG4gICAgfSxcclxuXHJcbiAgICBvbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5zY29yZSA9IDA7XHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IDA7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uVXBkYXRlKGR0KSB7XHJcbiAgICAgICAgdGhpcy5zcGVlZCArPSB0aGlzLmFjY2VsICogZHQ7XHJcbiAgICAgICAgdGhpcy5ub2RlLnkgKz0gdGhpcy5zcGVlZCAqIGR0O1xyXG4gICAgICAgIHRoaXMubm9kZS5hbmdsZSAtPSA4MCAqIGR0XHJcbiAgICAgICAgaWYgKHRoaXMubm9kZS5hbmdsZSA8PSAtOTApIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmFuZ2xlID0gLTkwO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgb25MYXRlVXBkYXRlKGR0KSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5ub2RlLnkpO1xyXG4gICAgICAgIGlmICh0aGlzLm5vZGUueSA+PSAxMjUwKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS55ID0gMTI1MFxyXG4gICAgICAgICAgICB0aGlzLnNwZWVkID0gMFxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5ub2RlLnkgPCAzMCkge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUucGFyZW50LmdldENvbXBvbmVudCgnR2FtZScpLmdhbWVPdmVyKCk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zY29yZSArPSBkdDtcclxuICAgICAgICBjYy5maW5kKCdDYW52YXMvVUlSb290L1Njb3JlJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSAn5b6X5YiGOiAnICsgdGhpcy5zY29yZS50b0ZpeGVkKDIpO1xyXG4gICAgfSxcclxuXHJcbiAgICBqdW1wKCkge1xyXG4gICAgICAgIHRoaXMuc3BlZWQgPSB0aGlzLmp1bXBTcGVlZFxyXG4gICAgICAgIHRoaXMubm9kZS5hbmdsZSA9IDYwXHJcbiAgICB9LFxyXG5cclxuICAgIG9uQ29sbGlzaW9uRW50ZXI6IGZ1bmN0aW9uIChvdGhlciwgc2VsZikge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdkZGQnKTtcclxuICAgICAgICB0aGlzLm5vZGUucGFyZW50LmdldENvbXBvbmVudCgnR2FtZScpLmdhbWVPdmVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9LFxyXG5cclxuICAgIC8vIHN0YXJ0ICgpIHt9LFxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG59KTtcclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/Scroll.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b233aMRKRZFoKeWYMtfxf21', 'Scroll');
// Script/Game/Scroll.js

"use strict";

var ScripeBase = require('ScriptBase');

cc.Class({
  "extends": ScripeBase,
  properties: {
    arrScrollN: [cc.Node],
    speed: -100
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  // start() {},
  // update(dt) {},
  onInit: function onInit() {},
  lateInit: function lateInit() {},
  onUpdate: function onUpdate(dt) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxHYW1lXFxTY3JvbGwuanMiXSwibmFtZXMiOlsiU2NyaXBlQmFzZSIsInJlcXVpcmUiLCJjYyIsIkNsYXNzIiwicHJvcGVydGllcyIsImFyclNjcm9sbE4iLCJOb2RlIiwic3BlZWQiLCJvbkluaXQiLCJsYXRlSW5pdCIsIm9uVXBkYXRlIiwiZHQiLCJ4Iiwid2lkdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsVUFBVSxHQUFHQyxPQUFPLENBQUMsWUFBRCxDQUF4Qjs7QUFDQUMsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTSCxVQURKO0FBR0xJLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxVQUFVLEVBQUUsQ0FBQ0gsRUFBRSxDQUFDSSxJQUFKLENBREo7QUFFUkMsSUFBQUEsS0FBSyxFQUFFLENBQUM7QUFGQSxHQUhQO0FBUUw7QUFFQTtBQUVBO0FBRUE7QUFDQUMsRUFBQUEsTUFmSyxvQkFlSSxDQUVSLENBakJJO0FBa0JMQyxFQUFBQSxRQWxCSyxzQkFrQk0sQ0FFVixDQXBCSTtBQXFCTEMsRUFBQUEsUUFyQkssb0JBcUJJQyxFQXJCSixFQXFCUTtBQUNULFNBQUtOLFVBQUwsQ0FBZ0IsQ0FBaEIsRUFBbUJPLENBQW5CLElBQXdCLEtBQUtMLEtBQUwsR0FBYUksRUFBckM7QUFDQSxTQUFLTixVQUFMLENBQWdCLENBQWhCLEVBQW1CTyxDQUFuQixJQUF3QixLQUFLTCxLQUFMLEdBQWFJLEVBQXJDO0FBQ0EsU0FBS04sVUFBTCxDQUFnQixDQUFoQixFQUFtQk8sQ0FBbkIsSUFBd0IsS0FBS0wsS0FBTCxHQUFhSSxFQUFyQzs7QUFDQSxRQUFJLEtBQUtOLFVBQUwsQ0FBZ0IsQ0FBaEIsRUFBbUJPLENBQW5CLElBQXdCLENBQUMsS0FBS1AsVUFBTCxDQUFnQixDQUFoQixFQUFtQlEsS0FBcEIsR0FBNEIsR0FBeEQsRUFBNkQ7QUFDekQsV0FBS1IsVUFBTCxDQUFnQixDQUFoQixFQUFtQk8sQ0FBbkIsR0FBdUIsS0FBS1AsVUFBTCxDQUFnQixDQUFoQixFQUFtQk8sQ0FBbkIsR0FBdUIsS0FBS1AsVUFBTCxDQUFnQixDQUFoQixFQUFtQlEsS0FBakU7QUFDSDs7QUFDRCxRQUFJLEtBQUtSLFVBQUwsQ0FBZ0IsQ0FBaEIsRUFBbUJPLENBQW5CLElBQXdCLENBQUMsS0FBS1AsVUFBTCxDQUFnQixDQUFoQixFQUFtQlEsS0FBcEIsR0FBNEIsR0FBeEQsRUFBNkQ7QUFDekQsV0FBS1IsVUFBTCxDQUFnQixDQUFoQixFQUFtQk8sQ0FBbkIsR0FBdUIsS0FBS1AsVUFBTCxDQUFnQixDQUFoQixFQUFtQk8sQ0FBbkIsR0FBdUIsS0FBS1AsVUFBTCxDQUFnQixDQUFoQixFQUFtQlEsS0FBakU7QUFDSDs7QUFDRCxRQUFJLEtBQUtSLFVBQUwsQ0FBZ0IsQ0FBaEIsRUFBbUJPLENBQW5CLElBQXdCLENBQUMsS0FBS1AsVUFBTCxDQUFnQixDQUFoQixFQUFtQlEsS0FBcEIsR0FBNEIsR0FBeEQsRUFBNkQ7QUFDekQsV0FBS1IsVUFBTCxDQUFnQixDQUFoQixFQUFtQk8sQ0FBbkIsR0FBdUIsS0FBS1AsVUFBTCxDQUFnQixDQUFoQixFQUFtQk8sQ0FBbkIsR0FBdUIsS0FBS1AsVUFBTCxDQUFnQixDQUFoQixFQUFtQlEsS0FBakU7QUFDSDtBQUNKO0FBbENJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImxldCBTY3JpcGVCYXNlID0gcmVxdWlyZSgnU2NyaXB0QmFzZScpXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IFNjcmlwZUJhc2UsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGFyclNjcm9sbE46IFtjYy5Ob2RlXSxcclxuICAgICAgICBzcGVlZDogLTEwMFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge30sXHJcblxyXG4gICAgLy8gc3RhcnQoKSB7fSxcclxuXHJcbiAgICAvLyB1cGRhdGUoZHQpIHt9LFxyXG4gICAgb25Jbml0KCkge1xyXG5cclxuICAgIH0sXHJcbiAgICBsYXRlSW5pdCgpIHtcclxuXHJcbiAgICB9LFxyXG4gICAgb25VcGRhdGUoZHQpIHtcclxuICAgICAgICB0aGlzLmFyclNjcm9sbE5bMF0ueCArPSB0aGlzLnNwZWVkICogZHQ7XHJcbiAgICAgICAgdGhpcy5hcnJTY3JvbGxOWzFdLnggKz0gdGhpcy5zcGVlZCAqIGR0O1xyXG4gICAgICAgIHRoaXMuYXJyU2Nyb2xsTlsyXS54ICs9IHRoaXMuc3BlZWQgKiBkdDtcclxuICAgICAgICBpZiAodGhpcy5hcnJTY3JvbGxOWzBdLnggPD0gLXRoaXMuYXJyU2Nyb2xsTlswXS53aWR0aCAqIDEuMikge1xyXG4gICAgICAgICAgICB0aGlzLmFyclNjcm9sbE5bMF0ueCA9IHRoaXMuYXJyU2Nyb2xsTlsyXS54ICsgdGhpcy5hcnJTY3JvbGxOWzFdLndpZHRoO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5hcnJTY3JvbGxOWzFdLnggPD0gLXRoaXMuYXJyU2Nyb2xsTlsxXS53aWR0aCAqIDEuMikge1xyXG4gICAgICAgICAgICB0aGlzLmFyclNjcm9sbE5bMV0ueCA9IHRoaXMuYXJyU2Nyb2xsTlswXS54ICsgdGhpcy5hcnJTY3JvbGxOWzFdLndpZHRoO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5hcnJTY3JvbGxOWzJdLnggPD0gLXRoaXMuYXJyU2Nyb2xsTlsxXS53aWR0aCAqIDEuMikge1xyXG4gICAgICAgICAgICB0aGlzLmFyclNjcm9sbE5bMl0ueCA9IHRoaXMuYXJyU2Nyb2xsTlsxXS54ICsgdGhpcy5hcnJTY3JvbGxOWzFdLndpZHRoO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/ScriptBase.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ed2f95H9qJCAKMZKdeYCll/', 'ScriptBase');
// Script/Game/ScriptBase.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {},
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {} // update (dt) {},

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxHYW1lXFxTY3JpcHRCYXNlLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwic3RhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRSxFQUhQO0FBTUw7QUFFQTtBQUVBQyxFQUFBQSxLQVZLLG1CQVVJLENBRVIsQ0FaSSxDQWNMOztBQWRLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG59KTtcclxuIl19
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/Pipe.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxHYW1lXFxQaXBlLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwic3BlZWQiLCJvbkxvYWQiLCJpbml0Iiwibm9kZSIsIngiLCJ5IiwicmFuZG9tTnVtIiwibWluTnVtIiwibWF4TnVtIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwicGFyc2VJbnQiLCJNYXRoIiwicmFuZG9tIiwib25VcGRhdGUiLCJkdCIsInBhcmVudCIsImdldENvbXBvbmVudCIsInJlbW92ZVBpcGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxLQUFLLEVBQUUsQ0FEQyxDQUVSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFoQlEsR0FIUDtBQXNCTDtBQUVBQyxFQUFBQSxNQXhCSyxvQkF3Qkk7QUFDTCxTQUFLQyxJQUFMO0FBQ0gsR0ExQkk7QUE0QkxBLEVBQUFBLElBNUJLLGtCQTRCRTtBQUNILFNBQUtDLElBQUwsQ0FBVUMsQ0FBVixHQUFjLEdBQWQ7QUFDQSxTQUFLRCxJQUFMLENBQVVFLENBQVYsR0FBYyxLQUFLQyxTQUFMLENBQWUsR0FBZixFQUFvQixHQUFwQixDQUFkO0FBQ0gsR0EvQkk7QUFnQ0w7QUFDQUEsRUFBQUEsU0FqQ0sscUJBaUNLQyxNQWpDTCxFQWlDYUMsTUFqQ2IsRUFpQ3FCO0FBQ3RCLFlBQVFDLFNBQVMsQ0FBQ0MsTUFBbEI7QUFDSSxXQUFLLENBQUw7QUFDSSxlQUFPQyxRQUFRLENBQUNDLElBQUksQ0FBQ0MsTUFBTCxLQUFnQk4sTUFBaEIsR0FBeUIsQ0FBMUIsRUFBNkIsRUFBN0IsQ0FBZjtBQUNBOztBQUNKLFdBQUssQ0FBTDtBQUNJLGVBQU9JLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDQyxNQUFMLE1BQWlCTCxNQUFNLEdBQUdELE1BQVQsR0FBa0IsQ0FBbkMsSUFBd0NBLE1BQXpDLEVBQWlELEVBQWpELENBQWY7QUFDQTs7QUFDSjtBQUNJLGVBQU8sQ0FBUDtBQUNBO0FBVFI7QUFXSCxHQTdDSTtBQStDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSU8sRUFBQUEsUUFyREssb0JBcURJQyxFQXJESixFQXFEUTtBQUNUO0FBQ0EsU0FBS1osSUFBTCxDQUFVQyxDQUFWLElBQWUsS0FBS0osS0FBTCxHQUFhZSxFQUE1Qjs7QUFDQSxRQUFJLEtBQUtaLElBQUwsQ0FBVUMsQ0FBVixHQUFjLENBQUMsR0FBbkIsRUFBd0I7QUFDcEIsV0FBS0QsSUFBTCxDQUFVYSxNQUFWLENBQWlCQyxZQUFqQixDQUE4QixXQUE5QixFQUEyQ0MsVUFBM0MsQ0FBc0QsS0FBS2YsSUFBM0Q7QUFDSDtBQUNKO0FBM0RJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBzcGVlZDogMFxyXG4gICAgICAgIC8vIGZvbzoge1xyXG4gICAgICAgIC8vICAgICAvLyBBVFRSSUJVVEVTOlxyXG4gICAgICAgIC8vICAgICBkZWZhdWx0OiBudWxsLCAgICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxyXG4gICAgICAgIC8vICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcclxuICAgICAgICAvLyAgICAgc2VyaWFsaXphYmxlOiB0cnVlLCAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIGJhcjoge1xyXG4gICAgICAgIC8vICAgICBnZXQgKCkge1xyXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIHRoaXMuX2JhcjtcclxuICAgICAgICAvLyAgICAgfSxcclxuICAgICAgICAvLyAgICAgc2V0ICh2YWx1ZSkge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5fYmFyID0gdmFsdWU7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9LFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5pbml0KClcclxuICAgIH0sXHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICB0aGlzLm5vZGUueCA9IDgwMFxyXG4gICAgICAgIHRoaXMubm9kZS55ID0gdGhpcy5yYW5kb21OdW0oMTUwLCA4NTApXHJcbiAgICB9LFxyXG4gICAgLy8gc3RhcnQgKCkge30sXHJcbiAgICByYW5kb21OdW0obWluTnVtLCBtYXhOdW0pIHtcclxuICAgICAgICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlSW50KE1hdGgucmFuZG9tKCkgKiBtaW5OdW0gKyAxLCAxMCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlSW50KE1hdGgucmFuZG9tKCkgKiAobWF4TnVtIC0gbWluTnVtICsgMSkgKyBtaW5OdW0sIDEwKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuLy8gICAgdXBkYXRlKGR0KSB7XHJcbi8vICAgICAgICAgdGhpcy5ub2RlLnggKz0gdGhpcy5zcGVlZCAqIGR0XHJcbi8vICAgICAgICAgaWYgKHRoaXMubm9kZS54IDwgLTIwMCkge1xyXG4vLyAgICAgICAgICAgICB0aGlzLm5vZGUucGFyZW50LmdldENvbXBvbmVudCgnUGlwZUxheWVyJykucmVtb3ZlUGlwZSh0aGlzLm5vZGUpXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfSxcclxuICAgIG9uVXBkYXRlKGR0KSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5ub2RlLnkpO1xyXG4gICAgICAgIHRoaXMubm9kZS54ICs9IHRoaXMuc3BlZWQgKiBkdFxyXG4gICAgICAgIGlmICh0aGlzLm5vZGUueCA8IC0yMDApIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnBhcmVudC5nZXRDb21wb25lbnQoJ1BpcGVMYXllcicpLnJlbW92ZVBpcGUodGhpcy5ub2RlKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------
