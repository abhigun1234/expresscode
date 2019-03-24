console.log("custumer 1 request")
setTimeout(callback,5000)
console.log("custumer 2 request")
setTimeout(callback,5000)
console.log("custumer 3 request")
setTimeout(callback,5000)

 function callback()
 {

     console.log(" data is ready please take your data")
 }