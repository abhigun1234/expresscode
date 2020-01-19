//
var http =require('http');
http.createServer(function(request,response){
    console.log("running on the port 8080")
    response.writeHead(200,{"Content-Type":"text/plain"});
    response.write("hello world")
    response.end()
}).listen(8080);
//https://github.com/abhigun1234/expresscode.git