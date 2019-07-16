var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "retail"
});

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "INSERT INTO product (product_name, product_price) VALUES ('bata', '230')";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("1 record inserted");
//   });
// });
con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM product ", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });
// app.post('/data', function(req, res){
//     var username=req.body.name;
//     connection.query("INSERT INTO `names` (name) VALUES (?)", username.toString(), function(err, result){
//         if(err) throw err;
//             console.log("1 record inserted");
//         });
//     res.send(username);
// });