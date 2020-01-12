var mysql = require('mysql');
//connect
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "retail"
});

const express =require('express')
const app =express()
// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "INSERT INTO product (product_name, product_price) VALUES ('bata', '230')";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("1 record inserted");
//   });
// });

  app.listen(2003,'',function()
  
  {
  
      console.log('listining at port  2003')
  })
  
  app.get('/getProductDetails',function(req,res){
    var objs = [];
  
      
      con.query("SELECT * FROM product ", function (err, result, fields) {
        
        console.log(result[0].product_name);
        //objs.push(result[0].product_name)
        for (var i = 0;i < result.length; i++) {
          objs.push({"productname": result[i].product_name,"product_price": result[i].product_price});
        
        }
        res.send(JSON.stringify(objs))
      });
      
    });
    //con.end() 

app.post('/data', function(req, res){
    var username=req.body.name;
    connection.query("INSERT INTO `names` (name) VALUES (?)", username.toString(), function(err, result){
        if(err) throw err;
            console.log("1 record inserted");
        });
    res.send(username);
});
app.post('/addproduct',function(req,res){
  var data=req.body
  console.log(data['product_name'])
  var sql = "INSERT INTO product (product_name, product_price,product_desc) VALUES ('Company Inc', 'Highway 37')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    //console.log("1 record inserted");
  });

})