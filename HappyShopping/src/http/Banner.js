import _Http from '../utils/http.js'
import _Util from '../utils/until.js'
// 获取banner图信息
function Banner(options,callback){
    let httpObj = Object.assign(options,{url:"/banner/list"});
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
export default Banner;