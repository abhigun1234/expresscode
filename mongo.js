// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/retail', {useNewUrlParser: true});

// const Cat = mongoose.model('Cat', { name: String });

// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));
// Cat.find(function (err, data) {
//     if (err) return console.error(err);
//     console.log(data);
//   })
/*

creating customer collection 
*/

//step1 
const mongoes=require('mongoose');
//step 2
mongoes.connect('mongodb://localhost:27017/myretail',
{useNewUrlParser: true})
//step 3"productname" : "addidas", "price" : "3456", "productdescription" : "addidas sports shoes"
const Product =mongoes.model('product',{name:String,price:String,description:String})
const p1= new Product({name:'rebook',price:'23456',description:'rebook sports'})
p1.save().then(() => console.log('done'));
Product.find(function (err, data) {
            if (err) return console.error(err);
           // console.log(data)
            //     {
                //         console.log(data[i].name);
                //     }
                // res.send(data[0].name)
            })
            // for (i=0;i<data.length;i++)

//find the custmer data 


      var express =require('express')
      var app=express();
      console.log(__dirname)
      //app.use('/cssFile',express.static(__dirname + '/assets'))
      app.listen(2003,function()
      
      {
      
          console.log('listining at port  2003')
      })
      
      app.get('/getProduct',function(req,res){
        Product.find(function (err, data) {
            if (err) return console.error(err);
            // for (i=0;i<data.length;i++)
            //     {
            //         console.log(data[i].name);
            //     }
            res.send(data)
          })
    
      
          
      })
