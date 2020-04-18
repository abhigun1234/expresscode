var http =require('http')
http.createServer(myFunc).listen(8880);
function myFunc(req,res)
{
    res.writeHead(200,{"Content-Type":"text/plain"})
    res.write("hello world")
    res.end()
}

