'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _http = require('./../utils/http.js');

var _http2 = _interopRequireDefault(_http);

var _until = require('./../utils/until.js');

var _until2 = _interopRequireDefault(_until);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 获取商品详情
function GoodDetail(options, callback) {
    var httpObj = Object.assign(options, { url: "/shop/goods/detail" });
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
exports.default = GoodDetail;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkdvb2RzRGV0YWlscy5qcyJdLCJuYW1lcyI6WyJHb29kRGV0YWlsIiwib3B0aW9ucyIsImNhbGxiYWNrIiwiaHR0cE9iaiIsIk9iamVjdCIsImFzc2lnbiIsInVybCIsInRoZW4iLCJyZXMiLCJkYXRhIiwiY29kZSIsIlNob3dNb2RhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0FBQ0E7QUFDQSxTQUFTQSxVQUFULENBQW9CQyxPQUFwQixFQUE0QkMsUUFBNUIsRUFBcUM7QUFDakMsUUFBSUMsVUFBVUMsT0FBT0MsTUFBUCxDQUFjSixPQUFkLEVBQXNCLEVBQUNLLEtBQUksb0JBQUwsRUFBdEIsQ0FBZDtBQUNBLHdCQUFNSCxPQUFOLEVBQWVJLElBQWYsQ0FBb0IsZUFBSztBQUNyQixZQUFHQyxJQUFJQyxJQUFKLENBQVNDLElBQVQsS0FBZ0IsQ0FBbkIsRUFBcUI7QUFDakIsNEJBQU1DLFNBQU4sQ0FBZ0JILElBQUlDLElBQUosQ0FBU0MsSUFBekI7QUFDSCxTQUZELE1BRUs7QUFDRCxnQkFBSSxPQUFPUixRQUFQLElBQW1CLFVBQXZCLEVBQWtDO0FBQzlCQSx5QkFBU00sR0FBVDtBQUNIO0FBQ0o7QUFDSixLQVJEO0FBU0g7a0JBQ2NSLFUiLCJmaWxlIjoiR29vZHNEZXRhaWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF9IdHRwIGZyb20gJy4uL3V0aWxzL2h0dHAuanMnXHJcbmltcG9ydCBfVXRpbCBmcm9tICcuLi91dGlscy91bnRpbC5qcydcclxuLy8g6I635Y+W5ZWG5ZOB6K+m5oOFXHJcbmZ1bmN0aW9uIEdvb2REZXRhaWwob3B0aW9ucyxjYWxsYmFjayl7XHJcbiAgICBsZXQgaHR0cE9iaiA9IE9iamVjdC5hc3NpZ24ob3B0aW9ucyx7dXJsOlwiL3Nob3AvZ29vZHMvZGV0YWlsXCJ9KTtcclxuICAgIF9IdHRwKGh0dHBPYmopLnRoZW4ocmVzPT57XHJcbiAgICAgICAgaWYocmVzLmRhdGEuY29kZSE9PTApe1xyXG4gICAgICAgICAgICBfVXRpbC5TaG93TW9kYWwocmVzLmRhdGEuY29kZSlcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgaWYoIHR5cGVvZiBjYWxsYmFjayA9PSAnZnVuY3Rpb24nKXtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKHJlcylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgR29vZERldGFpbDsiXX0=