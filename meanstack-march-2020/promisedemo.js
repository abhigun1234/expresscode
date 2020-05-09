const p =new Promise ((resolve ,reject)=>{

    //database call
  // select * from table

    //resolve(1)
    // setTimeout(()=>{
    //    // resolve(56)
    //    reject("Error")
    //     //reject(new Error('Error at promise'))
    // },2000)
//       data=select * from table
//    if(data!null)
//     {
//         resolve(data)
//     }
//     else{
//         reject(data)
//     }


})

p.then(result=>{

   console.log("result",result)

}).catch(err=>{

    console.log("error",err)
})
