var express =require('express')
var app=express()
app.set('view engine','ejs');
app.get('/',function(req,res){
    res.sendfile(__dirname + '/aboutus.html')
})
var students={
    1:'Abhishek',
    2:'Ravi',
    3:'kamal'
}

app.get('/students/:id',function(req,rep){
    rep.render('students',{name:students[req.params.id]})
})
app.listen(3000,function()
{
    console.log('server is running on port 3000')
})