const mongoose =require('mongoose')
mongoose.connect('mongodb://localhost/college')
.then(()=>console.log('connected to mongodb')).catch(err=>console.error('could not connect to mongodb ',err))
const  studentSchema=new mongoose.Schema({
name:String,
email:String

})


async function createStudent()
{
    const  Student=mongoose.model('Student',studentSchema)
    
    const  course =new Course ({name:'abhishek',email:'abhi@gmail.com'
    })
    
    
    const result=await course.save()
    console.log(result)
}
createStudent()