var mongoose=require('mongoose');

mongoose.connect("mongodb://localhost/RestaurentDb",function(error){

  if(error){

    console.log("error"+error);

  }else{

    console.log("open done")

  }

});
var userSchema = mongoose.Schema({
    firstName: String,
    lastName: String
});
	
var User = mongoose.model('User', userSchema);

