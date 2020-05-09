const p =new Promise ((resolve ,reject)=>{

//resolve(1)
setTimeout(()=>{
    //resolve(1)
    reject(new Error('Error at promise'))
},2000)


// reject

})
p.then(result=>{

    console.log('Result',result)
}).catch(err=>{

    console.log("error",err)
})
