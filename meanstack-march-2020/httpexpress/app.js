const express = require('express')
const app = express()
var cors = require('cors')
app.use(cors())
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.get('/getUserDetails', function (req, res) {
    //res.send('Hello World')//fetching data from db
    res.send(JSON.stringify([{name:"abhishek",address:"pune",email:"abc@gmail.com"},{name:"mumbai",address:"pune",email:"abc@gmail.com"}]));
  })
   
app.listen(3000)