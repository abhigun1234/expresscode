//step 1
var express=require('express')
 var app =express()
//get post put delete
//step 2
app.get('/',(req,res)=>
{

    res.send('hello world')

})
//step 2
app.get('/hello',(req,res)=>
{

    res.send('hello everone how are you')

})
app.get('/courses',(req,res)=>
{
 res.send([1,2,3,4,5,6,7])
})
app.get('/courses/:id',(req,res)=>
{
 res.send(req.params.id)
})
//step 3

app.listen(3000,()=>console.log('listing on port 3000'))


