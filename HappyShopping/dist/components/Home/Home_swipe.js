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

        var _temp, _this2, _ret;

        _classCallCheck(this, Swipe);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = Swipe.__proto__ || Object.getPrototypeOf(Swipe)).call.apply(_ref, [this].concat(args))), _this2), _this2.props = {
            banner: {
                type: Object,
                default: []
            },
            swipe_height: {
                type: String,
                default: ""
            }
        }, _this2.data = {
            config: {
                indicatorDots: true,
                circular: true,
                autoplay: true
            }
        }, _this2.methods = {
            Imgload: function Imgload(e) {
                var _this = this;
                var scale = e.detail.width / e.detail.height;
                wx.getSystemInfo({
                    success: function success(res) {
                        _this.swipe_height = res.windowWidth / scale;
                    }
                });
            }
        }, _this2.computed = {}, _temp), _possibleConstructorReturn(_this2, _ret);
    }

    return Swipe;
}(_wepy2.default.component);

exports.default = Swipe;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkhvbWVfc3dpcGUuanMiXSwibmFtZXMiOlsiU3dpcGUiLCJwcm9wcyIsImJhbm5lciIsInR5cGUiLCJPYmplY3QiLCJkZWZhdWx0Iiwic3dpcGVfaGVpZ2h0IiwiU3RyaW5nIiwiZGF0YSIsImNvbmZpZyIsImluZGljYXRvckRvdHMiLCJjaXJjdWxhciIsImF1dG9wbGF5IiwibWV0aG9kcyIsIkltZ2xvYWQiLCJlIiwiX3RoaXMiLCJzY2FsZSIsImRldGFpbCIsIndpZHRoIiwiaGVpZ2h0Iiwid3giLCJnZXRTeXN0ZW1JbmZvIiwic3VjY2VzcyIsInJlcyIsIndpbmRvd1dpZHRoIiwiY29tcHV0ZWQiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDSTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7OzJMQUNqQkMsSyxHQUFRO0FBQ0pDLG9CQUFPO0FBQ0hDLHNCQUFLQyxNQURGO0FBRUhDLHlCQUFRO0FBRkwsYUFESDtBQUtKQywwQkFBYTtBQUNUSCxzQkFBS0ksTUFESTtBQUVURix5QkFBUTtBQUZDO0FBTFQsUyxTQVVSRyxJLEdBQU87QUFDSEMsb0JBQU87QUFDSEMsK0JBQWMsSUFEWDtBQUVIQywwQkFBUyxJQUZOO0FBR0hDLDBCQUFTO0FBSE47QUFESixTLFNBT1BDLE8sR0FBVTtBQUNOQyxtQkFETSxtQkFDRUMsQ0FERixFQUNJO0FBQ04sb0JBQUlDLFFBQVEsSUFBWjtBQUNBLG9CQUFJQyxRQUFRRixFQUFFRyxNQUFGLENBQVNDLEtBQVQsR0FBZUosRUFBRUcsTUFBRixDQUFTRSxNQUFwQztBQUNBQyxtQkFBR0MsYUFBSCxDQUFpQjtBQUNiQywyQkFEYSxtQkFDTEMsR0FESyxFQUNEO0FBQ1JSLDhCQUFNVixZQUFOLEdBQW1Ca0IsSUFBSUMsV0FBSixHQUFnQlIsS0FBbkM7QUFDSDtBQUhZLGlCQUFqQjtBQUtIO0FBVEssUyxTQVdWUyxRLEdBQVcsRTs7OztFQTdCb0IsZUFBS0MsUzs7a0JBQW5CM0IsSyIsImZpbGUiOiJIb21lX3N3aXBlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gICAgaW1wb3J0IF9VbnRpbCBmcm9tICcuLi8uLi91dGlscy91bnRpbC5qcydcclxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFN3aXBlIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xyXG4gICAgICAgIHByb3BzID0ge1xyXG4gICAgICAgICAgICBiYW5uZXI6e1xyXG4gICAgICAgICAgICAgICAgdHlwZTpPYmplY3QsXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OltdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN3aXBlX2hlaWdodDp7XHJcbiAgICAgICAgICAgICAgICB0eXBlOlN0cmluZyxcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XCJcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRhdGEgPSB7XHJcbiAgICAgICAgICAgIGNvbmZpZzp7XHJcbiAgICAgICAgICAgICAgICBpbmRpY2F0b3JEb3RzOnRydWUsXHJcbiAgICAgICAgICAgICAgICBjaXJjdWxhcjp0cnVlLFxyXG4gICAgICAgICAgICAgICAgYXV0b3BsYXk6dHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgICAgICAgIEltZ2xvYWQoZSl7XHJcbiAgICAgICAgICAgICAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgbGV0IHNjYWxlID0gZS5kZXRhaWwud2lkdGgvZS5kZXRhaWwuaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgd3guZ2V0U3lzdGVtSW5mbyh7XHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhyZXMpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5zd2lwZV9oZWlnaHQ9cmVzLndpbmRvd1dpZHRoL3NjYWxlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29tcHV0ZWQgPSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuIl19