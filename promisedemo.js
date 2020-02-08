const  p =new Promise((resolve,reject)=>{
    
    //reject
    setTimeout(()=>{
        //resolve(1)
        reject(new Error('error'))
    },2000)
    
})

p.then(result=>console.log('Result',result)).catch(error=>
    console.log(error.message))