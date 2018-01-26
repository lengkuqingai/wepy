'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _redux = require('./../utils/redux.js');

var _redux2 = _interopRequireDefault(_redux);

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _My_personal = require('./../components/My/My_personal.js');

var _My_personal2 = _interopRequireDefault(_My_personal);

var _My_list = require('./../components/My/My_list.js');

var _My_list2 = _interopRequireDefault(_My_list);

var _api = require('./../http/api.js');

var _api2 = _interopRequireDefault(_api);

var _until = require('./../utils/until.js');

var _until2 = _interopRequireDefault(_until);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var My = function (_wepy$page) {
    _inherits(My, _wepy$page);

    function My() {
        var _ref;

        var _temp, _this2, _ret;

        _classCallCheck(this, My);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = My.__proto__ || Object.getPrototypeOf(My)).call.apply(_ref, [this].concat(args))), _this2), _this2.data = {
            infos: '',
            userInfo: {},
            Top: "-210",
            transitionTime: '0',
            listOne: [{
                title: "全部订单",
                iconPath: "http://pic.suiyiyun.cn/597286/order.png",
                money: "0.00"
            }, {
                title: "账户余额",
                iconPath: "http://pic.suiyiyun.cn/597286/balance.png",
                money: "0.00"
            }, {
                title: "收获地址",
                iconPath: "http://pic.suiyiyun.cn/597286/address.png"
            }, {
                title: "我的积分",
                iconPath: "http://pic.suiyiyun.cn/597286/integral.png",
                money: "0.00"
            }],
            listTwo: [{
                title: "个人资料",
                iconPath: "http://pic.suiyiyun.cn/597286/data.png"
            }, {
                title: "设置",
                iconPath: "http://pic.suiyiyun.cn/597286/setUp.png"
            }]
        }, _this2.methods = {
            start: function start(e) {
                console.log("手指开始出发");
                this.transitionTime = "0";
                this.start = e.changedTouches[0].clientY;
            },
            move: function move(e) {
                console.log("手指正在移动！");
                this.Top = e.changedTouches[0].clientY - this.start;
            },
            end: function end(e) {
                console.log("手指离开了");
                this.transitionTime = "1";
                this.Top = "-210";
            }
        }, _this2.$repeat = {}, _this2.$props = { "Personal": { "xmlns:v-bind": "", "v-bind:userInfo.sync": "userInfo" }, "List1": { "v-bind:list.sync": "listOne" }, "List2": { "v-bind:list.sync": "listTwo" } }, _this2.$events = {}, _this2.components = {
            Personal: _My_personal2.default,
            List1: _My_list2.default,
            List2: _My_list2.default
        }, _temp), _possibleConstructorReturn(_this2, _ret);
    }

    _createClass(My, [{
        key: 'onLoad',
        value: function onLoad() {
            var _this = this;
            wx.login({
                success: function success() {
                    console.log("登录成功！");
                    wx.getUserInfo({
                        success: function success(res) {
                            _this.userInfo = JSON.parse(res.rawData);
                            _this.$apply();
                            console.log("获取用户信息成功！", _this.userInfo);
                        }
                    });
                }
            });
        }
    }]);

    return My;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(My , 'pages/My'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk15LmpzIl0sIm5hbWVzIjpbIk15IiwiZGF0YSIsImluZm9zIiwidXNlckluZm8iLCJUb3AiLCJ0cmFuc2l0aW9uVGltZSIsImxpc3RPbmUiLCJ0aXRsZSIsImljb25QYXRoIiwibW9uZXkiLCJsaXN0VHdvIiwibWV0aG9kcyIsInN0YXJ0IiwiZSIsImNvbnNvbGUiLCJsb2ciLCJjaGFuZ2VkVG91Y2hlcyIsImNsaWVudFkiLCJtb3ZlIiwiZW5kIiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiUGVyc29uYWwiLCJMaXN0MSIsIkxpc3QyIiwiX3RoaXMiLCJ3eCIsImxvZ2luIiwic3VjY2VzcyIsImdldFVzZXJJbmZvIiwicmVzIiwiSlNPTiIsInBhcnNlIiwicmF3RGF0YSIsIiRhcHBseSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxFOzs7Ozs7Ozs7Ozs7OztxTEFDakJDLEksR0FBTztBQUNIQyxtQkFBTSxFQURIO0FBRUhDLHNCQUFTLEVBRk47QUFHSEMsaUJBQUksTUFIRDtBQUlIQyw0QkFBZSxHQUpaO0FBS0hDLHFCQUFRLENBQ0o7QUFDSUMsdUJBQU0sTUFEVjtBQUVJQywwQkFBUyx5Q0FGYjtBQUdJQyx1QkFBTTtBQUhWLGFBREksRUFNSjtBQUNJRix1QkFBTSxNQURWO0FBRUlDLDBCQUFTLDJDQUZiO0FBR0lDLHVCQUFNO0FBSFYsYUFOSSxFQVdKO0FBQ0lGLHVCQUFNLE1BRFY7QUFFSUMsMEJBQVM7QUFGYixhQVhJLEVBZUo7QUFDSUQsdUJBQU0sTUFEVjtBQUVJQywwQkFBUyw0Q0FGYjtBQUdJQyx1QkFBTTtBQUhWLGFBZkksQ0FMTDtBQTBCSEMscUJBQVEsQ0FDSjtBQUNJSCx1QkFBTSxNQURWO0FBRUlDLDBCQUFTO0FBRmIsYUFESSxFQUtKO0FBQ0lELHVCQUFNLElBRFY7QUFFSUMsMEJBQVM7QUFGYixhQUxJO0FBMUJMLFMsU0FxQ1BHLE8sR0FBVTtBQUNOQyxpQkFETSxpQkFDQUMsQ0FEQSxFQUNFO0FBQ0pDLHdCQUFRQyxHQUFSLENBQVksUUFBWjtBQUNBLHFCQUFLVixjQUFMLEdBQW9CLEdBQXBCO0FBQ0EscUJBQUtPLEtBQUwsR0FBYUMsRUFBRUcsY0FBRixDQUFpQixDQUFqQixFQUFvQkMsT0FBakM7QUFDSCxhQUxLO0FBTU5DLGdCQU5NLGdCQU1ETCxDQU5DLEVBTUM7QUFDSEMsd0JBQVFDLEdBQVIsQ0FBWSxTQUFaO0FBQ0EscUJBQUtYLEdBQUwsR0FBV1MsRUFBRUcsY0FBRixDQUFpQixDQUFqQixFQUFvQkMsT0FBcEIsR0FBOEIsS0FBS0wsS0FBOUM7QUFDSCxhQVRLO0FBVU5PLGVBVk0sZUFVRk4sQ0FWRSxFQVVBO0FBQ0ZDLHdCQUFRQyxHQUFSLENBQVksT0FBWjtBQUNBLHFCQUFLVixjQUFMLEdBQW9CLEdBQXBCO0FBQ0EscUJBQUtELEdBQUwsR0FBVyxNQUFYO0FBQ0g7QUFkSyxTLFNBZ0JYZ0IsTyxHQUFVLEUsU0FDakJDLE0sR0FBUyxFQUFDLFlBQVcsRUFBQyxnQkFBZSxFQUFoQixFQUFtQix3QkFBdUIsVUFBMUMsRUFBWixFQUFrRSxTQUFRLEVBQUMsb0JBQW1CLFNBQXBCLEVBQTFFLEVBQXlHLFNBQVEsRUFBQyxvQkFBbUIsU0FBcEIsRUFBakgsRSxTQUNUQyxPLEdBQVUsRSxTQUNUQyxVLEdBQWE7QUFDRkMsMkNBREU7QUFFRkMsb0NBRkU7QUFHRkM7QUFIRSxTOzs7OztpQ0FLRTtBQUNKLGdCQUFJQyxRQUFRLElBQVo7QUFDQUMsZUFBR0MsS0FBSCxDQUFTO0FBQ0xDLHVCQURLLHFCQUNJO0FBQ0xoQiw0QkFBUUMsR0FBUixDQUFZLE9BQVo7QUFDQWEsdUJBQUdHLFdBQUgsQ0FBZTtBQUNYRCwrQkFEVyxtQkFDSEUsR0FERyxFQUNDO0FBQ1JMLGtDQUFNeEIsUUFBTixHQUFpQjhCLEtBQUtDLEtBQUwsQ0FBV0YsSUFBSUcsT0FBZixDQUFqQjtBQUNBUixrQ0FBTVMsTUFBTjtBQUNBdEIsb0NBQVFDLEdBQVIsQ0FBWSxXQUFaLEVBQXdCWSxNQUFNeEIsUUFBOUI7QUFDSDtBQUxVLHFCQUFmO0FBT0g7QUFWSSxhQUFUO0FBYUg7Ozs7RUE3RTJCLGVBQUtrQyxJOztrQkFBaEJyQyxFIiwiZmlsZSI6Ik15LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgICBpbXBvcnQgUmVkdXggZnJvbSAnLi4vdXRpbHMvcmVkdXguanMnXHJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gICAgaW1wb3J0IFBlcnNvbmFsIGZyb20gJy4uL2NvbXBvbmVudHMvTXkvTXlfcGVyc29uYWwnXHJcbiAgICBpbXBvcnQgTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL015L015X2xpc3QnICAgIFxyXG4gICAgaW1wb3J0IF9BUEkgZnJvbSAnLi4vaHR0cC9hcGkuanMnXHJcbiAgICBpbXBvcnQgX1VudGlsIGZyb20gJy4uL3V0aWxzL3VudGlsLmpzJ1xyXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXkgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgICAgIGRhdGEgPSB7XHJcbiAgICAgICAgICAgIGluZm9zOicnLFxyXG4gICAgICAgICAgICB1c2VySW5mbzp7fSxcclxuICAgICAgICAgICAgVG9wOlwiLTIxMFwiLFxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uVGltZTonMCcsXHJcbiAgICAgICAgICAgIGxpc3RPbmU6W1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOlwi5YWo6YOo6K6i5Y2VXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvblBhdGg6XCJodHRwOi8vcGljLnN1aXlpeXVuLmNuLzU5NzI4Ni9vcmRlci5wbmdcIixcclxuICAgICAgICAgICAgICAgICAgICBtb25leTpcIjAuMDBcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTpcIui0puaIt+S9meminVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGljb25QYXRoOlwiaHR0cDovL3BpYy5zdWl5aXl1bi5jbi81OTcyODYvYmFsYW5jZS5wbmdcIixcclxuICAgICAgICAgICAgICAgICAgICBtb25leTpcIjAuMDBcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTpcIuaUtuiOt+WcsOWdgFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGljb25QYXRoOlwiaHR0cDovL3BpYy5zdWl5aXl1bi5jbi81OTcyODYvYWRkcmVzcy5wbmdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTpcIuaIkeeahOenr+WIhlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGljb25QYXRoOlwiaHR0cDovL3BpYy5zdWl5aXl1bi5jbi81OTcyODYvaW50ZWdyYWwucG5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbW9uZXk6XCIwLjAwXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIGxpc3RUd286W1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOlwi5Liq5Lq66LWE5paZXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvblBhdGg6XCJodHRwOi8vcGljLnN1aXlpeXVuLmNuLzU5NzI4Ni9kYXRhLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOlwi6K6+572uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvblBhdGg6XCJodHRwOi8vcGljLnN1aXlpeXVuLmNuLzU5NzI4Ni9zZXRVcC5wbmdcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgICAgICAgIHN0YXJ0KGUpe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLmiYvmjIflvIDlp4vlh7rlj5FcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRyYW5zaXRpb25UaW1lPVwiMFwiO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydCA9IGUuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbW92ZShlKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5omL5oyH5q2j5Zyo56e75Yqo77yBXCIpXHJcbiAgICAgICAgICAgICAgICB0aGlzLlRvcCA9IGUuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WSAtIHRoaXMuc3RhcnQ7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVuZChlKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5omL5oyH56a75byA5LqGXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50cmFuc2l0aW9uVGltZT1cIjFcIjtcclxuICAgICAgICAgICAgICAgIHRoaXMuVG9wID0gXCItMjEwXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcIlBlcnNvbmFsXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDp1c2VySW5mby5zeW5jXCI6XCJ1c2VySW5mb1wifSxcIkxpc3QxXCI6e1widi1iaW5kOmxpc3Quc3luY1wiOlwibGlzdE9uZVwifSxcIkxpc3QyXCI6e1widi1iaW5kOmxpc3Quc3luY1wiOlwibGlzdFR3b1wifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XHJcbiAgICAgICAgICAgIFBlcnNvbmFsOlBlcnNvbmFsLFxyXG4gICAgICAgICAgICBMaXN0MTpMaXN0LFxyXG4gICAgICAgICAgICBMaXN0MjpMaXN0XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9uTG9hZCgpe1xyXG4gICAgICAgICAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgICAgICB3eC5sb2dpbih7XHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLnmbvlvZXmiJDlip/vvIFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgd3guZ2V0VXNlckluZm8oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKHJlcyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy51c2VySW5mbyA9IEpTT04ucGFyc2UocmVzLnJhd0RhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuiOt+WPlueUqOaIt+S/oeaBr+aIkOWKn++8gVwiLF90aGlzLnVzZXJJbmZvKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuIl19