'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  function _default() {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

    _this.config = {
      pages: ['pages/Home', 'pages/GoodsDetail', 'pages/My', 'pages/ProductList', 'pages/Reputation'],
      window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#fff',
        navigationBarTitleText: 'WeChat',
        navigationBarTextStyle: 'black'
      },
      "tabBar": {
        "list": [{
          "pagePath": "pages/Home",
          "text": "首  页",
          "iconPath": "./static/img/index-n.png",
          "selectedIconPath": "static/img/index-y.png"
        }, {
          "pagePath": "pages/ProductList",
          "text": "欢  乐 购",
          "iconPath": "./static/img/class-n.png",
          "selectedIconPath": "static/img/class-y.png"
        }, {
          "pagePath": "pages/My",
          "text": "我  的",
          "iconPath": "./static/img/my-n.png",
          "selectedIconPath": "static/img/my-y.png"
        }]
      }

    };
    _this.globalData = {};

    _this.use('requestfix');
    return _this;
  }

  _createClass(_default, [{
    key: 'onLaunch',
    value: function onLaunch() {}
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {"noPromiseAPI":["createSelectorQuery"]}));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJnbG9iYWxEYXRhIiwidXNlIiwiYXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7O0FBeUNFLHNCQUFlO0FBQUE7O0FBQUE7O0FBQUEsVUF2Q2ZBLE1BdUNlLEdBdkNOO0FBQ1BDLGFBQU8sQ0FDTCxZQURLLEVBRUwsbUJBRkssRUFHTCxVQUhLLEVBSUwsbUJBSkssRUFLTCxrQkFMSyxDQURBO0FBUVBDLGNBQVE7QUFDTkMsNkJBQXFCLE9BRGY7QUFFTkMsc0NBQThCLE1BRnhCO0FBR05DLGdDQUF3QixRQUhsQjtBQUlOQyxnQ0FBd0I7QUFKbEIsT0FSRDtBQWNQLGdCQUFVO0FBQ1IsZ0JBQVEsQ0FBQztBQUNQLHNCQUFZLFlBREw7QUFFUCxrQkFBUSxNQUZEO0FBR1Asc0JBQVcsMEJBSEo7QUFJUCw4QkFBb0I7QUFKYixTQUFELEVBS0w7QUFDRCxzQkFBWSxtQkFEWDtBQUVELGtCQUFRLFFBRlA7QUFHRCxzQkFBVywwQkFIVjtBQUlELDhCQUFvQjtBQUpuQixTQUxLLEVBVU47QUFDQSxzQkFBWSxVQURaO0FBRUEsa0JBQVEsTUFGUjtBQUdBLHNCQUFXLHVCQUhYO0FBSUEsOEJBQW9CO0FBSnBCLFNBVk07QUFEQTs7QUFkSCxLQXVDTTtBQUFBLFVBSmZDLFVBSWUsR0FKRixFQUlFOztBQUViLFVBQUtDLEdBQUwsQ0FBUyxZQUFUO0FBRmE7QUFHZDs7OzsrQkFFVSxDQUVWOzs7O0VBL0MwQixlQUFLQyxHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5pbXBvcnQgJ3dlcHktYXN5bmMtZnVuY3Rpb24nXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgd2VweS5hcHAge1xyXG4gIGNvbmZpZyA9IHtcclxuICAgIHBhZ2VzOiBbXHJcbiAgICAgICdwYWdlcy9Ib21lJyxcclxuICAgICAgJ3BhZ2VzL0dvb2RzRGV0YWlsJyxcclxuICAgICAgJ3BhZ2VzL015JyxcclxuICAgICAgJ3BhZ2VzL1Byb2R1Y3RMaXN0JyxcclxuICAgICAgJ3BhZ2VzL1JlcHV0YXRpb24nXHJcbiAgICBdLFxyXG4gICAgd2luZG93OiB7XHJcbiAgICAgIGJhY2tncm91bmRUZXh0U3R5bGU6ICdsaWdodCcsXHJcbiAgICAgIG5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ1dlQ2hhdCcsXHJcbiAgICAgIG5hdmlnYXRpb25CYXJUZXh0U3R5bGU6ICdibGFjaydcclxuICAgIH0sXHJcbiAgICBcInRhYkJhclwiOiB7XHJcbiAgICAgIFwibGlzdFwiOiBbe1xyXG4gICAgICAgIFwicGFnZVBhdGhcIjogXCJwYWdlcy9Ib21lXCIsXHJcbiAgICAgICAgXCJ0ZXh0XCI6IFwi6aaWICDpobVcIixcclxuICAgICAgICBcImljb25QYXRoXCI6XCIuL3N0YXRpYy9pbWcvaW5kZXgtbi5wbmdcIixcclxuICAgICAgICBcInNlbGVjdGVkSWNvblBhdGhcIjogXCJzdGF0aWMvaW1nL2luZGV4LXkucG5nXCJcclxuICAgICAgfSwge1xyXG4gICAgICAgIFwicGFnZVBhdGhcIjogXCJwYWdlcy9Qcm9kdWN0TGlzdFwiLFxyXG4gICAgICAgIFwidGV4dFwiOiBcIuasoiAg5LmQIOi0rVwiLFxyXG4gICAgICAgIFwiaWNvblBhdGhcIjpcIi4vc3RhdGljL2ltZy9jbGFzcy1uLnBuZ1wiLFxyXG4gICAgICAgIFwic2VsZWN0ZWRJY29uUGF0aFwiOiBcInN0YXRpYy9pbWcvY2xhc3MteS5wbmdcIlxyXG4gICAgICB9LHtcclxuICAgICAgICBcInBhZ2VQYXRoXCI6IFwicGFnZXMvTXlcIixcclxuICAgICAgICBcInRleHRcIjogXCLmiJEgIOeahFwiLFxyXG4gICAgICAgIFwiaWNvblBhdGhcIjpcIi4vc3RhdGljL2ltZy9teS1uLnBuZ1wiLFxyXG4gICAgICAgIFwic2VsZWN0ZWRJY29uUGF0aFwiOiBcInN0YXRpYy9pbWcvbXkteS5wbmdcIlxyXG4gICAgICB9XVxyXG4gICAgfSxcclxuXHJcbiAgfVxyXG5cclxuICBnbG9iYWxEYXRhID0ge1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICBzdXBlcigpXHJcbiAgICB0aGlzLnVzZSgncmVxdWVzdGZpeCcpXHJcbiAgfVxyXG5cclxuICBvbkxhdW5jaCgpIHtcclxuICAgIFxyXG4gIH1cclxuXHJcbiBcclxufVxyXG4iXX0=