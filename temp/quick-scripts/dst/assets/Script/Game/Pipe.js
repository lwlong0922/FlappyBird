
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