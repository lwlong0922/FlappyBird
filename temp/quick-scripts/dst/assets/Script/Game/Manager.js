
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