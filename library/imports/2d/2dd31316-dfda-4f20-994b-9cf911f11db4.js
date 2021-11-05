"use strict";
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