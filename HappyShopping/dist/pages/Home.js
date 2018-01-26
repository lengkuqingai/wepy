'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _api = require('./../http/api.js');

var _api2 = _interopRequireDefault(_api);

var _Home_swipe = require('./../components/Home/Home_swipe.js');

var _Home_swipe2 = _interopRequireDefault(_Home_swipe);

var _Home_Products = require('./../components/Home/Home_Products.js');

var _Home_Products2 = _interopRequireDefault(_Home_Products);

var _until = require('./../utils/until.js');

var _until2 = _interopRequireDefault(_until);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_wepy$page) {
  _inherits(Home, _wepy$page);

  function Home() {
    var _ref;

    var _temp, _this2, _ret;

    _classCallCheck(this, Home);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = Home.__proto__ || Object.getPrototypeOf(Home)).call.apply(_ref, [this].concat(args))), _this2), _this2.config = {
      navigationBarTitleText: '欢乐购'
    }, _this2.$repeat = {}, _this2.$props = { "Swipe": { "xmlns:v-bind": "", "v-bind:banner.sync": "banner", "v-bind:swipe_height.sync": "swipe_heights", "xmlns:wx": "" }, "Products1": { "v-bind:product.sync": "productNP" }, "Products2": { "v-bind:product.sync": "productJP", "v-bind:products.sync": "products" } }, _this2.$events = {}, _this2.components = {
      Swipe: _Home_swipe2.default,
      Products1: _Home_Products2.default,
      Products2: _Home_Products2.default
    }, _this2.data = {
      banner: [],
      swipe_height: "",
      productNP: {
        icon: '../static/img/NP.png',
        title: "新手专享",
        characteristic: "",
        minPrice: "",
        name: "",
        btnText: "马上买入"
      },
      productJP: {
        icon: '../static/img/JP.png',
        title: "精品推荐",
        more: "更多",
        moreIcon: '../static/img/more.png',
        characteristic: "",
        minPrice: "",
        name: "",
        btnText: "火热抢购中",
        top: "../static/img/background_top.png",
        bottom: "../static/img/background_bottom.png"
      },
      products: []
    }, _this2.events = {}, _this2.computed = {}, _temp), _possibleConstructorReturn(_this2, _ret);
  }

  _createClass(Home, [{
    key: 'onShow',
    value: function onShow() {}
  }, {
    key: 'onReady',
    value: function onReady() {
      // 获取首页商品列表
      var _this = this;
      _api2.default.GoodsList({ data: { page: 3, pageSize: 5 } }, function (data) {
        console.log("商品列表", data.data.data);
        _this.productNp = Object.assign(_this.productNP, data.data.data.slice(0, 1)[0]);
        _this.productJP = Object.assign(_this.productJP, data.data.data.slice(1, 2)[0]);
        _this.products = data.data.data.slice(2);
        _this.$apply();
        console.log(_this.productNP);
      });
    }
  }, {
    key: 'onLoad',
    value: function onLoad() {
      var _this = this;
      _api2.default.Banner({}, function (data) {
        console.log("banner图信息", data.data.data);
        _this.banner = data.data.data;
        _this.$apply();
      });
    }
  }]);

  return Home;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Home , 'pages/Home'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkhvbWUuanMiXSwibmFtZXMiOlsiSG9tZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJTd2lwZSIsIlByb2R1Y3RzMSIsIlByb2R1Y3RzMiIsImRhdGEiLCJiYW5uZXIiLCJzd2lwZV9oZWlnaHQiLCJwcm9kdWN0TlAiLCJpY29uIiwidGl0bGUiLCJjaGFyYWN0ZXJpc3RpYyIsIm1pblByaWNlIiwibmFtZSIsImJ0blRleHQiLCJwcm9kdWN0SlAiLCJtb3JlIiwibW9yZUljb24iLCJ0b3AiLCJib3R0b20iLCJwcm9kdWN0cyIsImV2ZW50cyIsImNvbXB1dGVkIiwiX3RoaXMiLCJHb29kc0xpc3QiLCJwYWdlIiwicGFnZVNpemUiLCJjb25zb2xlIiwibG9nIiwicHJvZHVjdE5wIiwiT2JqZWN0IiwiYXNzaWduIiwic2xpY2UiLCIkYXBwbHkiLCJCYW5uZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSTs7Ozs7Ozs7Ozs7Ozs7cUxBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssU0FHVkMsTyxHQUFVLEUsU0FDYkMsTSxHQUFTLEVBQUMsU0FBUSxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLHNCQUFxQixRQUF4QyxFQUFpRCw0QkFBMkIsZUFBNUUsRUFBNEYsWUFBVyxFQUF2RyxFQUFULEVBQW9ILGFBQVksRUFBQyx1QkFBc0IsV0FBdkIsRUFBaEksRUFBb0ssYUFBWSxFQUFDLHVCQUFzQixXQUF2QixFQUFtQyx3QkFBdUIsVUFBMUQsRUFBaEwsRSxTQUNUQyxPLEdBQVUsRSxTQUNUQyxVLEdBQWE7QUFDUkMsaUNBRFE7QUFFUkMsd0NBRlE7QUFHUkM7QUFIUSxLLFNBTVZDLEksR0FBTztBQUNMQyxjQUFPLEVBREY7QUFFTEMsb0JBQWEsRUFGUjtBQUdMQyxpQkFBVTtBQUNSQyxjQUFLLHNCQURHO0FBRVJDLGVBQU0sTUFGRTtBQUdSQyx3QkFBZSxFQUhQO0FBSVJDLGtCQUFTLEVBSkQ7QUFLUkMsY0FBSyxFQUxHO0FBTVJDLGlCQUFRO0FBTkEsT0FITDtBQVdMQyxpQkFBVTtBQUNSTixjQUFLLHNCQURHO0FBRVJDLGVBQU0sTUFGRTtBQUdSTSxjQUFLLElBSEc7QUFJUkMsa0JBQVMsd0JBSkQ7QUFLUk4sd0JBQWUsRUFMUDtBQU1SQyxrQkFBUyxFQU5EO0FBT1JDLGNBQUssRUFQRztBQVFSQyxpQkFBUSxPQVJBO0FBU1JJLGFBQUksa0NBVEk7QUFVUkMsZ0JBQU87QUFWQyxPQVhMO0FBdUJMQyxnQkFBUztBQXZCSixLLFNBMEJQQyxNLEdBQVMsRSxTQUdUQyxRLEdBQVcsRTs7Ozs7NkJBR0gsQ0FFUDs7OzhCQUNRO0FBQ1A7QUFDQSxVQUFJQyxRQUFRLElBQVo7QUFDQSxvQkFBS0MsU0FBTCxDQUFlLEVBQUNuQixNQUFLLEVBQUNvQixNQUFLLENBQU4sRUFBUUMsVUFBUyxDQUFqQixFQUFOLEVBQWYsRUFBMEMsVUFBQ3JCLElBQUQsRUFBUTtBQUNoRHNCLGdCQUFRQyxHQUFSLENBQVksTUFBWixFQUFtQnZCLEtBQUtBLElBQUwsQ0FBVUEsSUFBN0I7QUFDQWtCLGNBQU1NLFNBQU4sR0FBa0JDLE9BQU9DLE1BQVAsQ0FBY1IsTUFBTWYsU0FBcEIsRUFBOEJILEtBQUtBLElBQUwsQ0FBVUEsSUFBVixDQUFlMkIsS0FBZixDQUFxQixDQUFyQixFQUF1QixDQUF2QixFQUEwQixDQUExQixDQUE5QixDQUFsQjtBQUNBVCxjQUFNUixTQUFOLEdBQWtCZSxPQUFPQyxNQUFQLENBQWNSLE1BQU1SLFNBQXBCLEVBQThCVixLQUFLQSxJQUFMLENBQVVBLElBQVYsQ0FBZTJCLEtBQWYsQ0FBcUIsQ0FBckIsRUFBdUIsQ0FBdkIsRUFBMEIsQ0FBMUIsQ0FBOUIsQ0FBbEI7QUFDQVQsY0FBTUgsUUFBTixHQUFpQmYsS0FBS0EsSUFBTCxDQUFVQSxJQUFWLENBQWUyQixLQUFmLENBQXFCLENBQXJCLENBQWpCO0FBQ0FULGNBQU1VLE1BQU47QUFDQU4sZ0JBQVFDLEdBQVIsQ0FBWUwsTUFBTWYsU0FBbEI7QUFDRCxPQVBEO0FBUUQ7Ozs2QkFDUztBQUNSLFVBQUllLFFBQVEsSUFBWjtBQUNBLG9CQUFLVyxNQUFMLENBQVksRUFBWixFQUFlLFVBQUM3QixJQUFELEVBQVE7QUFDckJzQixnQkFBUUMsR0FBUixDQUFZLFdBQVosRUFBd0J2QixLQUFLQSxJQUFMLENBQVVBLElBQWxDO0FBQ0FrQixjQUFNakIsTUFBTixHQUFlRCxLQUFLQSxJQUFMLENBQVVBLElBQXpCO0FBQ0FrQixjQUFNVSxNQUFOO0FBRUQsT0FMRDtBQU1EOzs7O0VBcEUrQixlQUFLUixJOztrQkFBbEI5QixJIiwiZmlsZSI6IkhvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gIGltcG9ydCBfQVBJIGZyb20gJy4uL2h0dHAvYXBpLmpzJ1xyXG4gIGltcG9ydCBTd2lwZSBmcm9tICcuLi9jb21wb25lbnRzL0hvbWUvSG9tZV9zd2lwZSdcclxuICBpbXBvcnQgUHJvZHVjdHMgZnJvbSAnLi4vY29tcG9uZW50cy9Ib21lL0hvbWVfUHJvZHVjdHMnICBcclxuICBpbXBvcnQgX1VudGlsIGZyb20gJy4uL3V0aWxzL3VudGlsLmpzJ1xyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5qyi5LmQ6LStJ1xyXG4gICAgfVxyXG4gICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcIlN3aXBlXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpiYW5uZXIuc3luY1wiOlwiYmFubmVyXCIsXCJ2LWJpbmQ6c3dpcGVfaGVpZ2h0LnN5bmNcIjpcInN3aXBlX2hlaWdodHNcIixcInhtbG5zOnd4XCI6XCJcIn0sXCJQcm9kdWN0czFcIjp7XCJ2LWJpbmQ6cHJvZHVjdC5zeW5jXCI6XCJwcm9kdWN0TlBcIn0sXCJQcm9kdWN0czJcIjp7XCJ2LWJpbmQ6cHJvZHVjdC5zeW5jXCI6XCJwcm9kdWN0SlBcIixcInYtYmluZDpwcm9kdWN0cy5zeW5jXCI6XCJwcm9kdWN0c1wifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XHJcbiAgICAgIFN3aXBlOlN3aXBlLFxyXG4gICAgICBQcm9kdWN0czE6UHJvZHVjdHMsXHJcbiAgICAgIFByb2R1Y3RzMjpQcm9kdWN0c1xyXG4gICAgfVxyXG5cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgIGJhbm5lcjpbXSxcclxuICAgICAgc3dpcGVfaGVpZ2h0OlwiXCIsXHJcbiAgICAgIHByb2R1Y3ROUDp7XHJcbiAgICAgICAgaWNvbjonLi4vc3RhdGljL2ltZy9OUC5wbmcnLFxyXG4gICAgICAgIHRpdGxlOlwi5paw5omL5LiT5LqrXCIsXHJcbiAgICAgICAgY2hhcmFjdGVyaXN0aWM6XCJcIixcclxuICAgICAgICBtaW5QcmljZTpcIlwiLFxyXG4gICAgICAgIG5hbWU6XCJcIixcclxuICAgICAgICBidG5UZXh0Olwi6ams5LiK5Lmw5YWlXCJcclxuICAgICAgfSxcclxuICAgICAgcHJvZHVjdEpQOntcclxuICAgICAgICBpY29uOicuLi9zdGF0aWMvaW1nL0pQLnBuZycsXHJcbiAgICAgICAgdGl0bGU6XCLnsr7lk4HmjqjojZBcIixcclxuICAgICAgICBtb3JlOlwi5pu05aSaXCIsXHJcbiAgICAgICAgbW9yZUljb246Jy4uL3N0YXRpYy9pbWcvbW9yZS5wbmcnLFxyXG4gICAgICAgIGNoYXJhY3RlcmlzdGljOlwiXCIsXHJcbiAgICAgICAgbWluUHJpY2U6XCJcIixcclxuICAgICAgICBuYW1lOlwiXCIsXHJcbiAgICAgICAgYnRuVGV4dDpcIueBq+eDreaKoui0reS4rVwiLFxyXG4gICAgICAgIHRvcDpcIi4uL3N0YXRpYy9pbWcvYmFja2dyb3VuZF90b3AucG5nXCIsXHJcbiAgICAgICAgYm90dG9tOlwiLi4vc3RhdGljL2ltZy9iYWNrZ3JvdW5kX2JvdHRvbS5wbmdcIlxyXG4gICAgICB9LFxyXG4gICAgICBwcm9kdWN0czpbXVxyXG4gICAgfVxyXG5cclxuICAgIGV2ZW50cyA9IHtcclxuICAgICAgXHJcbiAgICB9XHJcbiAgICBjb21wdXRlZCA9IHtcclxuXHJcbiAgICB9XHJcbiAgICBvblNob3coKXtcclxuXHJcbiAgICB9XHJcbiAgICBvblJlYWR5KCl7XHJcbiAgICAgIC8vIOiOt+WPlummlumhteWVhuWTgeWIl+ihqFxyXG4gICAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG4gICAgICBfQVBJLkdvb2RzTGlzdCh7ZGF0YTp7cGFnZTozLHBhZ2VTaXplOjV9fSwoZGF0YSk9PntcclxuICAgICAgICBjb25zb2xlLmxvZyhcIuWVhuWTgeWIl+ihqFwiLGRhdGEuZGF0YS5kYXRhKVxyXG4gICAgICAgIF90aGlzLnByb2R1Y3ROcCA9IE9iamVjdC5hc3NpZ24oX3RoaXMucHJvZHVjdE5QLGRhdGEuZGF0YS5kYXRhLnNsaWNlKDAsMSlbMF0pO1xyXG4gICAgICAgIF90aGlzLnByb2R1Y3RKUCA9IE9iamVjdC5hc3NpZ24oX3RoaXMucHJvZHVjdEpQLGRhdGEuZGF0YS5kYXRhLnNsaWNlKDEsMilbMF0pO1xyXG4gICAgICAgIF90aGlzLnByb2R1Y3RzID0gZGF0YS5kYXRhLmRhdGEuc2xpY2UoMik7XHJcbiAgICAgICAgX3RoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coX3RoaXMucHJvZHVjdE5QKVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgbGV0IF90aGlzID0gdGhpcztcclxuICAgICAgX0FQSS5CYW5uZXIoe30sKGRhdGEpPT57XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJiYW5uZXLlm77kv6Hmga9cIixkYXRhLmRhdGEuZGF0YSlcclxuICAgICAgICBfdGhpcy5iYW5uZXIgPSBkYXRhLmRhdGEuZGF0YTtcclxuICAgICAgICBfdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICBcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcbiJdfQ==