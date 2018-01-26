'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _http = require('./../utils/http.js');

var _http2 = _interopRequireDefault(_http);

var _until = require('./../utils/until.js');

var _until2 = _interopRequireDefault(_until);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 获取banner图信息
function Banner(options, callback) {
    var httpObj = Object.assign(options, { url: "/banner/list" });
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
exports.default = Banner;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJhbm5lci5qcyJdLCJuYW1lcyI6WyJCYW5uZXIiLCJvcHRpb25zIiwiY2FsbGJhY2siLCJodHRwT2JqIiwiT2JqZWN0IiwiYXNzaWduIiwidXJsIiwidGhlbiIsInJlcyIsImRhdGEiLCJjb2RlIiwiU2hvd01vZGFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7QUFDQTtBQUNBLFNBQVNBLE1BQVQsQ0FBZ0JDLE9BQWhCLEVBQXdCQyxRQUF4QixFQUFpQztBQUM3QixRQUFJQyxVQUFVQyxPQUFPQyxNQUFQLENBQWNKLE9BQWQsRUFBc0IsRUFBQ0ssS0FBSSxjQUFMLEVBQXRCLENBQWQ7QUFDQSx3QkFBTUgsT0FBTixFQUFlSSxJQUFmLENBQW9CLGVBQUs7QUFDckIsWUFBR0MsSUFBSUMsSUFBSixDQUFTQyxJQUFULEtBQWdCLENBQW5CLEVBQXFCO0FBQ2pCLDRCQUFNQyxTQUFOLENBQWdCSCxJQUFJQyxJQUFKLENBQVNDLElBQXpCO0FBQ0gsU0FGRCxNQUVLO0FBQ0QsZ0JBQUksT0FBT1IsUUFBUCxJQUFtQixVQUF2QixFQUFrQztBQUM5QkEseUJBQVNNLEdBQVQ7QUFDSDtBQUNKO0FBQ0osS0FSRDtBQVNIO2tCQUNjUixNIiwiZmlsZSI6IkJhbm5lci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfSHR0cCBmcm9tICcuLi91dGlscy9odHRwLmpzJ1xyXG5pbXBvcnQgX1V0aWwgZnJvbSAnLi4vdXRpbHMvdW50aWwuanMnXHJcbi8vIOiOt+WPlmJhbm5lcuWbvuS/oeaBr1xyXG5mdW5jdGlvbiBCYW5uZXIob3B0aW9ucyxjYWxsYmFjayl7XHJcbiAgICBsZXQgaHR0cE9iaiA9IE9iamVjdC5hc3NpZ24ob3B0aW9ucyx7dXJsOlwiL2Jhbm5lci9saXN0XCJ9KTtcclxuICAgIF9IdHRwKGh0dHBPYmopLnRoZW4ocmVzPT57XHJcbiAgICAgICAgaWYocmVzLmRhdGEuY29kZSE9PTApe1xyXG4gICAgICAgICAgICBfVXRpbC5TaG93TW9kYWwocmVzLmRhdGEuY29kZSlcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgaWYoIHR5cGVvZiBjYWxsYmFjayA9PSAnZnVuY3Rpb24nKXtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKHJlcylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQmFubmVyOyJdfQ==