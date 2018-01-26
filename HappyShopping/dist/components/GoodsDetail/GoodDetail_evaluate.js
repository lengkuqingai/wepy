'use strict';

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

var Evaluate = function (_wepy$component) {
    _inherits(Evaluate, _wepy$component);

    function Evaluate() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Evaluate);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Evaluate.__proto__ || Object.getPrototypeOf(Evaluate)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
            reputation: {
                type: Object,
                default: []
            }
        }, _this.methods = {
            GoToAll: function GoToAll() {
                // wx.navigateTo({url:'../../Reputation'})
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Evaluate;
}(_wepy2.default.component);

exports.default = Evaluate;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkdvb2REZXRhaWxfZXZhbHVhdGUuanMiXSwibmFtZXMiOlsiRXZhbHVhdGUiLCJwcm9wcyIsInJlcHV0YXRpb24iLCJ0eXBlIiwiT2JqZWN0IiwiZGVmYXVsdCIsIm1ldGhvZHMiLCJHb1RvQWxsIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0k7Ozs7Ozs7Ozs7OztJQUNxQkEsUTs7Ozs7Ozs7Ozs7Ozs7OExBQ2pCQyxLLEdBQVE7QUFDSkMsd0JBQVc7QUFDUEMsc0JBQUtDLE1BREU7QUFFUEMseUJBQVE7QUFGRDtBQURQLFMsUUFNUkMsTyxHQUFVO0FBQ05DLG1CQURNLHFCQUNHO0FBQ0w7QUFDSDtBQUhLLFM7Ozs7RUFQd0IsZUFBS0MsUzs7a0JBQXRCUixRIiwiZmlsZSI6Ikdvb2REZXRhaWxfZXZhbHVhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBFdmFsdWF0ZSBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcclxuICAgICAgICBwcm9wcyA9IHtcclxuICAgICAgICAgICAgcmVwdXRhdGlvbjp7XHJcbiAgICAgICAgICAgICAgICB0eXBlOk9iamVjdCxcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6W11cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBtZXRob2RzID0ge1xyXG4gICAgICAgICAgICBHb1RvQWxsKCl7XHJcbiAgICAgICAgICAgICAgICAvLyB3eC5uYXZpZ2F0ZVRvKHt1cmw6Jy4uLy4uL1JlcHV0YXRpb24nfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuIl19