// 异步导出
function fn(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            var a = 10;
            resolve(a);
        })
    })
}

export default fn;