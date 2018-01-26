import _Http from '../utils/http.js'
import _Util from '../utils/until.js'
// 获取商品详情
function GoodDetail(options,callback){
    let httpObj = Object.assign(options,{url:"/shop/goods/detail"});
    _Http(httpObj).then(res=>{
        if(res.data.code!==0){
            _Util.ShowModal(res.data.code)
        }else{
            if( typeof callback == 'function'){
                callback(res)
            }
        }
    })
}
export default GoodDetail;