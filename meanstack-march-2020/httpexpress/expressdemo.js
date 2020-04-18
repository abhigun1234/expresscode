const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
  
  console.log("get api")
})
app.get('/hello', function (req, res) {
    res.send('Hello  meanstack batck are you enjoying in lockdown')
    console.log("get api")
  })
app.listen(3000)