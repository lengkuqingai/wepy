'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _api = require('./../http/api.js');

var _api2 = _interopRequireDefault(_api);

var _GoodDetail_Img = require('./../components/GoodsDetail/GoodDetail_Img.js');

var _GoodDetail_Img2 = _interopRequireDefault(_GoodDetail_Img);

var _GoodDetail_btn = require('./../components/GoodsDetail/GoodDetail_btn.js');

var _GoodDetail_btn2 = _interopRequireDefault(_GoodDetail_btn);

var _GoodDetail_basicInfo = require('./../components/GoodsDetail/GoodDetail_basicInfo.js');

var _GoodDetail_basicInfo2 = _interopRequireDefault(_GoodDetail_basicInfo);

var _GoodDetail_list = require('./../components/GoodsDetail/GoodDetail_list.js');

var _GoodDetail_list2 = _interopRequireDefault(_GoodDetail_list);

var _GoodDetail_evaluate = require('./../components/GoodsDetail/GoodDetail_evaluate.js');

var _GoodDetail_evaluate2 = _interopRequireDefault(_GoodDetail_evaluate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GoodDetail = function (_wepy$page) {
    _inherits(GoodDetail, _wepy$page);

    function GoodDetail() {
        var _ref;

        var _temp, _this2, _ret;

        _classCallCheck(this, GoodDetail);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = GoodDetail.__proto__ || Object.getPrototypeOf(GoodDetail)).call.apply(_ref, [this].concat(args))), _this2), _this2.data = {
            ImgList: [],
            basic: {},
            reputation: [],
            Specifications: [{
                name: "选择规格和尺寸"
            }, {
                name: "产品参数"
            }]
        }, _this2.$repeat = {}, _this2.$props = { "Img": { "xmlns:v-bind": "", "v-bind:banner.sync": "ImgList" }, "BasicInfo": { "v-bind:basic.sync": "basic" }, "List": { "v-bind:clasic.sync": "Specifications" }, "Evaluate": { "v-bind:reputation.sync": "reputation" } }, _this2.$events = {}, _this2.components = {
            Img: _GoodDetail_Img2.default,
            Btn: _GoodDetail_btn2.default,
            BasicInfo: _GoodDetail_basicInfo2.default,
            List: _GoodDetail_list2.default,
            Evaluate: _GoodDetail_evaluate2.default
        }, _temp), _possibleConstructorReturn(_this2, _ret);
    }

    _createClass(GoodDetail, [{
        key: 'onLoad',
        value: function onLoad(param, data) {
            var id = param.id;
            var _this = this;
            _api2.default.GoodDetail({ data: { id: id } }, function (res) {
                console.log("商品详情", res.data.data);
                var good = res.data.data;
                _this.ImgList = good.pics;
                _this.basic = _extends({}, good.basicInfo, good.properties);
                _this.$apply();
            });
            _api2.default.Evaluate({ data: { goodsId: id } }, function (res) {
                console.log("商品评价", res.data.data);
                var data = res.data.data;
                _this.reputation = data;
            });
        }
    }, {
        key: 'onShareAppMessage',
        value: function onShareAppMessage() {
            return {
                title: '产品详情',
                path: '/pages/GoodsDetail?id=4466'
            };
        }
    }]);

    return GoodDetail;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(GoodDetail , 'pages/GoodsDetail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkdvb2RzRGV0YWlsLmpzIl0sIm5hbWVzIjpbIkdvb2REZXRhaWwiLCJkYXRhIiwiSW1nTGlzdCIsImJhc2ljIiwicmVwdXRhdGlvbiIsIlNwZWNpZmljYXRpb25zIiwibmFtZSIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsIkltZyIsIkJ0biIsIkJhc2ljSW5mbyIsIkxpc3QiLCJFdmFsdWF0ZSIsInBhcmFtIiwiaWQiLCJfdGhpcyIsImNvbnNvbGUiLCJsb2ciLCJyZXMiLCJnb29kIiwicGljcyIsImJhc2ljSW5mbyIsInByb3BlcnRpZXMiLCIkYXBwbHkiLCJnb29kc0lkIiwidGl0bGUiLCJwYXRoIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDSTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxVOzs7Ozs7Ozs7Ozs7OztxTUFDakJDLEksR0FBTztBQUNIQyxxQkFBUSxFQURMO0FBRUhDLG1CQUFNLEVBRkg7QUFHSEMsd0JBQVcsRUFIUjtBQUlIQyw0QkFBZSxDQUNYO0FBQ0lDLHNCQUFLO0FBRFQsYUFEVyxFQUlYO0FBQ0lBLHNCQUFLO0FBRFQsYUFKVztBQUpaLFMsU0FhUkMsTyxHQUFVLEUsU0FDakJDLE0sR0FBUyxFQUFDLE9BQU0sRUFBQyxnQkFBZSxFQUFoQixFQUFtQixzQkFBcUIsU0FBeEMsRUFBUCxFQUEwRCxhQUFZLEVBQUMscUJBQW9CLE9BQXJCLEVBQXRFLEVBQW9HLFFBQU8sRUFBQyxzQkFBcUIsZ0JBQXRCLEVBQTNHLEVBQW1KLFlBQVcsRUFBQywwQkFBeUIsWUFBMUIsRUFBOUosRSxTQUNUQyxPLEdBQVUsRSxTQUNUQyxVLEdBQWE7QUFDRkMseUNBREU7QUFFRkMseUNBRkU7QUFHRkMscURBSEU7QUFJRkMsMkNBSkU7QUFLRkM7QUFMRSxTOzs7OzsrQkFPQ0MsSyxFQUFNZixJLEVBQUs7QUFDZCxnQkFBSWdCLEtBQUdELE1BQU1DLEVBQWI7QUFDQSxnQkFBSUMsUUFBTyxJQUFYO0FBQ0EsMEJBQUtsQixVQUFMLENBQWdCLEVBQUNDLE1BQUssRUFBQ2dCLElBQUdBLEVBQUosRUFBTixFQUFoQixFQUErQixlQUFLO0FBQ2hDRSx3QkFBUUMsR0FBUixDQUFZLE1BQVosRUFBbUJDLElBQUlwQixJQUFKLENBQVNBLElBQTVCO0FBQ0Esb0JBQUlxQixPQUFPRCxJQUFJcEIsSUFBSixDQUFTQSxJQUFwQjtBQUNBaUIsc0JBQU1oQixPQUFOLEdBQWVvQixLQUFLQyxJQUFwQjtBQUNBTCxzQkFBTWYsS0FBTixnQkFBa0JtQixLQUFLRSxTQUF2QixFQUFvQ0YsS0FBS0csVUFBekM7QUFDQVAsc0JBQU1RLE1BQU47QUFDSCxhQU5EO0FBT0EsMEJBQUtYLFFBQUwsQ0FBYyxFQUFDZCxNQUFLLEVBQUMwQixTQUFRVixFQUFULEVBQU4sRUFBZCxFQUFrQyxlQUFLO0FBQ25DRSx3QkFBUUMsR0FBUixDQUFZLE1BQVosRUFBbUJDLElBQUlwQixJQUFKLENBQVNBLElBQTVCO0FBQ0Esb0JBQUlBLE9BQU9vQixJQUFJcEIsSUFBSixDQUFTQSxJQUFwQjtBQUNBaUIsc0JBQU1kLFVBQU4sR0FBbUJILElBQW5CO0FBQ0gsYUFKRDtBQUtIOzs7NENBQ2tCO0FBQ2YsbUJBQU87QUFDSDJCLHVCQUFPLE1BREo7QUFFSEMsc0JBQU07QUFGSCxhQUFQO0FBSUg7Ozs7RUE3Q21DLGVBQUtDLEk7O2tCQUF4QjlCLFUiLCJmaWxlIjoiR29vZHNEZXRhaWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgICBpbXBvcnQgX0FQSSBmcm9tICcuLi9odHRwL2FwaS5qcydcclxuICAgIGltcG9ydCBJbWcgZnJvbSAnLi4vY29tcG9uZW50cy9Hb29kc0RldGFpbC9Hb29kRGV0YWlsX0ltZydcclxuICAgIGltcG9ydCBCdG4gZnJvbSAnLi4vY29tcG9uZW50cy9Hb29kc0RldGFpbC9Hb29kRGV0YWlsX2J0bicgIFxyXG4gICAgaW1wb3J0IEJhc2ljSW5mbyBmcm9tICcuLi9jb21wb25lbnRzL0dvb2RzRGV0YWlsL0dvb2REZXRhaWxfYmFzaWNJbmZvJyAgXHJcbiAgICBpbXBvcnQgTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL0dvb2RzRGV0YWlsL0dvb2REZXRhaWxfbGlzdCcgIFxyXG4gICAgaW1wb3J0IEV2YWx1YXRlIGZyb20gJy4uL2NvbXBvbmVudHMvR29vZHNEZXRhaWwvR29vZERldGFpbF9ldmFsdWF0ZScgICAgICAgICAgICAgICAgICBcclxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEdvb2REZXRhaWwgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgICAgIGRhdGEgPSB7XHJcbiAgICAgICAgICAgIEltZ0xpc3Q6W10sXHJcbiAgICAgICAgICAgIGJhc2ljOnt9LFxyXG4gICAgICAgICAgICByZXB1dGF0aW9uOltdLFxyXG4gICAgICAgICAgICBTcGVjaWZpY2F0aW9uczpbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTpcIumAieaLqeinhOagvOWSjOWwuuWvuFwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6XCLkuqflk4Hlj4LmlbBcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfVxyXG4gICAgICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJJbWdcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOmJhbm5lci5zeW5jXCI6XCJJbWdMaXN0XCJ9LFwiQmFzaWNJbmZvXCI6e1widi1iaW5kOmJhc2ljLnN5bmNcIjpcImJhc2ljXCJ9LFwiTGlzdFwiOntcInYtYmluZDpjbGFzaWMuc3luY1wiOlwiU3BlY2lmaWNhdGlvbnNcIn0sXCJFdmFsdWF0ZVwiOntcInYtYmluZDpyZXB1dGF0aW9uLnN5bmNcIjpcInJlcHV0YXRpb25cIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xyXG4gICAgICAgICAgICBJbWc6SW1nLFxyXG4gICAgICAgICAgICBCdG46QnRuLFxyXG4gICAgICAgICAgICBCYXNpY0luZm86QmFzaWNJbmZvLFxyXG4gICAgICAgICAgICBMaXN0Okxpc3QsXHJcbiAgICAgICAgICAgIEV2YWx1YXRlOkV2YWx1YXRlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9uTG9hZChwYXJhbSxkYXRhKXtcclxuICAgICAgICAgICAgbGV0IGlkPXBhcmFtLmlkO1xyXG4gICAgICAgICAgICBsZXQgX3RoaXMgPXRoaXM7XHJcbiAgICAgICAgICAgIF9BUEkuR29vZERldGFpbCh7ZGF0YTp7aWQ6aWR9fSxyZXM9PntcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5ZWG5ZOB6K+m5oOFXCIscmVzLmRhdGEuZGF0YSlcclxuICAgICAgICAgICAgICAgIGxldCBnb29kID0gcmVzLmRhdGEuZGF0YTtcclxuICAgICAgICAgICAgICAgIF90aGlzLkltZ0xpc3QgPWdvb2QucGljcztcclxuICAgICAgICAgICAgICAgIF90aGlzLmJhc2ljID0gey4uLmdvb2QuYmFzaWNJbmZvLC4uLmdvb2QucHJvcGVydGllc307XHJcbiAgICAgICAgICAgICAgICBfdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIF9BUEkuRXZhbHVhdGUoe2RhdGE6e2dvb2RzSWQ6aWR9fSxyZXM9PntcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5ZWG5ZOB6K+E5Lu3XCIscmVzLmRhdGEuZGF0YSlcclxuICAgICAgICAgICAgICAgIGxldCBkYXRhID0gcmVzLmRhdGEuZGF0YTtcclxuICAgICAgICAgICAgICAgIF90aGlzLnJlcHV0YXRpb24gPSBkYXRhO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBvblNoYXJlQXBwTWVzc2FnZSgpe1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICfkuqflk4Hor6bmg4UnLFxyXG4gICAgICAgICAgICAgICAgcGF0aDogJy9wYWdlcy9Hb29kc0RldGFpbD9pZD00NDY2JyxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuIl19