"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _common = require('./common.js');

var _common2 = _interopRequireDefault(_common);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

// 项目请求封装
var Request = {
    baseUrl: "https://api.it120.cc/" + _common2.default.get("USER"),
    url: '',
    method: "",
    data: {},
    httpCommon: {
        header: {
            'Accept': _common2.default.get("HTTP_HEADERS_ACCEPT"),
            'Content-Type': _common2.default.get("HTTP_HEADERS_CONTENT_TYPE")
        },
        dataType: _common2.default.get("HTTP_RESPONSE_TYPE")
    },
    httpObj: function httpObj() {
        var httpObj = Object.assign(this.httpCommon, {
            url: this.baseUrl + this.url,
            method: this.method || "GET",
            data: this.data || {}
        });
        return httpObj;
    },
    connect: function connect() {
        var _this = this;

        var promiss = new Promise(function (resolve, reject) {
            wx.request(Object.assign(_this.httpObj(), {
                success: function success(res) {
                    return resolve(res);
                },
                fail: function fail(res) {
                    return reject(res);
                }
            }));
        });
        return promiss;
    }
};

// 添加请求传参拦截
var httpProxy = new Proxy(Request, {
    set: function set(target, key, value) {
        if (key == "url" && typeof value == "string" && /^\//.test(value)) {
            return Reflect.set(target, key, value);
        } else if (key == "data" && (typeof value === "undefined" ? "undefined" : _typeof(value)) == "object") {
            return Reflect.set(target, key, value);
        } else if (key == "method" && typeof value == "string") {
            return Reflect.set(target, key, value);
        }
    }
});
var _http = function _http(_ref) {
    var args = _objectWithoutProperties(_ref, []);

    for (var k in args) {
        if (args.hasOwnProperty(k) === true) {
            httpProxy[k] = args[k];
        }
    }
    return Request.connect();
};
exports.default = _http;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh0dHAuanMiXSwibmFtZXMiOlsiUmVxdWVzdCIsImJhc2VVcmwiLCJnZXQiLCJ1cmwiLCJtZXRob2QiLCJkYXRhIiwiaHR0cENvbW1vbiIsImhlYWRlciIsImRhdGFUeXBlIiwiaHR0cE9iaiIsIk9iamVjdCIsImFzc2lnbiIsImNvbm5lY3QiLCJwcm9taXNzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJ3eCIsInJlcXVlc3QiLCJzdWNjZXNzIiwicmVzIiwiZmFpbCIsImh0dHBQcm94eSIsIlByb3h5Iiwic2V0IiwidGFyZ2V0Iiwia2V5IiwidmFsdWUiLCJ0ZXN0IiwiUmVmbGVjdCIsIl9odHRwIiwiYXJncyIsImsiLCJoYXNPd25Qcm9wZXJ0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7QUFDQTtBQUNBLElBQU1BLFVBQVU7QUFDWkMsYUFBUSwwQkFBd0IsaUJBQVFDLEdBQVIsQ0FBWSxNQUFaLENBRHBCO0FBRVpDLFNBQUksRUFGUTtBQUdaQyxZQUFPLEVBSEs7QUFJWkMsVUFBSyxFQUpPO0FBS1pDLGdCQUFXO0FBQ1BDLGdCQUFPO0FBQ0gsc0JBQVMsaUJBQVFMLEdBQVIsQ0FBWSxxQkFBWixDQUROO0FBRUgsNEJBQWUsaUJBQVFBLEdBQVIsQ0FBWSwyQkFBWjtBQUZaLFNBREE7QUFLUE0sa0JBQVMsaUJBQVFOLEdBQVIsQ0FBWSxvQkFBWjtBQUxGLEtBTEM7QUFZWk8sV0FaWSxxQkFZSDtBQUNMLFlBQUlBLFVBQVFDLE9BQU9DLE1BQVAsQ0FBYyxLQUFLTCxVQUFuQixFQUE4QjtBQUN0Q0gsaUJBQUksS0FBS0YsT0FBTCxHQUFhLEtBQUtFLEdBRGdCO0FBRXRDQyxvQkFBTyxLQUFLQSxNQUFMLElBQWUsS0FGZ0I7QUFHdENDLGtCQUFLLEtBQUtBLElBQUwsSUFBYTtBQUhvQixTQUE5QixDQUFaO0FBS0EsZUFBT0ksT0FBUDtBQUNILEtBbkJXO0FBb0JaRyxXQXBCWSxxQkFvQkg7QUFBQTs7QUFDTCxZQUFJQyxVQUFVLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVNDLE1BQVQsRUFBa0I7QUFDeENDLGVBQUdDLE9BQUgsQ0FBV1IsT0FBT0MsTUFBUCxDQUFjLE1BQUtGLE9BQUwsRUFBZCxFQUE2QjtBQUNwQ1UseUJBQVEsaUJBQUNDLEdBQUQ7QUFBQSwyQkFBT0wsUUFBUUssR0FBUixDQUFQO0FBQUEsaUJBRDRCO0FBRXBDQyxzQkFBSyxjQUFDRCxHQUFEO0FBQUEsMkJBQU9KLE9BQU9JLEdBQVAsQ0FBUDtBQUFBO0FBRitCLGFBQTdCLENBQVg7QUFJSCxTQUxhLENBQWQ7QUFNQSxlQUFPUCxPQUFQO0FBQ0g7QUE1QlcsQ0FBaEI7O0FBK0JBO0FBQ0EsSUFBSVMsWUFBWSxJQUFJQyxLQUFKLENBQVV2QixPQUFWLEVBQWtCO0FBQzlCd0IsT0FEOEIsZUFDMUJDLE1BRDBCLEVBQ25CQyxHQURtQixFQUNmQyxLQURlLEVBQ1Q7QUFDakIsWUFBR0QsT0FBSyxLQUFMLElBQWEsT0FBT0MsS0FBUCxJQUFlLFFBQTVCLElBQXdDLE1BQU1DLElBQU4sQ0FBV0QsS0FBWCxDQUEzQyxFQUE2RDtBQUN6RCxtQkFBT0UsUUFBUUwsR0FBUixDQUFZQyxNQUFaLEVBQW1CQyxHQUFuQixFQUF1QkMsS0FBdkIsQ0FBUDtBQUNILFNBRkQsTUFFTSxJQUFHRCxPQUFLLE1BQUwsSUFBYyxRQUFPQyxLQUFQLHlDQUFPQSxLQUFQLE1BQWUsUUFBaEMsRUFBeUM7QUFDM0MsbUJBQU9FLFFBQVFMLEdBQVIsQ0FBWUMsTUFBWixFQUFtQkMsR0FBbkIsRUFBdUJDLEtBQXZCLENBQVA7QUFDSCxTQUZLLE1BRUEsSUFBR0QsT0FBSyxRQUFMLElBQWdCLE9BQU9DLEtBQVAsSUFBZSxRQUFsQyxFQUEyQztBQUM3QyxtQkFBT0UsUUFBUUwsR0FBUixDQUFZQyxNQUFaLEVBQW1CQyxHQUFuQixFQUF1QkMsS0FBdkIsQ0FBUDtBQUNIO0FBQ0o7QUFUNkIsQ0FBbEIsQ0FBaEI7QUFXQSxJQUFJRyxRQUFRLFNBQVJBLEtBQVEsT0FBYTtBQUFBLFFBQVJDLElBQVE7O0FBQ3JCLFNBQUssSUFBSUMsQ0FBVCxJQUFjRCxJQUFkLEVBQW1CO0FBQ2YsWUFBR0EsS0FBS0UsY0FBTCxDQUFvQkQsQ0FBcEIsTUFBeUIsSUFBNUIsRUFBaUM7QUFDN0JWLHNCQUFVVSxDQUFWLElBQWVELEtBQUtDLENBQUwsQ0FBZjtBQUNIO0FBQ0o7QUFDRCxXQUFPaEMsUUFBUVksT0FBUixFQUFQO0FBQ0gsQ0FQRDtrQkFRZWtCLEsiLCJmaWxlIjoiaHR0cC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9qZWN0IGZyb20gXCIuL2NvbW1vbi5qc1wiXHJcbi8vIOmhueebruivt+axguWwgeijhVxyXG5jb25zdCBSZXF1ZXN0ID0ge1xyXG4gICAgYmFzZVVybDpcImh0dHBzOi8vYXBpLml0MTIwLmNjL1wiK1Byb2plY3QuZ2V0KFwiVVNFUlwiKSxcclxuICAgIHVybDonJyxcclxuICAgIG1ldGhvZDpcIlwiLFxyXG4gICAgZGF0YTp7fSxcclxuICAgIGh0dHBDb21tb246e1xyXG4gICAgICAgIGhlYWRlcjp7XHJcbiAgICAgICAgICAgICdBY2NlcHQnOlByb2plY3QuZ2V0KFwiSFRUUF9IRUFERVJTX0FDQ0VQVFwiKSxcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6UHJvamVjdC5nZXQoXCJIVFRQX0hFQURFUlNfQ09OVEVOVF9UWVBFXCIpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRhVHlwZTpQcm9qZWN0LmdldChcIkhUVFBfUkVTUE9OU0VfVFlQRVwiKVxyXG4gICAgfSxcclxuICAgIGh0dHBPYmooKXtcclxuICAgICAgICBsZXQgaHR0cE9iaj1PYmplY3QuYXNzaWduKHRoaXMuaHR0cENvbW1vbix7XHJcbiAgICAgICAgICAgIHVybDp0aGlzLmJhc2VVcmwrdGhpcy51cmwsXHJcbiAgICAgICAgICAgIG1ldGhvZDp0aGlzLm1ldGhvZCB8fCBcIkdFVFwiLFxyXG4gICAgICAgICAgICBkYXRhOnRoaXMuZGF0YSB8fCB7fSxcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiBodHRwT2JqO1xyXG4gICAgfSxcclxuICAgIGNvbm5lY3QoKXtcclxuICAgICAgICBsZXQgcHJvbWlzcyA9IG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PntcclxuICAgICAgICAgICAgd3gucmVxdWVzdChPYmplY3QuYXNzaWduKHRoaXMuaHR0cE9iaigpLHtcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6KHJlcyk9PnJlc29sdmUocmVzKSwgIFxyXG4gICAgICAgICAgICAgICAgZmFpbDoocmVzKT0+cmVqZWN0KHJlcylcclxuICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4gcHJvbWlzcztcclxuICAgIH1cclxufVxyXG5cclxuLy8g5re75Yqg6K+35rGC5Lyg5Y+C5oum5oiqXHJcbmxldCBodHRwUHJveHkgPSBuZXcgUHJveHkoUmVxdWVzdCx7XHJcbiAgICBzZXQodGFyZ2V0LGtleSx2YWx1ZSl7XHJcbiAgICAgICAgaWYoa2V5PT1cInVybFwiJiYgdHlwZW9mIHZhbHVlID09XCJzdHJpbmdcIiAmJiAvXlxcLy8udGVzdCh2YWx1ZSkpe1xyXG4gICAgICAgICAgICByZXR1cm4gUmVmbGVjdC5zZXQodGFyZ2V0LGtleSx2YWx1ZSk7XHJcbiAgICAgICAgfWVsc2UgaWYoa2V5PT1cImRhdGFcIiYmIHR5cGVvZiB2YWx1ZSA9PVwib2JqZWN0XCIpe1xyXG4gICAgICAgICAgICByZXR1cm4gUmVmbGVjdC5zZXQodGFyZ2V0LGtleSx2YWx1ZSk7XHJcbiAgICAgICAgfWVsc2UgaWYoa2V5PT1cIm1ldGhvZFwiJiYgdHlwZW9mIHZhbHVlID09XCJzdHJpbmdcIil7XHJcbiAgICAgICAgICAgIHJldHVybiBSZWZsZWN0LnNldCh0YXJnZXQsa2V5LHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pOyBcclxubGV0IF9odHRwID0gKHsuLi5hcmdzfSk9PntcclxuICAgIGZvciAobGV0IGsgaW4gYXJncyl7XHJcbiAgICAgICAgaWYoYXJncy5oYXNPd25Qcm9wZXJ0eShrKT09PXRydWUpe1xyXG4gICAgICAgICAgICBodHRwUHJveHlba10gPSBhcmdzW2tdICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIFJlcXVlc3QuY29ubmVjdCgpO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IF9odHRwO1xyXG4iXX0=