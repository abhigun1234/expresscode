const express =require('express')
const app =express()
app.get('/',(req,res)=>
{
  
  res.send('bye')
});
app.get('/courses',(req,res)=>
{
 res.send([1,2,3])
})
app.get('/courses/:courseid',(req,res)=>
{
 res.send(req.params.courseid)
})

app.listen(3000,()=>console.log('listing on port 3000'))