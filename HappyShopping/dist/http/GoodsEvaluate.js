'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _http = require('./../utils/http.js');

var _http2 = _interopRequireDefault(_http);

var _until = require('./../utils/until.js');

var _until2 = _interopRequireDefault(_until);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 获取商品评价
function Evaluate(options, callback) {
    var httpObj = Object.assign(options, { url: "/shop/goods/reputation" });
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
exports.default = Evaluate;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkdvb2RzRXZhbHVhdGUuanMiXSwibmFtZXMiOlsiRXZhbHVhdGUiLCJvcHRpb25zIiwiY2FsbGJhY2siLCJodHRwT2JqIiwiT2JqZWN0IiwiYXNzaWduIiwidXJsIiwidGhlbiIsInJlcyIsImRhdGEiLCJjb2RlIiwiU2hvd01vZGFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7QUFDQTtBQUNBLFNBQVNBLFFBQVQsQ0FBa0JDLE9BQWxCLEVBQTBCQyxRQUExQixFQUFtQztBQUMvQixRQUFJQyxVQUFVQyxPQUFPQyxNQUFQLENBQWNKLE9BQWQsRUFBc0IsRUFBQ0ssS0FBSSx3QkFBTCxFQUF0QixDQUFkO0FBQ0Esd0JBQU1ILE9BQU4sRUFBZUksSUFBZixDQUFvQixlQUFLO0FBQ3JCLFlBQUdDLElBQUlDLElBQUosQ0FBU0MsSUFBVCxLQUFnQixDQUFuQixFQUFxQjtBQUNqQiw0QkFBTUMsU0FBTixDQUFnQkgsSUFBSUMsSUFBSixDQUFTQyxJQUF6QjtBQUNILFNBRkQsTUFFSztBQUNELGdCQUFJLE9BQU9SLFFBQVAsSUFBbUIsVUFBdkIsRUFBa0M7QUFDOUJBLHlCQUFTTSxHQUFUO0FBQ0g7QUFDSjtBQUNKLEtBUkQ7QUFTSDtrQkFDY1IsUSIsImZpbGUiOiJHb29kc0V2YWx1YXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF9IdHRwIGZyb20gJy4uL3V0aWxzL2h0dHAuanMnXHJcbmltcG9ydCBfVXRpbCBmcm9tICcuLi91dGlscy91bnRpbC5qcydcclxuLy8g6I635Y+W5ZWG5ZOB6K+E5Lu3XHJcbmZ1bmN0aW9uIEV2YWx1YXRlKG9wdGlvbnMsY2FsbGJhY2spe1xyXG4gICAgbGV0IGh0dHBPYmogPSBPYmplY3QuYXNzaWduKG9wdGlvbnMse3VybDpcIi9zaG9wL2dvb2RzL3JlcHV0YXRpb25cIn0pO1xyXG4gICAgX0h0dHAoaHR0cE9iaikudGhlbihyZXM9PntcclxuICAgICAgICBpZihyZXMuZGF0YS5jb2RlIT09MCl7XHJcbiAgICAgICAgICAgIF9VdGlsLlNob3dNb2RhbChyZXMuZGF0YS5jb2RlKVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBpZiggdHlwZW9mIGNhbGxiYWNrID09ICdmdW5jdGlvbicpe1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2socmVzKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5leHBvcnQgZGVmYXVsdCBFdmFsdWF0ZTsiXX0=