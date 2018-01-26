"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _dictionary = require('./dictionary.js');

var _dictionary2 = _interopRequireDefault(_dictionary);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 请求提示框
var ShowModal = function ShowModal(data) {
    wx.ShowModal({
        title: "请求失败",
        content: _dictionary2.default.Code.get(data)
    });
};
// 本地存储
// 项目工具库封装
var SetLocal = function SetLocal(key, value) {
    wx.setStorage({
        key: key,
        data: value
    });
};
var GetLocal = function GetLocal(key) {
    wx.getStorage({
        key: key
    });
};
//获取元素
var Query = function Query(dom) {
    // 创建查询实例
    var query = wx.createSelectorQuery();
    var DOM = new Promise(function (resolve, reject) {
        query.select(dom).fields({
            id: true,
            dataset: true,
            rect: true,
            size: true,
            scrollOffset: true
        }, function (res) {
            resolve(res);
        }).exec();
    });
    return DOM;
};

exports.default = {
    ShowModal: ShowModal,
    SetLocal: SetLocal,
    GetLocal: GetLocal,
    Query: Query
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVudGlsLmpzIl0sIm5hbWVzIjpbIlNob3dNb2RhbCIsImRhdGEiLCJ3eCIsInRpdGxlIiwiY29udGVudCIsIkNvZGUiLCJnZXQiLCJTZXRMb2NhbCIsImtleSIsInZhbHVlIiwic2V0U3RvcmFnZSIsIkdldExvY2FsIiwiZ2V0U3RvcmFnZSIsIlF1ZXJ5IiwiZG9tIiwicXVlcnkiLCJjcmVhdGVTZWxlY3RvclF1ZXJ5IiwiRE9NIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzZWxlY3QiLCJmaWVsZHMiLCJpZCIsImRhdGFzZXQiLCJyZWN0Iiwic2l6ZSIsInNjcm9sbE9mZnNldCIsInJlcyIsImV4ZWMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBOzs7Ozs7QUFFQTtBQUNDLElBQU1BLFlBQVksU0FBWkEsU0FBWSxDQUFDQyxJQUFELEVBQVE7QUFDdEJDLE9BQUdGLFNBQUgsQ0FBYTtBQUNURyxlQUFNLE1BREc7QUFFVEMsaUJBQVEscUJBQVdDLElBQVgsQ0FBZ0JDLEdBQWhCLENBQW9CTCxJQUFwQjtBQUZDLEtBQWI7QUFJSCxDQUxEO0FBTUQ7QUFWQTtBQVdBLElBQU1NLFdBQVcsU0FBWEEsUUFBVyxDQUFDQyxHQUFELEVBQUtDLEtBQUwsRUFBZTtBQUM1QlAsT0FBR1EsVUFBSCxDQUFjO0FBQ1ZGLGFBQUtBLEdBREs7QUFFVlAsY0FBTVE7QUFGSSxLQUFkO0FBSUgsQ0FMRDtBQU1BLElBQU1FLFdBQVcsU0FBWEEsUUFBVyxDQUFDSCxHQUFELEVBQU87QUFDcEJOLE9BQUdVLFVBQUgsQ0FBYztBQUNWSixhQUFJQTtBQURNLEtBQWQ7QUFHSCxDQUpEO0FBS0E7QUFDQSxJQUFNSyxRQUFRLFNBQVJBLEtBQVEsQ0FBQ0MsR0FBRCxFQUFPO0FBQ2pCO0FBQ0EsUUFBSUMsUUFBUWIsR0FBR2MsbUJBQUgsRUFBWjtBQUNBLFFBQUlDLE1BQU0sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBU0MsTUFBVCxFQUFrQjtBQUNwQ0wsY0FBTU0sTUFBTixDQUFhUCxHQUFiLEVBQWtCUSxNQUFsQixDQUF5QjtBQUNyQkMsZ0JBQUcsSUFEa0I7QUFFckJDLHFCQUFRLElBRmE7QUFHckJDLGtCQUFLLElBSGdCO0FBSXJCQyxrQkFBSyxJQUpnQjtBQUtyQkMsMEJBQWE7QUFMUSxTQUF6QixFQU1FLFVBQUNDLEdBQUQsRUFBTztBQUNMVCxvQkFBUVMsR0FBUjtBQUNILFNBUkQsRUFRR0MsSUFSSDtBQVNILEtBVlMsQ0FBVjtBQVdBLFdBQU9aLEdBQVA7QUFDSCxDQWZEOztrQkFpQmdCO0FBQ1pqQix3QkFEWTtBQUVaTyxzQkFGWTtBQUdaSSxzQkFIWTtBQUlaRTtBQUpZLEMiLCJmaWxlIjoidW50aWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyDpobnnm67lt6XlhbflupPlsIHoo4VcclxuaW1wb3J0IERpY3Rpb25hcnkgZnJvbSAnLi9kaWN0aW9uYXJ5LmpzJ1xyXG5cclxuLy8g6K+35rGC5o+Q56S65qGGXHJcbiBjb25zdCBTaG93TW9kYWwgPSAoZGF0YSk9PntcclxuICAgICB3eC5TaG93TW9kYWwoe1xyXG4gICAgICAgICB0aXRsZTpcIuivt+axguWksei0pVwiLFxyXG4gICAgICAgICBjb250ZW50OkRpY3Rpb25hcnkuQ29kZS5nZXQoZGF0YSlcclxuICAgICB9KVxyXG4gfVxyXG4vLyDmnKzlnLDlrZjlgqhcclxuY29uc3QgU2V0TG9jYWwgPSAoa2V5LHZhbHVlKSA9PiB7XHJcbiAgICB3eC5zZXRTdG9yYWdlKHtcclxuICAgICAgICBrZXk6IGtleSxcclxuICAgICAgICBkYXRhOiB2YWx1ZVxyXG4gICAgfSlcclxufVxyXG5jb25zdCBHZXRMb2NhbCA9IChrZXkpPT57XHJcbiAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAgICBrZXk6a2V5XHJcbiAgICB9KVxyXG59XHJcbi8v6I635Y+W5YWD57SgXHJcbmNvbnN0IFF1ZXJ5ID0gKGRvbSk9PntcclxuICAgIC8vIOWIm+W7uuafpeivouWunuS+i1xyXG4gICAgbGV0IHF1ZXJ5ID0gd3guY3JlYXRlU2VsZWN0b3JRdWVyeSgpO1xyXG4gICAgbGV0IERPTSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PntcclxuICAgICAgICBxdWVyeS5zZWxlY3QoZG9tKS5maWVsZHMoe1xyXG4gICAgICAgICAgICBpZDp0cnVlLFxyXG4gICAgICAgICAgICBkYXRhc2V0OnRydWUsXHJcbiAgICAgICAgICAgIHJlY3Q6dHJ1ZSxcclxuICAgICAgICAgICAgc2l6ZTp0cnVlLFxyXG4gICAgICAgICAgICBzY3JvbGxPZmZzZXQ6dHJ1ZVxyXG4gICAgICAgIH0sKHJlcyk9PntcclxuICAgICAgICAgICAgcmVzb2x2ZShyZXMpXHJcbiAgICAgICAgfSkuZXhlYygpO1xyXG4gICAgfSlcclxuICAgIHJldHVybiBET007XHJcbn0gXHJcblxyXG4gZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgU2hvd01vZGFsLFxyXG4gICAgU2V0TG9jYWwsXHJcbiAgICBHZXRMb2NhbCxcclxuICAgIFF1ZXJ5XHJcbiB9Il19