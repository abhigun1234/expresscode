var fs=require("fs")
//readfile
data=fs.readFileSync("country.txt","utf8")
console.log(data)
console.log("hello")

// function readingCompleted(error,data)
// {
//   console.log("error==",error)
//   console.log("data==",data)
// }