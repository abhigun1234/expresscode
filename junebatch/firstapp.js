// function helloWorld(val)
// {
//     console.log("hello world"+val)
// }
//helloWorld()

//anonomus function
// var helloWorld=function(val)
// {
//     console.log("hello world",val)
// }
function myFunc(func,value)
{

    func(value)
}
myFunc(function(val){console.log("hello world",val)},"abhishek")


