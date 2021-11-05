
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