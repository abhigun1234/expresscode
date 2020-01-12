var myvar =require('/moduledemo');
function hello()
{
    console.log("hello")
}
function bye()
{
    console.log("bye")
}

var mycall=module.exports.hello=hello;
