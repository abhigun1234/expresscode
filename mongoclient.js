// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017";

// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("institueDb");
//     var myobj = { id: "3", name: "ravi","class":"11th" };
//     dbo.collection("student").insert(myobj, function(err, res) {
//       if (err) throw err;
//       console.log("1 document inserted");
//       db.close();
//     });
// });


var MongoClient=require('mongodb').MongoClient
var url ="mongodb://localhost:27017"
MongoClient.connect(url,function(error,db){
    if(error) throw error
    else
      console.log("connected to the database")
    var dbo=db.db("retail")
    dbo.collection("custumer").insert({"id":"4","name":"priyanshu","custumertype":"regular","address":"hinjewadi"})
    console.log("database created")
    if (error)
      {
        console.log("error"+error)
        throw error
      }
      else
        {

          console.log(" collection custumer created and inserted the information")
        }
      data=dbo.collection("custumer").find()
      console.log(data)

})