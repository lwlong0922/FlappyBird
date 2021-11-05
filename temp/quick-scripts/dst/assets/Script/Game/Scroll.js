
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