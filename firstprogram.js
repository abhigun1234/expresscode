// console.log("hi all welcome to node.js demo")
// var dispalay=function(data)
// {

//     console.log(data)
// }
// dispalay("welcome to new batch of meanstack")
// function myFunc(func,data)
// {

//     //console.log("hello all")
//     func(data)
// }

// function yourFunc(message)
// {

//     console.log(message)
// }
// myFunc(yourFunc,"bye")
var mymodule=require('./moduledemo')
mymodule.
function display()
{
 console.log("display")

}

//setTimeout(display,5000)
setInterval(display,2000)