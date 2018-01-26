import Project from "./common.js"
// 项目请求封装
const Request = {
    baseUrl:"https://api.it120.cc/"+Project.get("USER"),
    url:'',
    method:"",
    data:{},
    httpCommon:{
        header:{
            'Accept':Project.get("HTTP_HEADERS_ACCEPT"),
            'Content-Type':Project.get("HTTP_HEADERS_CONTENT_TYPE")
        },
        dataType:Project.get("HTTP_RESPONSE_TYPE")
    },
    httpObj(){
        let httpObj=Object.assign(this.httpCommon,{
            url:this.baseUrl+this.url,
            method:this.method || "GET",
            data:this.data || {},
        })
        return httpObj;
    },
    connect(){
        let promiss = new Promise((resolve,reject)=>{
            wx.request(Object.assign(this.httpObj(),{
                success:(res)=>resolve(res),  
                fail:(res)=>reject(res)
            }))
        })
        return promiss;
    }
}

// 添加请求传参拦截
let httpProxy = new Proxy(Request,{
    set(target,key,value){
        if(key=="url"&& typeof value =="string" && /^\//.test(value)){
            return Reflect.set(target,key,value);
        }else if(key=="data"&& typeof value =="object"){
            return Reflect.set(target,key,value);
        }else if(key=="method"&& typeof value =="string"){
            return Reflect.set(target,key,value);
        }
    }
}); 
let _http = ({...args})=>{
    for (let k in args){
        if(args.hasOwnProperty(k)===true){
            httpProxy[k] = args[k]            
        }
    }
    return Request.connect();
}
export default _http;
