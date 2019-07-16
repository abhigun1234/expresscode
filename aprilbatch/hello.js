console.log("hello")

function myFunc(data,func)
{ func() 
 console.log("hello my func"+data)
}

// function yourFunc(data)
// {

//     console.log("your function"+data)
// }
//myFunc('abhishek',yourFunc)
var yourFunc=function(data){

    console.log(data)
}

yourFunc("hello")
