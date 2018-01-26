'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _Product_sort = require('./../components/Product/Product_sort.js');

var _Product_sort2 = _interopRequireDefault(_Product_sort);

var _Product_list = require('./../components/Product/Product_list.js');

var _Product_list2 = _interopRequireDefault(_Product_list);

var _api = require('./../http/api.js');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProductList = function (_wepy$page) {
    _inherits(ProductList, _wepy$page);

    function ProductList() {
        var _ref;

        var _temp, _this2, _ret;

        _classCallCheck(this, ProductList);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = ProductList.__proto__ || Object.getPrototypeOf(ProductList)).call.apply(_ref, [this].concat(args))), _this2), _this2.config = {
            navigationBarTitleText: '欢乐购'
        }, _this2.$repeat = {}, _this2.$props = { "Sort": { "xmlns:v-bind": "", "v-bind:sortClass.sync": "sortClass" }, "List": { "v-bind:productList.sync": "productList", "v-bind:imgWidth.sync": "imgWidth" } }, _this2.$events = {}, _this2.components = {
            Sort: _Product_sort2.default,
            List: _Product_list2.default
        }, _this2.data = {
            sortBy: [1, 0],
            sortClass: "priceUp",
            // 动态传给子组件时，必须提前在data里面声明
            productList: [],
            imgWidth: '',
            page: 2
        }, _this2.methods = {}, _this2.watch = {
            sortClass: function sortClass(after, before) {
                this.page = 2;
                var _this = this;
                _api2.default.GoodsList({ data: { page: _this.page, pageSize: 20, orderBy: after } }, function (data) {
                    _this.productList = data.data.data;
                    _this.$apply();
                    console.log('\u5546\u54C1\u6309\u7167' + after + '\u6392\u5E8F', _this.productList);
                });
                _this.$broadcast('clean');
            }
        }, _temp), _possibleConstructorReturn(_this2, _ret);
    }

    _createClass(ProductList, [{
        key: 'onShow',
        value: function onShow() {}
    }, {
        key: 'onLoad',
        value: function onLoad() {
            var _this = this;
            _api2.default.GoodsList({ data: { page: _this.page, pageSize: 20, orderBy: this.sortClass } }, function (data) {
                console.log('\u9ED8\u8BA4\u4EF7\u683C\u5347\u5E8F\u6392\u5E8F', data.data.data);
                _this.productList = data.data.data;
                _this.$apply();
            });
            // 获取系统信息
            wx.getSystemInfo({
                success: function success(res) {
                    var ww = res.windowWidth;
                    var wh = res.windowHeight;
                    var imgWidth = ww * 0.45;
                    _this.imgWidth = imgWidth;
                    _this.$apply();
                }
            });
        }
    }, {
        key: 'onReachBottom',
        value: function onReachBottom() {
            console.log("加载更多~~~");
            var _this = this;
            _this.page++;
            _api2.default.GoodsList({ data: { page: _this.page, pageSize: 20, orderBy: this.sortClass } }, function (data) {
                console.log('\u9ED8\u8BA4\u4EF7\u683C\u5347\u5E8F\u6392\u5E8F', data.data.data);
                _this.productList = data.data.data;
                _this.$apply();
            });
        }
    }]);

    return ProductList;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(ProductList , 'pages/ProductList'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlByb2R1Y3RMaXN0LmpzIl0sIm5hbWVzIjpbIlByb2R1Y3RMaXN0IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsIlNvcnQiLCJMaXN0IiwiZGF0YSIsInNvcnRCeSIsInNvcnRDbGFzcyIsInByb2R1Y3RMaXN0IiwiaW1nV2lkdGgiLCJwYWdlIiwibWV0aG9kcyIsIndhdGNoIiwiYWZ0ZXIiLCJiZWZvcmUiLCJfdGhpcyIsIkdvb2RzTGlzdCIsInBhZ2VTaXplIiwib3JkZXJCeSIsIiRhcHBseSIsImNvbnNvbGUiLCJsb2ciLCIkYnJvYWRjYXN0Iiwid3giLCJnZXRTeXN0ZW1JbmZvIiwic3VjY2VzcyIsInJlcyIsInd3Iiwid2luZG93V2lkdGgiLCJ3aCIsIndpbmRvd0hlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsVzs7Ozs7Ozs7Ozs7Ozs7dU1BQ2pCQyxNLEdBQVM7QUFDTEMsb0NBQXdCO0FBRG5CLFMsU0FHVkMsTyxHQUFVLEUsU0FDakJDLE0sR0FBUyxFQUFDLFFBQU8sRUFBQyxnQkFBZSxFQUFoQixFQUFtQix5QkFBd0IsV0FBM0MsRUFBUixFQUFnRSxRQUFPLEVBQUMsMkJBQTBCLGFBQTNCLEVBQXlDLHdCQUF1QixVQUFoRSxFQUF2RSxFLFNBQ1RDLE8sR0FBVSxFLFNBQ1RDLFUsR0FBYTtBQUNGQyx3Q0FERTtBQUVGQztBQUZFLFMsU0FJTkMsSSxHQUFPO0FBQ0hDLG9CQUFPLENBQUMsQ0FBRCxFQUFHLENBQUgsQ0FESjtBQUVIQyx1QkFBVSxTQUZQO0FBR0g7QUFDQUMseUJBQVksRUFKVDtBQUtIQyxzQkFBUyxFQUxOO0FBTUhDLGtCQUFLO0FBTkYsUyxTQVFQQyxPLEdBQVUsRSxTQUdWQyxLLEdBQVE7QUFDSkwscUJBREkscUJBQ01NLEtBRE4sRUFDWUMsTUFEWixFQUNtQjtBQUNuQixxQkFBS0osSUFBTCxHQUFZLENBQVo7QUFDQSxvQkFBSUssUUFBUSxJQUFaO0FBQ0EsOEJBQUtDLFNBQUwsQ0FBZSxFQUFDWCxNQUFLLEVBQUNLLE1BQUtLLE1BQU1MLElBQVosRUFBaUJPLFVBQVMsRUFBMUIsRUFBNkJDLFNBQVFMLEtBQXJDLEVBQU4sRUFBZixFQUFrRSxVQUFDUixJQUFELEVBQVE7QUFDdEVVLDBCQUFNUCxXQUFOLEdBQW9CSCxLQUFLQSxJQUFMLENBQVVBLElBQTlCO0FBQ0FVLDBCQUFNSSxNQUFOO0FBQ0FDLDRCQUFRQyxHQUFSLDhCQUFtQlIsS0FBbkIsbUJBQTZCRSxNQUFNUCxXQUFuQztBQUNILGlCQUpEO0FBS0FPLHNCQUFNTyxVQUFOLENBQWlCLE9BQWpCO0FBQ0g7QUFWRyxTOzs7OztpQ0FZQSxDQUVQOzs7aUNBQ087QUFDSixnQkFBSVAsUUFBUSxJQUFaO0FBQ0EsMEJBQUtDLFNBQUwsQ0FBZSxFQUFDWCxNQUFLLEVBQUNLLE1BQUtLLE1BQU1MLElBQVosRUFBaUJPLFVBQVMsRUFBMUIsRUFBNkJDLFNBQVEsS0FBS1gsU0FBMUMsRUFBTixFQUFmLEVBQTJFLFVBQUNGLElBQUQsRUFBUTtBQUMvRWUsd0JBQVFDLEdBQVIscURBQXVCaEIsS0FBS0EsSUFBTCxDQUFVQSxJQUFqQztBQUNBVSxzQkFBTVAsV0FBTixHQUFvQkgsS0FBS0EsSUFBTCxDQUFVQSxJQUE5QjtBQUNBVSxzQkFBTUksTUFBTjtBQUNILGFBSkQ7QUFLQTtBQUNBSSxlQUFHQyxhQUFILENBQWlCO0FBQ2JDLHlCQUFTLGlCQUFDQyxHQUFELEVBQVM7QUFDZCx3QkFBSUMsS0FBS0QsSUFBSUUsV0FBYjtBQUNBLHdCQUFJQyxLQUFLSCxJQUFJSSxZQUFiO0FBQ0Esd0JBQUlyQixXQUFXa0IsS0FBSyxJQUFwQjtBQUNBWiwwQkFBTU4sUUFBTixHQUFlQSxRQUFmO0FBQ0FNLDBCQUFNSSxNQUFOO0FBQ0g7QUFQWSxhQUFqQjtBQVNIOzs7d0NBQ2M7QUFDWEMsb0JBQVFDLEdBQVIsQ0FBWSxTQUFaO0FBQ0EsZ0JBQUlOLFFBQVEsSUFBWjtBQUNBQSxrQkFBTUwsSUFBTjtBQUNBLDBCQUFLTSxTQUFMLENBQWUsRUFBQ1gsTUFBSyxFQUFDSyxNQUFLSyxNQUFNTCxJQUFaLEVBQWlCTyxVQUFTLEVBQTFCLEVBQTZCQyxTQUFRLEtBQUtYLFNBQTFDLEVBQU4sRUFBZixFQUEyRSxVQUFDRixJQUFELEVBQVE7QUFDL0VlLHdCQUFRQyxHQUFSLHFEQUF1QmhCLEtBQUtBLElBQUwsQ0FBVUEsSUFBakM7QUFDQVUsc0JBQU1QLFdBQU4sR0FBb0JILEtBQUtBLElBQUwsQ0FBVUEsSUFBOUI7QUFDQVUsc0JBQU1JLE1BQU47QUFDSCxhQUpEO0FBS0g7Ozs7RUFoRW9DLGVBQUtULEk7O2tCQUF6QmQsVyIsImZpbGUiOiJQcm9kdWN0TGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuICAgIGltcG9ydCBTb3J0IGZyb20gJy4uL2NvbXBvbmVudHMvUHJvZHVjdC9Qcm9kdWN0X3NvcnQnXHJcbiAgICBpbXBvcnQgTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL1Byb2R1Y3QvUHJvZHVjdF9saXN0J1xyXG4gICAgaW1wb3J0IF9BUEkgZnJvbSAnLi4vaHR0cC9hcGkuanMnXHJcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0TGlzdCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICAgICAgY29uZmlnID0ge1xyXG4gICAgICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5qyi5LmQ6LStJ1xyXG4gICAgICAgIH1cclxuICAgICAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiU29ydFwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6c29ydENsYXNzLnN5bmNcIjpcInNvcnRDbGFzc1wifSxcIkxpc3RcIjp7XCJ2LWJpbmQ6cHJvZHVjdExpc3Quc3luY1wiOlwicHJvZHVjdExpc3RcIixcInYtYmluZDppbWdXaWR0aC5zeW5jXCI6XCJpbWdXaWR0aFwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XHJcbiAgICAgICAgICAgIFNvcnQ6U29ydCxcclxuICAgICAgICAgICAgTGlzdDpMaXN0XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRhdGEgPSB7XHJcbiAgICAgICAgICAgIHNvcnRCeTpbMSwwXSxcclxuICAgICAgICAgICAgc29ydENsYXNzOlwicHJpY2VVcFwiLFxyXG4gICAgICAgICAgICAvLyDliqjmgIHkvKDnu5nlrZDnu4Tku7bml7bvvIzlv4Xpobvmj5DliY3lnKhkYXRh6YeM6Z2i5aOw5piOXHJcbiAgICAgICAgICAgIHByb2R1Y3RMaXN0OltdLFxyXG4gICAgICAgICAgICBpbWdXaWR0aDonJyxcclxuICAgICAgICAgICAgcGFnZToyXHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1ldGhvZHMgPSB7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICB3YXRjaCA9IHtcclxuICAgICAgICAgICAgc29ydENsYXNzKGFmdGVyLGJlZm9yZSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2UgPSAyO1xyXG4gICAgICAgICAgICAgICAgbGV0IF90aGlzID0gdGhpcztcclxuICAgICAgICAgICAgICAgIF9BUEkuR29vZHNMaXN0KHtkYXRhOntwYWdlOl90aGlzLnBhZ2UscGFnZVNpemU6MjAsb3JkZXJCeTphZnRlcn19LChkYXRhKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnByb2R1Y3RMaXN0ID0gZGF0YS5kYXRhLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYOWVhuWTgeaMieeFpyR7YWZ0ZXJ95o6S5bqPYCxfdGhpcy5wcm9kdWN0TGlzdClcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuJGJyb2FkY2FzdCgnY2xlYW4nKTsgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgb25TaG93KCl7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBvbkxvYWQoKXtcclxuICAgICAgICAgICAgbGV0IF90aGlzID0gdGhpcztcclxuICAgICAgICAgICAgX0FQSS5Hb29kc0xpc3Qoe2RhdGE6e3BhZ2U6X3RoaXMucGFnZSxwYWdlU2l6ZToyMCxvcmRlckJ5OnRoaXMuc29ydENsYXNzfX0sKGRhdGEpPT57XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhg6buY6K6k5Lu35qC85Y2H5bqP5o6S5bqPYCxkYXRhLmRhdGEuZGF0YSlcclxuICAgICAgICAgICAgICAgIF90aGlzLnByb2R1Y3RMaXN0ID0gZGF0YS5kYXRhLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLy8g6I635Y+W57O757uf5L+h5oGvXHJcbiAgICAgICAgICAgIHd4LmdldFN5c3RlbUluZm8oe1xyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB3dyA9IHJlcy53aW5kb3dXaWR0aDtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgd2ggPSByZXMud2luZG93SGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpbWdXaWR0aCA9IHd3ICogMC40NTtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5pbWdXaWR0aD1pbWdXaWR0aDtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgb25SZWFjaEJvdHRvbSgpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuWKoOi9veabtOWkmn5+flwiKTtcclxuICAgICAgICAgICAgbGV0IF90aGlzID0gdGhpcztcclxuICAgICAgICAgICAgX3RoaXMucGFnZSsrO1xyXG4gICAgICAgICAgICBfQVBJLkdvb2RzTGlzdCh7ZGF0YTp7cGFnZTpfdGhpcy5wYWdlLHBhZ2VTaXplOjIwLG9yZGVyQnk6dGhpcy5zb3J0Q2xhc3N9fSwoZGF0YSk9PntcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGDpu5jorqTku7fmoLzljYfluo/mjpLluo9gLGRhdGEuZGF0YS5kYXRhKVxyXG4gICAgICAgICAgICAgICAgX3RoaXMucHJvZHVjdExpc3QgPSBkYXRhLmRhdGEuZGF0YTtcclxuICAgICAgICAgICAgICAgIF90aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuIl19