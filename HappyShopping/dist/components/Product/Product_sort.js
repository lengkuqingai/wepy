"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Sort = function (_wepy$component) {
    _inherits(Sort, _wepy$component);

    function Sort() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Sort);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Sort.__proto__ || Object.getPrototypeOf(Sort)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
            sortClass: {
                type: String,
                default: "priceUp",
                twoWay: true
            }
        }, _this.data = {
            sortBy: [1, 0]
        }, _this.methods = {
            setSort: function setSort(num) {
                if (num == 0) {
                    if (this.sortBy[0] != 1) {
                        this.sortBy = [1, 0];
                        this.sortClass = "priceUp";
                    } else {
                        this.sortBy = [2, 0];
                        this.sortClass = "priceDown";
                    }
                } else if (num == 1) {
                    if (this.sortBy[1] != 1) {
                        this.sortBy = [0, 1];
                        this.sortClass = "ordersUp";
                    } else {
                        this.sortBy = [0, 2];
                        this.sortClass = "ordersDown";
                    }
                }
            }
        }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Sort;
}(_wepy2.default.component);

exports.default = Sort;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlByb2R1Y3Rfc29ydC5qcyJdLCJuYW1lcyI6WyJTb3J0IiwicHJvcHMiLCJzb3J0Q2xhc3MiLCJ0eXBlIiwiU3RyaW5nIiwiZGVmYXVsdCIsInR3b1dheSIsImRhdGEiLCJzb3J0QnkiLCJtZXRob2RzIiwic2V0U29ydCIsIm51bSIsImV2ZW50cyIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJOzs7Ozs7Ozs7Ozs7SUFDcUJBLEk7Ozs7Ozs7Ozs7Ozs7O3NMQUNqQkMsSyxHQUFRO0FBQ0pDLHVCQUFVO0FBQ05DLHNCQUFLQyxNQURDO0FBRU5DLHlCQUFRLFNBRkY7QUFHTkMsd0JBQU87QUFIRDtBQUROLFMsUUFPUkMsSSxHQUFPO0FBQ0hDLG9CQUFPLENBQUMsQ0FBRCxFQUFHLENBQUg7QUFESixTLFFBR1BDLE8sR0FBVTtBQUNOQyxtQkFETSxtQkFDRUMsR0FERixFQUNNO0FBQ1Isb0JBQUdBLE9BQUssQ0FBUixFQUFVO0FBQ04sd0JBQUcsS0FBS0gsTUFBTCxDQUFZLENBQVosS0FBZ0IsQ0FBbkIsRUFBcUI7QUFDakIsNkJBQUtBLE1BQUwsR0FBWSxDQUFDLENBQUQsRUFBRyxDQUFILENBQVo7QUFDQSw2QkFBS04sU0FBTCxHQUFlLFNBQWY7QUFDSCxxQkFIRCxNQUdLO0FBQ0QsNkJBQUtNLE1BQUwsR0FBWSxDQUFDLENBQUQsRUFBRyxDQUFILENBQVo7QUFDQSw2QkFBS04sU0FBTCxHQUFlLFdBQWY7QUFDSDtBQUNKLGlCQVJELE1BUU0sSUFBR1MsT0FBSyxDQUFSLEVBQVU7QUFDWix3QkFBRyxLQUFLSCxNQUFMLENBQVksQ0FBWixLQUFnQixDQUFuQixFQUFxQjtBQUNqQiw2QkFBS0EsTUFBTCxHQUFZLENBQUMsQ0FBRCxFQUFHLENBQUgsQ0FBWjtBQUNBLDZCQUFLTixTQUFMLEdBQWUsVUFBZjtBQUNILHFCQUhELE1BR0s7QUFDRCw2QkFBS00sTUFBTCxHQUFZLENBQUMsQ0FBRCxFQUFHLENBQUgsQ0FBWjtBQUNBLDZCQUFLTixTQUFMLEdBQWUsWUFBZjtBQUNIO0FBQ0o7QUFDSjtBQW5CSyxTLFFBcUJWVSxNLEdBQVMsRTs7OztFQWhDcUIsZUFBS0MsUzs7a0JBQWxCYixJIiwiZmlsZSI6IlByb2R1Y3Rfc29ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFNvcnQgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XHJcbiAgICAgICAgcHJvcHMgPSB7XHJcbiAgICAgICAgICAgIHNvcnRDbGFzczp7XHJcbiAgICAgICAgICAgICAgICB0eXBlOlN0cmluZyxcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XCJwcmljZVVwXCIsXHJcbiAgICAgICAgICAgICAgICB0d29XYXk6dHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRhdGEgPSB7XHJcbiAgICAgICAgICAgIHNvcnRCeTpbMSwwXVxyXG4gICAgICAgIH1cclxuICAgICAgICBtZXRob2RzID0ge1xyXG4gICAgICAgICAgICBzZXRTb3J0KG51bSl7XHJcbiAgICAgICAgICAgICAgICBpZihudW09PTApe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuc29ydEJ5WzBdIT0xKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zb3J0Qnk9WzEsMF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc29ydENsYXNzPVwicHJpY2VVcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc29ydEJ5PVsyLDBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNvcnRDbGFzcz1cInByaWNlRG93blwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfWVsc2UgaWYobnVtPT0xKXtcclxuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLnNvcnRCeVsxXSE9MSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc29ydEJ5PVswLDFdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNvcnRDbGFzcz1cIm9yZGVyc1VwXCJcclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zb3J0Qnk9WzAsMl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc29ydENsYXNzPVwib3JkZXJzRG93blwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGV2ZW50cyA9IHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4iXX0=