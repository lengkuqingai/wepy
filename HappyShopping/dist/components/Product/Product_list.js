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

var List = function (_wepy$component) {
    _inherits(List, _wepy$component);

    function List() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, List);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = List.__proto__ || Object.getPrototypeOf(List)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
            productList: {
                type: Object,
                default: []
            },
            imgWidth: {
                type: String,
                default: ''
            }
        }, _this.data = {
            col1: [],
            col2: [],
            col1H: 0,
            col2H: 0
        }, _this.events = {
            'clean': function clean() {
                console.log('清除啦');
                _this.col1 = [];
                _this.col2 = [];
                _this.col1H = 0;
                _this.col2H = 0;
            }
        }, _this.methods = {
            onImageLoad: function onImageLoad(e) {
                var col1H = this.col1H;
                var col2H = this.col2H;
                var imageId = e.currentTarget.id;
                var oImgW = e.detail.width;
                var oImgH = e.detail.height;
                var imgWidth = this.imgWidth;
                var scale = imgWidth / oImgW;
                var imgHeight = oImgH * scale;
                var images = this.productList;
                var imageObj = {};
                images.forEach(function (v) {
                    if (v.id == imageId) {
                        imageObj = v;
                    }
                });
                imageObj.height = imgHeight;
                var loadingCount = this.loadingCount - 1;
                var col1 = this.col1;
                var col2 = this.col2;
                if (col1H <= col2H) {
                    col1H += imgHeight;
                    col1.push(imageObj);
                } else {
                    col2H += imgHeight;
                    col2.push(imageObj);
                }
                this.col1 = col1, this.col2 = col2, this.col1H = col1H, this.col2H = col2H, this.$apply();
            },
            GoToDetail: function GoToDetail(id) {
                console.log("id", id);
                wx.navigateTo({
                    url: '../../GoodsDetail?id=' + id
                });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return List;
}(_wepy2.default.component);

exports.default = List;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlByb2R1Y3RfbGlzdC5qcyJdLCJuYW1lcyI6WyJMaXN0IiwicHJvcHMiLCJwcm9kdWN0TGlzdCIsInR5cGUiLCJPYmplY3QiLCJkZWZhdWx0IiwiaW1nV2lkdGgiLCJTdHJpbmciLCJkYXRhIiwiY29sMSIsImNvbDIiLCJjb2wxSCIsImNvbDJIIiwiZXZlbnRzIiwiY29uc29sZSIsImxvZyIsIm1ldGhvZHMiLCJvbkltYWdlTG9hZCIsImUiLCJpbWFnZUlkIiwiY3VycmVudFRhcmdldCIsImlkIiwib0ltZ1ciLCJkZXRhaWwiLCJ3aWR0aCIsIm9JbWdIIiwiaGVpZ2h0Iiwic2NhbGUiLCJpbWdIZWlnaHQiLCJpbWFnZXMiLCJpbWFnZU9iaiIsImZvckVhY2giLCJ2IiwibG9hZGluZ0NvdW50IiwicHVzaCIsIiRhcHBseSIsIkdvVG9EZXRhaWwiLCJ3eCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDSTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxJOzs7Ozs7Ozs7Ozs7OztzTEFDakJDLEssR0FBUTtBQUNKQyx5QkFBWTtBQUNSQyxzQkFBS0MsTUFERztBQUVSQyx5QkFBUTtBQUZBLGFBRFI7QUFLSkMsc0JBQVM7QUFDTEgsc0JBQUtJLE1BREE7QUFFTEYseUJBQVE7QUFGSDtBQUxMLFMsUUFVUkcsSSxHQUFPO0FBQ0hDLGtCQUFNLEVBREg7QUFFSEMsa0JBQU0sRUFGSDtBQUdIQyxtQkFBTyxDQUhKO0FBSUhDLG1CQUFPO0FBSkosUyxRQU9QQyxNLEdBQVM7QUFDTCxxQkFBUSxpQkFBSTtBQUNSQyx3QkFBUUMsR0FBUixDQUFZLEtBQVo7QUFDQSxzQkFBS04sSUFBTCxHQUFVLEVBQVY7QUFDQSxzQkFBS0MsSUFBTCxHQUFVLEVBQVY7QUFDQSxzQkFBS0MsS0FBTCxHQUFXLENBQVg7QUFDQSxzQkFBS0MsS0FBTCxHQUFXLENBQVg7QUFDSDtBQVBJLFMsUUFTVEksTyxHQUFVO0FBQ05DLHVCQURNLHVCQUNNQyxDQUROLEVBQ1E7QUFDVixvQkFBSVAsUUFBUSxLQUFLQSxLQUFqQjtBQUNBLG9CQUFJQyxRQUFRLEtBQUtBLEtBQWpCO0FBQ0Esb0JBQUlPLFVBQVFELEVBQUVFLGFBQUYsQ0FBZ0JDLEVBQTVCO0FBQ0Esb0JBQUlDLFFBQU1KLEVBQUVLLE1BQUYsQ0FBU0MsS0FBbkI7QUFDQSxvQkFBSUMsUUFBTVAsRUFBRUssTUFBRixDQUFTRyxNQUFuQjtBQUNBLG9CQUFJcEIsV0FBUyxLQUFLQSxRQUFsQjtBQUNBLG9CQUFJcUIsUUFBTXJCLFdBQVNnQixLQUFuQjtBQUNBLG9CQUFJTSxZQUFVSCxRQUFNRSxLQUFwQjtBQUNBLG9CQUFJRSxTQUFPLEtBQUszQixXQUFoQjtBQUNBLG9CQUFJNEIsV0FBUyxFQUFiO0FBQ0FELHVCQUFPRSxPQUFQLENBQWUsYUFBRztBQUNkLHdCQUFHQyxFQUFFWCxFQUFGLElBQU1GLE9BQVQsRUFBaUI7QUFDYlcsbUNBQVNFLENBQVQ7QUFDSDtBQUNKLGlCQUpEO0FBS0FGLHlCQUFTSixNQUFULEdBQWtCRSxTQUFsQjtBQUNBLG9CQUFJSyxlQUFjLEtBQUtBLFlBQUwsR0FBa0IsQ0FBcEM7QUFDQSxvQkFBSXhCLE9BQU8sS0FBS0EsSUFBaEI7QUFDQSxvQkFBSUMsT0FBTyxLQUFLQSxJQUFoQjtBQUNBLG9CQUFHQyxTQUFPQyxLQUFWLEVBQWdCO0FBQ1pELDZCQUFPaUIsU0FBUDtBQUNBbkIseUJBQUt5QixJQUFMLENBQVVKLFFBQVY7QUFDSCxpQkFIRCxNQUdLO0FBQ0RsQiw2QkFBT2dCLFNBQVA7QUFDQWxCLHlCQUFLd0IsSUFBTCxDQUFVSixRQUFWO0FBQ0g7QUFDRCxxQkFBS3JCLElBQUwsR0FBVUEsSUFBVixFQUNBLEtBQUtDLElBQUwsR0FBVUEsSUFEVixFQUVBLEtBQUtDLEtBQUwsR0FBV0EsS0FGWCxFQUdBLEtBQUtDLEtBQUwsR0FBV0EsS0FIWCxFQUlBLEtBQUt1QixNQUFMLEVBSkE7QUFLSCxhQWpDSztBQWtDTkMsc0JBbENNLHNCQWtDS2YsRUFsQ0wsRUFrQ1E7QUFDWlAsd0JBQVFDLEdBQVIsQ0FBWSxJQUFaLEVBQWlCTSxFQUFqQjtBQUNBZ0IsbUJBQUdDLFVBQUgsQ0FBYztBQUNaQyxtREFBNEJsQjtBQURoQixpQkFBZDtBQUdEO0FBdkNLLFM7Ozs7RUEzQm9CLGVBQUttQixTOztrQkFBbEJ4QyxJIiwiZmlsZSI6IlByb2R1Y3RfbGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3QgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XHJcbiAgICAgICAgcHJvcHMgPSB7XHJcbiAgICAgICAgICAgIHByb2R1Y3RMaXN0OntcclxuICAgICAgICAgICAgICAgIHR5cGU6T2JqZWN0LFxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpbXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpbWdXaWR0aDp7XHJcbiAgICAgICAgICAgICAgICB0eXBlOlN0cmluZyxcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6JydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBkYXRhID0ge1xyXG4gICAgICAgICAgICBjb2wxOiBbXSxcclxuICAgICAgICAgICAgY29sMjogW10sXHJcbiAgICAgICAgICAgIGNvbDFIOiAwLFxyXG4gICAgICAgICAgICBjb2wySDogMCxcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgZXZlbnRzID0ge1xyXG4gICAgICAgICAgICAnY2xlYW4nOigpPT57XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5riF6Zmk5ZWmJylcclxuICAgICAgICAgICAgICAgIHRoaXMuY29sMT1bXTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29sMj1bXTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29sMUg9MDtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29sMkg9MDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBtZXRob2RzID0ge1xyXG4gICAgICAgICAgICBvbkltYWdlTG9hZChlKXtcclxuICAgICAgICAgICAgICAgIGxldCBjb2wxSCA9IHRoaXMuY29sMUg7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29sMkggPSB0aGlzLmNvbDJIO1xyXG4gICAgICAgICAgICAgICAgbGV0IGltYWdlSWQ9ZS5jdXJyZW50VGFyZ2V0LmlkO1xyXG4gICAgICAgICAgICAgICAgbGV0IG9JbWdXPWUuZGV0YWlsLndpZHRoO1xyXG4gICAgICAgICAgICAgICAgbGV0IG9JbWdIPWUuZGV0YWlsLmhlaWdodDsgXHJcbiAgICAgICAgICAgICAgICBsZXQgaW1nV2lkdGg9dGhpcy5pbWdXaWR0aDtcclxuICAgICAgICAgICAgICAgIGxldCBzY2FsZT1pbWdXaWR0aC9vSW1nVztcclxuICAgICAgICAgICAgICAgIGxldCBpbWdIZWlnaHQ9b0ltZ0gqc2NhbGU7XHJcbiAgICAgICAgICAgICAgICBsZXQgaW1hZ2VzPXRoaXMucHJvZHVjdExpc3Q7XHJcbiAgICAgICAgICAgICAgICBsZXQgaW1hZ2VPYmo9e307XHJcbiAgICAgICAgICAgICAgICBpbWFnZXMuZm9yRWFjaCh2PT57XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodi5pZD09aW1hZ2VJZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlT2JqPXY7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGltYWdlT2JqLmhlaWdodCA9IGltZ0hlaWdodDtcclxuICAgICAgICAgICAgICAgIGxldCBsb2FkaW5nQ291bnQgPXRoaXMubG9hZGluZ0NvdW50LTE7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29sMSA9IHRoaXMuY29sMTtcclxuICAgICAgICAgICAgICAgIGxldCBjb2wyID0gdGhpcy5jb2wyO1xyXG4gICAgICAgICAgICAgICAgaWYoY29sMUg8PWNvbDJIKXtcclxuICAgICAgICAgICAgICAgICAgICBjb2wxSCs9aW1nSGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbDEucHVzaChpbWFnZU9iaik7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBjb2wySCs9aW1nSGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbDIucHVzaChpbWFnZU9iaik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbDE9Y29sMSxcclxuICAgICAgICAgICAgICAgIHRoaXMuY29sMj1jb2wyLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb2wxSD1jb2wxSCxcclxuICAgICAgICAgICAgICAgIHRoaXMuY29sMkg9Y29sMkgsXHJcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBHb1RvRGV0YWlsKGlkKXtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImlkXCIsaWQpO1xyXG4gICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICAgICAgdXJsOmAuLi8uLi9Hb29kc0RldGFpbD9pZD0ke2lkfWAsXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuIl19