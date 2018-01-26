'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _until = require('./../../utils/until.js');

var _until2 = _interopRequireDefault(_until);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Swipe = function (_wepy$component) {
    _inherits(Swipe, _wepy$component);

    function Swipe() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Swipe);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Swipe.__proto__ || Object.getPrototypeOf(Swipe)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
            product: {
                type: Object,
                default: {}
            },
            products: {
                type: Object,
                default: []
            }
        }, _this.data = {}, _this.methods = {
            GoToProductList: function GoToProductList() {
                wx.switchTab({
                    url: 'ProductList'
                });
            },
            GoToDetail: function GoToDetail(id) {
                console.log("id", id);
                wx.navigateTo({
                    url: '../../GoodsDetail?id=' + id
                });
            }
        }, _this.computed = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Swipe;
}(_wepy2.default.component);

exports.default = Swipe;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkhvbWVfUHJvZHVjdHMuanMiXSwibmFtZXMiOlsiU3dpcGUiLCJwcm9wcyIsInByb2R1Y3QiLCJ0eXBlIiwiT2JqZWN0IiwiZGVmYXVsdCIsInByb2R1Y3RzIiwiZGF0YSIsIm1ldGhvZHMiLCJHb1RvUHJvZHVjdExpc3QiLCJ3eCIsInN3aXRjaFRhYiIsInVybCIsIkdvVG9EZXRhaWwiLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJuYXZpZ2F0ZVRvIiwiY29tcHV0ZWQiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDSTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O3dMQUNqQkMsSyxHQUFRO0FBQ0pDLHFCQUFRO0FBQ0pDLHNCQUFLQyxNQUREO0FBRUpDLHlCQUFRO0FBRkosYUFESjtBQUtKQyxzQkFBUztBQUNMSCxzQkFBS0MsTUFEQTtBQUVMQyx5QkFBUTtBQUZIO0FBTEwsUyxRQVVSRSxJLEdBQU8sRSxRQUdQQyxPLEdBQVU7QUFDTkMsMkJBRE0sNkJBQ1c7QUFDYkMsbUJBQUdDLFNBQUgsQ0FBYTtBQUNUQyx5QkFBSztBQURJLGlCQUFiO0FBR0gsYUFMSztBQU1OQyxzQkFOTSxzQkFNS0MsRUFOTCxFQU1RO0FBQ1pDLHdCQUFRQyxHQUFSLENBQVksSUFBWixFQUFpQkYsRUFBakI7QUFDQUosbUJBQUdPLFVBQUgsQ0FBYztBQUNaTCxtREFBNEJFO0FBRGhCLGlCQUFkO0FBR0Q7QUFYSyxTLFFBYVZJLFEsR0FBVyxFOzs7O0VBM0JvQixlQUFLQyxTOztrQkFBbkJuQixLIiwiZmlsZSI6IkhvbWVfUHJvZHVjdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgICBpbXBvcnQgX1VudGlsIGZyb20gJy4uLy4uL3V0aWxzL3VudGlsLmpzJ1xyXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3dpcGUgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XHJcbiAgICAgICAgcHJvcHMgPSB7XHJcbiAgICAgICAgICAgIHByb2R1Y3Q6e1xyXG4gICAgICAgICAgICAgICAgdHlwZTpPYmplY3QsXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0Ont9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHByb2R1Y3RzOntcclxuICAgICAgICAgICAgICAgIHR5cGU6T2JqZWN0LFxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpbXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRhdGEgPSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBtZXRob2RzID0ge1xyXG4gICAgICAgICAgICBHb1RvUHJvZHVjdExpc3QoKXtcclxuICAgICAgICAgICAgICAgIHd4LnN3aXRjaFRhYih7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnUHJvZHVjdExpc3QnLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgR29Ub0RldGFpbChpZCl7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJpZFwiLGlkKTtcclxuICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgICAgIHVybDpgLi4vLi4vR29vZHNEZXRhaWw/aWQ9JHtpZH1gLFxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29tcHV0ZWQgPSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuIl19