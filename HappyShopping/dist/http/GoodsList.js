'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _http = require('./../utils/http.js');

var _http2 = _interopRequireDefault(_http);

var _until = require('./../utils/until.js');

var _until2 = _interopRequireDefault(_until);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 获取商品列表
function GoodList(options, callback) {
    var httpObj = Object.assign(options, { url: "/shop/goods/list" });
    (0, _http2.default)(httpObj).then(function (res) {
        if (res.data.code !== 0) {
            _until2.default.ShowModal(res.data.code);
        } else {
            if (typeof callback == 'function') {
                callback(res);
            }
        }
    });
}
exports.default = GoodList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkdvb2RzTGlzdC5qcyJdLCJuYW1lcyI6WyJHb29kTGlzdCIsIm9wdGlvbnMiLCJjYWxsYmFjayIsImh0dHBPYmoiLCJPYmplY3QiLCJhc3NpZ24iLCJ1cmwiLCJ0aGVuIiwicmVzIiwiZGF0YSIsImNvZGUiLCJTaG93TW9kYWwiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztBQUNBO0FBQ0EsU0FBU0EsUUFBVCxDQUFrQkMsT0FBbEIsRUFBMEJDLFFBQTFCLEVBQW1DO0FBQy9CLFFBQUlDLFVBQVVDLE9BQU9DLE1BQVAsQ0FBY0osT0FBZCxFQUFzQixFQUFDSyxLQUFJLGtCQUFMLEVBQXRCLENBQWQ7QUFDQSx3QkFBTUgsT0FBTixFQUFlSSxJQUFmLENBQW9CLGVBQUs7QUFDckIsWUFBR0MsSUFBSUMsSUFBSixDQUFTQyxJQUFULEtBQWdCLENBQW5CLEVBQXFCO0FBQ2pCLDRCQUFNQyxTQUFOLENBQWdCSCxJQUFJQyxJQUFKLENBQVNDLElBQXpCO0FBQ0gsU0FGRCxNQUVLO0FBQ0QsZ0JBQUksT0FBT1IsUUFBUCxJQUFtQixVQUF2QixFQUFrQztBQUM5QkEseUJBQVNNLEdBQVQ7QUFDSDtBQUNKO0FBQ0osS0FSRDtBQVNIO2tCQUNjUixRIiwiZmlsZSI6Ikdvb2RzTGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfSHR0cCBmcm9tICcuLi91dGlscy9odHRwLmpzJ1xyXG5pbXBvcnQgX1V0aWwgZnJvbSAnLi4vdXRpbHMvdW50aWwuanMnXHJcbi8vIOiOt+WPluWVhuWTgeWIl+ihqFxyXG5mdW5jdGlvbiBHb29kTGlzdChvcHRpb25zLGNhbGxiYWNrKXtcclxuICAgIGxldCBodHRwT2JqID0gT2JqZWN0LmFzc2lnbihvcHRpb25zLHt1cmw6XCIvc2hvcC9nb29kcy9saXN0XCJ9KTtcclxuICAgIF9IdHRwKGh0dHBPYmopLnRoZW4ocmVzPT57XHJcbiAgICAgICAgaWYocmVzLmRhdGEuY29kZSE9PTApe1xyXG4gICAgICAgICAgICBfVXRpbC5TaG93TW9kYWwocmVzLmRhdGEuY29kZSlcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgaWYoIHR5cGVvZiBjYWxsYmFjayA9PSAnZnVuY3Rpb24nKXtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKHJlcylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgR29vZExpc3Q7Il19