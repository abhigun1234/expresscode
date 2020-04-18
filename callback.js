console.log("custumer 1 request")
setTimeout(callback,5000)
console.log("custumer 2 request")
setTimeout(callback,3000)
console.log("custumer 3 request")
setTimeout(callback,7000)
//api callling
//https://github.com/abhigun1234/expresscode.git
 function callback()
 {

     console.log(" data is ready please take your data")
 }