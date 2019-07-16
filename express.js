var express =require('express')
var app=express();
console.log(__dirname)
app.use('/cssFile',express.static(__dirname + '/assets'))
app.listen(2003,function()

{

    console.log('listining at port  2003')
})

app.get('/helloworld',function(req,res){

    res.send(" hello world")
})
app.get('/byebye',function(req,res){

 res.send("bye bye")

})
// var express=require('express')
//  var app=express()

//  app.listen(2000,function(){


//     console.log('listning to port 2000')
//  })

//  app.get('/helloworld',function(req,res){

//    res.send("hi meanstack batch")

//  })


 



