var http =require('http')
http.createServer(callBackHttp).listen(2000)

function callBackHttp(req,res)
{  console.log("littening in the port 2000")
   res.write("welcome to http module")
   res.end()

}