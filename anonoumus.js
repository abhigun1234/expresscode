// function sendMessage(msg)
// {
//  console.log(msg)
// }
var sendMessage=function(msg)
{ console.log(msg)
}
function myfunc(anotherfunc,msg)
{
    anotherfunc(msg)
}
myfunc(sendMessage,"hello world")
// myfunc(function(msg){ console.log(msg)
// },"hello world")