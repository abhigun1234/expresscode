const mongoose =require('mongoose');

mongoose.connect('mongodb://localhost/mystudents').then(()=>console.log("connected to the MongoDb..")).
catch(error=> console.log("could not connect",error))
async function createCourse() {
    
    const courseSchema=new mongoose.Schema({id:String,name:String,course:String,fees:String})
    const Course=mongoose.model('Course',courseSchema);
    const course=new Course({id:"6",name:"node",course:"mean",fees:"120000"})
     const result =await course.save()
     console.log(result) 
}
createCourse()
