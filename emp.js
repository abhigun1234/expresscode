class Person
{
    constructor(name)
    {

    }
 helloPerson()
 {
     console.log("hello")
 }

}
class Emp extends Person
{
  constructor(name,phone_no,address)
  {
    super(name)
    this.name='ravi'
    this.phone_no='7777777'
    this.address='hydrabaad'
  }
  helloEmp()
  {

   console.log("hello ",this.name)
  }
//getter
 setName(_name)
 {
   this.name=_name
 }
 getName()
 {
     return this.name
 }

}

//create object 
let e1=new Emp()
e1.helloEmp()
e1.setName('abhishek')

console.log(e1.helloPerson())