// 项目工具库封装
import Dictionary from './dictionary.js'

// 请求提示框
 const ShowModal = (data)=>{
     wx.ShowModal({
         title:"请求失败",
         content:Dictionary.Code.get(data)
     })
 }
// 本地存储
const SetLocal = (key,value) => {
    wx.setStorage({
        key: key,
        data: value
    })
}
const GetLocal = (key)=>{
    wx.getStorage({
        key:key
    })
}
//获取元素
const Query = (dom)=>{
    // 创建查询实例
    let query = wx.createSelectorQuery();
    let DOM = new Promise((resolve,reject)=>{
        query.select(dom).fields({
            id:true,
            dataset:true,
            rect:true,
            size:true,
            scrollOffset:true
        },(res)=>{
            resolve(res)
        }).exec();
    })
    return DOM;
} 

 export default {
    ShowModal,
    SetLocal,
    GetLocal,
    Query
 }